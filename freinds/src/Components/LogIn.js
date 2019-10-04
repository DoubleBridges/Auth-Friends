import React, { useState} from 'react'
import axios from 'axios'
import { Form, Segment } from 'semantic-ui-react'



const LogIn = props => {

  const [values, setValues] = useState({
    username: '',
    password: ''
  });

  const changeHandler = e => setValues({ ...values, [e.target.name]: e.target.value })
  
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
          name='username'
          value={values.name}
          onChange={changeHandler}
        />
        <Form.Input
          fluid
          label='Password'
          name='password'
          value={values.password}
          onChange={changeHandler}
        />
        <Form.Button>Log In</Form.Button>
      </Form>
    </Segment>
  )
}

export default LogIn