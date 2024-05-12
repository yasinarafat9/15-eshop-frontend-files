import React from 'react';
import Heading from '../Shared/Heading';

// Import Images
import Img1 from '../../assets/blogs/blog-1.jpg'
import Img2 from '../../assets/blogs/blog-2.jpg'
import Img3 from '../../assets/blogs/blog-3.jpg'

const BlogData = [
    {
        title: "How to choose perfect Smartwatch",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi similique accusantium ipsum delectus est fugiat doloremque eligendi animi neque beatae debitis perferendis, eum dolorem dignissimos consectetur nemo reiciendis voluptatum fugit? Delectus omnis deleniti numquam accusamus, similique esse impedit velit consequatur, veniam quidem a voluptatum at. Consectetur dolores iste totam praesentium?",
        published: "Jan 20, 2024 by Dilshad",
        Image: Img1,
        aosDelay: "0"
    },
    {
        title: "How to choose perfect Gadget",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi similique accusantium ipsum delectus est fugiat doloremque eligendi animi neque beatae debitis perferendis, eum dolorem dignissimos consectetur nemo reiciendis voluptatum fugit? Delectus omnis deleniti numquam accusamus, similique esse impedit velit consequatur, veniam quidem a voluptatum at. Consectetur dolores iste totam praesentium?",
        published: "Jan 20, 2024 by Satya",
        Image: Img2,
        aosDelay: "200",
    },
    {
        title: "How to choose perfect VR headset",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi similique accusantium ipsum delectus est fugiat doloremque eligendi animi neque beatae debitis perferendis, eum dolorem dignissimos consectetur nemo reiciendis voluptatum fugit? Delectus omnis deleniti numquam accusamus, similique esse impedit velit consequatur, veniam quidem a voluptatum at. Consectetur dolores iste totam praesentium?",
        published: "Jan 20, 2024 by Sabir",
        Image: Img3,
        asoDelay: "400"
    },
]

const Blogs = () => {
    return (
        <div className='my-12'>
            <div className='container'>
                {/* Header Section */}
                <Heading title={"Recent News"}
                    subtitle={"Explore Our Blogs"}
                ></Heading>

                {/* Blog Section */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>
                    {/* Blog Card */}
                    {
                        BlogData.map((data) => (
                            <div 
                            data-aos="fade-up"
                            data-aos-delay={data.aosDelay}
                            key={data.title} className='bg-white dark:bg-gray-900'>
                                {/* Image Section */}
                                <div  className='overflow-hidden rounded-2xl mb-2'>
                                    <img src={data.Image} alt=""
                                    className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-300' />
                                </div>
                                {/* Content Section */}
                                <div className='space-y-2'>
                                    <p className='text-xs text-gray-500'>{data.published}</p>
                                    <p className='font-bold line-clamp-1'>{data.title}</p>

                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    );
};

export default Blogs;