import React, { Component } from 'react';
import './App.css';

class MessageInput extends Component {
	constructor(props) {
		super(props);
		this.state = { name: '', text: '' };
		this.nameChanged = this.nameChanged.bind(this);
		this.textChanged = this.textChanged.bind(this);
		this.addNote = this.addNote.bind(this);
	}

	nameChanged(e) {
		this.setState({ name: e.target.value });
	}

	textChanged(e) {
		this.setState({ text: e.target.value });
	}

	addNote(e) {
		this.props.onNoteAddClicked({
			name: this.state.name,
			text: this.state.text
		});
	}

  	render() {
	    return (
	      <div>
	      	<label>Name: </label>
	      	<input onChange={this.nameChanged} value={this.state.name} /><br/>
	      	<label>Text: </label> 
	      	<input onChange={this.textChanged} value={this.state.text} /><br/>
	      	<button onClick={this.addNote}>Send</button>
	      </div>
	    );
  }
}

export default MessageInput;