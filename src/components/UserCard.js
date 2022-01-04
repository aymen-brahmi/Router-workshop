import React from 'react'
import {Card,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
function UserCard({el}) {
    return (
        <div>
           <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcrwMvUgClCnBNDMfiBcopM8BgT74epXtu0g&usqp=CAU" />
  <Card.Body>
    <Card.Title>{el.name}</Card.Title>
    <Card.Text>
     {el.profession}
    </Card.Text>
   <Link to={`/Details/${el.id}`}>
    <Button variant="primary">Details</Button>
    </Link>
  </Card.Body>
</Card> 
        </div>
    )
}

export default UserCard
