import React, { useEffect, useContext } from 'react'
import { Card, Button, Segment } from 'semantic-ui-react'
import { axiosWithAuth } from '../axiosWithAuth';
import { FriendContext } from '../contexts/index';


const FriendList = () => {

  const [friends, setFriends] = useContext(FriendContext)

  useEffect(() => {
    axiosWithAuth().get(`http://localhost:5000/api/friends`)
      .then(res => setFriends(res.data))
      .catch(err => console.log('FriendList: GET call:', err))
  }, [friends]);



  const friendList = friends.map(friend => {

    const deleteFriend = () => {
      axiosWithAuth().delete(`http://localhost:5000/api/friends/${friend.id}`)
        .then(res => setFriends(res.data))
        .catch(err => console.log('FriendList: DELETE post:', err))
    }

    const description = (
      <ul>
        <li>{`Age: ${friend.age}`}</li>
        <li>{`Email: ${friend.email}`}</li>
      </ul>
    )

    const extra = (
      <Button onClick={deleteFriend}>Delete</Button>
    )

      return(
        <Card
          key={friend.id}
          header={friend.name}
          description={description}
          extra={extra}
        />
      )
  })

  if (!friends.length)
    return <div>Loading ...</div>
  
  return (
    <Segment>
      <h1>Friends List</h1>
      <Card.Group itemsPerRow={3}>
        {friendList}
      </Card.Group>
    </Segment>
  )
}

export default FriendList