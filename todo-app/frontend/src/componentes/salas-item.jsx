import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BannerSala from '../../public/assets/images/sala-banner.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor: "#fff",
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Banner Sala"
          height="140"
          image={BannerSala}
          title="Banner Sala"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Nome da sala
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Descrição da sala
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary">
          Mais informações..        </Button>
      </CardActions>
    </Card>
  );
}