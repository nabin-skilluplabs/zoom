import { useEffect, useState } from 'react';
import {io} from 'socket.io-client';
import { v4 as uuidv4 } from 'uuid';

function Chat() {
    const user = uuidv4();
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const url = 'http://localhost:3000/';
    const socket = io(url);

    function changeMessage(event) {
        setMessage(event.target.value);
    }

    function sendMessage(event) {
        event.preventDefault();
        console.log(user)
        if(message) {
            socket.emit('chat message', {user, message});
        }
        setMessage('');
    }

    socket.on('chat message', (msg) => {
        setMessages([...messages, msg]);
    });

    
    return(
        <div className="flex justify-center p-20">
            <div className="w-1/2 flex flex-col border">
                <div className="h-96 bg-gray-50">
                    {
                        messages.map((msg, index) => (<p className='p-4 bottom-1 border' key={index}>
                            <strong>{msg.user}</strong>
                            {msg.message}</p>))
                    }
                </div>
                <form className="flex h-16" onSubmit={sendMessage}>
                    <input type="text" value={message} onChange={changeMessage} className="p-4 text-lg flex-grow" placeholder="Message..." />
                    <button type="submit" className="font-bold p-4 text-xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}
export default Chat;