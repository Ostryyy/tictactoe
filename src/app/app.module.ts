import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IntroductionOfPlayersNamesComponent } from './introduction-of-players-names/introduction-of-players-names.component';
import { GameComponent } from './game/game.component';
import { BoardComponent } from './game/board/board.component';
import { SquareComponent } from './game/board/square/square.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionOfPlayersNamesComponent,
    GameComponent,
    BoardComponent,
    SquareComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
