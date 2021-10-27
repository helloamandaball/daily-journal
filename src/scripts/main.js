import { useJournalEntries } from "./JournalDataProvider.js"
import { EntryListComponent } from "./JournalEntryList.js"
import { pastJournalEntry } from "./JournalEntry.js"

// const allJournalEntries = useJournalEntries()
// //looped through: 
// for (const entry of allJournalEntries) {
//     console.log(entry)
// }

//call the imported EntryListComponent that was added on line 1:
EntryListComponent()
