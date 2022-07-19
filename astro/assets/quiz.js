$("#quiz").quiz({
  counterFormat: "Question %current of %total",
  questions: [
    {
      q: "Question? One",
      options: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
      correctIndex: 1,
      //'correctResponse': 'Custom correct response.',
      //'incorrectResponse': 'Custom incorrect response.'
    },
    {
      q: "Question? Two ",
      options: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
      correctIndex: 3,
      //'correctResponse': 'Custom correct response.',
      //'incorrectResponse': 'Custom incorrect response.'
    },
    {
      q: "Question? Three ",
      options: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
      correctIndex: 3,
      //'correctResponse': 'Custom correct response.',
      //'incorrectResponse': 'Custom incorrect response.'
    },
    {
      q: "Question? Four ",
      options: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
      correctIndex: 3,
      //'correctResponse': 'Custom correct response.',
      //'incorrectResponse': 'Custom incorrect response.'
    },
    {
      q: "Question? Five ",
      options: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
      correctIndex: 3,
      //'correctResponse': 'Custom correct response.',
      //'incorrectResponse': 'Custom incorrect response.'
    },
  ],
});
