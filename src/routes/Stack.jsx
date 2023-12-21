import '../index.css';
import React, { useState } from 'react';

function Stack() {
  const [queue, setQueue] = useState([]);
  const [queue2, setQueue2] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');

  const queueFirst = () => {
    setQueue([...queue, inputValue]);
    setInputValue('');
  };

  const queueSecond = () => {
    setQueue2([...queue2, inputValue2]);
    setInputValue2('');
  };

  const lifo = () => {
    if (queue.length > 0) {
      const updatedQueue = [...queue];
      updatedQueue.pop(); // remove the last element - LIFO (Last In, First Out)
      setQueue(updatedQueue);
    }
  };

  const fifo = () => {
    if (queue2.length > 0) {
      const updatedQueue2 = [...queue2];
      updatedQueue2.shift(); // remove the first element - FIFO (First In, First Out)
      setQueue2(updatedQueue2);
    }
  };

  return (
    <main>
    <div className="app">
      <h1>Stack data structure app - LIFO</h1>
      <p>It is a linear data structure which follows a particular order - LIFO (Last In, First Out)</p>
      <p>Add each of the numbers in a row by clicking "ADD"</p>
      <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display&display=swap" rel="stylesheet"/>
      <div className="queue">
        {queue.map((item, index) => (
          <div key={index} className="queue-item">
            {item}
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add each number in a row"
        />
        <button onClick={queueFirst}>Add</button>
        <button onClick={lifo}>Delete</button>
      </div>
    </div>
    <div className="app">
      <h1>Stack data structure app - FIFO</h1>
      <p>It is a linear data structure which follows a particular order - FIFO (First In, First Out)</p>
      <p>Add each of the numbers in a row by clicking "ADD"</p>
      <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display&display=swap" rel="stylesheet"/>
      <div className="queue">
        {queue2.map((item, index) => (
          <div key={index} className="queue-item">
            {item}
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={inputValue2}
          onChange={(e) => setInputValue2(e.target.value)}
          placeholder="Add each number in a row"
        />
        <button onClick={queueSecond}>Add</button>
        <button onClick={fifo}>Delete</button>
      </div>
    </div></main>
  );
};

export default Stack;
