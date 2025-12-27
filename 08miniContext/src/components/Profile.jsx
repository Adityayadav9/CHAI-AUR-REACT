import React, {useContext} from 'react'
import UserContext from '../context/UserContext'


function Profile() {
    const {user} = useContext(UserContext)

    // return nahi karegene condition return karenge

 if(!user) return <div>please login</div>
 return <div>Welcome {user.username}</div>
}

export default Profile
