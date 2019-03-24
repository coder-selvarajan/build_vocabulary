import { Component, OnInit } from '@angular/core';
import { Vocab, VocabService } from '../services/vocab.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  categories: any;

  constructor(private vocabService: VocabService) {

    this.categories = [
      'vocabulary',
      'phrase',
      'idiom',
      'expression',
      'sentence',
      'others'
    ];
  }

  ngOnInit() {

  }

}
