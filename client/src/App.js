import { Redirect, Router } from '@reach/router';

import './App.css';

import AllPets from './views/AllPets';
import NewPet from './views/NewPet';
import PetDetail from './views/PetDetail';
import EditPet from './views/EditPet';

function App() {
  return (
    <div style = {{ width: '80%', margin: '0 auto' }}>
      <Router>
        <Redirect from = '/' to = '/pets' noThrow = 'true' />
        <AllPets path = '/pets' />
        <NewPet path = '/pets/new' />
        <PetDetail path = '/pets/:id' />
        <EditPet path = '/pets/:id/edit' />
      </Router>
    </div>
  );
}

export default App;
