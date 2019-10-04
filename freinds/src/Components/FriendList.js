import React, { useEffect, useContext } from 'react'
import { Card } from 'semantic-ui-react'
import { axiosWithAuth } from '../axiosWithAuth';
import { FriendContext } from '../contexts/index';


const FriendList = () => {

  const [friends, setFriends] = useContext(FriendContext)

  useEffect(() => {
    axiosWithAuth().get(`http://localhost:5000/api/friends`)
      .then(res => setFriends(res.data))
      .catch(err => console.log(err))
  }, []);



  const friendList = friends.map(friend => {

  const description = (
    <ul>
      <li>{`Age: ${friend.age}`}</li>
      <li>{`Email: ${friend.email}`}</li>
    </ul>
  )
    return(
      <Card
        key={friend.id}
        header={friend.name}
        description={description}
      />
    )
  })

  if (!friends.length)
    return <div>Loading ...</div>
  
  return (
    <Card.Group itemsPerRow={3}>
      {friendList}
    </Card.Group>
  )
}

export default FriendList