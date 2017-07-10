import io from 'socket.io-client';
import { browserHistory } from 'react-router';

export let socket;
if (!socket) {
    socket = io('http://localhost:3000');
}

