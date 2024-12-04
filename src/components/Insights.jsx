import InstagramEmbed from "./InstagramEmbed";

function Insights() {
    return (
        <section className="lg:bg-[#363636] py-8 lg:py-14">
            <div className="lg:bg-[#ffffff] lg:rounded-[60px] lg:pb-20 pb-5 lg:mx-32">
                <h2 className="font-montserrat text-[23px] font-[700] mb-4 lg:leading-[40.8px] lg:mx-auto lg:py-8 text-center lg:w-[552px] lg:font-[700] lg:text-[30px]">Gain knowledge from our insightful videos</h2>
                <div className="lg:flex lg:justify-center lg:gap-6 lg:items-center">
                <iframe
                className="rounded-[10px] w-full h-[235px] lg:h-[203px] lg:w-[254px]"
                width="234"
                height="203"
                src="https://youtube.com/embed/KbB_6wTAzck?si=bL8mobu7RbNATNF1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube Video"
            />
             <iframe
                className="rounded-[10px] w-full h-[235px] lg:h-[203px] lg:w-[254px]"
                width="234"
                height="203"
                src="https://youtube.com/embed/ETk_Pa5y73k?si=CYI7ry01kpmSDdNZ"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube Video"
            />
             <iframe
                className="rounded-[10px] w-full h-[234px] lg:h-[203px] lg:w-[254px]"
                width="234"
                height="203"
                src="https://youtube.com/embed/yXVS-RVN8rU?si=j_PJkRLqaZDK72YJ"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube Video"
            />
                  {/* <InstagramEmbed href='https://www.instagram.com/reel/C-xWM1QNfef/?utm_source=ig_embed&amp;utm_campaign=loading' />
                  <InstagramEmbed href='https://www.instagram.com/reel/C-kW9sUNOv1/?utm_source=ig_embed&amp;utm_campaign=loading' />
                  <InstagramEmbed href='https://www.instagram.com/reel/C-7knBvtP4g/?utm_source=ig_embed&amp;utm_campaign=loading' />*/}
                </div> 
            </div>
        </section>
    )
}

export default Insights;