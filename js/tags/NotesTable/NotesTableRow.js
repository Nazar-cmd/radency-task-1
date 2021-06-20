import store from "../../store"
import { getCategoryIconPath } from "../utils.js";


export default class NotesTableRow extends HTMLElement{
    constructor() {
        super();

        const name = this.getAttribute("name");
        const created = this.getAttribute("created");
        const category = this.getAttribute("category");
        const content = this.getAttribute("content");
        const archived = this.getAttribute("archived");
        const mapIndex = this.getAttribute("mapIndex")

        if ([name, created, category, content, archived, mapIndex].includes(null)) {
            return undefined
        }

        const dateRegex = new RegExp('\\d{1,4}([.\\-/])\\d{1,2}([.\\-/])\\d{1,4}', "g");
        const dates = content.match(dateRegex) || "";

        const categoryIconPath = getCategoryIconPath(category);
        const archivedClassName = archived === "true" ? "archived": "";


        const rowTemplate = document.createElement("template");
        rowTemplate.innerHTML = `
        <div class="table__row_content table__row ${archivedClassName}">
                <div class="table__cell">
                    <div class="table__cell_content table__cell_name">
                        <img src=${categoryIconPath} class="icon table__row_icon" alt="category_icon">
                        <p class="table__cell_text">${name}</p>
                    </div>
                </div>
                <div class="table__cell">
                    <p class="table__cell_text">${created}</p>
                </div>
                <div class="table__cell" >
                    <p class="table__cell_text">${category}</p>
                </div>
                <div class="table__cell">
                    <p class="table__cell_text">${content}</p>
                </div>
                <div class="table__cell">
                    <p class="table__cell_text">${dates}</p>
                </div>
                <div class="table__cell">
                    <div class="table__cell_content table__header_content">
                        <img src="assets/icons/pen-solid.svg" class="icon table__row_icon icon_edit" alt="archive">
                        <img src="assets/icons/archive-solid.svg" class="icon table__row_icon icon_archive" alt="archive">
                        <img src="assets/icons/trash-solid.svg" class="icon table__row_icon icon_delete" alt="delete">
                    </div>
                </div>
            </div>
        `

        const shadow = this.attachShadow({mode: "open"});

        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', 'scss/tableWithSettings.css');
        shadow.appendChild(linkElem);

        shadow.appendChild(rowTemplate.content.cloneNode(true))


        const icon_archive = shadow.querySelector(".icon_archive")
        icon_archive.addEventListener("click", ()=>{
            store.dispatch("archiveNote", {index: mapIndex})
        })

        const icon_delete = shadow.querySelector(".icon_delete")
        icon_delete.addEventListener("click", ()=>{
            store.dispatch("deleteNote", {index: mapIndex})
        })
    }
}

