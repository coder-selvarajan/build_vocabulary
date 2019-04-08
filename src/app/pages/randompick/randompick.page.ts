import { Component, OnInit } from '@angular/core';
import { VocabService, Vocab } from 'src/app/services/vocab.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-randompick',
  templateUrl: './randompick.page.html',
  styleUrls: ['./randompick.page.scss'],
})
export class RandompickPage implements OnInit {

  vocabs: Vocab[] = [];
  category: string = "vocabulary";
  randomVocab: Vocab;

  constructor(private vocabService: VocabService, private route: ActivatedRoute, 
    private loadingController: LoadingController, private navController: NavController) {

  }

  ngOnInit() {
    this.getDataByAZ();
  }

  async getDataByAZ(){
    const loading = await this.loadingController.create({
      message: "Loading.."
    });
    await loading.present();

    this.vocabs = [];
    
    this.vocabService.getVocabsByAZ().subscribe(res => {
      loading.dismiss();
      this.vocabs = res.filter(item => item.category != this.category);
      this.getRandomPick();
    });
  }

  getRandomPick(){
      this.randomVocab = this.vocabs[Math.floor(Math.random()*this.vocabs.length)];
  }

}
