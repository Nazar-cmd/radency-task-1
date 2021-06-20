const statsTableTemplate = document.createElement("template");
statsTableTemplate.innerHTML = `
  <div class="table__header table__row" id="cols">
                <div class="table__cell">
                    Note Category
                </div>
                <div class="table__cell">
                    Active
                </div>
                <div class="table__cell">
                    Archived
                </div>
            </div>          
`

export default class StatsTableHeader extends HTMLElement{
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        // Apply external styles to the shadow dom
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', 'scss/components/customTable.css');


// Attach the created element to the shadow dom
        shadow.appendChild(linkElem);

        shadow.appendChild(statsTableTemplate.content.cloneNode(true))
    }
}