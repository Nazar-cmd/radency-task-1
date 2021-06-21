export default {
    createNote(state, payload) {
        const copy = [...state.notes];
        copy.push(payload.note)

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

        copy[index] = newNote;

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