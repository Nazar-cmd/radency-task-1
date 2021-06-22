import store from "../../store/index.js"

const notesTableTemplate = document.createElement("template");
notesTableTemplate.innerHTML = `

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
                        <img src="assets/icons/archive-solid.svg" class="icon table__header_icon icon_archive_all" alt="archive">
                        <img src="assets/icons/trash-solid.svg" class="icon table__header_icon icon_delete_all" alt="delete">
                    </div>
                </div>
            </div>          
`

export default class NotesTableHeader extends HTMLElement{
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        // Apply external styles to the shadow dom
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', 'scss/components/customTable.css');


        shadow.appendChild(linkElem);

        shadow.appendChild(notesTableTemplate.content.cloneNode(true))


        const icon_delete_all = shadow.querySelector(".icon_delete_all")
        icon_delete_all.addEventListener("click", ()=>{
            store.dispatch("deleteAllNotes", {})
        })
        const icon_archive_all = shadow.querySelector(".icon_archive_all")
        icon_archive_all.addEventListener("click", ()=>{
            store.dispatch("archiveAllNotes", {})
        })
    }
}