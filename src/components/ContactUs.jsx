import { useState } from "react";

function ContactUs({ formRef }) {

    const [email, setEmail] = useState('');
    
    const [loader, setLoader] = useState(false);

    const [message, setMessage] = useState('');
   
    const handleSubmit = async (e) => {
        setLoader(true);
      e.preventDefault();
   
      try {
   
        const response = await fetch('https://script.google.com/macros/s/AKfycbyBhBqRejXjL3vxzrpXE8EoFDSz7noRC8RCalCM56Poym5lUwn3DALyzVee4Uv9XW2fVQ/exec', {
   
          method: 'POST',
   
          headers: {
   
            'Content-Type': 'application/x-www-form-urlencoded',
        },

        body: `email=${encodeURIComponent(email)}`,
 
      });
 
      if (response.ok) {
 
        setMessage('Thank you for joining the waitlist!');
        setLoader(false);
 
        setEmail('');
 
      } else {
 
        setMessage('An error occurred. Please try again.');
 
      }
 
    } catch (error) {
 
      setMessage(error, 'An error occurred. Please try again.');
    }
};

    return(
        <section ref={formRef} className='font-montserrat bg-[#26619B] lg:pt-12 p-6 lg:flex lg:items-center lg:px-28 lg:justify-between'>
            <div className='lg:w-[380px]'>
                <h5 className="text-[22px] text-white mb-2 font-[700]">Join our mailing list</h5>
                <p className="text-[14px] text-white mb-6 leading-[28.98px]">Get exclusive agile and project management tips to help you build the team and projects of your dreams.</p>
                {message && <p className="text-[14px] text-white mb-6 leading-[28.98px]">{message}</p>}
            </div>
        <div className='mb-4'>
            <form onSubmit={handleSubmit}>
                <div className='bg-white h-7 flex w-full rounded-[5px] px-2 py-6 justify-center items-center '>
                    <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Enter Your Email' className='outline-none border-none w-full appearance-none' required /> 
                         <button className='bg-[#4ABE99] h-[38px] w-[101px] text-[10px] px-2 whitespace-nowrap text-white rounded-[5px]'>
                            {
                                loader ? ( <div className="h-4 w-4 border-2 text-center border-gray-300 border-r-[#4ABE99] animate-spin-custom rounded-full"></div> )
                                : "Join the Tribe"
                            }
                        </button>
                    
                </div>
            </form>
        </div>
        </section>
    )
}
export default ContactUs;