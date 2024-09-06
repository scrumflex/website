import InstagramEmbed from "./InstagramEmbed";

function Insights() {
    return (
        <section className="lg:bg-[#363636] py-8 lg:py-14">
            <div className="lg:bg-[#ffffff] lg:rounded-[60px] pb-5 lg:mx-14">
                <h2 className="font-montserrat text-[23px] font-[700] mb-4 lg:leading-[40.8px] lg:mx-auto lg:py-8 text-center lg:w-[552px] lg:font-[700] lg:text-[30px]">Gain knowledge from our insightful videos</h2>
                <div className="lg:flex lg:justify-center lg:gap-3 lg:items-center">
                  <InstagramEmbed href='https://www.instagram.com/reel/C-kW9sUNOv1/?utm_source=ig_embed&amp;utm_campaign=loading' />
                  <InstagramEmbed href='https://www.instagram.com/reel/C-SjN1Ut5m5/?utm_source=ig_embed&amp;utm_campaign=loading' />
                  <InstagramEmbed href='https://www.instagram.com/reel/C-nBTe4tkcB/?utm_source=ig_embed&amp;utm_campaign=loading' />
                </div>
            </div>
        </section>
    )
}

export default Insights;