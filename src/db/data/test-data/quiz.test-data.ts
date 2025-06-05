export interface Quiz {
  question: string;
  answer: string;
}

const QuizData: Array<Quiz> = [
  {
    question: "What do plants need to perform photosynthesis?",
    answer: "Sunlight, water, and carbon dioxide",
  },
  {
    question: "What part of the plant absorbs water from the soil?",
    answer: "Roots",
  },
  {
    question: "Which gardening tool is best for turning soil?",
    answer: "Garden fork",
  },
  {
    question: "What does compost add to soil?",
    answer: "Nutrients and organic matter",
  },
  {
    question: "Why is it important to water plants early in the morning?",
    answer: "To reduce evaporation and prevent disease",
  },
  {
    question: "What is mulch used for?",
    answer: "To retain moisture, suppress weeds, and improve soil",
  },
  {
    question: "Which part of the plant produces seeds?",
    answer: "The flower",
  },
  {
    question: "What is the ideal pH range for most garden plants?",
    answer: "6.0 to 7.0",
  },
  {
    question: "What does 'annual plant' mean?",
    answer: "A plant that completes its life cycle in one year",
  },
  {
    question: "Which vegetable is best grown from seed directly in the soil?",
    answer: "Carrot",
  },
];

export default QuizData;