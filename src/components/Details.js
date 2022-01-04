import React from "react";
import { Button } from "react-bootstrap";

function Details(props) {
  console.log(props);
  const Found = props.Users.find((el) => el.id == props.match.params.id);
  return (
    <div>
      <h1>This the profile of {Found.name} </h1>
      <h1>This the age {Found.age} of this student </h1>
      <h1>He work as {Found.profession} </h1>
      <Button onClick={()=> props.history.goBack()  }  >Go Back  </Button>
      <Button onClick={()=> props.history.push("/")  } > Go HOME </Button>
    </div>
  );
}

export default Details;
