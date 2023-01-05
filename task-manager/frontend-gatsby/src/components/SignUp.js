import React from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { useMutation } from '@apollo/react-hooks'
import { CREATE_USER_MUTATION } from 'store/GraphqlQueries'


import User from 'store/User'

const SignUp = () => {
  const [name, setName] = React.useState(User.get('new', 'name'))
  const [email, setEmail] = React.useState(User.get('new', 'email'))
  const [password, setPassword] = React.useState()

  const [signUp] = useMutation(CREATE_USER_MUTATION)


  const onSubmit = (e) => {
    e.preventDefault()

    signUp({ data : { name : "ghqqqqqqqq", password : "jhq", password_digest : "ddhhhhhhhdd", active : true, preferences : {}, 
    email : "jhhhhhhhhh@mail.com", last_sign_in_at : "2022-05-01", created_at : "2022-05-01", updated_at : "2022-05-01"} })
      .then((payload) => {
        User.set('current', payload)
        navigate('/')
      })
      .catch((error) => {
        console.log(error)
        alert(error)
      })

    return false
  }

  const onInputChange = (e) => {
    User.set('new', { [e.target.name]: e.target.value })
    switch (e.target.name) {
      case 'name':
        setName(e.target.value)
        break
      case 'email':
        setEmail(e.target.value)
        break
      case 'password':
        setPassword(e.target.value)
        break
    }
  }

  return (
    <div className="col">
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Your Name here"
            onChange={onInputChange}
            defaultValue={name}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={onInputChange}
            defaultValue={email}
          />
          <Form.Text className="text-muted">
            {"We'll never share your email with anyone else."}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            onChange={onInputChange}
            defaultValue={password}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default SignUp
