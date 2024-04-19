import React from 'react';
import Body from './Body';
import data2 from './data.json';

function App() {
  return (
    <div className="App">
      <Body data2={data2.data2} />
    </div>
  );
}

export default App;
