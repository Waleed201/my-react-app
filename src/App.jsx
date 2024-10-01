import { Routes, Route } from 'react-router-dom'; // {{ edit_1 }}
import Home from './pages/Home'; // {{ edit_2 }}
import Contact from './pages/Contact'; // {{ edit_4 }}
import JoinUs from './pages/JoinUs'; // {{ edit_4 }}

function App() {
  return (
    <div>
      <Routes> {/* {{ edit_5 }} */}
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="/contact" element={<Contact />} /> {/* Contact page */}
        <Route path="/joinus" element={<JoinUs />} /> {/* Contact page */}
      </Routes>
    </div>
  );
}

export default App;



// import React from 'react';
// import Header from './header'
// import TeamsList from './TeamList';
// import './App.css'


// function App() {

//   return (
//     <>
//     <Header/>
//     <TeamsList />
//     </>
//   )
// }

// export default App
