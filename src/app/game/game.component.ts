import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  @Input() pageHidden?: boolean;
  @Input() player1Name?: string;
  @Input() player2Name?: string;
  @Output() newEnterNamesPageHidden = new EventEmitter<boolean>();

  winner?: string;

  constructor() {}
  ngOnInit() {}

  nameChange(value: boolean) {
    this.newEnterNamesPageHidden.emit(value);
  }
  pageHiddenChange(change:boolean){
    this.pageHidden = change;
    this.nameChange(this.pageHidden);
  }
}
