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

export const LOGIN_USER_MUTATION = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(where: { email: $email, password: $password }) {
      id
      name
    }
  }
  ${USER_FRAGMENT}
`

export const CREATE_USER_MUTATION = gql`
mutation createOneUser($data : UserCreateInput!) {
  createOneUser(data: $data) {
    name
  }
}
`
