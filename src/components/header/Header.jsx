import CustomContainer from '../CustomContainer';
import NavItem from './NavItem';
import { Button, Stack } from '@mui/material';
import patternSvg from '../../assets/images/bg-tablet-pattern.svg';
import { ReactComponent as LogoSvg } from '../../assets/images/logo.svg';

const Header = () => {
   return (
      <CustomContainer
         component="header"
         outerSx={{
            '&:before': {
               content: `''`,
               position: 'absolute',
               top: -100,
               right: -30,
               width: '700px',
               height: '700px',
               background: `url('${patternSvg}') no-repeat center / cover`,
               zIndex: -1,
            },
         }}
         innerSx={{
            pt: '56px',
            display: 'flex',
            justifyContent: 'space-between',
         }}
      >
         <LogoSvg />
         <nav>
            <Stack component="ul" direction="row" spacing={4}>
               <NavItem>Pricing</NavItem>
               <NavItem>Product</NavItem>
               <NavItem>About Us</NavItem>
               <NavItem>Careers</NavItem>
               <NavItem>Community</NavItem>
            </Stack>
         </nav>
         <Button variant="contained">Get Started</Button>
      </CustomContainer>
   );
};

export default Header;
