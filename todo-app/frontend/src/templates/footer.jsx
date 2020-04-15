import React from "react";
import TableFooter from '@material-ui/core/TableFooter';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router'
import '../../public/assets/css/footer.css'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="left">
      <Link className='contato'href="https://www.instagram.com/onix.coding/"> 
      Portfólio de projetos: @onix.coding </Link>
      {'© Verônica Souza P. '}
      {'  '}
      {new Date().getFullYear()}
      {'.'}
      <Link color="#FF9933" href="/#/home">
        Simply Book
      </Link>
    </Typography>
  );
}



export default props => (
  <div>
      {/* Footer */}
      <footer className='footer'>
          <Typography variant="h6" align="left" gutterBottom>
            {/* Footer */}
          </Typography>
          <Typography variant="subtitle1" align="left" color="textSecondary" component="p">
            Descubra mais projetos no portfólio!
          </Typography>
          <Copyright className='copyright'/>
        </footer>
        {/* End footer */}
  </div>

);
  