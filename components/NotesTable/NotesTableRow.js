const rowTemplate = document.createElement("template");
rowTemplate.innerHTML = `
        <div class="table__row_content table__row">
                <div class="table__cell">
                    <div class="table__cell_content table__cell_name">
                        <img src="assets/icons/lightbulb-regular.svg" class="icon table__row_icon" alt="idea">
                        <p class="table__cell_text">New feature</p>
                    </div>
                </div>
                <div class="table__cell">
                    <p class="table__cell_text">May 05, 2021</p>
                </div>
                <div class="table__cell" >
                    <p class="table__cell_text">Idea</p>
                </div>
                <div class="table__cell">
                    <p class="table__cell_text">Implement new way to</p>
                </div>
                <div class="table__cell">

                </div>
                <div class="table__cell">
                    <div class="table__cell_content table__header_content">
                        <img src="assets/icons/pen-solid.svg" class="icon table__row_icon" alt="archive">
                        <img src="assets/icons/archive-solid.svg" class="icon table__row_icon" alt="archive">
                        <img src="assets/icons/trash-solid.svg" class="icon table__row_icon" alt="delete">
                    </div>
                </div>
            </div>
        `

class NotesTableRow extends HTMLElement{
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        // Apply external styles to the shadow dom
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', 'scss/tableWithSettings.css');


// Attach the created element to the shadow dom
        shadow.appendChild(linkElem);


        shadow.appendChild(rowTemplate.content.cloneNode(true))
    }
}

window.customElements.define('notes-table-row', NotesTableRow)