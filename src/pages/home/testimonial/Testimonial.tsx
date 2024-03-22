import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";

import { useGetAllTetimonialQuery } from "@/redux/feathers/testimonial/testimonialApi";
import { TTestimonial } from "@/types";

const Testimonial = () => {
  const { data: testimonials } = useGetAllTetimonialQuery(undefined);
  //   console.log(testimonials);

  return (
    <Container className="my-12">
      <SectionTitle
        fTitle="Donate"
        lTitle="Testimonials"
        description="At Food Distribution and Supplies Management System, our mission is to provide timely access to essential resources"
      />
      <Swiper
        autoplay={{
          delay: 1700,
          disableOnInteraction: false,
        }}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {testimonials?.map((testimonial: TTestimonial) => (
          <SwiperSlide
            key={testimonial._id}
            className="border p-5 pb-7 rounded-sm shadow-sm h-[400px] text-center group"
          >
            <img
              className="h-56 mx-auto rounded-sm mb-2 shadow-md group-hover:scale-95 transition-all"
              src={testimonial.image}
              alt="Testimonial Image"
            />
            <h1 className="text-xl font-semibold my-2 pt-2">
              {testimonial.title}
            </h1>
            <p>
              {testimonial.description.length > 125
                ? testimonial.description.slice(0, 125) + "  •••"
                : testimonial.description}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Testimonial;
