import CustomContainer from '../CustomContainer';
import NavItem from './NavItem';
import { Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

import patternSvg from '../../assets/images/bg-tablet-pattern.svg';
import { ReactComponent as LogoSvg } from '../../assets/images/logo.svg';
import { ReactComponent as CloseIcon } from '../../assets/images/icon-close.svg';
import { ReactComponent as HamburgerIcon } from '../../assets/images/icon-hamburger.svg';
import { useState } from 'react';

const Nav = styled('nav')(({ theme }) => ({
   [theme.breakpoints.between('xs', 'md')]: {
      display: 'flex',
      '& .nav__container': {
         position: 'absolute',
         top: '100px',
         right: '24px',
         left: '24px',
         zIndex: '1000',
         fontWeight: '700',
         textAlign: 'center',
         backgroundColor: '#fff',
         padding: '40px 0',
         borderRadius: '5px',
      },

      '&.overlay:before': {
         content: `""`,
         position: 'fixed',
         inset: 0,
         backgroundColor: 'rgba(0 0 0 / 0.1)',
         zIndex: '999',
      },
   },
   '& > button': {
      display: 'none',
      zIndex: 1000,
      [theme.breakpoints.between('xs', 'md')]: {
         display: 'block',
         marginLeft: 'auto',
      },
   },
}));

const Header = () => {
   const [showMobileNav, setShowMobileNav] = useState(false);
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
            minHeight: {
               xs: '84px',
               md: 'unset',
            },
         }}
      >
         <LogoSvg />
         <Nav className={showMobileNav ? 'overlay' : ''}>
            <Button
               variant="icon"
               startIcon={showMobileNav ? <CloseIcon /> : <HamburgerIcon />}
               onClick={() => setShowMobileNav((prev) => !prev)}
            />

            <Stack
               className="nav__container"
               component="ul"
               direction={{ xs: 'column', md: 'row' }}
               spacing={4}
               sx={{
                  display: {
                     xs: showMobileNav ? 'flex' : 'none',
                     md: 'flex',
                  },
               }}
            >
               <NavItem>Pricing</NavItem>
               <NavItem>Product</NavItem>
               <NavItem>About Us</NavItem>
               <NavItem>Careers</NavItem>
               <NavItem>Community</NavItem>
            </Stack>
         </Nav>
         <Button
            variant="contained"
            sx={{
               display: {
                  xs: 'none',
                  md: 'block',
               },
            }}
         >
            Get Started
         </Button>
      </CustomContainer>
   );
};

export default Header;
