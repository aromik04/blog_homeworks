import postOne from "../../images/post1.jpg"
import postTwo from "../../images/post2.jpg"
import postThree from "../../images/post3.jpg"
import postOneMob from "../../images/post1Mob.jpg"
import postTwoMob from "../../images/post2Mob.jpg"
import postThreeMob from "../../images/post3Mob.jpg"

 export const POSTS = [
    {
        id: "1",
        title: "Начинаю изучать JavaScript",
        img: postOne,
        imgMob: postOneMob,
        content:
            "Задача организации, в особенности же консультация с широким активом позволяет выполнять важные задания по разработке форм развития. Повседневная практика показывает, что новая модель организационной деятельности представляет собой интересный эксперимент проверки систем массового участия.",
       
        date: new Date(2021, 9, 11),
        num: 1,
        alt: "JavaScript logo"
        
    
    },

     {   id: "2",
        title: "Время практики",
        img: postTwo,
        imgMob: postTwoMob,
        content:
            "Задача организации, в особенности же консультация с широким активом позволяет выполнять важные задания по разработке форм развития. Повседневная практика показывает, что новая модель организационной деятельности представляет собой интересный эксперимент проверки систем массового участия.",
       
        date: new Date(2021, 9, 10),  
        num: 2,
        alt: "Laptop on the desk"
        
    
},

    {    id: "3",
        title: "Начинаю изучать JavaScript",
        img: postThree,
        imgMob: postThreeMob,
        content:
            "Задача организации, в особенности же консультация с широким активом позволяет выполнять важные задания по разработке форм развития. Повседневная практика показывает, что новая модель организационной деятельности представляет собой интересный эксперимент проверки систем массового участия.",
            
        date: new Date(2021, 8, 20),
        num: 3,
        alt: "Sunglasses on the sand"
        
},
];
