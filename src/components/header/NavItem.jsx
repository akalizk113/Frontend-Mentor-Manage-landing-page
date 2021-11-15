import { Typography } from '@mui/material';
const NavItem = ({ children }) => {
   return (
      <li>
         <Typography variant="navitem" component="a" href="#">
            {children}
         </Typography>
      </li>
   );
};

export default NavItem;
