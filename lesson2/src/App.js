import { useState } from 'react';
import './App.css';
import Form from './Form';
import List from './List';
import ShouldUpdate from './ShouldUpdate';

function App() {
  const [mount, setMount] = useState(true);

  function toggle() {
    mount ? setMount(false) : setMount(true);
  }

  return (
    <>
      <button className="mount" onClick={toggle}>
        {mount ? 'UNMOUNT' : 'MOUNT'}
      </button>
      {mount && <Form />}
      <ShouldUpdate />
      <List />
    </>
  );
}

export default App;
