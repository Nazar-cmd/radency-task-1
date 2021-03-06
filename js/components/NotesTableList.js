import Component from "../lib/component.js";
import store from "../store/index.js"

export default class NotesTableList extends Component {

    constructor() {
        super({
            store,
            element: document.querySelector('#notes-table-rows')
        });
    }

    render() {
        let self = this;

        if(store.state.notes.length === 0) {
            self.element.innerHTML = `<p style="text-align: center">Table is empty</p>`;
            return;
        }

        self.element.innerHTML = `
        ${store.state.notes.map((note, index) => {

            let notesTableRow = document.createElement("notes-table-row")

            for (const key in note) {

                if (!note.hasOwnProperty(key)) {
                    return
                }

                const value = note[key]
                notesTableRow.setAttribute(key, value)
            }

            notesTableRow.setAttribute("mapIndex", index.toString())

            return notesTableRow.outerHTML
        }).join('')}
    `;
    }
};