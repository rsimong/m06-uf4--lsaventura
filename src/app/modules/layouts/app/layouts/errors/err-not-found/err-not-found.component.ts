import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-err-not-found',
  templateUrl: './err-not-found.component.html',
  styleUrls: ['./err-not-found.component.css']
})
export class ErrNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  setRandomBackground(): string {
    const imagesAvailable = 10;
    const generateNumRandom = (loops) => {
      let num = 1;
      for (let i = 0; i < loops; i++) {
        num = Math.floor(Math.random() * imagesAvailable) + 1;
      }
      return num;
    };
    const imgNum = generateNumRandom(3);
    return `url('../../../../../../../assets/img/tenor_${imgNum}.gif')`;
  }

}
