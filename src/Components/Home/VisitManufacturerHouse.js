import React from 'react';

const VisitManufacturerHouse = () => {
    const visits = [
        {
            "_id": 1,
            "img": "https://i.ibb.co/yy0n3db/img4.webp",
            "desc": "Female Carpenter Blowing Dust While Sanding Plank"
        },
        {
            "_id": 2,
            "img": "https://i.ibb.co/k8YshMy/img5.jpg",
            "desc": "Man work in home workshop garage with angle grinder, goggles and construction gloves, sanding metal makes sparks closeup, diy and craft concept "
        },
        {
            "_id": 3,
            "img": "https://i.ibb.co/BjvcqJW/img5.webp",
            "desc": "Manager supervisor and industrial worker in uniform walking in large metal factory hall and talking about increasing production"
        },
        {
            "_id": 4,
            "img": "https://i.ibb.co/rGZF0M6/img6.webp",
            "desc": "Young factory worker working with adept robotic arm"
        },
        {
            "_id": 5,
            "img": "https://i.ibb.co/c8CyMzR/img9.webp",
            "desc": "Interior view of a steel factor"
        },
        {
            "_id": 6,
            "img": "https://i.ibb.co/y8Vt97Y/Interior-view-of-a-steel-factor.webp",
            "desc": "Steel pipelines and cables in a plant"
        }
    ]


    return (
        <div className=' mt-5 py-10'>
            <h2 className='mt-2 lg:mt-10 mb-5 text-2xl lg:text-3xl p-5 text-white font-semibold'> VISIT OUR MANUFACTURER HOUSE</h2>
            <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-10'>
                {
                    visits.map(visit =>
                        <div className='rounded-md mx-auto transition shadow-md shadow-gray-200 group hover:-translate-y-3 duration-500 hover:bg-gray-300 hover:text-gray-800'>

                            <div className=" rounded-xl  w-72 shadow-2xl pb-5">
                                <div className='px-5 pt-4'>
                                    <img className='rounded-md w-100 h-60 ' src={visit.img} alt="Album" />
                                </div>

                                <div className="text-justify px-5 pt-2 text-white group-hover:text-gray-800 transition-all">
                                    <h2 className="card-title">New album is released!</h2>
                                    <p className='font-serif '>{visit.desc.slice(0, 35)}</p>

                                </div>
                            </div>
                        </div>
                        )
                }
            </div>
        </div>
    );
};

export default VisitManufacturerHouse;