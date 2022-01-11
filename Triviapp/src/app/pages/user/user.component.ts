import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TriviaService } from 'src/app/services/trivia.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent {

  constructor(private triviaService: TriviaService) { }

  @ViewChild('userName') userName!: ElementRef<HTMLInputElement>;

  addUser(){
    const user = this.userName.nativeElement.value;
    this.triviaService.user = user;
  }

 
}
