import io from 'socket.io-client';
import { browserHistory } from 'react-router';

export let socket;
if (!socket) {
    socket = io('http://localhost:3000');
    //socket = io('http://54.246.163.185:3000');
}

