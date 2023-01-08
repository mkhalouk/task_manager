import React, { useEffect } from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import { GET_COMMENNT_BY_TASK_ID } from 'store/GraphqlQueries'
import { useMutation, useQuery } from '@apollo/react-hooks'


import User from 'store/User'

let comments = []

const CreateTask = () => {
    const inputArr = [];


    const currentUser = User.get('current', 'name')


    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    const [arr, setArr] = React.useState(inputArr);
    const { loading, error, data } = useQuery(GET_COMMENNT_BY_TASK_ID, {
        variables: {
            where: {
                target_id: {
                    equals: params.id
                }
            }
        }
    })



    const addInput = () => {
        setArr(s => {
            return [
                ...s,
                {
                    type: "name",
                    value: "",
                }
            ];
        });
    };

    const handleChange = e => {
        e.preventDefault();
        let index = e.currentTarget.id;
        setArr(s => {
            const newArr = s.slice();
            newArr[index].value = e.target.value;
            console.log(newArr)
            return newArr;
        });
    }



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

    if (loading) return null;

    if (error) return `Error! ${error}`;

    if (data) {
        comments = [...data.comments]
        return (
            <div className="col">
                <input variant="primary" type="button" value="AddComment" onClick={addInput}></input>

                {comments.map((item, i) => {
                    return (
                        <Card style={{ width: '80vw' }}>
                            <Card.Body>
                                <Card.Title>{currentUser}</Card.Title>
                                <Card.Text>{item.content}</Card.Text>
                                <Button variant="primary">Reply</Button>
                            </Card.Body>
                        </Card>
                    );
                })}

                {arr.map((item, i) => {
                    return (
                        <div>
                            <input
                            value={item.value}
                            onChange={handleChange}
                            id={i}
                            type={item.type}
                            placeholder="Enter Comment"
                            size={100}
                            style={{ marginBottom: "20px", marginTop: "20px", display: "grid" }}
                        />
                        <button>submit</button>
                        </div>
                    );
                })}

            </div>
        )

    }



}

export default CreateTask
