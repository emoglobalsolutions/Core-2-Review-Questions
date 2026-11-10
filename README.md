# Core 2 Review Questions — SmartLearn Malawi

A mobile-friendly static quiz website starter for CompTIA A+ Core 2 revision.

## Included
- 10 quiz cards
- 100 questions per attempt (once the question bank contains at least 100 items)
- 90-minute countdown
- Random selection of 100 unique questions
- Randomized answer-option order
- Previous/next navigation and question jump grid
- Flag-for-review marker
- Automatic scoring and 75% pass mark
- Answer review with explanations
- Responsive layout for phones

## Important question-bank note
This ZIP contains 10 example questions only. It does not pretend to contain 1,000 verified exam questions. Add at least 100 reviewed questions to `data/questions.js` before attempting quizzes. The same question bank is shared by all 10 quiz cards; each attempt draws a fresh random set of 100 without duplicates.

Each question must follow this format:

```js
{
  "id": "C2-011",
  "topic": "Security",
  "question": "Your question text?",
  "options": ["Option A", "Option B", "Option C", "Option D"],
  "answer": "Option B",
  "explanation": "Explain why this is the correct answer."
}
```

The `answer` value must exactly match one of the four strings in `options`.

## Run locally
Open `index.html` in a modern browser. For GitHub Pages, upload the contents of this folder into the root of your repository and enable Pages from the repository's Settings.

## Update questions
Edit `data/questions.js`. Keep the file's first line and final `window.QUESTION_BANK = [...]` assignment. Add question objects inside the array, separated by commas.

## Customization
- Pass mark: `PASS_MARK` in `app.js` (currently 75).
- Number of questions: `QUESTION_COUNT` in `app.js` (currently 100).
- Time limit: `TIME_LIMIT` in `app.js` (currently 90 minutes).

This is an independent study aid and is not affiliated with or endorsed by CompTIA.