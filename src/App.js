import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { ThemeProvider, Typography, Button } from '@mui/material';
import theme from './themes/theme';
function App() {
   return (
      <ThemeProvider theme={theme}>
         <div className="App" style={{ padding: '32px' }}>
            <Typography variant="h1"> This is the main Title</Typography>
            <Typography variant="h2"> This is the h2 Title</Typography>
            <Typography variant="h5"> This is the h5 Title</Typography>
            <Typography variant="body1">
               lorem ipsum dolor sit amet, consect
            </Typography>

            <Button variant="contained">Get Started</Button>

            <Header />
            <Main />
            <Footer />
         </div>
      </ThemeProvider>
   );
}

export default App;
