import React, { useEffect, useState } from 'react';

export default function Logout(): JSX.Element {

const [title, setTitle] = useState("");
useEffect(() =>{
 setTitle("Dished - Logout")
},[]);

document.title = title;

  return(
    
    <div>
    <form>
      <div>Logout Screen</div>
    </form>
    </div>
  );
}