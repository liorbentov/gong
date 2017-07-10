import io from 'socket.io-client';
import { browserHistory } from 'react-router';

export const socket = io('http://localhost:3000');

socket.on('gong', msg => {
    browserHistory.push('/blabla');
});
