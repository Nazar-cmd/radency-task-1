const tableTemplate = document.createElement("template");
tableTemplate.innerHTML = `
 <div class="table" id="table">
    <div>
        <slot name="header"/>
    </div>
    <div class="table__body" id="rows">
        <slot/>   
    </div>
 </div>
`

export default class CustomTable extends HTMLElement{
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});

        shadow.appendChild(tableTemplate.content.cloneNode(true))

        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', 'scss/tableWithSettings.css');

        shadow.appendChild(linkElem);

    }
}