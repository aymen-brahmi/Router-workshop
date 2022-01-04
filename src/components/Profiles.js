import React from 'react'
import UserCard from './UserCard';
function Profiles({Users}) {
    return (
        <div className="User">
            { Users.map((el) =><UserCard el={el} key={el.id}  /> ) }
        </div>
    )
}

export default Profiles
