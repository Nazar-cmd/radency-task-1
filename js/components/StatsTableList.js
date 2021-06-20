import Component from "../lib/component.js";
import store from "../store"

export default class StatsTableList extends Component {

    constructor() {
        super({
            store,
            element: document.querySelector('#stats-table-rows')
        });
    }

    render() {
        let self = this;

        const { notes } = store.state

        if(store.state.notes.length === 0) {
            self.element.innerHTML = `<p style="text-align: center">Table is empty</p>`;
            return;
        }

        const categories = [...new Set(notes.map(note=>note.category))]

        const statsTableData = categories.map(categoryName => {

            const activeQuantity = notes.filter(note => note.category === categoryName && !note.archived).length;
            const archivedQuantity = notes.filter(note => note.category === categoryName && note.archived).length;


            return {
                name: categoryName,
                archivedQuantity,
                activeQuantity
            }
        })

        self.element.innerHTML = `
        ${statsTableData.map(({name, archivedQuantity, activeQuantity}) => {

            let notesTableRow = document.createElement("stats-table-row")

            notesTableRow.setAttribute("noteCategory", name)
            notesTableRow.setAttribute("activeQuantity", activeQuantity)
            notesTableRow.setAttribute("archivedQuantity", archivedQuantity)

            return notesTableRow.outerHTML
        }).join('')}
    `;
    }
};