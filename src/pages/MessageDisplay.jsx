import React from 'react';
import { useParams } from 'react-router-dom';

function MessageDisplay() {
  const { message } = useParams();
  return <div>{message}</div>;
}

export default MessageDisplay;
