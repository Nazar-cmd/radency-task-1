import { NotesTableRow, NotesTableHeader, CreateNoteButton} from "./NotesTable/index.js";
import { StatsTableRow, StatsTableHeader } from "./StatsTable/index.js"
import { CustomTable } from "./containers/index.js";
import ErrorMessage from "./ErrorMessage/ErrorMessage.js";

window.customElements.define('notes-table-header', NotesTableHeader)
window.customElements.define('stats-table-header', StatsTableHeader)
window.customElements.define('create-note-button', CreateNoteButton)
window.customElements.define('notes-table-row', NotesTableRow)
window.customElements.define('stats-table-row', StatsTableRow)
window.customElements.define('error-message', ErrorMessage)
window.customElements.define('custom-table', CustomTable)
