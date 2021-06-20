const categoryIconsPath = {
    task: "assets/icons/shopping-cart-solid.svg",
    random_thought: "assets/icons/head-side-virus-solid.svg",
    idea: "assets/icons/lightbulb-regular.svg",
    quote: "assets/icons/quote-right-solid.svg",
}

function getCategoryIconPath(category) {
    return categoryIconsPath[category.replace(" ", "_").toLowerCase()];
}

export { getCategoryIconPath }