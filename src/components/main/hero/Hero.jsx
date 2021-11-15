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
            }}
         >
            <Typography variant="h1">
               Bring everyone together to build better products.
            </Typography>
            <Typography variant="body1" my="32px" maxWidth="340px">
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
         <Grid item lg={6}>
            <img src={HeroIllustrationSvg} alt="illustration intro" />
         </Grid>
      </Grid>
   );
};

export default Hero;
