import React from 'react';
import TeamCard from './TeamCard';

function TeamsList() {
    const teams = [
        {
            teamName: 'فريق التصوير',
            details: 'فريق التصوير هو احد اهم الفرق في لجنة الكتاب السنوي حيث تتمحور مهام  فريق التصوير  حول تنسيق و  تنضيم و تصوير الخريجين وهو عنصر رئيس في نجاح الكتاب و تحقيق اهدافه  .',
            imageUrl: '/assets/photos/PhotoTeam.jpeg',
            joinLink: 'http://example.com/join-photography'
        },
        {
            teamName: 'فريق المحتوى',
            details: 'يهتم فريق التحرير بشكل مباشر بمحتوى الكتاب, وكذالك توفير نسخ بالغتين العربية و الانجليزية بالإضافة إلى جمع كلمات العمداء و رئيس الجامعة و الشخصيات المعنية ',
            imageUrl: '/assets/photos/YearBookPhoto.jpg',
            joinLink: 'http://example.com/join-design'
        },
        {
            teamName: 'فريق IT',
            details: 'يهتم فريق البيانات و IT يهتم بتنسيق و ترتيب البيانات الخاصة بالخريجين و اللجنة وتسهيل لاوصول اليها بالاضافة الى ادارة موقع اللجنة الرسمي و تحسينه',
            imageUrl: '/assets/photos/ITImg.jpg',
            joinLink: 'http://example.com/join-design'
        },
        {
            teamName: 'فريق الاعلام و التسويق ',
            details: 'يهتم فريق الإعلام والتسويق بنشر ثقافة الكتاب السنوي بالإضافة إلى إنتاج محتوى تسويقي وتعزيز التفاعل مع الجمهور ',
            imageUrl: '/assets/photos/MarktingImg.jpeg',
            joinLink: 'http://example.com/join-design'
        },
            // Add more teams as needed
    ];

    return (
        <div className='CardsContainer'>
            {teams.map((team, index) => (
                <TeamCard
                    key={index}
                    teamName={team.teamName}
                    details={team.details}
                    imageUrl={team.imageUrl}
                    joinLink={team.joinLink}
                />
            ))}
        </div>
    );
}

export default TeamsList;
