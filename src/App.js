import './App.css';
import { Layout } from './components/styles';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Layout>
        <Login />
        {/* <Dashboard /> */}
      </Layout>
    </div>
  );
}

export default App;
