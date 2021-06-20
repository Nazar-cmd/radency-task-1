
const createNoteButtonTemplate = document.createElement("template");
createNoteButtonTemplate.innerHTML = `
<div class="add_note__container">
    <button type="button" class="add_note__button" >
        <input type="checkbox" id="add_note__button_input" class="add_note__button_input"/>
        <label for="add_note__button_input" class="add_note__button_text">
            Add note!
        </label>
        <div class="add_note__popup__container">
            <!--<label for="add_note__button_input" class="add_note__button_text">
                X
            </label>-->
            <create-note-popup></create-note-popup>
        </div>
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

        shadow.appendChild(createNoteButtonTemplate.content.cloneNode(true))


        /*const icon_delete_all = shadow.querySelector(".icon_delete_all")
        icon_delete_all.addEventListener("click", ()=>{
            store.dispatch("deleteAllNotes", {})
        })*/
    }
}