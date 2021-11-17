import { Swiper } from 'swiper/react/swiper';
import { SwiperSlide } from 'swiper/react/swiper-slide';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import { Box, Typography, Button } from '@mui/material';
import TestimonialItem from './TestimonialItem';

import SwiperCore, { Pagination } from 'swiper';

import patternSvg from '../../../assets/images/bg-tablet-pattern.svg';
import aliAvt from '../../../assets/images/avatar-ali.png';
import anishaAvt from '../../../assets/images/avatar-anisha.png';
import richardAvt from '../../../assets/images/avatar-richard.png';
import shanaiAvt from '../../../assets/images/avatar-shanai.png';
SwiperCore.use([Pagination]);

const Testimonials = () => {
   return (
      <Box
         component="section"
         sx={{
            textAlign: 'center',
            '&:before': {
               content: `''`,
               position: 'absolute',
               top: 950,
               left: -380,
               width: '700px',
               height: '700px',
               background: `url('${patternSvg}') no-repeat center / cover`,
               zIndex: -1,
               display: {
                  xs: 'none',
                  md: 'block',
               },
            },
            // overflow: {
            //    xs: 'hidden',
            //    lg: 'visible',
            // },
         }}
      >
         <Typography variant="h2" mt="150px" textAlign="center">
            What they’ve said
         </Typography>
         <Box
            sx={{
               mt: '70px',
               position: 'absolute',
               left: 0,
               right: 0,
            }}
         >
            <Swiper
               initialSlide={1}
               slidesPerView={2.441}
               spaceBetween={32}
               className="mySwiper"
               centeredSlides={true}
               pagination={{ clickable: true }}
               breakpoints={{
                  0: {
                     slidesPerView: 1,
                     spaceBetween: 24,
                  },
                  900: {
                     slidesPerView: 1.6,
                     spaceBetween: 32,
                  },
                  1200: {
                     slidesPerView: 2.441,
                     spaceBetween: 32,
                  },
               }}
            >
               <SwiperSlide>
                  <TestimonialItem
                     img={anishaAvt}
                     name="Anisha Li"
                     content="“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <TestimonialItem
                     img={aliAvt}
                     name="Ali Bravo"
                     content="“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much 
                     more focused.”"
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <TestimonialItem
                     img={richardAvt}
                     name="Richard Watts"
                     content="“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”"
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <TestimonialItem
                     img={shanaiAvt}
                     name="Shanai Gough"
                     content="“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”"
                  />
               </SwiperSlide>
            </Swiper>
         </Box>
         <Button
            variant="contained"
            sx={{
               mt: {
                  xs: '420px',
                  md: '374px',
               },
            }}
         >
            Get Started
         </Button>
      </Box>
   );
};

export default Testimonials;
