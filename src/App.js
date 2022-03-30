import './App.css';
import Sidebar from './components/Sidebar';
import { FlexContainer, Layout, Message, MessageBox, MessageContainer, Messages, MessageTitle} from './components/styles';
import { BiSend } from "react-icons/bi"

function App() {
  return (
    <div className="App">
      <Layout>
          <FlexContainer>
              <Sidebar /> 
              <MessageContainer>
                <MessageTitle>
                  <h1>Eloisa</h1>
                </MessageTitle>
                <Messages>
                  <Message>
                    <h3>This is the start of your messages</h3>
                  </Message>
                  <Message>
                    <span>Thursday, March 31st</span>
                    <div>
                      <h5>Name</h5>
                      <p>Hello</p>
                    </div>
                  </Message>
                </Messages>
                <MessageBox>
                  <textarea></textarea>
                  <button type="submit"><BiSend /></button>
                </MessageBox>
              </MessageContainer>
          </FlexContainer>
      </Layout>
    </div>
  );
}

export default App;
