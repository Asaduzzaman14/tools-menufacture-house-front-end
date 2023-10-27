import React from "react";

const MyPortfolio = () => {
  return (
    <div className=' py-6 lg:p-10'>
      <h1 className='my-2 lg:my-3 text-2xl text-white font-semibold'>
        About My self
      </h1>
      <div className='p-2 mx-auto text-center grid sm:grid-cols-1 lg:grid-cols-2 gap-5'>
        <div className='card bg-gray-200 w-100 text-primary shadow-xl '>
          <div className='card-body text-left'>
            <h2 className='card-title'>ASADUZZAMAN</h2>
            <h2 className='font-medium'>asadasad9282@gmail.com</h2>
            <div className='font-semibold'>
              <p>Educational Background: Studies at B.S.S</p>
              skills: JavaScript, TypeScript React, Node, MongoDB, Mongoose,
              PostgreSql, Prisma, Express, Next.JS, Firebase, Css, bootstrap,
              Tailwind
            </div>
          </div>
        </div>

        <div className=' py-4 p-4 text-left card bg-gray-200 w-full  '>
          <h2 className='card-title   py-2'>My React project Link</h2>
          <a href='https://dentist-web-997b3.firebaseapp.com' className='link '>
            https://dentist-web-997b3.firebaseapp.com/
          </a>
          <br />
          <a className='link '>https://warehouse-management-6236d.web.app/</a>
          <br />
          <a className='link '>https://genius-car-services-d0550.web.app/</a>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
