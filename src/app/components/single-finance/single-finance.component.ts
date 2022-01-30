import { Component, OnInit, Input } from '@angular/core';
import { Finance } from 'src/app/models/finance.model';
import { FinanceComponent } from '../finance/finance.component';

@Component({
  selector: 'app-single-finance',
  templateUrl: './single-finance.component.html',
  styleUrls: ['./single-finance.component.scss'],
})
export class SingleFinanceComponent implements OnInit {
  @Input() finance: Finance;
  updateFormActive: boolean = false;

  constructor(private financeList: FinanceComponent) {}

  ngOnInit(): void {}

  handleDelete() {
    this.financeList.handleFinanceDelete(this.finance._id);
  }

  toggleForm() {
    this.updateFormActive = !this.updateFormActive;
  }

  handleUpdate(amount: HTMLInputElement, description: HTMLInputElement) {
    this.financeList.handleFinanceUpdate(
      this.finance._id,
      this.finance.type,
      amount.value,
      description.value,
      () => {
        amount.value = '';
        description.value = '';
        this.updateFormActive = false;
      }
    );
  }
}
