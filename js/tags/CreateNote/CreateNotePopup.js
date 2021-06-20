
const createNotePopupTemplate = document.createElement("template");
createNotePopupTemplate.innerHTML = `
<div class="add_note__popup">
    <div class="popup__group">
        <input type="text" id="note__name" class="popup__input" placeholder="Note name">
        <label for="note__name" class="popup__label">Note name</label>
    </div>
    <div class="popup__group">
        <textarea id="note__content" class="popup__input" placeholder="Note content" rows="3"></textarea>
        <label for="note__name" class="popup__label">Note content</label>
    </div>
    <button type="button" class="popup__button">
        <h3>CREATE</h3>
    </button>
</div>
`

export default class CreateNotePopup extends HTMLElement{
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});

        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', 'scss/components/createNotePopup.css');

        shadow.appendChild(linkElem);

        shadow.appendChild(createNotePopupTemplate.content.cloneNode(true))

        //console.log(this.getRootNode().host.innerHTML)


        /*const icon_delete_all = shadow.querySelector(".icon_delete_all")
        icon_delete_all.addEventListener("click", ()=>{
            store.dispatch("deleteAllNotes", {})
        })*/
    }
}