import { Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
const IndexItem = styled('span')(({ theme }) => ({
   fontSize: theme.typography.htmlFontSize,
   fontWeight: '700',
   fontFamily: theme.typography.fontFamily,
   lineHeight: 1,
   color: '#FFFFFF',
   width: '68px',
   height: '40px',
   backgroundColor: theme.palette.primary.main,
   borderRadius: '24px',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
}));

const DifferentItem = ({ index, title, desc }) => {
   return (
      <Box>
         <Box
            marginBottom="8px"
            sx={{
               display: 'flex',
               alignItems: 'center',
               backgroundColor: {
                  xs: 'palered.main',
                  md: 'unset',
               },
               borderTopLeftRadius: {
                  xs: '24px',
                  md: 'unset',
               },
               borderBottomLeftRadius: {
                  xs: '24px',
                  md: 'unset',
               },
               mr: {
                  xs: '-16px',
                  md: 'unset',
               },
            }}
         >
            <IndexItem>{index}</IndexItem>
            <Typography
               variant="h5"
               pl={{ xs: '16px', md: '26px' }}
               sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flex: 1,
                  alignSelf: 'stretch',
               }}
            >
               {title}
            </Typography>
         </Box>
         <Typography variant="body1" ml={{ md: '94px' }}>
            {desc}
         </Typography>
      </Box>
   );
};

export default DifferentItem;
