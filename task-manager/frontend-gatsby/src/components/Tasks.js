import React from 'react'
import { Container, Row, Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import Badge from 'react-bootstrap/Badge'
import { navigate } from '../utils/navigate';
import { useMutation, useQuery } from '@apollo/react-hooks'

const tasks = []
import User from 'store/User'
import { GET_TASKS_BY_USER_ID, GET_TASKS_ASSIGNED_BY_USER_ID } from '../store/GraphqlQueries';


const Tasks = () => {
  const currentUserId = User.get('current', 'id')
  const currentUserName = User.get('current', 'name')

  const { loading, error, data } = useQuery(GET_TASKS_ASSIGNED_BY_USER_ID, {
    variables: {
      where: {
        user_id: {
          equals: currentUserId
        }
      }
    }
  });

  if (loading) return null;

  if (error) return `Error! ${error}`;

  if(data){ 
    console.log(data.assignees.length)
  return (

    <div className="col">
      <Table variant="light" striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>State</th>
            <th>Due Date</th>
            <th>Assignee</th>
          </tr>
        </thead>
        <tbody>
          <tr key="task-5a03c3ee-f307-47e7-9039-bf9077c66b2b">
            <td>data.tasks[0].title</td>
            <td>
              <Badge bg="secondary">data.tasks[0].state</Badge>
            </td>
            <td>data.tasks[0].due_at</td>
            <td>{currentUserName}</td>
          </tr>
        </tbody>
      </Table>
      <Container fluid="sm">
        <center>
          <Button variant="primary" onClick={(e) => navigate('tasks/task/create')}> Créer tâche</Button> {' '}
          <Button variant="primary" onClick={(e) => navigate('tasks/task/assign')}>Assigner une tâche</Button>
        </center>

      </Container>

    </div>

  )}
}

export default Tasks
