import banner1 from '../../../assets/images/banner/1.jpg'
import banner2 from '../../../assets/images/banner/2.jpg'
import banner3 from '../../../assets/images/banner/3.jpg'
import banner4 from '../../../assets/images/banner/4.jpg'
import banner5 from '../../../assets/images/banner/5.jpg'
import banner6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full mt-10">
            <div id="slide1" className="carousel-item relative h-auto  md:h-[600px] w-full">
                <img src={banner5} className="w-full rounded-xl" />
                <div className="absolute h-full flex  bottom-0 items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className="text-white md:w-2/5  pl-24 md:pl-20">
                        <h2 className='text-xl md:text-4xl lg:text-6xl font-bold space-y-1 md:space-y-5 lg:space-y-7'>
                            Affordable Price For Car Servicing
                        </h2>
                        <p className=''>
                            There are many variations of passages of  available, but the majority have suffered alteration in some form
                        </p>
                        <div className='mt-5'>
                            <button className='btn bg-red-500 mr-2 md:mr-5 text-white '>Discover More</button>
                            <button className='btn btn-outline text-white'>
                                Latest Project
                            </button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide6" className="btn btn-circle  mr-4">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative  md:h-[600px] w-full">
                <img src={banner2} className="w-full" />
                <div className="absolute h-full flex  bottom-0 items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className="text-white md:w-2/5  pl-24 md:pl-20">
                        <h2 className='text-xl md:text-4xl lg:text-6xl font-bold space-y-1 md:space-y-5 lg:space-y-7'>
                            Affordable Price For Car Servicing
                        </h2>
                        <p className=''>
                            There are many variations of passages of  available, but the majority have suffered alteration in some form
                        </p>
                        <div className='mt-5'>
                            <button className='btn bg-red-500 mr-2 md:mr-5 text-white '>Discover More</button>
                            <button className='btn btn-outline text-white'>
                                Latest Project
                            </button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative  md:h-[600px] w-full">
                <img src={banner3} className="w-full" />
                <div className="absolute h-full flex  bottom-0 items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className="text-white md:w-2/5  pl-24 md:pl-20">
                        <h2 className='text-xl md:text-4xl lg:text-6xl font-bold space-y-1 md:space-y-5 lg:space-y-7'>
                            Affordable Price For Car Servicing
                        </h2>
                        <p className=''>
                            There are many variations of passages of  available, but the majority have suffered alteration in some form
                        </p>
                        <div className='mt-5'>
                            <button className='btn bg-red-500 mr-2 md:mr-5 text-white '>Discover More</button>
                            <button className='btn btn-outline text-white'>
                                Latest Project
                            </button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative  md:h-[600px] w-full">
                <img src={banner4} className="w-full" />
                <div className="absolute h-full flex  bottom-0 items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className="text-white md:w-2/5  pl-24 md:pl-20">
                        <h2 className='text-xl md:text-4xl lg:text-6xl font-bold space-y-1 md:space-y-5 lg:space-y-7'>
                            Affordable Price For Car Servicing
                        </h2>
                        <p className=''>
                            There are many variations of passages of  available, but the majority have suffered alteration in some form
                        </p>
                        <div className='mt-5'>
                            <button className='btn bg-red-500 mr-2 md:mr-5 text-white '>Discover More</button>
                            <button className='btn btn-outline text-white'>
                                Latest Project
                            </button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative  md:h-[600px] w-full">
                <img src={banner1} className="w-full" />
                <div className="absolute h-full flex  bottom-0 items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className="text-white md:w-2/5  pl-24 md:pl-20">
                        <h2 className='text-xl md:text-4xl lg:text-6xl font-bold space-y-1 md:space-y-5 lg:space-y-7'>
                            Affordable Price For Car Servicing
                        </h2>
                        <p className=''>
                            There are many variations of passages of  available, but the majority have suffered alteration in some form
                        </p>
                        <div className='mt-5'>
                            <button className='btn bg-red-500 mr-2 md:mr-5 text-white '>Discover More</button>
                            <button className='btn btn-outline text-white'>
                                Latest Project
                            </button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative  md:h-[600px] w-full">
                <img src={banner6} className="w-full" />
                <div className="absolute h-full flex  bottom-0 items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className="text-white md:w-2/5  pl-24 md:pl-20">
                        <h2 className='text-xl md:text-4xl lg:text-6xl font-bold space-y-1 md:space-y-5 lg:space-y-7'>
                            Affordable Price For Car Servicing
                        </h2>
                        <p className=''>
                            There are many variations of passages of  available, but the majority have suffered alteration in some form
                        </p>
                        <div className='mt-5'>
                            <button className='btn bg-red-500 mr-2 md:mr-5 text-white '>Discover More</button>
                            <button className='btn btn-outline text-white'>
                                Latest Project
                            </button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;