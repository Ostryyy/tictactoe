import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  squares: any[] = [];
  xIsNext?: boolean;
  winner?: string;
  @Input() player1Name?: string;
  @Input() player2Name?: string;
  @Input() pageHidden?: boolean;
  @Output() newEnterNamesPageHidden = new EventEmitter<boolean>();

  constructor() {}
  ngOnInit() {
    this.newGame();
  }

  nameChange(value: boolean) {
    this.newEnterNamesPageHidden.emit(value);
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = '';
    this.xIsNext = true;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }
  isDraw(){
    for(let i = 0; i < this.squares.length; i++){
      if(this.squares[i] === '' || this.squares[i] === null)
      {
        return '';
      }
    }
    return 'draw';
  }

  makeMove(idx: number) {
    if (!this.squares[idx]) {
      this.squares?.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }
    this.winner = this.calculateWinner();
  }
  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return this.isDraw();
    
  }
}
