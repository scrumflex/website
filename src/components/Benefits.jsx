import icon1 from '../assets/Vector1.png'
import icon2 from '../assets/Vector2.png'
import icon3 from '../assets/Vector3.png'
import { motion } from "framer-motion";

function Benefits() {
    const leftCardVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 100, damping: 3, delay: 0.5 },
        },
    };

    const middleCardVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 100, damping: 3, delay: 0.6 },
        },
    };

    const rightCardVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 100, damping: 3, delay: 0.7 },
        },
    };

    return(
        <section className='lg:px-24'>
            <h3 className='font-montserrat text-[23px] lg:text-[32px] py-6 text-center lg:w-[600px] lg:py-14 lg:mx-auto font-[700]'>Benefits of becoming a certified Scrum Master</h3>
            <div className='lg:flex lg:gap-6'>
                <motion.div className='lg:rounded-lg font-montserrat lg:mt-28 p-6 mb-6 md:h-[500px] bg-[#4ABE9917]'
                            variants={leftCardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                >
                    <div className='flex gap-4 text-[16px] items-center'><div className='flex justify-center items-center rounded-full w-[48.21px] h-[48.21px] lg:w-[62px] lg:h-[62px] bg-[#FFFFFF]'><img className='w-[22px] h-[22px] lg:w-[28px] lg:h-[28px]' src={icon1} alt="" /></div><h5 className='font-[700] text-[14px] whitespace-nowrap lg:text-[16px]'>Career Advancement</h5></div>
                    <p className='leading-[21.8px] lg:leading-[27.85px] text-[11.66px] lg:text-[15px] py-3 text-[#575454]'>Being certified enhances career prospects by demonstrating a strong understanding of Scrum practices, 
                        making professionals more attractive to organisations seeking skilled Scrum Masters and agile practitioners. 
                        It also provides a competitive edge by validating expertise in agile methodologies, 
                        which are increasingly valued in project management and software development roles.</p>
                </motion.div>
                <motion.div className='lg:rounded-lg font-montserrat lg:mt-16 p-6 mb-6 md:h-[500px] bg-[#4ABE9917]'
                            variants={middleCardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                >
                    <div className='flex gap-4 text-[16px] items-center'><div className='flex justify-center items-center rounded-full w-[48.21px] h-[48.21px] lg:w-[62px] lg:h-[62px] bg-[#FFFFFF]'><img className='w-[22px] h-[22px] lg:w-[28px] lg:h-[28px]' src={icon2} alt="" /></div><h5 className='font-[700] text-[14px] whitespace-nowrap lg:text-[16px]'>Skill enhancement</h5></div>
                    <p className='leading-[21.8px] lg:leading-[27.85px] text-[11.66px] lg:text-[15px] lg:pb-6 py-3 text-[#575454]' >
                    Scrum master certification equips you with a deep understanding of Scrum principles, roles, and events, 
                    enabling you to effectively lead agile teams and manage projects with greater efficiency. It also offers 
                    practical insights into applying Scrum in real-world scenarios, 
                    improving your ability to facilitate collaboration, prioritise tasks, and deliver value to stakeholders.
                    </p>
                </motion.div>
                <motion.div className='lg:rounded-lg font-montserrat p-6 mb-6 lg:pb-6 md:h-[500px] bg-[#4ABE9917]'
                            variants={rightCardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                >
                    <div className='flex gap-4 text-[16px] items-center'><div className='flex justify-center items-center rounded-full w-[48.21px] h-[48.21px] lg:w-[62px] lg:h-[62px] bg-[#FFFFFF]'><img className='w-[22px] h-[22px] lg:w-[28px] lg:h-[28px]' src={icon3} alt="" /></div><h5 className='font-[700] text-[14px] whitespace-nowrap lg:text-[16px]'>Industry recognition</h5></div>
                    <p className='leading-[21.8px] lg:leading-[27.85px] text-[11.66px] lg:text-[15px] py-3 text-[#575454]' >
                    Scrum certification is highly valued in the job market as it validates expertise in agile project management, 
                    a skillset increasingly sought after by organisations aiming to improve efficiency and adaptability. 
                    It distinguishes candidates, making them more competitive 
                    for roles that require effective team collaboration, project delivery, and continuous improvement.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
export default Benefits;