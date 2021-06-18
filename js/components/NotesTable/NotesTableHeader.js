const columnTemplate = document.createElement("template");
columnTemplate.innerHTML = `
  <div class="table__header table__row" id="cols">
                <div class="table__cell">
                    Name
                </div>
                <div class="table__cell">
                    Created
                </div>
                <div class="table__cell">
                    Category
                </div>
                <div class="table__cell">
                    Content
                </div>
                <div class="table__cell">
                    Dates
                </div>
                <div class="table__cell">
                    <div class="table__cell_content table__header_content">
                        <img src="assets/icons/archive-solid.svg" class="icon table__header_icon" alt="archive">
                        <img src="assets/icons/trash-solid.svg" class="icon table__header_icon" alt="delete">
                    </div>
                </div>
            </div>          
`

class NotesTableHeader extends HTMLElement{
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        // Apply external styles to the shadow dom
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', 'scss/tableWithSettings.css');


// Attach the created element to the shadow dom
        shadow.appendChild(linkElem);

        shadow.appendChild(columnTemplate.content.cloneNode(true))
    }
}
window.customElements.define('notes-table-header', NotesTableHeader, )