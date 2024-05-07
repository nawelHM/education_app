import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';

const ContentList = () => {
    const [contentList, setContentList] = useState([]);

    useEffect(() => {
        // Fetch the list of content when the component mounts
        const fetchContentList = async () => {
            try {
                const response = await axios.get('/api/contentList'); // Adjust the endpoint
                setContentList(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchContentList();
    }, []);

    const handleUpdate = async (id) => {
        // Handle update logic
        console.log('Update content with ID:', id);
    };

    const handleDelete = async (id) => {
        // Handle delete logic
        console.log('Delete content with ID:', id);
    };

    return (
        <div>
            <h2>Content List</h2>
            <ul>
                {contentList.map((content) => (
                    <li key={content._id}>
                        <span>{content.title}</span>
                        <button onClick={() => handleUpdate(content._id)}><FaEdit /></button>
                        <button onClick={() => handleDelete(content._id)}><FaTrash /></button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContentList;
