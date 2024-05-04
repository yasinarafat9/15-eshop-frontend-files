import React from 'react';
import Image1 from '../../assets/category/gaming.png'
import Image2 from '../../assets/category/speaker.png'
import Image3 from '../../assets/category/vr.png'
import Button from '../Shared/Button';
const Category = () => {
    return (
        <div className='py-8'>
            <div className='container'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                   {/* Frist col */}
                   <div className='col-span-2  py-10 pl-5 bg-gradient-to-br from-gray-500/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end'>
                        <div>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-gray-800 font-semibold'>Enjoy</p>
                                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-50 mb-2'>Play Station</p>
                                <Button
                                    text={"Browse"}
                                    bgColor={"bg-primary"}
                                    textColor={"text-white"} >
                                </Button>
                            </div>
                        </div>
                        <img src={Image1} alt=""
                            className='w-[320px] absolute top-1/2 -translate-y-1/2 -right-0' />
                    </div>
                    {/* Second col */}
                    <div className='py-10 pl-5 bg-gradient-to-br from-black/90 to-brandGreen/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                        <div>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-gray-400'>Enjoy</p>
                                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-50 mb-2'>Earphone</p>
                                <Button
                                    text={"Browse"}
                                    bgColor={"bg-primary"}
                                    textColor={"text-white"} >
                                </Button>
                            </div>
                        </div>
                        <img src={Image2} alt=""
                            className='w-[320px] absolute bottom-0' />
                    </div>
                    {/* Third col */}
                    <div className='py-10 pl-5 bg-gradient-to-br from-brandBlue/20 to-brandBlue/90 text-white rounded-3xl relative h-[320px] flex items-end'>
                        <div>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-gray-400'>Enjoy</p>
                                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                                <p className='text-4xl  xl:text-5xl font-bold opacity-50 mb-2'>Gadget</p>
                                <Button
                                    text={"Browse"}
                                    bgColor={"bg-primary"}
                                    textColor={"text-white"} >
                                </Button>
                            </div>
                        </div>
                        <img src={Image3} alt=""
                            className='w-[200px] absolute right-[0px]  top-[10px]' />
                    </div>
                    

                </div>
            </div>
        </div>
    );
};

export default Category;