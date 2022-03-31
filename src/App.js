import './App.css';
import { FlexContainer, Layout } from './components/styles';
import Sidebar from './components/Sidebar';
import Messages from './components/Messages';

function App() {
  return (
    <div className="App">
      <Layout>
          <FlexContainer>
              <Sidebar /> 
              <Messages />
          </FlexContainer>
      </Layout>
    </div>
  );
}

export default App;
