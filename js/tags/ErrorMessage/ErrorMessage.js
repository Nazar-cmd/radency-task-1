

export default class ErrorMessage extends HTMLElement{
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});

        let errorMessage = this.getAttribute("errorMessage");

        if (!errorMessage) {
            errorMessage = "NO MESSAGE"
        }

        const notesTableTemplate = document.createElement("template");
        notesTableTemplate.innerHTML = `
        <div style="color: #ef2a2a">
            <h1>Error has been occurred!</h1>
            <details >
                <summary>Error message</summary>
                 ${errorMessage}
            </details>
        </div>`

        shadow.appendChild(notesTableTemplate.content.cloneNode(true))
    }
}