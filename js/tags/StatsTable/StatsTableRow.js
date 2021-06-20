import store from "../../store/index.js"
import { getCategoryIconPath } from "../utils.js";

export default class StatsTableRow extends HTMLElement{
    constructor() {
        super();

        const category = this.getAttribute("noteCategory")
        const activeQuantity = this.getAttribute("activeQuantity");
        const archivedQuantity = this.getAttribute("archivedQuantity");


        const categoryIconPath = getCategoryIconPath(category);

        if ([activeQuantity, archivedQuantity, category].includes(null)) {
            return undefined
        }

        const rowTemplate = document.createElement("template");
        rowTemplate.innerHTML = `
        <div class="table__row_content table__row">
                <div class="table__cell">
                    <div class="table__cell_content table__cell_name">
                        <img src=${categoryIconPath} class="icon table__row_icon" alt="idea">
                        <p class="table__cell_text">${category}</p>
                    </div>
                </div>
                <div class="table__cell">
                    <p class="table__cell_text">${activeQuantity}</p>
                </div>
                <div class="table__cell" >
                    <p class="table__cell_text">${archivedQuantity}</p>
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

    }
}

