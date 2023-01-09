import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-introduction-of-players-names',
  templateUrl: './introduction-of-players-names.component.html',
  styleUrls: ['./introduction-of-players-names.component.css'],
})
export class IntroductionOfPlayersNamesComponent implements OnInit {
  @Input() pageHidden?: boolean;
  @Output() newEnterNamesPageHidden = new EventEmitter<boolean>();
  @Output() newPlayer1Name = new EventEmitter<string>();
  @Output() newPlayer2Name = new EventEmitter<string>();

  nameOfPlayer1: string = '';
  nameOfPlayer2: string = '';

  constructor() {}

  ngOnInit() {}

  play(value: boolean, name1: string, name2: string) {
    this.newEnterNamesPageHidden.emit(value);
    this.newPlayer1Name.emit(name1);
    this.newPlayer2Name.emit(name2);
  }
}
