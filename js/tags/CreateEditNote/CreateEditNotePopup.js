import { closePopup } from "../utils.js"

const createNotePopupTemplate = document.createElement("template");
createNotePopupTemplate.innerHTML = `
            <div class="note__popup__container closed">
                <div class="note__popup">
                    <div class="note__popup__exit">
                        <img class="note__popup__exit_icon" src="assets/icons/times-solid.svg" alt="close">
                    </div>
                    <form class="note__popup_form" autocomplete="off">
                        <div class="popup__group">
                            <input type="text" id="note__name" class="popup__input" placeholder="Note name" field="name" required >
                            <label for="note__name" class="popup__label">Note name</label>
                        </div>
                        <div class="popup__group popup__input_select">
                            <select class="popup__input" id="note__category" field="category" required>
                                <option class="popup__input_variant" value="" disabled selected="selected"></option>
                                 <option class="popup__input_variant" value="Random Thought">Random Thought</option>
                                 <option class="popup__input_variant" value="Task">Task</option>
                                 <option class="popup__input_variant" value="Idea">Idea</option>
                                 <option class="popup__input_variant" value="Quote">Quote</option>
                            </select>
                            <span class="select-highlight"></span>
                            <label class="popup__label">Category</label>
                        </div>
                        <div class="popup__group">
                            <textarea id="note__content" class="popup__input popup__input_textarea" placeholder="Note content" rows="3" field="content" required ></textarea>
                            <label for="note__content" class="popup__label">Note content</label>
                        </div>
                        <button type="submit" class="popup__button popup__button_submit">
                            <h3>CONFIRM</h3>
                        </button>
                    </form>
                </div>
            </div>
`

export default class CreateEditNotePopup extends HTMLElement{

    constructor() {
        super();

        const self = this;

        this.shadow = this.attachShadow({mode: "open"});

        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', 'scss/components/createNotePopup.css');

        this.shadow.appendChild(linkElem);

        this.shadow.appendChild(createNotePopupTemplate.content.cloneNode(true))

        this.shadow.querySelector(".note__popup__exit_icon").addEventListener("click", (e)=>closePopup(self.popupContainer))

        this.popupContainer = this.shadow.querySelector(".note__popup__container")

        this.popupContainer.addEventListener("click", function (e){
            if (e.target !== this)
                return;

            closePopup(self.popupContainer)
        })
    }
}