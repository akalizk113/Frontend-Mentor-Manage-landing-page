import CustomContainer from '../CustomContainer';
import {
   Box,
   Button,
   Stack,
   Input,
   Typography,
   FormControl,
   FormHelperText,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import bgSimplifyDesktop from '../.././assets/images/bg-simplify-section-desktop.svg';
import bgSimplifyMobile from '../.././assets/images/bg-simplify-section-mobile.svg';
import { ReactComponent as LogoSvg } from '../../assets/images/logo.svg';
import { ReactComponent as FacebookIcon } from '../../assets/images/icon-facebook.svg';
import { ReactComponent as InstagramIcon } from '../../assets/images/icon-instagram.svg';
import { ReactComponent as TwitterIcon } from '../../assets/images/icon-twitter.svg';
import { ReactComponent as YoutubeIcon } from '../../assets/images/icon-youtube.svg';
import { ReactComponent as PinterestIcon } from '../../assets/images/icon-pinterest.svg';
import { useCallback, useState } from 'react';

const BrandIcon = styled('a')(({ theme }) => ({
   '&:hover': {
      cursor: 'pointer',
      color: theme.palette.primary.main,
      path: {
         fill: theme.palette.primary.main,
      },
   },
}));

const FooterNavItem = styled(Typography)(({ theme }) => ({
   color: '#ffff',
   '&:hover': {
      cursor: 'pointer',
      color: theme.palette.primary.main,
   },
}));

const CustomInput = styled(Input)(({ theme }) => ({
   '& input': {
      height: '44px',
      backgroundColor: '#fff',
      paddingLeft: '16px',
      paddingRight: '16px',
      boxSizing: 'border-box',
      color: theme.palette.text.primary,
      borderRadius: '20px',
      fontSize: '14px',
   },
   '& input[aria-invalid="true"]': {
      color: '#d32f2f',
      border: '1px solid #d32f2f',
   },
   '&:before, &:after': {
      display: 'none',
   },
}));

const Footer = () => {
   const [errorMessage, setErrorMessage] = useState(``);
   const [inputValue, setInputValue] = useState(``);

   const validateEmail = useCallback((email) => {
      const re =
         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
   }, []);

   const handleSubmit = (e) => {
      e.preventDefault();

      if (validateEmail(inputValue)) {
         return;
      }
      setErrorMessage(`Please insert a valid email`);
   };
   return (
      <footer>
         <CustomContainer
            outerSx={{
               maxWidth: '100%',
               height: '220px',
               background: ` url(${bgSimplifyDesktop}) repeat center / contain`,
               bgcolor: 'primary.main',
               mt: '180px',
            }}
            component="section"
            innerSx={{
               height: '100%',
               display: 'flex',
               justifyContent: 'space-between',
               alignItems: 'center',
               flexWrap: 'nowrap',
            }}
         >
            <Typography variant="h2" maxWidth="450px" color="#fff">
               Simplify how your team works today.
            </Typography>
            <Button
               variant="contained"
               sx={{
                  bgcolor: '#fff',
                  color: 'primary.main',
                  '&:hover': {
                     bgcolor: '#fff',
                     filter: 'brightness(130%)',
                  },
               }}
            >
               Get Started
            </Button>
         </CustomContainer>
         <CustomContainer
            component="section"
            outerSx={{
               maxWidth: '100%',
               height: '250px',
               bgcolor: 'hsl(233, 12%, 13%)',
            }}
            innerSx={{
               pt: '60px',
               display: 'flex',
               position: 'relative',
            }}
         >
            <Box display="flex" flexDirection="column" height="auto">
               <LogoSvg fill="#fff" />
               <Stack direction="row" spacing="12px" mt="auto">
                  <BrandIcon href="#">
                     <FacebookIcon />
                  </BrandIcon>
                  <BrandIcon href="#">
                     <YoutubeIcon />
                  </BrandIcon>
                  <BrandIcon href="#">
                     <TwitterIcon />
                  </BrandIcon>
                  <BrandIcon href="#">
                     <PinterestIcon />
                  </BrandIcon>
                  <BrandIcon href="#">
                     <InstagramIcon />
                  </BrandIcon>
               </Stack>
            </Box>
            <Box display="flex" ml="120px">
               <Stack direction="column" spacing="16px">
                  <FooterNavItem href="#" variant="body1" component="a">
                     Home
                  </FooterNavItem>
                  <FooterNavItem href="#" variant="body1" component="a">
                     Pricing
                  </FooterNavItem>
                  <FooterNavItem href="#" variant="body1" component="a">
                     Products
                  </FooterNavItem>
                  <FooterNavItem href="#" variant="body1" component="a">
                     About Us
                  </FooterNavItem>
               </Stack>
               <Stack direction="column" spacing="16px" ml="210px">
                  <FooterNavItem href="#" variant="body1" component="a">
                     Careers
                  </FooterNavItem>
                  <FooterNavItem href="#" variant="body1" component="a">
                     Community
                  </FooterNavItem>
                  <FooterNavItem href="#" variant="body1" component="a">
                     Privacy Policy
                  </FooterNavItem>
               </Stack>
            </Box>
            <Box
               component="form"
               sx={{
                  display: 'flex',
                  ml: 'auto',
               }}
               onSubmit={handleSubmit}
            >
               <FormControl error={errorMessage ? true : false}>
                  <CustomInput
                     placeholder="Updates in your inbox…"
                     inputProps={{
                        value: inputValue,
                        onChange: (e) => {
                           setInputValue(e.target.value);
                           setErrorMessage('');
                        },
                        onFocus: (e) => setErrorMessage(''),
                     }}
                  ></CustomInput>
                  <FormHelperText hidden={errorMessage ? false : true}>
                     {errorMessage}
                  </FormHelperText>
               </FormControl>
               <Button
                  variant="contained"
                  type="submit"
                  sx={{
                     height: '44px',
                     ml: '8px',
                     paddingLeft: '24px',
                     paddingRight: '24px',
                  }}
               >
                  Go
               </Button>
            </Box>
            <Typography
               variant="body1"
               color="darkgraylishblue.main"
               sx={{
                  position: 'absolute',
                  right: '24px',
                  bottom: '0',
               }}
            >
               Copyright 2020. All Rights Reserved
            </Typography>
         </CustomContainer>
      </footer>
   );
};

export default Footer;
