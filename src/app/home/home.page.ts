import { Component, OnInit } from '@angular/core';
import { Vocab, VocabService } from '../services/vocab.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  categories: any;
  games: any;
  vocabs: Vocab[] = [];

  constructor(private vocabService: VocabService, private loadingController: LoadingController) {

    this.categories = [
      'vocabulary',
      'phrase',
      'idiom',
      'expression',
      'sentence',
      'others'
    ];

    this.games = [
      'FLIPCARDS - Vocabulary',
      'RANDOM PICK'
    ];
  }

  ngOnInit() {
    this.getRecent5Vocabs();
  }

  async getRecent5Vocabs(){
    const loading = await this.loadingController.create({
      message: "Loading.."
    });
    await loading.present();

    this.vocabs = [];
    
    this.vocabService.getLast5Vocabs().subscribe(res => {
      loading.dismiss();
      this.vocabs = res;
    });
  }

}
