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
   marginRight: '26px',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
}));

const DifferentItem = ({ index, title, desc }) => {
   return (
      <Box>
         <Box marginBottom="8px" sx={{ display: 'flex', alignItems: 'center' }}>
            <IndexItem>{index}</IndexItem>
            <Typography variant="h5">{title}</Typography>
         </Box>
         <Typography variant="body1" ml="94px">
            {desc}
         </Typography>
      </Box>
   );
};

export default DifferentItem;
