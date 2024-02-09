import React from 'react'
import { useState,useEffect,useContext } from 'react'
import noteContext from '../context/notes/noteContext.js'
import NoteItemStudent from './NoteItemStudent.js'

// function Display() {
//   const context = useContext(noteContext)
//     const { notes, getNotes, addNote, editNote } = context

// //   const getAllNotes = async () => {
// //     const url = "http://localhost:5000/api/notes/fetchAllNotes";
// //     const response = await fetch(url, {
// //       method: 'GET',
// //       headers: {
// //         'Content-Type': 'application/json',
// //         // 'auth-token': localStorage.getItem('token')
// //       },
// //     });
// //     const data = await response.json();

// // //     if (Array.isArray(data)) {
// // //       setNotes(data);
// // //     } else {
// // //       console.error("API response is not an array:", data);
// // //     }
// //    }

//   useEffect(() => {
//     getNotes();
//   }, []);

//   return (
//     <div>
//       {/* {notes.map((note) => (
//         <div key={note.id} className='col-md-3'>
//           <div className="card my-3">
//             <div className="card-body">
//               <h5 className="card-title">{note.title}</h5>
//               <p className="card-text">{note.description}</p>
//             </div>
//           </div>
//         </div>
//       ))} */}
//       <div className="row my-3">
//                 <h2>Your Notes</h2>
//                 {notes.map((note) => {
//                     //    return note.title
//                     return <NoteItemStudent key={note._id} notes={note} />
//                 })}
//             </div>
//     </div>
//   );
// }

// export default Display;import React, { useEffect, useContext } from 'react';

// function Display() {
//   const context = useContext(noteContext);
//   const { notes, getNotes, addNote, editNote } = context;

//   useEffect(() => {
//     getNotes();
//   }, []);

//   // Sort the notes by date in ascending order
//   const sortedNotes = [...notes].sort((a, b) => new Date(a.date) - new Date(b.date));

//   // Group notes by date
//   const groupedNotes = sortedNotes.reduce((acc, note) => {
//     const date = new Date(note.date).toDateString();

//     if (!acc[date]) {
//       acc[date] = [];
//     }

//     acc[date].push(note);

//     return acc;
//   }, {});

//   return (
//     <div>
//       <h2>Your Notes</h2>
//       <div className="row my-3">
//         {Object.entries(groupedNotes).map(([date, notesForDate]) => (
//           <div key={date} className="col-md-3">
//             <div className="card">
//               <div className="card-body">
//                 <h5 className="card-title">{date}</h5>
//                 {notesForDate.map((note) => (
//                   <NoteItemStudent key={note._id} notes={note} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Display;


// function Display() {
//   const context = useContext(noteContext);
//   const { notes, getNotes, addNote, editNote } = context;

//   useEffect(() => {
//     getNotes();
//   }, []);

//   const [searchQuery, setSearchQuery] = useState('');

//   // Sort the notes by date in ascending order
//   const sortedNotes = [...notes].sort((a, b) => new Date(a.date) - new Date(b.date));

//   // Group notes by date
//   const groupedNotes = sortedNotes.reduce((acc, note) => {
//     const date = new Date(note.date).toDateString();

//     if (!acc[date]) {
//       acc[date] = [];
//     }

//     acc[date].push(note);

//     return acc;
//   }, {});

//   const filteredNotes = Object.entries(groupedNotes).reduce((acc, [date, notesForDate]) => {
//     const filteredNotesForDate = notesForDate.filter((note) =>
//       note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       note.description.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     if (filteredNotesForDate.length > 0) {
//       acc[date] = filteredNotesForDate;
//     }

//     return acc;
//   }, {});

//   return (
//     <div>
//       <h2>Your Notes</h2>
//       <input
//         type="text"
//         placeholder="Search notes..."
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//       />
//       <div className="row my-3">
//         {Object.entries(filteredNotes).map(([date, notesForDate]) => (
//           <div key={date} className="col-md-3">
//             <div className="card">
//               <div className="card-body">
//                 <h5 className="card-title">{date}</h5>
//                 {notesForDate.map((note) => (
//                   <NoteItemStudent key={note._id} notes={note} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Display;
function Display() {
  const context = useContext(noteContext);
  const { notes, getNotes, addNote, editNote } = context;

  useEffect(() => {
    getNotes();
  }, []);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  // Sort the notes by date in ascending order
  const sortedNotes = [...notes].sort((a, b) => new Date(a.date) - new Date(b.date));

  // Group notes by date
  const groupedNotes = sortedNotes.reduce((acc, note) => {
    const date = new Date(note.date).toDateString();

    if (!acc[date]) {
      acc[date] = [];
    }

    acc[date].push(note);

    return acc;
  }, {});

  const filteredNotes = Object.entries(groupedNotes).reduce((acc, [date, notesForDate]) => {
    const filteredNotesForDate = notesForDate.filter((note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filteredNotesForDate.length > 0) {
      acc[date] = filteredNotesForDate;
    }

    return acc;
  }, {});

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h2>Your Notes</h2>
      <input
        type="text"
        placeholder="Search notes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="row my-3">
        {Object.entries(filteredNotes).map(([date, notesForDate]) => (
          <div key={date} className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h5
                  className="card-title"
                  onClick={() => handleDateClick(date)}
                  style={{ cursor: 'pointer', color: selectedDate === date ? 'blue' : 'black' }}
                >
                  {date}
                </h5>
                {selectedDate === date && (
                  notesForDate.map((note) => (
                    <NoteItemStudent key={note._id} notes={note} />
                  ))
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Display;




