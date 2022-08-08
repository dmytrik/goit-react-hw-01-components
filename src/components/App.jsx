import UserCard from './UserCard';
import StatList from './StatList';
import user from '../user.json';
import statics from '../statics.json';
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
      <StatList stats={statics} />
    </div>
  );
}
