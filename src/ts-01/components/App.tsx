import { FC } from 'react';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import user from '../data/user.json';
import { Data, Friend, Transaction, User } from '../interfaces/Data';
import { FriendList } from './FriendList/FriendList';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App: FC = () => {
  return (
    <main>
      <Profile user={user as User} />
      <Statistics title="Upload stats" stats={data as Data[]} />
      {/* <Statistics stats={data} />; */}
      <FriendList friends={friends as Friend[]} />
      <TransactionHistory items={transactions as Transaction[]} />
    </main>
  );
};
