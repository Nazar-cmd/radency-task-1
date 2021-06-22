function getCurrentDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = today.toLocaleString('default', { month: 'long' });
    const year = today.getFullYear();

    return `${month} ${day}, ${year}`
}

export default {
    createNote(state, payload) {
        const copy = [...state.notes];
        const newNote = payload.note;
        newNote.created = getCurrentDate();
        newNote.archived = false;
        copy.push(newNote)

        state = {
            ...state,
            notes: copy
        }

        return state;
    },
    deleteNote(state, payload) {
        const copy = [...state.notes];
        copy.splice(payload.index, 1)

        state = {
            ...state,
            notes: copy
        }

        return state;
    },
    updateNote(state, payload) {
        const {index, newNote} = payload;
        const copy = [...state.notes];

        console.log(payload)

        copy[index] = {
            ...copy[index],
            ...newNote
        };

        state = {
            ...state,
            notes: copy
        }

        return state;
    },
    archiveNote(state, payload) {
        const copy = [...state.notes]
        const isArchived = copy[payload.index].archived
        copy[payload.index].archived = !isArchived;

        state = {
            ...state,
            notes: copy
        }

        return state
    },
    deleteAllNotes(state, payload) {
        state = {
            ...state,
            notes: []
        }

        return state
    },
    archiveAllNotes(state, payload) {
        const copy = state.notes.map(note => {
            return {...note, archived: true}
        })

        state = {
            ...state,
            notes: copy
        }

        return state
    },
}