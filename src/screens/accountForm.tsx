import React, {useState, useEffect} from 'react';

export default function Account(): JSX.Element {

  const [title, setTitle] = useState("");
  
  useEffect(() =>{
   setTitle("Dished - Account")
  },[]);

  document.title = title;

  return(
    <div>
    <form>
      <div>Account Screen</div>
    </form>
    </div>
  );
}