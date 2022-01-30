import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Finance } from '../models/finance.model';

@Injectable({
  providedIn: 'root',
})
export class FinanceFetchService {
  private baseUrl = 'https://aqueous-lowlands-83943.herokuapp.com/api';

  constructor(private _httpClient: HttpClient) {}

  getFinance(): Observable<Finance[]> {
    const token = localStorage.getItem('jwToken');
    return this._httpClient
      .get(`${this.baseUrl}/finance`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .pipe(
        map((data: any) => {
          let arr: Finance[] = [];
          data?.data.forEach((finance: Finance) => {
            arr.push(this._createFinanceFromObject(finance));
          });
          return arr;
        })
      );
  }

  private _createFinanceFromObject(item: Finance) {
    return new Finance(
      item._id,
      item.type,
      item.amount,
      item.description,
      item.createdAt,
      item.updatedAt
    );
  }
}
