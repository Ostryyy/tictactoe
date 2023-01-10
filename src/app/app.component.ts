import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'TicTacToe';

  EnterNamesPageHidden: boolean = false;
  Player1Name: string = '';
  Player2Name: string = '';

  constructor() {}
  ngOnInit() {
    console.log(this.Player1Name + ' | ' + this.Player2Name);
  }

  HiddenPageSwitch(newEnterNamesPageHidden: boolean) {
    this.EnterNamesPageHidden = newEnterNamesPageHidden;
  }

  player1NameChange(newPlayer1Name: string) {
    this.Player1Name = newPlayer1Name;
  }
  player2NameChange(newPlayer2Name: string) {
    this.Player2Name = newPlayer2Name;
  }
}
