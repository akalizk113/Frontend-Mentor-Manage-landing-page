import { Grid, Typography, Stack } from '@mui/material';
import DifferentItem from './DifferentItem';
const Different = () => {
   return (
      <Grid container component="section" mt="130px" columnSpacing="80px">
         <Grid item lg={6}>
            <Typography variant="h2">What’s different about Manage?</Typography>
            <Typography variant="body1" mt="32px" maxWidth="330px">
               Manage provides all the functionality your team needs, without
               the complexity. Our software is tailor-made for modern digital
               product teams.
            </Typography>
         </Grid>
         <Grid item lg={6}>
            <Stack lg={6} direction="column" spacing="40px">
               <DifferentItem
                  index="01"
                  title="Track company-wide progress"
                  desc="See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
               />
               <DifferentItem
                  index="02"
                  title="Advanced built-in reports"
                  desc="Set internal delivery estimates and track progress toward company 
               goals. Our customisable dashboard helps you build out the reports 
               you need to keep key stakeholders informed."
               />
               <DifferentItem
                  index="03"
                  title="Everything you need in one place"
                  desc="Stop jumping from one service to another to communicate, store files, 
               track tasks and share documents. Manage offers an all-in-one team 
               productivity solution."
               />
            </Stack>
         </Grid>
      </Grid>
   );
};

export default Different;
