import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './pages/menu/menu.component';
import { TriviaComponent } from './pages/trivia/trivia.component';
import { RankingComponent } from './pages/ranking/ranking.component';
import { AppRoutingModule } from './app-routing-module';
import { UserComponent } from './pages/user/user.component';
import { ConfigurationComponent } from './pages/configuration/configuration.component';
import { AddQuestionComponent } from './pages/add-question/add-question.component';
import { TriviaService } from './services/trivia.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TriviaComponent,
    RankingComponent,
    UserComponent,
    ConfigurationComponent,
    AddQuestionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [TriviaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
