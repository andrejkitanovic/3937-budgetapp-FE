import { Injectable } from '@angular/core';
import axios from '../config/axios';

@Injectable({
  providedIn: 'root',
})
export class FinanceService {
  constructor() {}

  postFinance(
    type: string,
    amount: string,
    description: string,
    successCallback: Function,
    errorCallback: Function
  ): void {
    axios
      .post('/finance', { type, amount, description })
      .then(({ data }) => {
        successCallback(data?.data);
      })
      .catch(({ response }) => {
        errorCallback(response?.data?.message);
      });
  }

  updateFinance(
    id: string,
    type: string,
    amount: string,
    description: string,
    successCallback: Function,
    errorCallback: Function
  ): void {
    axios
      .put(`/finance?id=${id}`, { type, amount, description })
      .then(({ data }) => {
        successCallback(data?.data);
      })
      .catch(({ response }) => {
        errorCallback(response?.data?.message);
      });
  }

  deleteFinance(
    id: string,
    successCallback: Function,
    errorCallback: Function
  ): void {
    axios
      .delete(`/finance?id=${id}`)
      .then((response) => {
        successCallback(response.data?.data);
      })
      .catch((err) => {
        errorCallback(err?.response?.data?.message);
      });
  }
}
