import React from 'react';

const BannerItem = ({slide}) => {
    const {image, id, prev, next} = slide;

    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='slider-image-gradient'>
                <img src={image} alt="" className="w-full" />
            </div>

            <div className="absolute flex justify-end transform -translate-y-1/2 right-[50px] bottom-[50px]">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>

            <div className="absolute flex justify-end transform -translate-y-1/2 left-[100px] mt-52 w-[463px]">
                <p className='text-white text-6xl font-bold font-sans'> Affordable Price For Car Servicing</p>
            </div>

            <div className="absolute flex justify-end transform -translate-y-1/2 left-[100px] mt-[354px]  w-2/5">
                <p className='text-white text-[18px] font-sans'> There are many variations of passages of  available, but the majority have suffered alteration in some form </p>
            </div>

            <div className="absolute flex justify-start transform -translate-y-1/2 left-[100px] bottom-[100px]">
                <button className="btn btn-warning mr-5">Warning</button>
                <button className="btn btn-outline btn-warning">Warning</button>
            </div>

        </div>
    );
};

export default BannerItem;