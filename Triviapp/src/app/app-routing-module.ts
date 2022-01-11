import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuestionComponent } from './pages/add-question/add-question.component';
import { ConfigurationComponent } from './pages/configuration/configuration.component';
import { MenuComponent } from './pages/menu/menu.component';
import { RankingComponent } from './pages/ranking/ranking.component';
import { TriviaComponent } from './pages/trivia/trivia.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
    {
        path: '',
        component: MenuComponent,
        pathMatch: 'full'
    },
    {
        path: 'trivia',
        component: TriviaComponent
    },
    {
        path: 'ranking',
        component: RankingComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'configuration',
        component: ConfigurationComponent
    },
    {
        path: 'addQuestion',
        component: AddQuestionComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
]


@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}