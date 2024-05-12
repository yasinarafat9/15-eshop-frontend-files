import React from 'react';
import Slider from 'react-slick';
import Image1 from '../../assets/hero/headphone.png'
import Image2 from '../../assets/category/vr.png'
import Image3 from '../../assets/category/macbook.png'
import Button from '../Shared/Button';

const HeroData = [
    {
        id: 1,
        img: Image1,
        subtitle: "Beats Solo",
        title: "wireless",
        title2: "Headphone",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque labore, laboriosam qui tempore reiciendis unde quisquam repudiandae, distinctio autem incidunt sequi corporis sit doloremque libero odit voluptatibus ut tenetur laudantium, similique vitae saepe reprehenderit possimus illum! Neque ipsam, sit suscipit repellendus quo qui error eius iure nisi commodi sed veritatis necessitatibus vitae, voluptatum, ratione nemo? Est, blanditiis molestiae quasi ducimus, porro fugit odio ad reprehenderit ratione doloremque unde inventore corporis animi nihil, nostrum sed autem earum quos deserunt itaque rerum quisquam. Natus incidunt tempore consectetur in officia quis non obcaecati nobis ipsum voluptate impedit reprehenderit iste ducimus similique voluptas, tempora exercitationem, temporibus voluptates doloribus explicabo corporis autem magni illo fugit! Officia laborum impedit aliquam atque beatae pariatur odit porro nesciunt."
    },
    {
        id: 2,
        img: Image2,
        subtitle: "Escape Reality",
        title: "Virtual Display",
        title2: "VR-Box",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque labore, laboriosam qui tempore reiciendis unde quisquam repudiandae, distinctio autem incidunt sequi corporis sit doloremque libero odit voluptatibus ut tenetur laudantium, similique vitae saepe reprehenderit possimus illum! Neque ipsam, sit suscipit repellendus quo qui error eius iure nisi commodi sed veritatis necessitatibus vitae, voluptatum, ratione nemo? Est, blanditiis molestiae quasi ducimus, porro fugit odio ad reprehenderit ratione doloremque unde inventore corporis animi nihil, nostrum sed autem earum quos deserunt itaque rerum quisquam. Natus incidunt tempore consectetur in officia quis non obcaecati nobis ipsum voluptate impedit reprehenderit iste ducimus similique voluptas, tempora exercitationem, temporibus voluptates doloribus explicabo corporis autem magni illo fugit! Officia laborum impedit aliquam atque beatae pariatur odit porro nesciunt."
    },
    {
        id: 3,
        img: Image3,
        subtitle: "Laptop",
        title: "Macbook",
        title2: "foldable",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque labore, laboriosam qui tempore reiciendis unde quisquam repudiandae, distinctio autem incidunt sequi corporis sit doloremque libero odit voluptatibus ut tenetur laudantium, similique vitae saepe reprehenderit possimus illum! Neque ipsam, sit suscipit repellendus quo qui error eius iure nisi commodi sed veritatis necessitatibus vitae, voluptatum, ratione nemo? Est, blanditiis molestiae quasi ducimus, porro fugit odio ad reprehenderit ratione doloremque unde inventore corporis animi nihil, nostrum sed autem earum quos deserunt itaque rerum quisquam. Natus incidunt tempore consectetur in officia quis non obcaecati nobis ipsum voluptate impedit reprehenderit iste ducimus similique voluptas, tempora exercitationem, temporibus voluptates doloribus explicabo corporis autem magni illo fugit! Officia laborum impedit aliquam atque beatae pariatur odit porro nesciunt."
    },
]



const Hero = ({ handleOrderPopup }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,

    };

    return (
        <div className='container'>
            <div className='overflow-hidden rounded-3xl min-h[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center'>

                {/* Hero Section */}
                <div className='container pb-8 sm:pb-0'>
                    <Slider {...settings}>
                        {
                            HeroData.map((data) => (
                                <div key={data.id}>
                                    <div className='grid grid-cols-1 sm:grid-cols-2'>
                                        {/* Text content here */}
                                        <div className='flex flex-col justify-center gap-4 sm:pt-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                                            <h1
                                                data-aos="zoom-out"
                                                data-aos-duration='500'
                                                data-aos-once="true"
                                                className='text-2xl sm:text-6xl lg:text-2xl font-bold'>
                                                {data.subtitle}
                                            </h1>
                                            <h1
                                                data-aos="zoom-out"
                                                data-aos-duration='700'
                                                data-aos-once="true"
                                                className='text-5xl sm:text-6xl lg:text-7xl font-bold'>
                                                {data.title}
                                            </h1>
                                            <h1
                                                data-aos="zoom-out"
                                                data-aos-duration='800'
                                                data-aos-once="true"
                                                className='text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] fpn-bold'>
                                                {data.title2}
                                            </h1>
                                            <div
                                                data-aos="fade-up"
                                                data-aos-duration='800'
                                                data-aos-once="true"
                                            >
                                                <Button text={"Shop By category"}
                                                    bgColor="bg-primary"
                                                    textColor={"text-white"}
                                                    handler={handleOrderPopup}
                                                ></Button>
                                            </div>
                                        </div>
                                        {/* Img Section */}
                                        <div className='order-1 sm:order-2'>
                                            <div 
                                            data-aos="zoom-in"
                                            data-aos-once="true"
                                            >
                                                <img src={data.img}
                                                    alt=""
                                                    className='w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,00,.4,.5)] relative z-40'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Hero;