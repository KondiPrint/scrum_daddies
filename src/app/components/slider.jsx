/* eslint-disable @next/next/no-img-element */
'use client';
import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import data from '../../../public/assets/data.json';

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: 'center',
      centerMode: true,
      centerPadding: '50px',
      slidesToShow: 3,
      speed: 1500,
      autoplay: true,
      dots: true,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <article className='text-center [&>div>div>h2]:justify-center'>
        <Slider {...settings}>
          {data &&
            data?.scrum_daddy_team.map((info, index) => (
              <div className='card w-96 bg-base-100 shadow-inner border scale-95 [&:nth-child(1)>div>div>a]:bg-pink-200' key={index}>
                <figure className='px-10 pt-10'>
                  <img src={info.image} alt='Shoes' className='rounded-xl' />
                </figure>
                <div className='card-body items-center text-center gap-5'>
                  <h2 className='card-title'>{info.navn}</h2>
                  <div className='card-actions'>
                    <a href={`#${info.id}`} className='btn hover:btn-primary'>
                      Læs mere
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </article>
    );
  }
}
