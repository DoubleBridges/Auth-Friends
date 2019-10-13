import React, { useContext, useState } from 'react'
import { Form, Segment } from 'semantic-ui-react'
import { FriendContext } from '../contexts';
import { useFormInput } from '../Hooks';
import { axiosWithAuth } from '../axiosWithAuth';
import FriendList from './FriendList';

const EditFriendForm = () => {
  
  const [friends, setFriends] = useContext(FriendContext)
  const [friend, setFriend] = useState({})
  const [values, changeHandler, resetForm, setValues] = useFormInput({ name: friend.name, age: friend.age, email: friend.email })

  const editFriendHandler = () => {
    axiosWithAuth()
      .put(`http://localhost:5000/api/friends/${friend.id}`, values)
      .then(res => {
        setFriends(res.data)
        resetForm()
      })
      .catch(err => console.log('EditFriendForm: PUT:', err))
  }

  const findFriend = () => {
    setFriend(friends.filter(friend => friend.name === values.name))
    console.log(friend)
    setValues(friend)

  }

  return (
    <Segment>
      <Segment>
        <Form
          onSubmit={findFriend}>
          <h1>Enter For Friend To Edit</h1>
          <Form.Input
            fluid
            label='Name'
            name='name'
            placeholder='Name'
            value={values.name}
            onChange={changeHandler}
          />
          <Form.Button>Load Info</Form.Button>
        </Form>
        <Form
          onSubmit={editFriendHandler}>
          <Form.Input
            fluid
            label='Age'
            name='age'
            placeholder='Age'
            value={values.age}
            onChange={changeHandler}
          />
          <Form.Input
            fluid
            label='Email'
            name='email'
            placeholder='Email'
            value={values.email}
            onChange={changeHandler}
          />
          <Form.Button>Edit Friend</Form.Button>
        </Form>
      </Segment>
      <FriendList/>
    </Segment>
  )
}

export default EditFriendForm