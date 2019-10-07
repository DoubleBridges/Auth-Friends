import React from 'react'
import axios from 'axios'
import { Form, Segment } from 'semantic-ui-react'
import { useFormInput } from '../Hooks';



const LogIn = props => {

  const [values, changeHandler] = useFormInput({ name: '', password: '' })
  
  const logInHandler = () => {
    axios.post(`http://localhost:5000/api/login`, values)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        props.history.push('/friendlist')

      })
      .catch(err => console.log(err, values))
  }

  return (
    <Segment>
      <Form
        onSubmit={logInHandler}>
        <Form.Input
          fluid
          label='User Name'
          name='name'
          value={values.name}
          onChange={changeHandler}
        />
        <Form.Input
          fluid
          label='Password'
          name='password'
          type='password'
          value={values.password}
          onChange={changeHandler}
        />
        <Form.Button>Log In</Form.Button>
      </Form>
    </Segment>
  )
}

export default LogIn