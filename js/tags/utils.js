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

const removeListenersFromElement = (container, selector) => {
    const el = container.querySelector(selector);
    el.replaceWith(el.cloneNode(true));
}

const closePopup = (container) => {
    const formInputs = getFormInputs(container);

    container.className += " closed";
    formInputs.forEach(el => el.value = "");

    removeListenersFromElement(container, "form")
}

const getFormInputs = (container) => {
    return Array.from(container.querySelectorAll("input, select, textarea"));
}

const notePopupSubmit = (actionKey, container, payload) => (e) => {

    e.preventDefault()

    const formInputs = getFormInputs(container)

    const note = {}

    formInputs.forEach(el => {
        const fieldName = el.getAttribute("field");

        note[fieldName] = el.value;
    });

    console.log(note)
    store.dispatch(actionKey, {note, ...payload})

    closePopup(container)
}

export { getCategoryIconPath, notePopupSubmit, closePopup, getFormInputs }