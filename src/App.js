// import './App.css';
import React from 'react';
import TodoFeature from './features/todo';
// import AlbumFeature from './features/Album';

function App() {

  return (
    <div className="App">
      <TodoFeature />

    </div>
  );
}

export default App;



{/* {isMale ? <p>Male</p> : <p>Female</p>} */ }
{/* {isMale && <p>Male</p>}
        {isMale && <p>Female</p>} */}

{/* {isMale && (
          <div>
            <p>Male 1</p>
            <p>Male 2</p>
            <p>Male 3</p>
          </div>
        )} */}

{/* {isMale && (
          <React.Fragment>
            <p>Male 1</p>
            <p>Male 2</p>
            <p>Male 3</p>
          </React.Fragment>
        )} */}