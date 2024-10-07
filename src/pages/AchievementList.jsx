import React, { useEffect, useState } from 'react';
import AchievementCard from "./AchievementCard"; // Adjust the path as necessary

const AchievementList = () => {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQinJQLAisiFh6hKMCkLkVvKe0i4RCShOSfvNaIlE5USBl4-8Z3eY4RPc7GPdpd4tZCcquYxajZcgmV/pub?gid=0&single=true&output=csv');
        const text = await response.text();
        const rows = text.split('\n').map(row => row.split(','));

        // Transform the data to fit your structure
        const formattedData = rows.slice(1).map(row => {
          const title = row[0]; // title from column A
          const achievementNumbers = [];
          const imageClass = row[5]

          // Check for value and label in columns B and C
          if (row[1] && row[2]) {
            achievementNumbers.push({ value: row[1], label: row[2] });
          }
          // Check for second achievement in columns D and E
          if (row[3] && row[4]) {
            achievementNumbers.push({ value: row[3], label: row[4] });
          }


          return { title, imageClass, achievementNumbers };
        });

        setAchievements(formattedData);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className={
              achievement.achievementNumbers.length === 2
                ? "col-lg-6"
                : "col-lg-3"
            }
          >
            <AchievementCard
              title={achievement.title}
              imageClass={achievement.imageClass}
              achievementNumbers={achievement.achievementNumbers}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementList;