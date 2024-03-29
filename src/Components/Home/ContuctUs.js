import React from 'react';
import contuct from '../Assets/extra/contuct.webp'


const ContuctUs = () => {
    return (
        <div className=''>
            <h2 className='mt-2 mb-5 text-2xl lg:text-3xl p-5 text-white font-semibold'>CONTUCT US</h2>

            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className='rounded-2xl w-lg' src={contuct} alt="contuct " />

                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-300">
                        <div className="card-body font-serif">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Your Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" className="input input-bordered" />

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Your Email" className="input input-bordered" />
                            </div>


                            <div className=" mt-6">
                                <button className="btn btn-primary w-32 px-5 hover:bg-[#b94848] hover:text-black">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContuctUs;