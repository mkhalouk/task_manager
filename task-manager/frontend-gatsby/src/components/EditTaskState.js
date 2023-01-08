import React, { useEffect } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { navigate } from '../utils/navigate';


import { UPDATE_TASK_STATE_MUTATION,  GET_USER_BY_NAME_QUERY } from 'store/GraphqlQueries'

import User from 'store/User'

const EditTask = () => {

    const EMPTY_STRING = ""
    const EMTY_OBJECT = {}
    const EMTY_BOOL = false

    const [progess, setProgess] = React.useState()
    const [id, setId] = React.useState()
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    const [editTaskState] = useMutation(UPDATE_TASK_STATE_MUTATION)
    const { loading, error, data } = useQuery(GET_USER_BY_NAME_QUERY, {
        variables: { where: { email: User.get('new', 'email') } }
    });

    const onInputChange = (e) => {

        switch (e.target.name) {
            case 'progress':
                setProgess(e.target.value)
                break
            case 'id':
                setProgess(e.target.value)
                break
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()

        editTaskState({
            variables: {
                data: {
                    state: {
                        set: [progess]
                    }
                },
                where: {
                    id: params.id
                }
            }
        })
            .then((payload) => {
                navigate('/')
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

export default EditTask
