import './App.css';
import { ChannelDMs, FlexContainer, GroupName, Layout, Messages, Sidebar } from './components/styles';
import { BsPencilSquare, BsPlus, BsHash } from "react-icons/bs"

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
              <Messages>
                <div>
                  Message Title
                </div>
                <div>
                  Messages
                </div>
              </Messages>
          </FlexContainer>
      </Layout>
    </div>
  );
}

export default App;
