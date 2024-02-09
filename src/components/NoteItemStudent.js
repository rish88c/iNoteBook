import React from 'react'
import { useContext,useState,useEffect } from 'react'
import noteContext from '../context/notes/noteContext'




function NoteItemStudent(props) {
    const context = useContext(noteContext)
    const { deleteNote } = context


 const [currentDate, setCurrentDate] = useState('');

    // Step 3: Update the current date when the component mounts
    useEffect(() => {
        const currentDate = new Date();
        setCurrentDate(currentDate.toDateString());
    }, []);

    const { notes, updateNote } = props
    return (
        <div className=' col-md-3'>
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{notes.title}</h5>
                    <h5 className="card-title">{notes.tag}</h5>
                    <p className="card-text">{notes.description}</p>
                    <p>Date of Uploading: {currentDate}</p>


                </div>
            </div>
        </div>
    )
}

export default NoteItemStudent
