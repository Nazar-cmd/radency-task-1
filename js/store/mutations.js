export default {
    createNote(state, payload) {
        state.notes.push(payload)
        
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
        const archived = state.notes[payload.index].archived

        state.notes[payload.index].archived = !archived

        return state
    },
    deleteAllNotes(state, payload) {
        state.notes = {}

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