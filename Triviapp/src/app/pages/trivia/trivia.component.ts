import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TriviaService } from 'src/app/services/trivia.service';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styles: [],
})
export class TriviaComponent implements OnInit {
  level: string = '';
  points: number = 0;
  endScreen: boolean = false;

  ngOnInit(): void {
    this.level = 'Facil';
    this.triviaService.setQuestion(this.level);
  }

  constructor(private triviaService: TriviaService) {}

  public get question() {
    return this.triviaService.question;
  }

  public get answers() {
    return this.triviaService.answers;
  }

  public checkAnswer(e: any) {
    const answer = e.srcElement.textContent.trim();
    if (answer == this.triviaService.correctAnswer) {
      this.points += this.triviaService.addPoint(this.level);
      this.upLevel();

      if (this.level !== 'End') {
        this.triviaService.setQuestion(this.level);
      } else {
        //finalizo la trivia
        this.endGame();
      }
    } else {
      //finalizar
      this.points = 0;
      this.endGame();
    }
  }

  public endGame() {
    //save points
    this.triviaService.saveGame(this.points);
    //change screen
    this.endScreen = true;
  }

  public upLevel() {
    switch (this.level) {
      case 'Facil':
        this.level = 'Medio';
        break;

      case 'Medio':
        this.level = 'Dificil';
        break;

      case 'Dificil':
        this.level = 'Experto';
        break;

      case 'Experto':
        this.level = 'Legendario';
        break;

      default:
        this.level = 'End';
        break;
    }
  }
}
