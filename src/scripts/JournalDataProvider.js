/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data. It's all been moved to the entries.json file, so just hide the text for now because we aren't going to need it here:

// const journal = [
//     {
//         id: 1,
//         date: "09/22/2021",
//         concept: "CONDITIONALS & LOOPS",
//         entry: "We went over the basics of what conditionals and loops looked like and did some practice code.",
//         mood: "My Head Hurts"
//     },
//     {
//         id: 2,
//         date: "10/04/2021",
//         concept: "FLEXBOX",
//         entry: "Introduction to Flexbox, did practice problems and played Flexbox Froggy.",
//         mood: "Overwhelmed"
//     },
//     {
//         id: 3,
//         date: "10/05/2021",
//         concept: "HTML & CSS",
//         entry: "Did a code-along and created our index page and CSS for the Martin's Aquarium project. Also hashed out the hello-world-coatimundi travel website (first group project).",
//         mood: "Happy"
//     },
//     {
//         id: 4,
//         date: "10/13/2021",
//         concept: "PRINTING TO THE DOM",
//         entry: "Covered more about the DOM, adding to what we learning in Foundations Class.",
//         mood: "OK"
//     }
// ]

/* At this point, the journal variable in your data provider should be initialized as an empty array (as seen below). You are now going to get the data from your API server.*/
let journal = []

export const useJournal = () => {
    return journal.slice()
}

export const getEntries = () => {
    return fetch("http://localhost:8088/entries") // Fetch from the API
        .then(entries => entries.json())  // Parse as JSON
        .then(entries => {
            console.table(entries)
            journal = entries
        })
}

/* You export a function that provides a version of the raw data in the format that you want */
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}
