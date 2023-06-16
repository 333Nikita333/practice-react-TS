import { FC } from 'react';
import { TransactionTable } from './TransactionHistory.styled';
import { Transaction } from '../../interfaces/Data';

interface Transactions {
  items: Transaction[];
}

export const TransactionHistory: FC<Transactions> = ({ items }) => {
  return (
    <TransactionTable>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </TransactionTable>
  );
};
