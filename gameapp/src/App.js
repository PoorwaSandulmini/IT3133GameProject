import './App.css';
import AnimalTable from './components/AnimalTable';
import { animals } from './data/AnimalsDb';
import '../src/assests/css/animal.css';

function App() {
  return (
    <div className="App">
      
      <AnimalTable animals={animals}/>
    </div>
  );
}

export default App;
