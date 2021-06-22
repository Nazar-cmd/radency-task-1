import {notePopupSubmit} from "../utils.js";

const createNoteButtonTemplate = document.createElement("template");
createNoteButtonTemplate.innerHTML = `
<div class="add_note__container">
    <button type="button" class="add_note__button" >
        <span class="add_note__button_text">
            Add note!
        </span>
    </button>
     <div class="add_note__popup__container closed">
        <create-edit-note-popup></create-edit-note-popup>
     </div>
</div>
`

export default class CreateNoteButton extends HTMLElement{
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});

        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', 'scss/components/createNoteButton.css');

        shadow.appendChild(linkElem);

        shadow.appendChild(createNoteButtonTemplate.content.cloneNode(true))

        shadow.querySelector(".add_note__button")
            .addEventListener("click", () => {
                shadow.querySelector(".add_note__popup__container").className = "add_note__popup__container"
        })


        const popupForm = shadow.querySelector("create-edit-note-popup").shadowRoot.querySelector("form");
        const popupContainer = shadow.querySelector(".add_note__popup__container")

        popupForm.addEventListener("submit", notePopupSubmit("createNote", popupForm, popupContainer))

    }
}