import React from "react";

interface UserProps{
  data:{
    name:string;
  }
}

// React.FC is a type provided by the React library that stands for "Function Component."
const User: React.FC<UserProps> = (props)=> {
  console.log(props.data);
  
  return(
    <div>
    <h1>User Component</h1>
    <h2>{props.data.name}</h2>
    </div>
  )
};
export default User;
