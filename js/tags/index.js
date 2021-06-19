import { NotesTableRow, NotesTableHeader} from "./NotesTable/index.js";
import { CustomTable } from "./containers/index.js";

window.customElements.define('notes-table-header', NotesTableHeader)
window.customElements.define('notes-table-row', NotesTableRow)
window.customElements.define('custom-table', CustomTable)