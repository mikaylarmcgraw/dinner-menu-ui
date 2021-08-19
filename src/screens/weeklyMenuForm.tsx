import React from 'react';
import {makeStyles} from '@material-ui/core';
import { Button } from 'reactstrap';

const useStyles = makeStyles((theme) => ({
  root:{
    padding: 10
  },
  weekLabels: {
      fontSize: 18,
      padding: 20,
  },
  button:{
    marginLeft: 10,
    color: "black",
  } 
}));


export default function WeeklyMenu(): JSX.Element {
  const classes = useStyles();
  return(
    <form>
      <h2 className={classes.root}>Weekly Dinner Menu</h2>
      <div className={classes.weekLabels}>Monday:</div>
      <div className={classes.weekLabels}>Tuesday:</div>
      <div className={classes.weekLabels}>Wednesday:</div>
      <div className={classes.weekLabels}>Thursday:</div>
      <div className={classes.weekLabels}>Friday:</div>
      <div className={classes.weekLabels}>Saturday:</div>
      <div className={classes.weekLabels}>Sunday:</div>
      <Button className={classes.button} >Generate</Button>
    </form>
  );
}