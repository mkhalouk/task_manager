import React, { useEffect } from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { navigate } from '../utils/navigate';


import { GET_COMMENNT_BY_TASK_ID, CREATE_COMMENT_MUTATION } from 'store/GraphqlQueries'
import { useMutation, useQuery } from '@apollo/react-hooks'


import User from 'store/User'

let comments = []

const CreateComment = () => {
    const inputArr = [];

    const [createComment] = useMutation(CREATE_COMMENT_MUTATION);

    const currentUser = User.get('current')


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
        document.querySelector('#addCommentBtn').disabled = true;
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

    const onSubmit = (e) => {
        e.preventDefault()
        createComment({
            variables: {
                data: {
                    content: arr[0].value,
                    created_at: new Date(Date.now()).toLocaleString('en-GB', { timeZone: 'UTC' }),
                    updated_at: new Date(Date.now()).toLocaleString('en-GB', { timeZone: 'UTC' }),
                    owner_id: currentUser.id,
                    parent_id: "",
                    target_id: params.id
                }
            }
        })
            .then((payload) => {
                navigate(`/tasks/task/comment/?id=${params.id}`)
            })
            .catch((error) => {
                console.log(error)
                alert(error)
            })

        return false
    }

    if (loading) return null;

    if (error) return `Error! ${error}`;
console.log(data);
    if (data) {
        comments = [...data.comments]
        return (
            <div className="col">
                <input id="addCommentBtn" variant="primary" type="button" value="AddComment" onClick={addInput}></input>

                {comments.map((item, i) => {
                    return (
                        <Card style={{ width: '80vw' }}>
                            <Card.Body>
                                <Card.Title>{currentUser.name}</Card.Title>
                                <Card.Text>{item.content}</Card.Text>
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
                        <button onClick={onSubmit}>submit</button>
                        </div>
                    );
                })}

            </div>
        )

    }



}

export default CreateComment
