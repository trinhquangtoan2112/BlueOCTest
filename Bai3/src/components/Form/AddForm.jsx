import React, { useState } from 'react'
import { addPost, addPosts } from '../../redux/PostReducer';
import { useDispatch } from 'react-redux';

export default function AddForm() {
    const [form, setForm] = useState({
        title: "title",
        body: "body"
    })
    const dispatch = useDispatch()
    const addForm = async (e) => {
        e.preventDefault();
        const data = await dispatch(addPosts(form));

        dispatch(addPost(data.payload))

    }
    const handleChange = (e) => {
        setForm((prevValue) => ({
            ...prevValue,
            [e.target.name]: e.target.value
        }));
    }
    return (
        <div>
            <form onSubmit={addForm} style={{ display: "flex", flexDirection: "column", width: "20%" }}>
                <input name="title" onChange={handleChange}></input>
                <input name="body" onChange={handleChange}></input>
                <button type>Add Form</button>
            </form>
        </div>
    )
}
