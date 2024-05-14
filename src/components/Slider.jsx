import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
function Slider() {
  return (
    <div className="max-w-7xl mx-auto ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 9000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-full md:h-[50px] h-[500px] lg:h-[450px] flex justify-center items-center lg:pl-52 bg-[url('https://i.postimg.cc/KzPP4tDC/topographic-large.webp')]">
            <div className="px-6 lg:px-0 md:px-6">
              <h3 className="text-[#FF7F32] font-semibold text-xl md:text-xl  lg:text-2xl pb-4">
                ETHICAL CONSUMPTION GUIDE
              </h3>
              <h1 className="font-semibold md:text-4xl dark:text-gray-700 text-3xl lg:text-6xl pb-6">
                The Boycott List
              </h1>
              <p className="text-[#57534E] md:text-lg dark:text-gray-500 text-base lg:text-xl md:w-11/12 w-10/12 lg:w-9/12">
                A simple boycott list that features Israeli companies and global
                entities with significant activities in Israel. It aims to guide
                those who seek to make purchasing decisions that aims to put
                pressure one the Israeli gouvernment and comply with
                international law.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full  md:h-[50px] h-[500px] lg:h-[450px] flex justify-center items-center lg:pl-52 bg-[url('https://i.postimg.cc/KzPP4tDC/topographic-large.webp')]">
            <div className="px-6 lg:px-0 md:px-6">
              <h3 className="text-[#FF7F32] font-semibold uppercase text-xl md:text-xl  lg:text-2xl pb-4">
                ETHICAL CONSUMPTION GUIDE
              </h3>
              <h1 className="font-semibold md:text-4xl dark:text-gray-700 text-3xl lg:text-6xl  pb-6">
                Justice in Consumption
              </h1>
              <p className="text-[#57534E] md:text-lg dark:text-gray-500 text-base lg:text-xl md:w-11/12 w-10/12 lg:w-9/12">
                Welcome to Alternify, a platform for conscientious consumers to
                make informed choices and stand up for justice. Join us in
                boycotting products from regions with oppressive policies and
                discover ethical alternatives that align with your values.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full  md:h-[50px] h-[500px] lg:h-[450px] flex justify-center items-center lg:pl-52 bg-[url('https://i.postimg.cc/KzPP4tDC/topographic-large.webp')]">
            <div className="px-6 lg:px-0 md:px-6">
              <h3 className="text-[#FF7F32] font-semibold uppercase text-xl md:text-xl  lg:text-2xl pb-4">
                ETHICAL CONSUMPTION GUIDE
              </h3>
              <h1 className="font-semibold md:text-4xl dark:text-gray-700 text-3xl lg:text-6xl  pb-6">
                Conscious Consumer Network
              </h1>
              <p className="text-[#57534E] dark:text-gray-500 md:text-lg text-base lg:text-xl md:w-11/12 w-10/12 lg:w-9/12">
                We believe in the power of consumer choices to drive positive
                change. Our platform provides a space for users to share and
                discover alternatives to products from regions with troubling
                policies. Together, we can make a difference by supporting
                ethical consumption and advocating for human rights.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
