import UserCard from './UserCard';
import user from '../user.json';

export default function App() {
  return (
    <UserCard
      name={user.username}
      tag={user.tag}
      location={user.location}
      url={user.avatar}
      stats={user.stats}
    />
  );
}
