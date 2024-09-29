// import React from 'react';
// import Header from "./Header"; // Correct path
// import '../css/App.css'



// const About = () => {
//   return (
//     <div>
//       <Header/>
//       <h1>About Page</h1>
//       <p>This is the about page of your React app.</p>
//     </div>
//   );
// };

// export default About;

// src/pages/About.jsx
import React from 'react';
import '../css/About.css'; // Import the CSS file


const About = () => {
  return (
    <div>
      <h1>About the KFUPM Yearbook</h1>
      <p>
        The KFUPM Yearbook is a cherished tradition that celebrates the achievements and memories of each graduating class. 
        Over the years, it has served as a platform to showcase the hard work, dedication, and accomplishments of our students.
      </p>
      <h2>Achievements</h2>
      <ul>
        <li>Documented the journey of students through their academic years.</li>
        <li>Featured outstanding projects and research conducted by students.</li>
        <li>Highlighted extracurricular activities and student organizations.</li>
        <li>Provided a space for personal reflections and messages from graduates.</li>
        <li>Created a lasting keepsake for students and their families.</li>
      </ul>
      <p>
        The KFUPM Yearbook not only captures memories but also inspires future generations to strive for excellence and make their mark in the world.
      </p>
    </div>
  );
};

export default About;