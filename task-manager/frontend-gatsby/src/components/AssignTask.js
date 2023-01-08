import React from 'react'

import CreateTask from './CreateTask'

import { useMutation, useQuery } from '@apollo/react-hooks'

import { GET_USERS_BY_NAME_QUERY, CREATE_ASSIGNEE_MUTATION } from 'store/GraphqlQueries'



const AssignTask = () => {

    const inputArr = [];
    const names = []



    const [AssignTask] = useMutation(CREATE_ASSIGNEE_MUTATION)
    const [arr, setArr] = React.useState(inputArr);
    const { isLoading, isRefetching, data, refetch } = useQuery(GET_USERS_BY_NAME_QUERY, {
        variables: { where: { "OR": names } }
    }, {
        enabled: false,
    });

    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

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
            return newArr;
        });
    }

    const onSubmit = (e) => {
        e.preventDefault()

        for (const element of arr) {
            const name = {
                name: {
                    equals: element.value
                }
            }
            names.push(name)
        }

        refetch({ where: { "OR": names } }).then((data) => {
            

            for(const user of data.data.users){
                AssignTask({
                    variables: {
                        data: {
                            created_at: new Date(Date.now()).toLocaleString('en-GB', { timeZone: 'UTC' }) , task_id: params.taskId, user_id : user.id, 
                        }
                    }
                })
            }
            /**/
        })




        return false
    }

    return params.action !== "assign" ? <CreateTask></CreateTask> : (
        <div>
            <h2>Add assignees by their names</h2>
            <form onSubmit={onSubmit}>
                <input type="button" name="Assigneebutton" value="Add assignee" onClick={addInput} ></input>
                <br />
                <br />
                {arr.map((item, i) => {
                    return (
                        <input
                            value={item.value}
                            onChange={handleChange}
                            id={i}
                            type={item.type}
                            placeholder="Enter the Assignee name"
                            style={{ marginBottom: "10px", display: "grid" }}
                        />
                    );
                })}

                <button>Submit</button>

            </form>


        </div>
    )

}

export default AssignTask
