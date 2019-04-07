import React from 'react';

const Message = ({ message }) => {
  return (
    <div>
      {message.author}
    </div>
  );
};

export default Message;
