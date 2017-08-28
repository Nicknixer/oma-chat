import React, { Component } from 'react';
import './App.css';

class MessageList extends Component {
	constructor(props) {
		super(props);
	}

  	render() {
  		const messages = this.props.messages.map((message) =>
  			<li>{message.name}: {message.text}</li>
  		);

	    return (
	      <div>
	      	<ul>
	      	{messages}
  			</ul>
	      </div>
	    );
  }
}

export default MessageList;