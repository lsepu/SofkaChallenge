import { Component, OnInit } from '@angular/core';
import { TriviaService } from 'src/app/services/trivia.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styles: [],
})
export class RankingComponent implements OnInit {

  ngOnInit(): void {
      this.triviaService.setRanking();
  }

  constructor(private triviaService: TriviaService) {

  }

  public get ranking() {
    return this.triviaService.ranking;
  }
}
