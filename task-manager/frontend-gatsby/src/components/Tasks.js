import React from 'react'
import { Container, Row, Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import Badge from 'react-bootstrap/Badge'
import { navigate } from '../utils/navigate';
import { useMutation, useQuery } from '@apollo/react-hooks'

let tasks = []
const taskIds = []
import User from 'store/User'
import { GET_TASKS_BY_TASK_ID, GET_TASKS_ASSIGNED_BY_USER_ID } from '../store/GraphqlQueries';


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

  const { refetch } = useQuery(GET_TASKS_BY_TASK_ID, {
    variables: {
      where: {
        id: {
          in: taskIds
        }
      }
    }
  }, {
    enabled: false,
  });

  if (loading) return null;

  if (error) return `Error! ${error}`;

  if (data) {
    for (const assignee of data.assignees)
      taskIds.push(assignee.task_id)
    
    refetch({
      where: {
        id: {
          in: taskIds
        }
      }
    }).then((taskData) => {
      tasks = taskData.data.tasks.slice()
    })
    return (

      <div className="col">
        <Table variant="light" striped bordered hover>
          <thead>
            <tr>
              <th>Title</th>
              <th>State</th>
              <th>Due Date</th>
              <th>Assignee</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {tasks.map((item, i) => {
                    return (
                      <tr key={item.id} >
                      <td>{item.title}</td>
                      <td>
                        <Badge bg="secondary">{item.state}</Badge>
                      </td>
                      <td>{item.due_at}</td>
                      <td>{currentUserName}</td>
                      <td>
                        <Button variant="primary" onClick={(e) => navigate(`tasks/task/editState?id=${item.id}`)}> Modifier</Button> {' '}
                        <Button variant="primary" onClick={(e) => navigate(`tasks/task/comment?id=${item.id}`)}> Commenter</Button> {' '}
                      </td>
                    </tr>
                    );
                })}
            
          </tbody>
        </Table>
        <Container fluid="sm">
          <center>
            <Button variant="primary" onClick={(e) => navigate('tasks/task/create')}> Créer tâche</Button> {' '}
            <Button variant="primary" onClick={(e) => navigate('tasks/task/assign')}>Assigner une tâche</Button>
          </center>

        </Container>

      </div>

    )
  }
}

export default Tasks
