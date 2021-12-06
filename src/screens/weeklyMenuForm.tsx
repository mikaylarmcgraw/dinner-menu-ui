import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core';
import { Button } from 'reactstrap';

const useStyles = makeStyles((theme) => ({
  root:{
    padding: 10
  },
  weekLabels: {
      fontSize: 18,
      padding: 20,
      display: "flex",
      flexDirection: "row",
  },
  optionLabel:{
    paddingLeft: 20
  },
  button:{
    marginLeft: 10,
    color: "black",
  }
}));

export default function WeeklyMenu(): JSX.Element {

  const [title, setTitle] = useState("");

  useEffect(() =>{
   setTitle("Dished - Weekly Menu")
  },[]);
  
  document.title = title;

  const classes = useStyles();
  return(
    <form>
      <h2 className={classes.root}>Weekly Dinner Menu</h2>
      <div className={classes.weekLabels}>Monday:
      <label className={classes.optionLabel}>Dinner 1</label>
      </div>
      
      <div className={classes.weekLabels}>Tuesday:
      <label className={classes.optionLabel}>Dinner 2</label>
      </div>
      <div className={classes.weekLabels}>Wednesday:
      <label className={classes.optionLabel}>Dinner 3</label>
      </div>
      <div className={classes.weekLabels}>Thursday:
      <label className={classes.optionLabel}>Dinner 4</label>
      </div>
      <div className={classes.weekLabels}>Friday:
      <label className={classes.optionLabel}>Dinner 5</label>
      </div>
      <div className={classes.weekLabels}>Saturday:
      <label className={classes.optionLabel}>Dinner 6</label>
      </div>
      <div className={classes.weekLabels}>Sunday:
      <label className={classes.optionLabel}>Dinner 7</label>
      </div>
      <Button className={classes.button} >Generate</Button>
    </form>
  );
}