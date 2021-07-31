import React from "react";
import useTestimonials from "./useTestimonials";

export default function Testimonial() {
  const { data: testimonials } = useTestimonials(1);

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
            <div className="row">
              {testimonials?.map((testimonial) => {
                return (
                  <div className="col-lg-4 testimonial-active">
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
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
