import { Component, OnInit } from '@angular/core';
import { TriviaService } from 'src/app/services/trivia.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styles: [],
})
export class ConfigurationComponent {
  constructor(private triviaService: TriviaService) {}
  public setCategory(level: string) {
    this.triviaService.category = level;
  }
}
