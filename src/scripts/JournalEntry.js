/* Purpose: To render a single journal entry as an HTML representation of the data */
export const pastJournalEntry = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalPastList-container">
            <ul class="borderBtm">
                <li>
                    <div>
                        <p><strong>${entry.date}</strong> &nbsp;>>> <em><strong>${entry.concept}</strong></em></p>
                        <p>${entry.entry}</p>
                        <p><em><u>Mood:</u> ${entry.mood}</em></p>
                    </div>
                    <div class="journalPastBtns">
                        <button type="submit" id="journalEditBtn">Edit</button>
                        <button type="submit" id="journalDeleteBtn">Delete</button>
                    </div>
                </li>
            </ul>
        </section>
    `
}
