import React from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useMutation } from '@apollo/react-hooks'
import { navigate } from '../utils/navigate';


import { CREATE_TASK_MUTATION } from 'store/GraphqlQueries'



const AssigneeForm = () => {

    

    return (
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Assigner à</Form.Label>
                    <Form.Control
                        type="text"
                        name="assignee"
                        placeholder="Your Assignee name here"
                        onChange={onInputChange}
                    //defaultValue={name}
                    />
                </Form.Group>
    )
}

export default AssigneeForm
