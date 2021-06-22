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

const notePopupSubmit = (actionKey, formElement, parentContainer, payload) => (e) => {

    e.preventDefault()

    const formInputs = Array.from(formElement.querySelectorAll("input, select, textarea"));

    const note = {}

    formInputs.forEach(el => {
        const fieldName = el.getAttribute("field");

        note[fieldName] = el.value;
    });

    store.dispatch(actionKey, {note, ...payload})

    parentContainer.className = "note__popup__container closed";
    formInputs.forEach(el => el.value = "");
}

export { getCategoryIconPath, notePopupSubmit }