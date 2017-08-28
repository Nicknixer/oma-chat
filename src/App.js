import React, { Component } from 'react';
import MessageInput from './MessageInput';
import MessageList from './MessageList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.addNote = this.addNote.bind(this);
    this.getMessages();
  }

  addNote(message) {
    let messages = this.state.messages;
      messages.push(message);
    console.log('messages:' + messages);
    console.log('arr: ' + [{name:"num1", text:"text1"}]);
    this.setState({
        messages: messages
    });
      this.getMessages();
  }

  getMessages() {
      fetch('/messages')
          .then(res=>res.json())
          .then(res=>{
            let messages = res.messages;
            console.log(res);
              this.setState({
                  messages: messages
              });
          }).catch(e=>{console.log(e)});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>oma-chat</h2>
        </div>
      <MessageList messages={this.state.messages} />
        <p className="App-intro">
          Add new messages
        </p>
        <MessageInput onNoteAddClicked={this.addNote} />
      </div>
    );
  }
}

export default App;
