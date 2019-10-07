import React, { useContext } from 'react'
import { Form, Segment } from 'semantic-ui-react'
import { useFormInput } from '../Hooks';
import { axiosWithAuth } from '../axiosWithAuth';
import { FriendContext } from '../contexts/index';
import FriendList from './FriendList';

const AddFriendForm = () => {

  const [friends, setFriends] = useContext(FriendContext)

  const [values, changeHandler, resetForm] = useFormInput({ name: '', age: '', email: '' })
  
  const addFriendHandler = () => {
    axiosWithAuth().post(`http://localhost:5000/api/friends`, values)
      .then(res => {
        setFriends(res.data)
        resetForm()
      })
      .catch(err => console.log('AddFriendForm: POST:', err))    
  }

  return (
    <Segment>
      <h1>Add A Friend</h1>
      <Segment>
        <Form
          onSubmit={addFriendHandler}>
          <Form.Input
            fluid
            label='Name'
            name='name'
            placeholder='Name'
            value={values.name}
            onChange={changeHandler}
          />
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
          <Form.Button type='submit'>Add Friend</Form.Button>
        </Form>
      </Segment>
      <FriendList />
    </Segment>  
  )
}

export default AddFriendForm
