import { Grid, Typography, Button } from '@mui/material';
import HeroIllustrationSvg from '../../../assets/images/illustration-intro.svg';

const Hero = () => {
   return (
      <Grid container mt="104px" component="section">
         <Grid
            item
            lg={6}
            sx={{
               display: 'flex',
               flexDirection: 'column',
               justifyContent: 'center',
               order: {
                  lg: 'unset',
                  xs: '1',
               },
               alignItems: {
                  lg: 'unset',
                  xs: 'center',
               },
               width: {
                  xs: '100%',
                  lg: 'auto',
               },
            }}
         >
            <Typography
               variant="h1"
               textAlign={{
                  xs: 'center',
                  lg: 'unset',
               }}
               sx={{
                  maxWidth: {
                     md: '700px',
                     lg: 'unset',
                  },
               }}
            >
               Bring everyone together to build better products.
            </Typography>
            <Typography
               variant="body1"
               my="32px"
               maxWidth="340px"
               textAlign={{ xs: 'center', lg: 'unset' }}
            >
               Manage makes it simple for software teams to plan day-to-day
               tasks while keeping the larger team goals in view.
            </Typography>
            <Button
               variant="contained"
               sx={{
                  width: 'max-content',
               }}
            >
               Get Started
            </Button>
         </Grid>
         <Grid
            item
            lg={6}
            sx={{
               display: 'flex',
               justifyContent: 'center',
               width: '100%',
               '@media sreen and (min-width: 1200px)': {
                  display: 'block',
                  width: 'auto',
               },
            }}
         >
            <img
               style={{ maxWidth: '100%' }}
               src={HeroIllustrationSvg}
               alt="illustration intro"
            />
         </Grid>
      </Grid>
   );
};

export default Hero;
