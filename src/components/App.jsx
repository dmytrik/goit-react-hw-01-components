import UserCard from './User/UserCard';
import StatList from './StatList/StatList';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './Transactions/TransactionHistory';
import user from '../user.json';
import statics from '../statics.json';
import friendItems from '../friends.json';
import transactions from '../transactions.json';

export default function App() {
  return (
    <div>
      <UserCard
        name={user.username}
        tag={user.tag}
        location={user.location}
        url={user.avatar}
        stats={user.stats}
      />
      <StatList title="Upload stats" stats={statics} />
      <FriendList friends={friendItems} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}
