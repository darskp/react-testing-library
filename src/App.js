import { useState } from 'react';
import './App.css';
import UserForm from './UserForm';
import UserList from './UserList';

function App() {
  const [users, setUsers] = useState([]);

  const onUserAdd = (user) => {
    setUsers(prevUsers => [...prevUsers, user]);
  }


  return (
    <div>
      <h2>React Testing Library</h2>
      <UserForm onUserAdd={onUserAdd} />
      <hr />
      <UserList users={users} />
    </div>
  );
}

export default App;
