import { useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import icon1 from '../assets/el_family.png'
import icon2 from '../assets/el_plane.png'
import icon3 from '../assets/el_medal.png'
import icon4 from '../assets/el-community.png'

// NOTE: Set the starting number and maximum value for the count-up here
const COUNT_START = {
  Day: 0, // Starting count for Days
  Hour: 0, // Starting count for Hours
  Minute: 0, // Starting count for Minutes
  Second: 0, // Starting count for Minutes
};

const COUNT_MAX = {
  Day: 200, // Maximum count for Days
  Hour: 4, // Maximum count for Hours
  Minute: 100, // Maximum count for Minutes
  Second: 200, // Maximum count for Seconds
};

// Adjust how quickly the numbers should count up (ms)
const COUNT_INTERVAL = 10; // Faster speed (100ms)

const Countdown = () => {
  const countdownRef = useRef(null); // Reference to the countdown container

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // When the countdown section is in view, start the timer
          document.querySelectorAll(".countdown-item").forEach((el) => {
            el.dataset.start = "true";
          });
        }
      },
      { threshold: 0.1 } // Trigger when at least 10% of the component is in view
    );

    if (countdownRef.current) {
      observer.observe(countdownRef.current);
    }

    return () => observer.disconnect(); // Cleanup observer on component unmount
  }, []);

  return (
    <div ref={countdownRef} className="bg-[#26619B] flex justify-center items-center mt-12 p-4">
      <div className="flex w-full justify-between lg:justify-center items-center">
        <CountdownItem unit="Day" text="Trainees" figure='+' icon={icon1} />
        <CountdownItem unit="Hour" text="Countries" figure='' icon={icon2} />
        <CountdownItem unit="Minute" text="Success Rate" figure='%' icon={icon3} />
        <CountdownItem unit="Second" text="Community" figure='+' icon={icon4} />
      </div>
    </div>
  );
};

const CountdownItem = ({ unit, text, figure, icon }) => {
  const { ref, time } = useTimer(unit);

  return (
    <div
      className="countdown-item flex h-24 w-1/4 text-white flex-col items-center justify-center gap-1 font-montserrat md:h-36 md:gap-2"
      data-start="false"
    >
      <div className="relative w-full flex flex-col gap-2 justify-center items-center overflow-hidden">
        <img className="w-[30px] h-[30px]" src={icon} alt="" />
        <span
          ref={ref}
          className="block text-2xl font-[700] md:text-4xl lg:text-[40px]"
        >
          {time}{figure}
        </span>
        <span className="text-xs font-light md:text-sm lg:text-base">
          {text}
        </span>
      </div>
    </div>
  );
};

export default Countdown;

// Custom hook to handle count up and animations
const useTimer = (unit) => {
  const [ref, animate] = useAnimate();
  const intervalRef = useRef(null);
  const timeRef = useRef(COUNT_START[unit]); // Initialize with the starting number
  const [time, setTime] = useState(COUNT_START[unit]);

  useEffect(() => {
    const countdownItem = ref.current.closest(".countdown-item");

    const handleScroll = () => {
      if (countdownItem.dataset.start === "true" && !intervalRef.current) {
        intervalRef.current = setInterval(handleCountUp, COUNT_INTERVAL); // Adjust speed here
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(intervalRef.current || undefined);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCountUp = async () => {
    const max = COUNT_MAX[unit]; // Get the maximum value for the unit
    const newTime = timeRef.current + 1; // Increment the count by 1

    if (newTime > max) {
      clearInterval(intervalRef.current); // Stop the interval if max is reached
      return;
    }

    // Only update if the time has changed
    if (newTime !== timeRef.current) {
      // Exit animation
      await animate(
        ref.current,
        { y: ["0%", "-50%"], opacity: [1, 0] },
        { duration: 0.2 }
      );

      timeRef.current = newTime;
      setTime(newTime);

      // Enter animation
      await animate(
        ref.current,
        { y: ["50%", "0%"], opacity: [0, 1] },
        { duration: 0.2 }
      );
    }
  };

  return { ref, time };
};
