import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import User from 'store/User'

export const getClient = () => {
  return new ApolloClient({

    uri: 'http://localhost:4000/',
    fetchOptions: {
      mode: 'no-cors'
    },
    cache: new InMemoryCache({
      possibleTypes: {},
    }),
    credentials: 'include',
    headers: {
      user: User.get('account', 'id') || null,
    },

  })
}

const USER_FRAGMENT = gql`
  fragment UserFragment on User {
    id
    email
    name
  }
`

export const GET_CURRENT_USER = gql`
  query getCurrentUser($id: ID!) {
    getOneUser(id: $id) {
      ...UserFragment
    }
  }
  ${USER_FRAGMENT}
`

export const GET_USER_BY_NAME_QUERY = gql`
  query User($where: UserWhereUniqueInput!) {
    user(where: $where) {
      id
    }
}
`

export const GET_USERS_BY_NAME_QUERY = gql`
  query Users($where: UserWhereInput!) {
    users(where: $where) {
      id
    }
}
`

export const GET_TASKS_BY_TASK_ID = gql`
query Query($where : TaskWhereInput) {
  tasks(where : $where) {
    id
    title
    state
    due_at  
  }
}
`

export const GET_TASKS_ASSIGNED_BY_USER_ID = gql`
query Assignees($where: AssigneeWhereInput) {
  assignees(where: $where) {
    task_id
  }
}
`

export const LOGIN_USER_MUTATION = gql`
mutation LoginUser($where: UserWhereInput) {
  loginUser(where: $where) {
    id,
    email
    name
  }
}
`

export const CREATE_USER_MUTATION = gql`
mutation createOneUser($data : UserCreateInput!) {
  createOneUser(data: $data) {
    id
    email
    name
  }
}
`

export const CREATE_TASK_MUTATION = gql`
mutation CreateOneTask($data: TaskCreateInput!) {
  createOneTask(data: $data) {
    id
    title
    description
    owner_id
    due_at
    created_at
    updated_at
    state
  }
}
`
export const CREATE_ASSIGNEE_MUTATION = gql`
mutation CreateOneAssignee($data: AssigneeCreateInput!) {
  createOneAssignee(data: $data) {
    created_at
    id
    task_id
    user_id
  }
}
`
export const UPDATE_TASK_STATE_MUTATION = gql`
mutation UpdateOneTask($data: TaskUpdateInput!, $where: TaskWhereUniqueInput!) {
  updateOneTask(data: $data, where: $where) {
    state
  }
}
`