import store from "../store";

const categoryIconsPath = {
    task: "assets/icons/shopping-cart-solid.svg",
    random_thought: "assets/icons/head-side-virus-solid.svg",
    idea: "assets/icons/lightbulb-regular.svg",
    quote: "assets/icons/quote-right-solid.svg",
}

function getCategoryIconPath(category) {
    return categoryIconsPath[category.replace(" ", "_").toLowerCase()];
}

function getCurrentDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = today.toLocaleString('default', { month: 'long' });
    const year = today.getFullYear();

    return `${month} ${day}, ${year}`
}

const notePopupSubmit = (actionKey, formElement, parentContainer) => (e) => {

    e.preventDefault()

    const formInputs = Array.from(formElement.querySelectorAll("input, select, textarea"));

    const note = {}

    formInputs.forEach(el => {
        const fieldName = el.getAttribute("field");

        note[fieldName] = el.value;
    });

    note.created = getCurrentDate();
    note.archived = false;

    store.dispatch(actionKey, {note})

    parentContainer.className = "add_note__popup__container closed";
    formInputs.forEach(el => el.value = "");
}

export { getCategoryIconPath, getCurrentDate, notePopupSubmit }