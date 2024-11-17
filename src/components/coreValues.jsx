import commitment from "../assets/commitment.svg";
import excellence from "../assets/excellence.svg";
import inclusive from "../assets/inclusive.svg";
import integrity from "../assets/integrity.svg";
import Kaizen from "../assets/Kaizen.svg";

const CoreValues = () => {
  return (
    <div className="bg-[#26619B] font-montserrat text-white py-10 px-5">
      <h2 className="text-2xl font-bold text-center mb-8">Core Values</h2>
      <div className="tryGrid mx-auto gap-8">
        {/* Row 1 */}
        <div className="flex  flex-col items-center">
          <img src={integrity} className="w-12 h-12 md:w-28 md:h-28" alt="" />
          <p className="text-sm md:text-lg">Integrity</p>
        </div>
        <div className="flex flex-col items-center">
        <img src={excellence} className="w-12 h-12  md:w-28 md:h-28" alt="" />
          <p className="text-sm md:text-lg">Excellence</p>
        </div> 
        <div className="flex flex-col items-center">
        <img src={inclusive} className="w-12 h-12  md:w-28 md:h-28" alt="" />
          <p className="text-sm md:text-lg">Inclusivity</p>
        </div>
        {/* Row 2 */}
        <div className="flex row-two gap-20 md:gap-[300px] justify-between items-center">
            <div className="flex four flex-col items-center">
            <img src={Kaizen} className="w-12 h-12  md:w-28 md:h-28" alt="" />
            <p className="text-sm md:text-lg">Kaizen</p>
            </div>
            <div className="flex five flex-col items-center">
            <img src={commitment} className="w-12 h-12  md:w-28 md:h-28" alt="" />
            <p className="text-sm md:text-lg">Commitment</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
