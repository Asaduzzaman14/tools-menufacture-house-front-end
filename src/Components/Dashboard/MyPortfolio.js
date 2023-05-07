import React from 'react';

const MyPortfolio = () => {
    return (
        <div className=' py-6 p-10'>
            <h1 className='my-5 text-2xl font-serif text-fuchsia-400 '>This is all about <span className='text-orange-500 font-bold'>My-self</span></h1>


            <div className='p-4 mx-auto text-center grid sm:grid-cols-1 lg:grid-cols-2 gap-5'>


                <div className="card bg-blue-200 text-justify w-100 text-primary shadow-xl mx-auto  my-2">
                    <div className="card-body">
                        <h2 className="card-title">Name: <span>ASADUZZAMAN ASAD ,</span></h2>
                        <h2 className='font-medium'>Email: <spna className=''>asadasad9282@gmail.com</spna></h2>
                        <h3>Educational Background: <span >Studies at B.S.S </span>  </h3>
                        <p className='font-bold'>List of Technology skills: <br>

                        </br>
                            <span className='font-bold'> jsvaScript, React, Node, Mongodb, Express, Next, firebase, Html, Css, bootstrap, Tailwind</span></p>
                    </div>
                </div>


                <div className="p-2 card bg-blue-200 w-full mx-auto text-center">
                    <h2>My React project Link</h2>
                    <a href='https://dentist-web-997b3.firebaseapp.com' className="link ">https://dentist-web-997b3.firebaseapp.com/</a>
                    <br />
                    <a className="link ">https://warehouse-management-6236d.web.app/</a>
                    <br />
                    <a className="link ">https://genius-car-services-d0550.web.app/</a>

                </div>
            </div>
        </ div>
    );
};

export default MyPortfolio;