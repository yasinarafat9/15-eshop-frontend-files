import React from 'react';
import { FaLinkedinIn, FaMobileAlt } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaLocationArrow } from 'react-icons/fa6';

const FooterLinks = [
    {
        title: "Home",
        link: "/#"
    },
    {
        title: "About",
        link: "/#"
    },
    {
        title: "Contact",
        link: "/#"
    },
    {
        title: "Blog",
        link: "/#"
    },
]


const Footer = () => {
    return (
        <div className='dark:bg-gray-950'>
            <div className='container'>
                <div className='grid md:grid-cols-3 pb-20 pt-5'>
                    {/* Company Details */}
                    <div className='py-8 px-4'>
                        <a href="#"
                            className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'
                        >ESHOP
                        </a>
                        <p className='text-gray-600 lg:pr-24 pt-3 dark:text-white/70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quaerat explicabo nesciunt et. Sapiente sit magnam, praesentium nostrum, fugit facilis vel doloribus incidunt nihil dolor non? Aspernatur quas maxime nemo eum ipsum placeat blanditiis hic deserunt minima laboriosam laborum quis iure eveniet voluptatum deleniti odio non, nesciunt nulla vel perspiciatis!</p>
                        <p className='text-gray-500 mt-4'>Made With Love By The Coding Journey</p>
                    </div>

                    {/* Footer Links */}
                    <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-semibold sm:text-left mb-3'>Important Links</h1>
                            <ul className='space-y-3'>
                                {FooterLinks.map((data, index) => (
                                    <li key={index}>
                                        <a href={data.link}
                                            className='text-gray-600 hover:dark:text-white hover:text-black duration-300'
                                        >
                                            {data.title}
                                        </a>
                                    </li>
                                ))

                                }
                            </ul>
                        </div>
                    </div>

                    {/* Second Col Links */}
                    <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-semibold sm:text-left mb-3'>Quick Links</h1>
                            <ul className='space-y-3'>
                                {FooterLinks.map((data, index) => (
                                    <li key={index}>
                                        <a href={data.link}
                                            className='text-gray-600 hover:dark:text-white hover:text-black duration-300'
                                        >
                                            {data.title}
                                        </a>
                                    </li>
                                ))

                                }
                            </ul>
                        </div>
                    </div>
                    {/* Company Address*/}
                    <div className='py-8 px-4 col-span-2 sm:col-auto'>
                        <h1 className='text-xl font-bold sm:text-left mb-3'>Address</h1>
                        <div>
                            <div className='flex-items center gap-3'>
                                <FaLocationArrow />
                                <p>Chatmohar, Pabna, Bangladesh</p>
                            </div>
                            <div className='flex items-center gap-3 mt-6'>
                                <FaMobileAlt />
                                <p>+880 1863100961</p>
                            </div>

                            {/* Social Links */}
                            <div className='flex items-center gap-3 mt-6'>
                                <a href=""><FaInstagram className='text-3xl hover:text-primary duration-300' /></a>
                                <a href=""><FaFacebook className='text-3xl hover:text-primary duration-300' /></a>
                                <a href=""><FaLinkedinIn className='text-3xl hover:text-primary duration-300' /></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;