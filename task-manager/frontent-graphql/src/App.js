import './App.css';
import React from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export default class App extends React.Component {



  componentDidMount() {
    const client = new ApolloClient({
      uri: 'http://localhost:5000',
      cache: new InMemoryCache(),
    });


    client
      .query({
        query: gql`
        query getActions {
          actions {
            target_id
          }
        }
  `,
      })
      .then((result) => console.log(result));
  }



  render() {
    console.log("fdsfsdf")
    return (
      <div >
        
      </div>
    );
  }
}
