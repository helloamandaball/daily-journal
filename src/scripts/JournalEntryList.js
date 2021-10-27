import { getEntries, useJournalEntries } from "./JournalDataProvider.js"
import { pastJournalEntry } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector(".journalPastEntry")

export const EntryListComponent = () => {
    getEntries()
    .then(() => {
        const entriesArray = useJournalEntries();
        let entriesHTML = "";

        for (const entry of entriesArray) {
            /* Invoke the component that returns an HTML representation of a single entry */
            entriesHTML += pastJournalEntry(entry)
        }
        entryLog.innerHTML = `${entriesHTML}`
    })
}