import {notePopupSubmit} from "../utils.js";



export default class EditNoteButton extends HTMLElement{
    constructor() {
        super();

        const mapIndex = this.getAttribute("mapIndex");

        const editNoteButtonTemplate = document.createElement("template");
        editNoteButtonTemplate.innerHTML = `
            <div class="edit_note__button">
                 <img src="assets/icons/pen-solid.svg" class="icon table__row_icon icon_edit" alt="archive">
                 
            </div>
`

/*        const shadow = this.attachShadow({mode: "open"});

        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', 'scss/components/editNoteButton.css');

        shadow.appendChild(linkElem);

        shadow.appendChild(editNoteButtonTemplate.content.cloneNode(true))

        shadow.querySelector(".icon_edit")
            .addEventListener("click", (e) => {

                if (e.target === this)
                    return;

                shadow.querySelector(".note__popup__container").className = "note__popup__container"
            })


        const popupForm = shadow.querySelector("create-edit-note-popup").shadowRoot.querySelector("form");
        const popupContainer = shadow.querySelector(".note__popup__container")

        popupForm.addEventListener("submit", notePopupSubmit("updateNote", popupForm, popupContainer, {index: mapIndex}))*/

    }
}