import React, { Component } from 'react';
import MessageInput from './MessageInput';
import MessageList from './MessageList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [{name:"num1", text:"text1"}, {name:"num2", text:"text2"}] };
    this.addNote = this.addNote.bind(this);
  }

  addNote(message) {
    let messages = this.state.messages;
      messages.push(message);
    console.log('messages:' + messages);
    console.log('arr: ' + [{name:"num1", text:"text1"}]);
    this.setState({
        messages: messages
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Messages</h2>
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
