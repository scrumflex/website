// import { useState, useEffect } from 'react';

// const AutoSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const slides = [
//     { id: 1, content: 'Slide 1' },
//     { id: 2, content: 'Slide 2' },
//     { id: 3, content: 'Slide 3' },
//     { id: 4, content: 'Slide 4' },
//     { id: 5, content: 'Slide 5' },
//   ];

//   // Change slide every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, 3000);

//     return () => clearInterval(interval); // Clear the interval on component unmount
//   }, [slides.length]);

//   return (
//     <div className="w-full flex items-center justify-center overflow-hidden">
//       <div className="flex justify-center items-center gap-2">
//         {slides.map((slide, index) => (
//           <div
//             key={slide.id}
//             className={`transition-all duration-300 ${
//               index === currentIndex 
//                 ? 'w-8 h-2 bg-green-400 rounded-md' // Active slide as a rectangle
//                 : 'w-2 h-2 bg-gray-300 rounded-full' // Inactive slides as circles
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AutoSlider;

import React, { useState, useEffect } from 'react';
import star from '../assets/star.png'
import lady1 from '../assets/lady1.png'
import lady2 from '../assets/lady2.png'
import lady3 from '../assets/image41.jpg'
import lady4 from '../assets/image17.jpg'
import lady5 from '../assets/image22.jpg'
import lady6 from '../assets/image32.jpg'

const AutoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const slidesMobile = [
    {
      id: 1, 
      content: 'Slide 1 Content', 
      image: lady1, 
      name: "Treasure Ihedibo", 
      title: "Project Manager", 
      review: "Enrolling in ScrumFlex, led by Ms. Amen, exceeded expectations. Her passion and unwavering support made the learning journey delightful. The structured courses and her engaging teaching style demystified Scrum. ScrumFlex is a community, not just a platform.",
    },
    {
      id: 2, 
      content: 'Slide 1 Content', 
      image: lady2, 
      name: "Jesutofunmi Adedokun", 
      title: "Scrum Master", 
      review: "The training was thorough and engaging. I passed the PSM I exam on my first attempt and have successfully implemented Scrum practices in my team. Thanks to Ms Amen, for helping me kickstart my career as a scrum master.", 
    },
   {
    id: 3, 
    content: 'Slide 2 Content', 
    image: lady3, 
    name: "Olugbenga Busayo", 
    title: "Project Intern", 
    review: "My overall experience of the training stood out for its intentional approach, starting from a total newbie perspective and building towards a full understanding of Scrum. I found it especially valuable how the tutors broke down complex Scrum concepts into simple terms, making them easy to grasp domiciled words/concepts and their meanings/scenarios. ",
   },
   {
    ide: 4, 
      content: 'Slide 2 Content', 
      image: lady4, 
      name: "Victor Akacha", 
      title: "Entrepreneur", 
      review: "The training was eventful from the ice breaker all the way through to the main sessions. The training focused on specifics, ensuring every trainee got involved in one-on-one interactions with the trainer. Everyone took turns answering questions, with explanations provided for each response.",  
   },
   {
    id: 5, 
      content: 'Slide 3 Content', 
      image: lady5, 
      name: "Iniobong etukudoh", 
      title: "Scrum Master", 
      review: "Building on my prior project management knowledge, this course helped me bridge the gap between traditional project management and Agile methodologies. Miss Aimiuwu's interactive teaching style, real-world examples, and hands-on exercises solidified my understanding of Scrum framework complexities. As a direct result of the training, I successfully transitioned into a Scrum Master role, applying Scrum principles to drive team success.",
   },
   {
    ide: 6, 
      content: 'Slide 3 Content', 
      image: lady6, 
      name: "Adedeji Adeleye", 
      title: "Scrum Master", 
      review: "My experience with the training was very robust. I particularly enjoyed how engaging it was and how our coach tried to ensure that everyone was carried along during the sessions. Also, I loved how structured the training was. It was clear that a lot of thinking was involved all through. The question and answer sessions just had a way of making the points stick.",  
   }
  ]
  const slidesDesktop = [
    { 
      id: 1, 
      content: 'Slide 1 Content', 
      image: lady1, 
      name: "Treasure Ihedibo", 
      title: "Project Manager", 
      review: "Enrolling in ScrumFlex, led by Ms. Amen, exceeded expectations. Her passion and unwavering support made the learning journey delightful. The structured courses and her engaging teaching style demystified Scrum. ScrumFlex is a community, not just a platform.",
      id2: 2, 
      content2: 'Slide 1 Content', 
      image2: lady2, 
      name2: "Jesutofunmi Adedokun", 
      title2: "Scrum Master", 
      review2: "The training was thorough and engaging. I passed the PSM I exam on my first attempt and have successfully implemented Scrum practices in my team. Thanks to Ms Amen, for helping me kickstart my career as a scrum master.", 
    },
    {
      id: 3, 
      content: 'Slide 2 Content', 
      image: lady3, 
      name: "Olugbenga Busayo", 
      title: "Project Intern", 
      review: "My overall experience of the training stood out for its intentional approach, starting from a total newbie perspective and building towards a full understanding of Scrum. I found it especially valuable how the tutors broke down complex Scrum concepts into simple terms, making them easy to grasp domiciled words/concepts and their meanings/scenarios. ",
      id2: 4, 
      content2: 'Slide 2 Content', 
      image2: lady4, 
      name2: "Victor Akacha", 
      title2: "Entrepreneur", 
      review2: "The training was eventful from the ice breaker all the way through to the main sessions. The training focused on specifics, ensuring every trainee got involved in one-on-one interactions with the trainer. Everyone took turns answering questions, with explanations provided for each response.",  
    },
    {
      id: 5, 
      content: 'Slide 3 Content', 
      image: lady5, 
      name: "Iniobong etukudoh", 
      title: "Scrum Master", 
      review: "Building on my prior project management knowledge, this course helped me bridge the gap between traditional project management and Agile methodologies. Miss Aimiuwu's interactive teaching style, real-world examples, and hands-on exercises solidified my understanding of Scrum framework complexities. As a direct result of the training, I successfully transitioned into a Scrum Master role, applying Scrum principles to drive team success.",
      id2: 6, 
      content2: 'Slide 3 Content', 
      image2: lady6, 
      name2: "Adedeji Adeleye", 
      title2: "Scrum Master", 
      review2: "My experience with the training was very robust. I particularly enjoyed how engaging it was and how our coach tried to ensure that everyone was carried along during the sessions. Also, I loved how structured the training was. It was clear that a lot of thinking was involved all through. The question and answer sessions just had a way of making the points stick.",  
    },
    
  ];

  const slides = isMobile ? slidesMobile : slidesDesktop;

  // Change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, [slides.length]);

  return (
    <div className="w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Cards Wrapper */}
      {
          isMobile ? (
      <div className="relative w-full overflow-hidden">
      <div
  className="flex transition-transform duration-700"
  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
>
  {slidesMobile.map((slide) => (
    <div
      key={slide.id}
      className="w-full px-2 flex-shrink-0 flex flex-col md:flex-row items-stretch justify-center gap-4"
    >
      {/* First Card */}
      <div className="w-[320px] mx-auto h-auto font-montserrat rounded-lg shadow-lg p-5 py-7 bg-white flex flex-col justify-between">
        <div className="flex gap-3 items-center">
          <img src={slide.image} className="w-[88px] h-[73px]" alt="" />
          <div>
            <p className="font-[700] text-[16px]">{slide.name}</p>
            <p className="text-[12px]">{slide.title}</p>
          </div>
        </div>
        <div className="text-[#575454] font-[500] text-[14px] my-4 leading-[26.69px] overflow-hidden">
          {slide.review}
        </div>
        <div className="flex gap-2">
          <img className="w-[20.58px] h-[19.69px]" src={star} alt="" />
          <img className="w-[20.58px] h-[19.69px]" src={star} alt="" />
          <img className="w-[20.58px] h-[19.69px]" src={star} alt="" />
          <img className="w-[20.58px] h-[19.69px]" src={star} alt="" />
          <img className="w-[20.58px] h-[19.69px]" src={star} alt="" />
        </div>
      </div>
      {/* Second Card */}
    </div>
  ))}
  </div>
  </div>
  ) : (
    <div className="relative w-full overflow-hidden">
      <div
  className="flex transition-transform duration-700"
  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
>
  {slidesDesktop.map((slide) => (
    <div
      key={slide.id}
      className="w-full px-2 flex-shrink-0 flex flex-col md:flex-row items-stretch justify-center gap-4"
    >
      {/* First Card */}
      <div className="w-[501px] h-[346px] font-montserrat rounded-lg shadow-lg p-5 py-7 bg-white flex flex-col justify-between">
        <div className="flex gap-3 items-center">
          <img src={slide.image} className="w-[88px] h-[73px]" alt="" />
          <div>
            <p className="font-[700] text-[16px]">{slide.name}</p>
            <p className="text-[12px]">{slide.title}</p>
          </div>
        </div>
        <div className="text-[#575454] font-[500] text-[15px] my-4 leading-[26.69px] overflow-hidden">
          {slide.review}
        </div>
        <div className="flex gap-2">
          <img className="w-[20.58px] h-[19.69px]" src={star} alt="" />
          <img className="w-[20.58px] h-[19.69px]" src={star} alt="" />
          <img className="w-[20.58px] h-[19.69px]" src={star} alt="" />
          <img className="w-[20.58px] h-[19.69px]" src={star} alt="" />
          <img className="w-[20.58px] h-[19.69px]" src={star} alt="" />
        </div>
      </div>
      {/* Second Card */}
      <div className="w-[501px] h-[346px] rounded-lg font-montserrat shadow-lg p-5 py-7 bg-white flex flex-col justify-between">
        <div className="flex gap-3 items-center">
          <img src={slide.image2} className="w-[88px] h-[73px]" alt="" />
          <div>
            <p className="font-[700] text-[16px]">{slide.name2}</p>
            <p className="text-[12px]">{slide.title2}</p>
          </div>
        </div>
        <div className="text-[#575454] font-[500] text-[15px] my-4 leading-[26.69px] overflow-hidden">
          {slide.review2}
        </div>
        <div className="flex gap-2">
          <img className="w-[20.58px] h-[19.69px]" src={star} alt="" />
          <img className="w-[20.58px] h-[19.69px]" src={star} alt="" />
          <img className="w-[20.58px] h-[19.69px]" src={star} alt="" />
          <img className="w-[20.58px] h-[19.69px]" src={star} alt="" />
          <img className="w-[20.58px] h-[19.69px]" src={star} alt="" />
        </div>
      </div>
    </div>
  ))}
  </div>
  </div>
  )
}



      {/* Indicators */}
      <div className="flex justify-center items-center gap-2 mt-12 mb-8">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`cursor-pointer transition-all duration-300 ${
              index === currentIndex 
                ? 'w-8 h-2 bg-green-400 rounded-md' // Active slide as a rectangle
                : 'w-2 h-2 bg-white rounded-full' // Inactive slides as circles
            }`}
            onClick={() => setCurrentIndex(index)} // Click to jump to the slide
          />
        ))}
      </div>
    </div>
  );
};

export default AutoSlider;

