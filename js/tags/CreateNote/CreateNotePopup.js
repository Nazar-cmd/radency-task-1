
const createNotePopupTemplate = document.createElement("template");
createNotePopupTemplate.innerHTML = `
<div class="add_note__popup">
    <div class="popup__exit">
        <img class="popup__exit_icon" src="assets/icons/times-solid.svg" alt="close">
    </div>
    <div class="popup__group">
        <input type="text" id="note__name" class="popup__input" placeholder="Note name" required>
        <label for="note__name" class="popup__label">Note name</label>
    </div>
    <div class="popup__group popup__input_select">
        <select class="popup__input" required>
            <option class="popup__input_variant" value="" disabled selected></option>
            <option class="popup__input_variant" value="Random Thought">Random Thought</option>
            <option class="popup__input_variant" value="Task">Task</option>
            <option class="popup__input_variant" value="Idea">Idea</option>
            <option class="popup__input_variant" value="Quote">Quote</option>
        </select>
        <span class="select-highlight"></span>
        <label class="popup__label">Note name</label>
    </div>
    <div class="popup__group">
        <textarea id="note__content" class="popup__input popup__input_textarea" placeholder="Note content" rows="3" required></textarea>
        <label for="note__content" class="popup__label">Note content</label>
    </div>
    <button type="button" class="popup__button popup__button_add">
        <h3>CREATE</h3>
    </button>
</div>
`

export default class CreateNotePopup extends HTMLElement{
    constructor() {
        super();

        this.shadow = this.attachShadow({mode: "open"});

        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', 'scss/components/createNotePopup.css');

        this.shadow.appendChild(linkElem);

        this.shadow.appendChild(createNotePopupTemplate.content.cloneNode(true))

        this.shadow.querySelector(".popup__button_add").addEventListener("click", this.addNote)

        this.shadow.querySelector(".popup__exit_icon").addEventListener("click", this.closePopup)


        /*const icon_delete_all = shadow.querySelector(".icon_delete_all")
        icon_delete_all.addEventListener("click", ()=>{
            store.dispatch("deleteAllNotes", {})
        })*/
    }

    closePopup = () => {
        const popupContainer = this.shadow.host.getRootNode()
            .childNodes[2].childNodes[3].parentElement
            .querySelector(".add_note__popup__container");

        popupContainer.className = "add_note__popup__container closed"
    }

    addNote = () => {
        const name = this.shadow.querySelector("#note__name").value
        const content = this.shadow.querySelector("#note__content").value

        console.log({name, content})

        this.closePopup()
    }
}