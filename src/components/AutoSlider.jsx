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

const AutoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { 
      id: 1, 
      content: 'Slide 1 Content', 
      image: lady1, 
      name: "Treasure Ihedibo", 
      title: "Project Manager", 
      review: "Enrolling in ScrumFlex, led by Ms. Amen, exceeded expectations. Her passion and unwavering support made the learning journey delightful. The structured courses and her engaging teaching style demystified Scrum. ScrumFlex is a community, not just a platform.", 
    },
    { id: 2, 
      content: 'Slide 2 Content', 
      image: lady2, 
      name: "Jesutofunmi Adedokun", 
      title: "Scrum Master", 
      review: "The training was thorough and engaging. I passed the PSM I exam on my first attempt and have successfully implemented Scrum practices in my team. Thanks to Ms Amen, for helping me kickstart my career as a scrum master.", 
    },
    
  ];

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
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full font-montserrat px-6 flex-shrink-0 flex items-center justify-center">
              <div className="w-full rounded-lg shadow-lg p-5 py-7 bg-white">
                <div className='flex gap-3 items-center'>
                  <img src={slide.image} className='w-[88px] h-[73px]' alt="" />
                  <div>
                    <p className='font-[700] text-[16px]'>{slide.name}</p>
                    <p className='text-[12px]'>{slide.title}</p>
                  </div>
                </div>
                <div className='text-[#575454] font-[500] text-[15px] my-4 leading-[26.69px]'>{slide.review}</div>
                <div className='flex gap-2'>
                  <img className='w-[20.58px] h-[19.69px]' src={star} alt="" />
                  <img className='w-[20.58px] h-[19.69px]' src={star} alt="" />
                  <img className='w-[20.58px] h-[19.69px]' src={star} alt="" />
                  <img className='w-[20.58px] h-[19.69px]' src={star} alt="" />
                  <img className='w-[20.58px] h-[19.69px]' src={star} alt="" />
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>

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

