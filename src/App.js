import './App.css';
import { Layout } from './components/styles';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Layout>
        <Dashboard />
      </Layout>
    </div>
  );
}

export default App;
