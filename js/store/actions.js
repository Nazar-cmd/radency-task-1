export default {
    createNote(context, payload) {
        context.commit('createNote', payload);
    },
    deleteNote(context, payload) {
        context.commit('deleteNote', payload);
    },
    updateNote(context, payload) {
        context.commit('updateNote', payload);
    },
    archiveNote(context, payload) {
        context.commit('archiveNote', payload);
    },
    deleteAllNotes(context, payload) {
        context.commit('deleteAllNotes', payload);
    },
    archiveAllNotes(context, payload) {
        context.commit('archiveAllNotes', payload);
    },
}