import React from 'react';
import CountUp from 'react-countup';
import icon1 from '../Assets/icon2.png'
import icon2 from '../Assets/icon1.png'
import review from '../Assets/review.png'
import newCustommer from '../Assets/newCustommer.png'


const Summery = () => {


    const BuisnessSummery = [
        {
            _id: 1,
            title: 'New Customer',
            value: '400',
            img: newCustommer
        },
        {
            _id: 2,
            title: 'Complete Order',
            value: '2000',
            img: icon2
        },
        {
            _id: 3,
            title: 'Clients',
            value: '750',
            img: icon1
        },
        {
            _id: 4,
            title: 'Reviews',
            value: '350',
            img: review
        },
    ]



    return (
        <div className='bg-neutral pb-20'>
            <h2 className=' mt-14 text-3xl p-4 text-red-500'>Buisness Summery</h2>
            <div className=" ">

                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  px-20 gap-10'>  {
                    BuisnessSummery.map(summery => {
                        return <div className='stats stats-vertical  shadow w-50 '>

                            <div className="stat ">
                                <div className="stat-title">{summery.title}</div>
                                <div class="avatar">
                                    <div class="w-16 rounded">
                                        <img src={summery.img} alt="" />
                                    </div>
                                </div>                                <div className="stat-value"><CountUp end={summery.value} /> </div>
                                <div className="stat-desc">↗︎ 400 (22%)</div>
                            </div>
                        </div>

                    })
                }

                </div>
                {/* <div className="stat">
                    <div className="stat-title">Downloads</div>
                    <div className="stat-value"><CountUp end={2150} />  </div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-title">New Users</div>
                    <div className="stat-value"><CountUp end={4150} /> </div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-title">New Registers</div>
                    <div className="stat-value"><CountUp end={1155} /> </div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
                <div className="stat">
                    <div className="stat-title">New Registers</div>
                    <div className="stat-value"><CountUp end={980} /></div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>

                <div className="stat">
                    <div className="stat-title">New Registers</div>
                    <div className="stat-value"><CountUp end={1200} /></div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div> */}

            </div>
        </div>
    );
};

export default Summery;