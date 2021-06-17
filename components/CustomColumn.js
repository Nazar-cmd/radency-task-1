const columnTemplate = document.createElement("template");
columnTemplate.innerHTML = `
<div class="table__cell">
    <slot/>
</div>
`

class CustomColumn extends HTMLElement{
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});

        // Apply external styles to the shadow dom
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', 'scss/main.css');


// Attach the created element to the shadow dom
        shadow.appendChild(linkElem);


        shadow.appendChild(columnTemplate.content.cloneNode(true))
    }
}
window.customElements.define('custom-column', CustomColumn, )