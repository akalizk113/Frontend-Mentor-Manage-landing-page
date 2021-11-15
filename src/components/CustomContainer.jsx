import { Container } from '@mui/material';

const CustomContainer = ({ component, outerSx, innerSx, ...props }) => {
   return (
      <Container
         component={component}
         maxWidth={false}
         sx={{
            maxWidth: '1440px',
            padding: '0 !important',
            position: 'relative',
            ...outerSx,
         }}
      >
         <Container
            {...props}
            maxWidth={false}
            sx={{
               maxWidth: '1158px',
               ...innerSx,
            }}
         ></Container>
      </Container>
   );
};

export default CustomContainer;
