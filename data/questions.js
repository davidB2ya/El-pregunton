import { Question } from "../models/Question.js";
import { data } from "./data.js";

export const randomData = () => {
  let list = [];
  let count = 1;
  while (list.length < 5) {
    const num = Math.floor(Math.random() * (data.length - 1)) + 1;
    console.log(num)
    if (data[num].category === count) {
      list.push(data[num])
      count++
    }
  }
  return list;
}

const info = randomData()
console.log(info)

export const questions = info.map(
  (question) =>
    new Question(question.question, question.choices, question.answer, question.category)
);
