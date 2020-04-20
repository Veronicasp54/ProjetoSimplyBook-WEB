import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Item from './salas-item'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 20,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Item/>
        </Grid>
        <Grid item xs={4}>
          <Item></Item>
        </Grid>
        <Grid item xs={4}>
          <Item/>
        </Grid>
     
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid container item xs={12} spacing={2}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={2}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}
