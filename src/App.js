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
      let data = {
          name: message.name,
          message: message.text
      };
      let dataFetch = {
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify(data)
      };

      fetch('/messages', dataFetch)
          .then(res=>res.json())
          .then(res=>{
                console.log(res.msg);
          }).catch(e=>console.log(e));

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
