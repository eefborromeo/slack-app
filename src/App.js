import './App.css';
import { FlexContainer, Layout } from './components/styles';
import Sidebar from './components/sidebar/Sidebar';
import Messages from './components/messages/Messages';

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
