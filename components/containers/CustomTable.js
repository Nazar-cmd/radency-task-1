const tableTemplate = document.createElement("template");
tableTemplate.innerHTML = `
 <div class="table" id="table">
    <div><slot name="header"/></div>
    <div class="table__body" id="rows"></div>
 </div>
`

class CustomTable extends HTMLElement{
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});

        shadow.appendChild(tableTemplate.content.cloneNode(true))

        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', 'scss/tableWithSettings.css');
// Attach the created element to the shadow dom
        shadow.appendChild(linkElem);

        //this.addCols()
        /*this.addRows()
        this.addRows()*/
    }

    addRows() {
        const asd = this.shadowRoot.getElementById("rows")
        const row = document.createElement("notes-table-row")

        asd.appendChild(row)
    }
}
window.customElements.define('custom-table', CustomTable)