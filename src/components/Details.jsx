import img1 from "../assets/image39.jpg"
import img2 from "../assets/image42.jpg"
import img3 from "../assets/imgObj.jpeg"

function Details() {
    return (
        <section className="lg:flex lg:justify-center lg:items-center lg:px-24 lg:gap-12 font-montserrat px-6">
            <div>
                <h2 className="font-montserrat text-[23px] lg:text-[26px] text-center lg:text-left lg:mb-4 font-[700] mt-11 lg:mt-24 leading-[34.71px]">Learning Objective</h2>
                <h4 className="font-montserrat text-[16px] font-[600] mt-2 leading-[29.58px]">At The End of This Course, You (The Participants) Will:</h4>
                <ul className="text-[16px] list-disc pl-6 mt-2 text-[#575454]">
                    <li className="mb-4 leading-[29.58px]">Grasp the fundamental concepts of Scrum and Agile methodologies.</li>
                    <li className="mb-4 leading-[29.58px]">Understand the key responsibilities and characteristics of the Scrum Team.</li>
                    <li className="mb-4 leading-[29.58px]">Master the strategies involved in successfully passing the PSM I exam</li>
                    <li className="mb-4 leading-[29.58px]">Gain the skills to effectively facilitate Scrum events and ceremonies.</li>
                    <li className="mb-4 leading-[29.58px]">Be equipped to support and lead your teams using Scrum principles.</li>
                </ul>
            </div>
            <div className="grid gap-2 grid-cols-2 mt-10">
                <figure>
                    <img className="rounded-[13.46px] h-[148px] lg:h-[199px] w-full object-cover" src={img1} alt="" />
                </figure>
                <figure>
                    <img className="rounded-[13.46px] h-[148px] lg:h-[199px] w-full object-cover" src={img2} alt="" />
                </figure>
                <figure className="col-start-1 col-span-2 row-start-2 row-span-1">
                    <img className="rounded-[13.46px] h-[148px] lg:h-[199px] w-full object-cover object-left-top" src={img3} alt="" />
                </figure>
            </div>
        </section>
    )
}

export default Details;