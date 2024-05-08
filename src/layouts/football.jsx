import '../assets/css/scroll.css';
import S1 from '../assets/images/s1.jpg';
import S2 from '../assets/images/s2.jpg';
import S3 from '../assets/images/s3.jpg';
import S4 from '../assets/images/s4.jpg';
import S5 from '../assets/images/s5.jpg';
import S6 from '../assets/images/s6.jpg';
import S7 from '../assets/images/s7.jpg';
function Football(){
    const slides = [
        {
            img: S1,
            des: ''
        },
        {
            img: S2,
            des: ''
        },
        {
            img: S3,
            des: ''
        },
        {
            img: S4,
            des: ''
        },
        {
            img: S5,
            des: ''
        },
        {
            img: S6,
            des: ''
        },
        {
            img: S7,
            des: ''
        },
    ]
    return(
        <>
           <section className="dark:bg-slate-900 bg-blue-50  dark:text-white">
                <div>
                    <h3 className="text-xl font-medium text-center">Sports</h3>
                    <h1 className="text-[40px] text-center font-bold text-blue-400">Adventure</h1>
                </div>
                <div className="w-full">
                    <div className='slider overflow-hidden h-96 mx-auto relative w-full grid place-items-center'>
                       <div className='slide-track h-[300px]'>
                        {
                                slides.map((slide , i) => (
                                    <div key={i} className='slide flex items-center w-[400px] h-[300px] p-6'>
                                        <img src={slide.img} className='hover:scale-105 transition-all shadow-sm shadow-blue-400 cursor-pointer w-full h-full rounded-sm' alt=""/>
                                    </div>
                                ))
                            }
                       </div>
                    </div>
                </div>
           </section>
        </>
    );

}
export default Football;