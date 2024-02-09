// import React from 'react'
// import { useContext } from 'react'
// import noteContext from '../context/notes/noteContext'

// function NoteItem(props) {
//     const context = useContext(noteContext)
//     const { deleteNote } = context

//     const { notes, updateNote } = props
//     return (
//         <div className=' col-md-3'>
//             <div className="card my-3">
//                 <div className="card-body">
//                     <h5 className="card-title">{notes.title}</h5>
//                     <h5 className="card-title">{notes.tag}</h5>
//                     <p className="card-text">{notes.description}</p>
                    
//                     <i className="fa-solid fa-trash mx-2" onClick={() => { deleteNote(notes._id) }} />
//                     <i className="fa-regular fa-pen-to-square mx-2" onClick={()=>{updateNote(notes)}}/>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default NoteItem
import React, { useContext, useState, useEffect } from 'react'; // Import useState and useEffect
import noteContext from '../context/notes/noteContext';

function NoteItem(props) {
    const context = useContext(noteContext);
    const { deleteNote } = context;

    const { notes, updateNote } = props;

    // Step 2: Create a state variable for the current date
    const [currentDate, setCurrentDate] = useState('');

    // Step 3: Update the current date when the component mounts
    useEffect(() => {
        const currentDate = new Date();
        setCurrentDate(currentDate.toDateString());
    }, []);

    return (
        <div className='col-md-3'>
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{notes.title}</h5>
                    <h5 className="card-title">{notes.tag}</h5>
                    <p className="card-text">{notes.description}</p>

                    {/* Step 4: Display the current date */}
                    <p>Date of Uploading: {currentDate}</p>

                    <i className="fa-solid fa-trash mx-2" onClick={() => { deleteNote(notes._id) }} />
                    <i className="fa-regular fa-pen-to-square mx-2" onClick={() => { updateNote(notes) }} />
                </div>
            </div>
        </div>
    );
}

export default NoteItem;

