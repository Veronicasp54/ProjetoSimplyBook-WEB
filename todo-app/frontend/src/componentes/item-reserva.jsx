import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EventIcon from '@material-ui/icons/Event';
import '../../public/assets/css/item-reserva.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    padding: 10,
    fontSize:'1,2rem',
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
            <EventIcon/>
        </CardContent>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1" align="left">
            Horário Reserva
          </Typography>
          </CardContent>
          <CardContent>
          <Typography variant="body2" color="textSecondary" component="h4" align="left">
            Descrição Reserva
          </Typography> 
          <Typography variant="body2" color="textSecondary" component="h4" align="left">
            Sala
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
