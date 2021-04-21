const notes = [
    {
    id: 1,
    learned: 'Javascript basic terminology',
    date: "04/14/2021",
    feeling: 'Melancholy',
    timeSpent: '6 hours',
    },
    {
    id: 2,
    learned: 'Javascript arrays and notes types',
    date: "04/15/2021",
    feeling: 'Happy',
    timeSpent: '6 hours',
    }
]



const new_entry = {
    id: 3,
    learned: 'Javascript for loops and functions',
    date: "04/16/2021",
    feeling: 'Accomplished',
    timeSpent: '6 hours',
    }

notes.push(new_entry)

for (const note of notes) {
    console.log(`Note ${note.id}
    ${note.date}
    today I learned about ${note.learned}
    I spent ${note.timeSpent} learning
    I am feeling ${note.feeling}
    `)
}

for (const feeling of notes) {
    // const searchTerm = prompt("What feeling are you looking for?")
    if (feeling.feeling === 'Happy'){
        console.log(feeling)
    }
}

const createNote = (note) => {
    const lastindex = notes.length - 1
    const currentNotes = notes[lastindex]
    const maxId = currentNotes.id 
    const newNoteID = maxId + 1

    note.id = newNoteID

    notes.push(note)
}

const moreNewerNote = {

}



createNote()