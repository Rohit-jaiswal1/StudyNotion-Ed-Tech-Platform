import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Autoplay } from "swiper/modules";
import CatalogCard from "./CatalogCard";

const CourseSlider = ({ Courses }) => {
  return (
    <>
      {Courses?.length ? (
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          modules={[Autoplay, FreeMode]}
          className="mySwiper md:pt-5"
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={1600}
          freeMode={true}
          breakpoints={{
            300: { slidesPerView: 1, spaceBetween: 10},
            768: { slidesPerView: 3, },
            1024: { slidesPerView: 3 },
          }}
        >
          {Courses?.map((course, index) => (
            <SwiperSlide key={index}>
            <div className="flex justify-center items-center">
              <CatalogCard
                course={course}
                Height={"h-[200px] md:h-[100px] lg:h-[201px]"}
                Width={"lg:w-[384px]"}
              />
            </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div>
          <div className="my-5 flex items-center justify-center text-lg text-white">
            <h1>No Course added to this Category yet</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseSlider;











// import React from 'react'

// import {Swiper, SwiperSlide} from "swiper/react"
// //import "swiper/css"
// import 'swiper/swiper-bundle.min.css'
// import 'swiper/swiper.min.css'
// import "swiper/css/free-mode"
// // import "swiper/css/pagination"
// // import "swiper/css/navigation";
// import { Navigation, Pagination,Mousewheel, Keyboard}  from 'swiper/modules'
// import{ FreeMode,Autoplay} from "swiper/modules";
// import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
// import "react-loading-skeleton/dist/skeleton.css";

// import CatalogCard from './CatalogCard'

// const CourseSlider = ({Courses}) => {
    
//   return (
//     <>
//         {
//             Courses?.length ? (
//                 <Swiper
//                  mousewheel={
//                       {
//                           enabled: true,
//                           forceToAxis: true,
//                       } 
//                  }
//                  keyboard={
//                       {
//                           enabled: true,
//                           onlyInViewport: true,
//                       }
//                  }
//                  allowSlidePrev={true}
//                     slidesPerView={1}
//                     loop={false}
//                     spaceBetween={20}
//                     pagination={true}
//                     modules={[Pagination,Navigation,FreeMode,Mousewheel,Keyboard]}
//                     className="mySwiper md:pt-5"
//                     // autoplay={{
//                     // delay: 1000,
//                     // disableOnInteraction: false,
//                     // }}
//                     style={{
//                         "--swiper-navigation-size": "20px",
//                       }}
//                     freeMode={true}
//                     navigation={true}
//                     // navigation={
//                     //     {
//                     //         nextEl: ".swiper-button-next",
//                     //         prevEl: ".swiper-button-prev",
//                     //     }
//                     // }
//                     breakpoints={{
//                         300:{slidesPerView:2.1,spaceBetween:10,},
//                         640:{slidesPerView:2.2,},
//                         1024:{slidesPerView:3.1,}
//                     }}
                    
                   
//                 >
//                     {
//                         Courses?.map((course, index)=> (
//                             <SwiperSlide key={index}>
//                                 <CatalogCard course={course} Height={"lg:h-[250px] h-[100px]"} />
//                             </SwiperSlide>
//                         ))
//                     }   
//                     {/* <div className='swiper-button-next'></div> */}
//                     {/* <div className='swiper-button-prev'></div> */}
//                 </Swiper>
//             ) : (
//                 <div className='flex gap-4 overflow-hidden'>
//                 <SkeletonTheme baseColor="#2C333F" highlightColor="#161D29">
//                 <div className=''>
//                   <Skeleton  className="md:h-[200px] lg:w-[400px] h-[100px] w-[200px] rounded-xl" />
//                   <Skeleton className=" md:h-[20px] w-[70px] rounded-md" />
//                   <Skeleton className="md:h-[20px] md:w-[400px] rounded-md" />
//                   <Skeleton className="md:h-[20px] md:w-[400px] rounded-md"/>
//                 </div>
//               </SkeletonTheme>
//                 <SkeletonTheme baseColor="#2C333F" highlightColor="#161D29">
//                 <div className=''>
//                   <Skeleton  className="md:h-[200px] lg:w-[400px] h-[100px] w-[200px] rounded-xl" />
//                   <Skeleton className=" md:h-[20px] w-[70px] rounded-md" />
//                   <Skeleton className="md:h-[20px] md:w-[400px] rounded-md" />
//                   <Skeleton className="md:h-[20px] md:w-[400px] rounded-md"/>
//                 </div>
//               </SkeletonTheme>
//                 <SkeletonTheme baseColor="#2C333F" highlightColor="#161D29">
//                 <div className=''>
//                   <Skeleton  className="md:h-[200px] lg:w-[400px] h-[100px] w-[200px] rounded-xl" />
//                   <Skeleton className=" md:h-[20px] w-[70px] rounded-md" />
//                   <Skeleton className="md:h-[20px] md:w-[400px] rounded-md" />
//                   <Skeleton className="md:h-[20px] md:w-[400px] rounded-md"/>
//                 </div>
//               </SkeletonTheme>
//                 </div>
//             )

//         }
//     </>
//   )
// }

//export default CourseSlider
// import React from 'react'

// const CourseSlider = () => {
//   return (
//     <div>CourseSlider</div>
//   )
// }

// export default CourseSlider
