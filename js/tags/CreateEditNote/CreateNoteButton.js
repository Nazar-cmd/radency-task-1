import {notePopupSubmit} from "../utils.js";

const createNoteButtonTemplate = document.createElement("template");
createNoteButtonTemplate.innerHTML = `
<div class="add_note__container">
    <button type="button" class="add_note__button" >
        <span class="add_note__button_text">
            Add note!
        </span>
    </button>
</div>
`

export default class CreateNoteButton extends HTMLElement{
    constructor() {
        super();

        const popupContainer = document.querySelector("#note-popup").shadowRoot.querySelector(".note__popup__container")

        const shadow = this.attachShadow({mode: "open"});

        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', 'scss/components/createNoteButton.css');

        shadow.appendChild(linkElem);

        shadow.appendChild(createNoteButtonTemplate.content.cloneNode(true))

        shadow.querySelector(".add_note__button")
            .addEventListener("click", () => {
                popupContainer.className = "note__popup__container";
                popupContainer.querySelector("form")
                    .addEventListener("submit", notePopupSubmit("createNote", popupContainer, {}))
        })
    }
}