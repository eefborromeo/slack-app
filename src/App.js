import './App.css';
import { ChannelDMs, FlexContainer, GroupName, Layout, Message, MessageBox, MessageContainer, Messages, MessageTitle, Sidebar } from './components/styles';
import { BsPencilSquare, BsPlus, BsHash } from "react-icons/bs";
import { BiSend } from "react-icons/bi"

function App() {
  return (
    <div className="App">
      <Layout>
          <FlexContainer>
              <Sidebar>
                <GroupName>
                  <h1>Avion School</h1>
                  <BsPencilSquare />
                </GroupName>
                <div>
                  <ChannelDMs>
                    <h2>Channels</h2>
                    <ul>
                        <li><BsHash /> batch17</li>
                        <li><BsPlus /> Add channels</li>
                    </ul>
                  </ChannelDMs>
                  <ChannelDMs>
                    <h2>Direct Messages</h2>
                    <ul>
                      <li>Eloisa</li>
                      <li>Slackbot</li>
                    </ul>
                  </ChannelDMs>
                </div>
              </Sidebar>
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
