import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const Avatar = styled('img')(() => ({
   position: 'absolute',
   top: 0,
   left: '50%',
   transform: 'translateX(-50%)',
   width: '72px',
   height: '72px',
}));

const TestimonialItem = ({ img, name, content }) => {
   return (
      <Box height="256px" position="relative" display="flex">
         <Avatar src={img} alt={name} />
         <Box
            textAlign="center"
            mt="36px"
            px="40px"
            bgcolor="lightgray.main"
            borderRadius="8px"
         >
            <Typography variant="h5" mt="60px" mb="24px">
               {name}
            </Typography>
            <Typography variant="body1">{content}</Typography>
         </Box>
      </Box>
   );
};

export default TestimonialItem;
