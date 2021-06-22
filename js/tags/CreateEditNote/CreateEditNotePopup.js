import store from "../../store"

function getCategoryOptions(initValue) {
    const categories = ["Random Thought", "Task", "Idea", "Quote"];

    return categories.map(category => {
        if (category === initValue)
            return `<option class="popup__input_variant" value=${category} selected="selected">${category}</option>`
        return `<option class="popup__input_variant" value=${category}>${category}</option>`
    }).join('')
}

//Todo: only one popup on page
export default class CreateEditNotePopup extends HTMLElement{

    parentContainer = document.createElement("div")

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
            <form class="add_note__popup" autocomplete="off">
                <div class="popup__exit">
                    <img class="popup__exit_icon" src="assets/icons/times-solid.svg" alt="close">
                </div>
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
                    <label class="popup__label">Note name</label>
                </div>
                <div class="popup__group">
                    <textarea id="note__content" class="popup__input popup__input_textarea" placeholder="Note content" rows="3" field="content" required value=${initValues.content}></textarea>
                    <label for="note__content" class="popup__label">Note content</label>
                </div>
                <button type="submit" class="popup__button popup__button_add">
                    <h3>CREATE</h3>
                </button>
            </form>
`


        this.shadow = this.attachShadow({mode: "open"});

        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', 'scss/components/createNotePopup.css');

        this.shadow.appendChild(linkElem);

        this.shadow.appendChild(createNotePopupTemplate.content.cloneNode(true))

        this.shadow.querySelector(".popup__exit_icon").addEventListener("click", this.closePopup)

        this.parentContainer = this.getParentContainer();
        this.parentContainer.addEventListener("click", (e)=>{
            if (e.target === this)
                return;

            self.closePopup(self.getFormInputs());
        })
    }

    closePopup = () => {
        const formInputs = this.getFormInputs();

        this.parentContainer.className += " closed";
        formInputs.forEach(el => el.value = "");
    }

    getFormInputs = () => {
        return Array.from(this.shadow.querySelectorAll("input, select, textarea"));
    }

    getParentContainer = () => {

        return this.shadow.host.getRootNode().host.shadowRoot.querySelector(".note__popup__container")

    }
}