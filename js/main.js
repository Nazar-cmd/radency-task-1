import { NotesTableList, StatsTableList } from "./components/index.js";

const NotesTableListInstance = new NotesTableList();
const StatsTableListInstance = new StatsTableList();

try {
    NotesTableListInstance.render();
    StatsTableListInstance.render();
}
catch (e) {
    const errorMessage = document.createElement("error-message")
    errorMessage.setAttribute("errorMessage", e.message)
    document.querySelector(".page__container").prepend(errorMessage)
}
