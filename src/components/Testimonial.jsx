import React from "react";
import useTestimonials from "./useTestimonials";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './testimonial.css'

export default function Testimonial() {
  const { data: testimonials } = useTestimonials(1);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section id="testimonial" className="testimonial-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center pb-10">
              <h4 className="title">Testimonial</h4>
              <p className="text">
                Stop wasting time and money designing and managing a website
                that doesn’t get results. Happiness guaranteed!
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="row testimonial-active slick-initialized slick-slider slick-dotted">
            <Slider {...settings}>  
            {testimonials?.map((testimonial) => {
                return (
                  <div className="col-md-12">
                    <div className="single-testimonial mt-30 mb-30 text-center">
                      <div className="testimonial-image">
                        <img src={testimonial.photo} alt="Author" />
                      </div>
                      <div className="testimonial-content">
                        <p className="text">
                        {testimonial.description}
                        </p>
                        <h6 className="author-name">{testimonial.name}</h6>
                        <span className="sub-title">{testimonial.post}</span>
                      </div>
                    </div>
                  </div>
                )})}
                </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
