import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='QandA-container '>
            <h2 className='text-white py-5'>BLOGS</h2>
            <div className='q-and-a rounded p-4 '>
                <h6>Differences between sql and nosql databases.
                    SQL</h6>

                <div className='ans mx-auto'>
                    1.Relational database management stytem
                    <br />
                    2.This database has fixed and predefined schema
                    <br />
                    3.This database are not suited for hirarchical storage
                    <br />
                    4.Vertically Scalable

                    NoSQL
                </div>

                <div className='ans mx-auto'>
                    1.No Relational database system
                    <br />
                    2.This database has dynamic schema
                    <br />
                    3.This database are suitable for hirarchical storage
                    <br />
                    4.Horizontally Scalable

                </div>
            </div>

            <div className="q-and-a rounded p-4">
                <h6>What is the purpose of jwt and how does it work
                    JWT OR JSON Web Token</h6>

                <div className='ans mx-auto'>
                    1.JWT is open standard used to share security information between two paties- 1.client 2.Server

                    2.JWTs are used to a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.

                    How does it work

                    -JSON is differ from other web token that it contain a set of claims

                    -Claims are used to trans mx-automit information betwwen two parties

                    -A Jwt is a string which made up of three parts and which is seperated by dot(.)

                    -And it serialized by base64 className='ans mx-auto'

                    -Onece decorated it create 3 part- 1.header 2.payload 3.signature

                </div>
            </div>


            <div className='q-and-a rounded'>
                <h5>Difference between javascript and nodejs
                    NodeJs? </h5>

                <div className='ans mx-auto'>
                    1.Node Js is a cross platform

                    2.It is Open source javascript runtime enviroment that allow javascript to run on server site

                    3.javascript allow to run the code outside the browser

                    4.Node Js comes with lot of modules that used for web developement

                    Javascript
                </div>

                <div className='ans mx-auto'>
                    1.Javascript is scripting language

                    2.It is basically used on client side

                    3.Javascript only can be run on browser

                    4.Javascript used for fontend developement

                </div>
            </div>
        </div>
    );
};

export default Blogs;