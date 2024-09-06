function ContactUs({ formRef }) {
    return(
        <section ref={formRef} className='font-montserrat bg-[#26619B] lg:pt-12 p-6 lg:flex lg:items-center lg:px-28 lg:justify-between'>
            <div className='lg:w-[380px]'>
                <h5 className="text-[22px] text-white mb-2 font-[700]">Join our mailing list</h5>
                <p className="text-[14px] text-white mb-6 leading-[28.98px]">Get exclusive agile and project management tips to help you build the team and projects of your dreams.</p>
            </div>
        <div className='mb-4'>
            <form>
                <div className='bg-white h-7 flex w-full rounded-[5px] px-2 py-6 justify-center items-center '>
                    <input type="email" placeholder='Enter Your Email' className='outline-none border-none w-full appearance-none' />
                    <button className='bg-[#4ABE99] h-[38px] w-[101px] text-[10px] px-2 whitespace-nowrap text-white rounded-[5px]'>Join the Tribe</button>
                </div>
            </form>
        </div>
           
        </section>
    )
}
export default ContactUs;