function Hero() {
    return (
        <section className="bg-[#283B49] px-6 font-montserrat lg:flex lg:justify-between lg:items-center lg:gap-8 lg:px-24 lg:py-24">
           <div className="">
            <h2 className="text-[32px] lg:w-[547px] lg:text-[49px] lg:leading-[73.94px] text-white font-[700]">Become a Certified Scrum Master</h2>
                <p className="text-[18px] lg:w-[547px] my-4 lg:text-[20px] leading-[31.84px] text-white font-[400]">
                    Our comprehensive training program is designed to help individuals not only pass the PSM 
                    I exam but also gain a deep understanding of Scrum principles and their application in the professional world.
                </p>
                <button className="bg-[#4ABE99] mt-2 mb-4 text-white rounded-[5px] w-[166px] h-[48px]">
                    Get Started
                </button>
           </div>
           <div className="mt-8 pb-12">
            
            <iframe
                className="rounded-[10px] w-full h-[235px] lg:h-[295px] lg:w-[419.19px]"
                width="250"
                height="235"
                src="https://www.youtube.com/embed/iJ_sl6J8PRg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube Video"
            />

           </div>

        </section>
    )
}

export default Hero;