import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { ThemeProvider } from '@mui/material';
import theme from './themes/theme';
function App() {
   return (
      <ThemeProvider theme={theme}>
         <Header />
         <Main />
         <Footer />
      </ThemeProvider>
   );
}

export default App;
