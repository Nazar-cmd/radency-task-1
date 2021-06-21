export default {
    createNote(state, payload) {
        state.notes.push(payload.note)
        
        return state;
    },
    deleteNote(state, payload) {
        state.notes.splice(payload.index, 1)

        return state;
    },
    updateNote(state, payload) {
        const {index, newNote} = payload
        state.notes[index] = newNote;

        return state;
    },
    archiveNote(state, payload) {
        const copy = [...state.notes]
        const isArchived = copy[payload.index].archived
        copy[payload.index].archived = !isArchived;

        return state
    },
    deleteAllNotes(state, payload) {
        state.notes = []

        return state
    },
    archiveAllNotes(state, payload) {
        state.notes = state.notes
            .map(note => {
                return {...note, archived: true}
            })

        return state
    },
}