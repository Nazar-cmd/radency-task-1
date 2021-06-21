
const createNoteButtonTemplate = document.createElement("template");
createNoteButtonTemplate.innerHTML = `
<div class="add_note__container">
    <button type="button" class="add_note__button" >
        <span class="add_note__button_text">
            Add note!
        </span>
    </button>
     <div class="add_note__popup__container closed">
        <create-note-popup></create-note-popup>
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

        /*const icon_delete_all = shadow.querySelector(".icon_delete_all")
        icon_delete_all.addEventListener("click", ()=>{
            store.dispatch("deleteAllNotes", {})
        })*/
    }
}