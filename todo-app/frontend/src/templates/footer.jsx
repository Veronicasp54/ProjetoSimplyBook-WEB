import React from "react";
import TableFooter from '@material-ui/core/TableFooter';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router'
import '../../public/assets/css/footer.css'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/home">
        Simply Book
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



export default props => (
  <div>
      {/* Footer */}
      <footer className='footer'>
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Something here to give the footer a purpose!
          </Typography>
          <Copyright />
        </footer>
        {/* End footer */}
  </div>

);
  