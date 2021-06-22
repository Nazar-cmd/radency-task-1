import store from "../../store"
import { closePopup } from "../utils.js"

function getCategoryOptions(initValue) {
    const categories = ["Random Thought", "Task", "Idea", "Quote"];

    return categories.map(category => {
        if (category === initValue)
            return `<option class="popup__input_variant" value="${category}" selected="selected">${category}</option>`
        return `<option class="popup__input_variant" value="${category}">${category}</option>`
    }).join('')
}

export default class CreateEditNotePopup extends HTMLElement{

    constructor() {
        super();

        const self = this;

        const mapIndex = this.getAttribute("mapIndex");
        console.log(mapIndex)

        const initValues = {
            name: "",
            category: "",
            content: "",
        }

        if (mapIndex) {
            const {name, category, content} = store.state.notes[mapIndex]
            initValues.name = name;
            initValues.category = category;
            initValues.content = content;
        }

        console.log(initValues)


        const createNotePopupTemplate = document.createElement("template");
        createNotePopupTemplate.innerHTML = `
            <div class="note__popup__container closed">
                <div class="note__popup">
                    <div class="note__popup__exit">
                        <img class="note__popup__exit_icon" src="assets/icons/times-solid.svg" alt="close">
                    </div>
                    <form class="note__popup_form" autocomplete="off">
                        <div class="popup__group">
                            <input type="text" id="note__name" class="popup__input" placeholder="Note name" field="name" required value=${initValues.name}>
                            <label for="note__name" class="popup__label">Note name</label>
                        </div>
                        <div class="popup__group popup__input_select">
                            <select class="popup__input" id="note__category" field="category" required>
                                <option class="popup__input_variant" value="" disabled selected="selected"></option>
                                ${getCategoryOptions(initValues.category)}
                            </select>
                            <span class="select-highlight"></span>
                            <label class="popup__label">Category</label>
                        </div>
                        <div class="popup__group">
                            <textarea id="note__content" class="popup__input popup__input_textarea" placeholder="Note content" rows="3" field="content" required value=${initValues.content}></textarea>
                            <label for="note__content" class="popup__label">Note content</label>
                        </div>
                        <button type="submit" class="popup__button popup__button_submit">
                            <h3>CREATE</h3>
                        </button>
                    </form>
                </div>
            </div>
`


        this.shadow = this.attachShadow({mode: "open"});

        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', 'scss/components/createNotePopup.css');

        this.shadow.appendChild(linkElem);

        this.shadow.appendChild(createNotePopupTemplate.content.cloneNode(true))

        this.popupContainer = this.shadow.querySelector(".note__popup__container")

        this.shadow.querySelector(".note__popup__exit_icon").addEventListener("click", (e)=>{
            /*if (e.target !== this)
                return;*/

            console.log("123")

            closePopup(self.popupContainer)
        })

        this.popupContainer.addEventListener("click", function (e){
            if (e.target !== this)
                return;

            closePopup(self.popupContainer)
        })

    }

/*    closePopup = () => {
        const formInputs = this.getFormInputs();

        this.popupContainer.className += " closed";
        formInputs.forEach(el => el.value = "");

        const form = this.shadow.querySelector("form");
        form.replaceWith(form.cloneNode(true));
    }

    getFormInputs = () => {
        return Array.from(this.shadow.querySelectorAll("input, select, textarea"));
    }*/
}