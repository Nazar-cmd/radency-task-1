const tableTemplate = document.createElement("template");
tableTemplate.innerHTML = `
 <div class="table" id="table">
           <div class="table__header" id="cols">
              
              <slot name="columns" />
           </div>
           <div class="table__body" id="rows">
               
               
           </div>
       </div>
`

class CustomTable extends HTMLElement{
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});

        // Apply external styles to the shadow dom
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', 'scss/main.css');


// Attach the created element to the shadow dom
        shadow.appendChild(linkElem);


        shadow.appendChild(tableTemplate.content.cloneNode(true))

        //this.addCols()
        this.addRows()
        this.addRows()
    }

    addRows() {
        const asd = this.shadowRoot.getElementById("rows")
        const row = document.createElement("custom-row")

        asd.appendChild(row)
    }
    addCols() {
        const table__header = this.shadowRoot.getElementById("cols")

        for (let i = 0; i<2;i++) {
            const row = document.createElement("custom-column")
            row.style.flex = "1"
            table__header.appendChild(row)
        }





    }
}
window.customElements.define('custom-table', CustomTable)