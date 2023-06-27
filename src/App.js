import './App.css';
import ForecastCards from './components/ForecastCards';
import Form from './components/Form';
import { RegionProvider } from './components/RegionContext';

function App() {
  return (
    <RegionProvider>
      <Form />
      <ForecastCards />
    </RegionProvider>
  );
}

export default App;
