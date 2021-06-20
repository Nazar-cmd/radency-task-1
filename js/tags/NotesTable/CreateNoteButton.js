import store from "../../store"

const notesTableTemplate = document.createElement("template");
notesTableTemplate.innerHTML = `
<div class="add_note__container">
    <button type="button" class="add_note__button">
        <span class="add_note__button_text">Add note!</span>
    </button>
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

        shadow.appendChild(notesTableTemplate.content.cloneNode(true))


        /*const icon_delete_all = shadow.querySelector(".icon_delete_all")
        icon_delete_all.addEventListener("click", ()=>{
            store.dispatch("deleteAllNotes", {})
        })*/
    }
}