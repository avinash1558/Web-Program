import logo from './logo.svg';
import './App.css';
import File from './components/File.js';

// import state
import React, { useState } from 'react';

function App() {
// create state
// const [text, setText] = useState('Enter Text here2');


// const[mystyle, setMystyle] = useState({
//   color: 'black',
//   backgroundColor: 'white'
// })

// const toogleStyle = () => {
//   if (mystyle.color === "black") {
//       setMystyle({
//           color: "white",
//           backgroundColor: "black",
//           border: "1px solid white",
//       })
      
//   }
// }







// change
// setText("nana");
  // object
  let obj={
    avin:"yoo",
    no:"no"
  }











let h="avuinans";

  return (
    <>
    {/* pass props */}
    {/* <File text={`aaa${text}`} h={h} obj={obj}/> */}
    {/* call */}
    {/* <div onClick={toogleStyle} onChange={toogleStyle}></div> */}

    <File h={h} obj={obj}/>

    </>
  );
}

export default App;
