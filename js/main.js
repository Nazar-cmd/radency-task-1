import { NotesTableList, StatsTableList } from "./components/index.js";

const NotesTableListInstance = new NotesTableList();
const StatsTableListInstance = new StatsTableList();

const errorElement = document.createElement("p")
errorElement.textContent = "Error has been occurred"
document.querySelector("body").appendChild(errorElement)

try {
    NotesTableListInstance.render();
    StatsTableListInstance.render();
}
catch (e) {
    const errorElement = document.createElement("p")
    errorElement.textContent = "Error has been occurred"
    document.appendChild(errorElement)

}
