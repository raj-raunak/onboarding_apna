import { useState } from 'react';
import './App.css';
import Form from './components/Form';


function App() {
  const[openForm, setOpenForm]=useState(false)
  // const[openForm2, setOpenForm2]=useState(false)
  return (
    <div className="App">
      <button className='openFormBtn'
      onClick={()=> 
      {setOpenForm(true);
      }}>
        Open</button>
      {openForm && <Form closeForm={setOpenForm}/>}
    </div>
  );
}
export default App;

// function App() {
//   const[openForm, setOpenForm]=useState(false)
//   return (
//     <div className="App">
//       <h1> Hey , click on the button to open modal</h1>
//       <button className='openFormBtn'
//       onClick={()=> 
//       {setOpenForm(true)}}>
//         Open</button>
//       {openForm && <Form closeForm={setOpenForm}/>}
//     </div>
//   );
// }
// function App() {
//   return (
//     <div className="App">
//        <Form />
//     </div>
//   );
// }


// import React, { useState } from 'react'
// import Form from './components/Form';


// export default function App({ open, children, onClose }) {
//   const [isOpen, setIsOpen] = useState(false)
//   return (
//     <>
//       {/* <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}> */}
//         <button onClick={() => setIsOpen(true)}>Open Modal</button>

//         <Form open={isOpen} onClose={() => setIsOpen(false)} />
//           Fancy Modal
//         {/* </Form> */}
//       {/* </div> */}

//       {/* <div style={OTHER_CONTENT_STYLES}>Other Content</div> */}
//     </>
//   )
// }