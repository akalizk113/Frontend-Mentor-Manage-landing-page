import CustomContainer from '../CustomContainer';
import Hero from './hero/Hero';
import Different from './different/Different';
import Testimonials from './testimonials/Testimonials';
const Main = () => {
   return (
      <CustomContainer component="main">
         <Hero />
         <Different />
         <Testimonials />
      </CustomContainer>
   );
};

export default Main;
