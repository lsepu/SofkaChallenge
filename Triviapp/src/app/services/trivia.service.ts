import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../interfaces/question';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class TriviaService {
  URL_API = 'http://localhost:4000/api/trivia';

  constructor(private http: HttpClient) {}

  initialQuestion: Question = {
    question: '',
    r1: '',
    r2: '',
    r3: '',
    r4: '',
    rc: '',
    category: ''
  };

  private _question: Question = this.initialQuestion;

  private _user: string = '';

  private _category = '';

  private _ranking: Array<User> = [];

  public set user(user: string) {
    this._user = user;
  }

  public get user() {
    return this._user;
  }

  public set category(level: string) {
    this._category = level;
  }

  public get category() {
    return this._category;
  }

  public setQuestion(level: string) {
    //send to api and set the question depending on level
    this.http.get(`${this.URL_API}/${level}`).subscribe((resp: any) => {
      this._question = resp;
    });
  }

  public setRanking() {
    //set ranking
    this.http.get(`${this.URL_API}/user/ranking/all`).subscribe((resp: any) => {
      this._ranking = resp;
    });
  }

  public saveGame(points: number) {
    //send to api based on user and points
    this.http
      .get(`${this.URL_API}/user/${this._user}`)
      .subscribe((resp: any) => {
        //check if exists, then update the score. If not create the player
        if (resp) {
          this.updateUserPoints(points);
        } else {
          this.createUser(points);
        }
      });

    //clear the parameters
    this._question = this.initialQuestion;
    this._ranking = [];
  }

  public createUser(pointsParam: number) {
    const newUser = {
      userName: this._user,
      points: pointsParam,
    };
    this.http.post(`${this.URL_API}/user`, newUser).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

  public updateUserPoints(pointsParam: number) {
    this.http
      .put(`${this.URL_API}/user/${this._user}`, { points: pointsParam })
      .subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      );
  }


  public get question() {
    return this._question.question;
  }

  public get answers() {
    return [
      this._question.r1,
      this._question.r2,
      this._question.r3,
      this._question.r4,
    ];
  }

  public get correctAnswer() {
    return this._question.rc;
  }

  public addPoint(level: string) {
    switch (level) {
      case 'Facil':
        return 10;
        break;

      case 'Medio':
        return 15;
        break;

      case 'Dificil':
        return 20;
        break;

      case 'Maestro':
        return 25;
        break;

      case 'Legendario':
        return 30;
        break;

      default:
        return 0;
        break;
    }
  }

  get ranking() {
    return this._ranking;
  }

  public addQuestion(question: Question) {
    //create in API
    this.http.post(`${this.URL_API}`, question).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}
