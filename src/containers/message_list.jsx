import React from 'react';
import { connect } from 'react-redux';
import Message from '../components/message';

const MessageList = ({ messages }) => {
  return (
    <div>
      {messages.map(message => <Message message={message} key={message.id} />)}
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(MessageList);
