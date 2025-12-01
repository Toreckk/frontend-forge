# FAQ Component

**Challenge Link**: [FrontendEval - FAQ Component](https://frontendeval.com/questions/faq-component)

## Prompt

Create a re-usable "Frequently Asked Questions" component.

![FAQ Component Prompt](https://frontendeval.com/images/faq-component-1.png)

It should receive an array of question/answer objects, e.g.:

```javascript
[
  {
    question: "How many bones does a cat have?",
    answer: "A cat has 230 bones - 6 more than a human",
  },
  {
    question: "How much do cats sleep?",
    answer: "The average cat sleeps 12-16 hours per day",
  },
  {
    question: "How long do cats live",
    answer:
      "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
  },
];
```

These should be rendered in the FAQ component, where clicking any question reveals the answer, and clicking again will hide it.

## Requirements

1.  The FAQ component should receive the list of questions in the JS object format above.
2.  Every question from the object should be displayed, with an adjacent chevron as in the mockup (see challenge link).
3.  Clicking any question should reveal the answer.
4.  Clicking a question again should hide the answer.
5.  The first answer should be revealed by default.
