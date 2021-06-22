import {getFormInputs, notePopupSubmit} from "../utils.js";
import store from "../../store/index.js"

const editNoteButtonTemplate = document.createElement("template");
editNoteButtonTemplate.innerHTML = `
    <div class="edit_note__button"><img src="assets/icons/pen-solid.svg" class="icon table__row_icon icon_edit" alt="edit"></div>
`

export default class EditNoteButton extends HTMLElement{
    constructor() {
        super();

        const popup = document.querySelector("#note-popup")

        this.popupContainer = popup.shadowRoot.querySelector(".note__popup__container")

        this.mapIndex = this.getAttribute("mapIndex")

        const shadow = this.attachShadow({mode: "open"});

        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', 'scss/components/editNoteButton.css');

        shadow.appendChild(linkElem);

        shadow.appendChild(editNoteButtonTemplate.content.cloneNode(true))

        shadow.querySelector(".edit_note__button")
            .addEventListener("click", this.iconClick)
    }

    iconClick = () => {
        this.popupContainer.className = "note__popup__container";

        this.popupContainer
            .querySelector("form")
            .addEventListener("submit",
                notePopupSubmit("updateNote", this.popupContainer, {index: this.mapIndex}))
        this.fillWithInitialValue(this.mapIndex, this.popupContainer)
    }

    fillWithInitialValue = (index, container) => {
        const { name, category, content } = store.state.notes[index]

        const formInputs = getFormInputs(container);

        formInputs[0].value = name;

        formInputs[1].querySelectorAll("option").forEach((el)=>{
            if (el.value === category) {
                el.setAttribute("selected","selected")
            }
        })

        formInputs[2].value = content;
    }
}