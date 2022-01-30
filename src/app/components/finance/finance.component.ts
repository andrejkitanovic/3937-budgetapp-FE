import { Component, OnInit } from '@angular/core';
import { Finance, FinanceType } from 'src/app/models/finance.model';
import { FinanceFetchService } from 'src/app/services/finance-fetch.service';
import { FinanceService } from 'src/app/services/finance.service';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
})
export class FinanceComponent implements OnInit {
  financeType: string = 'income';
  financesList: Finance[];
  income: number = 0;
  expenses: number = 0;
  expensesPercent: string = '0';
  total: number = this.income - this.expenses;
  loading: boolean = false;
  error: string = '';
  filterText: string = '';

  constructor(
    private financeService: FinanceService,
    private financeFetchService: FinanceFetchService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.financeFetchService.getFinance().subscribe(
      (data) => {
        this.getFinanceSuccess(data);
      },
      (error) => {
        this.setFinanceError('Error occured while fetching finance');
      }
    );
  }

  getFinanceSuccess(data: any) {
    this.financesList = data;
    this.income = 0;
    this.expenses = 0;
    data.forEach((element: Finance) => {
      if (element.type === FinanceType.income) {
        this.income += element.amount;
      } else {
        this.expenses += element.amount;
      }
    });
    this.total = this.income - this.expenses;
    this.expensesPercent = ((this.expenses / this.income) * 100).toFixed(1);
    this.loading = false;
  }

  setFinanceError(message: any) {
    this.error = message;
    this.loading = false;
    setTimeout(() => {
      this.error = '';
    }, 4500);
  }

  handleTypeChange(e: Event) {
    this.financeType = (e.target as HTMLTextAreaElement).value;
  }

  handleFinanceCreate(amount: HTMLInputElement, description: HTMLInputElement) {
    this.loading = true;

    if (+amount.value <= 0) {
      this.setFinanceError('Amount must be greater than 0');
      return;
    }
    if (description.value.length < 5) {
      this.setFinanceError('Description must have minimum 5 characters.');
      return;
    }

    this.financeService.postFinance(
      this.financeType,
      amount.value,
      description.value,
      (data: any) => {
        this.getFinanceSuccess(data);
        amount.value = '';
        description.value = '';
      },
      (message: any) => this.setFinanceError(message)
    );
  }

  handleFinanceDelete(id: string) {
    this.loading = true;
    this.financeService.deleteFinance(
      id,
      (data: any) => this.getFinanceSuccess(data),
      () => {}
    );
  }

  handleFinanceUpdate(
    id: string,
    type: string,
    amount: string,
    description: string,
    clearFields: Function
  ) {
    this.loading = true;

    if (+amount < 0) {
      this.setFinanceError("Amount can't be negative!");
      return;
    }
    if (description.length < 5) {
      this.setFinanceError('Description must have minimum 5 characters.');
      return;
    }

    this.financeService.updateFinance(
      id,
      type,
      amount,
      description,
      (data: any) => {
        this.getFinanceSuccess(data);
        clearFields();
      },
      (message: any) => this.setFinanceError(message)
    );
  }
}
