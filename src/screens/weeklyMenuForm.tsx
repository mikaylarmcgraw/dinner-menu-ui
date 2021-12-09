import React, {useState, useEffect} from 'react';
import './weeklyMenuForm.css'

export default function WeeklyMenu(): JSX.Element {

  const [title, setTitle] = useState("");

  useEffect(() =>{
   setTitle("Dished - Weekly Menu")
  },[]);
  
  document.title = title;

  return(
    <div className="Form_Container">
    <form className="Form">
      <h2 className="Header">Weekly Dinner Menu</h2>
      <div className="Day_Section">
      <label className="Week_label"> Monday</label>
        <input className="Option_label">
        </input>

      </div>
      <div className="Day_Section">
      <label className="Week_label"> Tuesday</label>
        <input className="Option_label">
        </input>
      </div>
      <div className="Day_Section">
      <label className="Week_label"> Wednesday</label>
        <input className="Option_label">
        </input>

      </div>
      <div className="Day_Section">
      <label className="Week_label"> Thursday </label>
        <input className="Option_label">
        </input>
      </div>
      <div className="Day_Section">
      <label className="Week_label"> Friday </label>
        <input className="Option_label">
        </input>

      </div>
      <div className="Day_Section">
      <label className="Week_label"> Saturday</label>
        <input className="Option_label">
        </input>

      </div>
      <div className="Day_Section">
      <label className="Week_label"> Sunday</label>
        <input className="Option_label"> 
        </input>

      </div>
      <div className="">
      <button className="Button">Generate</button>
      </div>
    </form>
    </div>
  );
}