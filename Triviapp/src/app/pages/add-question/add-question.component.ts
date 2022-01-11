import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Question } from 'src/app/interfaces/question';
import { TriviaService } from 'src/app/services/trivia.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styles: [],
})
export class AddQuestionComponent {

  questionScreen: boolean = true;

  //get question and answers
  @ViewChild('question') question!: ElementRef<HTMLInputElement>;
  @ViewChild('correctAnswer') correctAnswer!: ElementRef<HTMLInputElement>;
  @ViewChild('secondAnswer') secondAnswer!: ElementRef<HTMLInputElement>;
  @ViewChild('thirdAnswer') thirdAnswer!: ElementRef<HTMLInputElement>;
  @ViewChild('fourthAnswer') fourthAnswer!: ElementRef<HTMLInputElement>;

  constructor(private triviaService: TriviaService) {}

  public sendQuestion() {
    const answers = this.shuffleAnswers([
      this.correctAnswer.nativeElement.value,
      this.secondAnswer.nativeElement.value,
      this.thirdAnswer.nativeElement.value,
      this.fourthAnswer.nativeElement.value,
    ]);

    const question: Question = {
      question: this.question.nativeElement.value,
      r1: answers[0],
      r2: answers[1],
      r3: answers[2],
      r4: answers[3],
      rc: this.correctAnswer.nativeElement.value,
      category: this.triviaService.category
    };

    this.triviaService.addQuestion(question);

    this.questionScreen = false;
  }

  public shuffleAnswers(answers: Array<String>) {
    for (let i = answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = answers[i];
      answers[i] = answers[j];
      answers[j] = temp;
    }

    return answers;
  }
}
