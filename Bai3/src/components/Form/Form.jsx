import React, { useEffect } from 'react'
import { fetchPosts, getPost } from '../../redux/PostReducer'
import { useDispatch, useSelector } from 'react-redux';

export default function Form() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.post)
    useEffect(() => {
        getPostFromApi()
    }, []);
    const getPostFromApi = async () => {
        const data = await dispatch(fetchPosts());
        dispatch(getPost(data))
    }



    const renderForm = () => (
        <div style={{ padding: "10px", fontFamily: "Arial, sans-serif" }}>
            {data.slice().reverse().map((item) => (
                <div key={item.id} style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
                    <p style={{ fontWeight: "bold", fontSize: "18px" }}>{item.title}</p>
                    <p style={{ fontSize: "16px", lineHeight: "1.5" }}>{item.body}</p>
                </div>
            ))}
        </div>
    );

    return data.length > 0 ? renderForm() : <div>Form</div>;


}
