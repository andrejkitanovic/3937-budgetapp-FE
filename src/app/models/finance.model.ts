import * as dayjs from 'dayjs';

export enum FinanceType {
  expense = 'expense',
  income = 'income',
}

export class Finance {
  _id: string;
  type: FinanceType;
  amount: number;
  description: string;
  createdAt: string;
  updatedAt: string;

  constructor(
    _id: string,
    type: FinanceType,
    amount: number,
    description: string,
    createdAt: string,
    updatedAt: string
  ) {
    this._id = _id;
    this.type = type;
    this.amount = amount;
    this.description = description;
    this.createdAt = dayjs(createdAt).format('DD. MM. YYYY.');
    this.updatedAt = dayjs(updatedAt).format('DD. MM. YYYY.');
  }
}
