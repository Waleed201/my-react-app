import React, { useState } from 'react'; // Import useState
import Lottie from 'react-lottie';
import { Card } from 'react-bootstrap';
// import animationData from '/public/icons/camera.json'; // Import the animation data
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/AchievementCard.css'
import '../css/custom-bootstrap-grid.css'


const AchievementCard = ({ title, imageClass, achievementNumbers }) => {
      
  
    return (
    <div className="achievement-card bg-white text-center rounded-xl custom-shadow h-100 p-3">
      {/* <Card.Img variant="top" src={animationData} /> */}
      <Card.Body>
        <div className="icon-element mb-0" title={title}>
            {/* <Lottie options={defaultOptions} height={100} width={100} />  */}
            {/* <i class="bi-alarm"></i> */}
            <i className={imageClass+" font-background"}></i>
        </div>
        <h4 className="mb-4">{title}</h4>
        {/* <Card.Text>{description}</Card.Text> */}
        <div className="mt-2 Achievements d-flex">
          {achievementNumbers.map((achievement, index) => (
            <div key={index} className="AchievementNumber w-100 num-counter">
              <div className="count-value-container"> {/* New div to wrap count value and unit */}
                <span className="h1 count-value font-background">{achievement.value}</span>
                <span className="h1"></span>
              </div>
              <div>
                <small>{achievement.label}</small>
              </div>
            </div>
          ))}
        </div>
        
      </Card.Body>
    </div>
  );
};

export default AchievementCard;
