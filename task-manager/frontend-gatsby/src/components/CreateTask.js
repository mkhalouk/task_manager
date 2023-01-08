import React, { useEffect } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { navigate } from '../utils/navigate';


import { CREATE_TASK_MUTATION, CREATE_ASSIGNEE_MUTATION,  GET_USER_BY_NAME_QUERY } from 'store/GraphqlQueries'

import User from 'store/User'

const CreateTask = () => {

    const EMPTY_STRING = ""
    const EMTY_OBJECT = {}
    const EMTY_BOOL = false

    const [titre, setTitre] = React.useState()
    const [description, setDescription] = React.useState()
    const [progess, setProgess] = React.useState()
    const [id, setId] = React.useState()

    const [createTask] = useMutation(CREATE_TASK_MUTATION)
    const [AssignTask] = useMutation(CREATE_ASSIGNEE_MUTATION)
    const { loading, error, data } = useQuery(GET_USER_BY_NAME_QUERY, {
        variables: { where: { email: User.get('new', 'email') } }
    });

    const onInputChange = (e) => {

        switch (e.target.name) {
            case 'titre':
                setTitre(e.target.value)
                break
            case 'description':
                setDescription(e.target.value)
                break
            case 'progress':
                setProgess(e.target.value)
                break
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()

        createTask({
            variables: {
                data: {
                    title: titre, description: description, owner_id: data.user.id,
                    due_at: EMPTY_STRING, created_at: EMPTY_STRING, updated_at: EMPTY_STRING, state: { set: [progess] }
                }
            }
        })
            .then((payload) => {
                const data = payload.data.createOneTask;
                console.log(data)
                AssignTask({
                    variables: {
                        data: {
                            created_at: new Date(Date.now()).toLocaleString('en-GB', { timeZone: 'UTC' }) , task_id: data.id, user_id : data.owner_id, 
                        }
                    }
                })
                const taskId = payload.data.createOneTask.id
                const path = window.location.pathname
                /*if (path.includes("assign")) {
                    navigate(`/tasks/task/assign?taskId=${taskId}&action=assign`)
                } else {
                    navigate('/')

                }*/
                //User.set('current', payload)
            })
            .catch((error) => {
                console.log(error)
                alert(error)
            })

        return false
    }


    if (loading) return null;

    if (error) return `Error! ${error}`;

    if (data) return (
        <div className="col">
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Titre</Form.Label>
                    <Form.Control
                        type="text"
                        name="titre"
                        placeholder="Your title here"
                        onChange={onInputChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        name="description"
                        placeholder="Enter description"
                        onChange={onInputChange}
                    />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicSelect">
                    <Form.Label>Progrès</Form.Label>
                    <Form.Select name="progress" onChange={onInputChange} aria-label="Default select">
                        <option>Etat</option>
                        <option value="open">Pas Commencée</option>
                        <option value="pending">En cours</option>
                        <option value="completed">Complétée</option>
                    </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )



}

export default CreateTask
