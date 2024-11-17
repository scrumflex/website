import AutoSlider from "./AutoSlider";

function Success() {
    return (
        <section className="w-full bg-[#D6D6D6]">
            <h4 className="leading-[43.52px] text-center font-[700] p-10 font-montserrat lg:pt-14 text-[32px]">Success Stories</h4>
            <div className="flex items-center lg:w-[80%] lg:mx-auto justify-center">
                <AutoSlider />
            </div>
        </section>
    )
}

export default Success;