import { Component, OnInit } from '@angular/core';
import { Vocab, VocabService } from 'src/app/services/vocab.service';
import { LoadingController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flipcard',
  templateUrl: './flipcard.page.html',
  styleUrls: ['./flipcard.page.scss'],
})
export class FlipcardPage implements OnInit {

  vocabs: Vocab[] = [];
  rndVocabs: Vocab[] = [];
  category: string = "vocabulary";
  rndItemCount: number = 3;

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
      this.vocabs = res.filter(item => item.category == this.category);

      this.getRandomItems();
    });
  }

  getRandomItems(){
    var randomItem = null;
    var rndNo: number;
    var rndSeries: number[] = [];
    this.rndVocabs = [];
    
    for(var i=0; i<this.rndItemCount; i++) {
      rndNo = Math.floor(Math.random()*this.vocabs.length);
      
      if (rndSeries.filter(i => i == rndNo).length > 0) continue;
      rndSeries.push(rndNo);
      
      randomItem = this.vocabs[rndNo];
      this.rndVocabs.push(randomItem);  
    }
  }

}
