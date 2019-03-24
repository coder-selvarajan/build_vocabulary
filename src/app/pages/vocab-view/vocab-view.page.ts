import { Component, OnInit } from '@angular/core';
import { Vocab, VocabService } from 'src/app/services/vocab.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-vocab-view',
  templateUrl: './vocab-view.page.html',
  styleUrls: ['./vocab-view.page.scss'],
})
export class VocabViewPage implements OnInit {

  vocab: Vocab = {
    vocab: "",
    category: "vocabulary",
    subcategory: "",
    notes: ""
  };
  vocabId = null;
  
  constructor(private vocabService: VocabService, private route: ActivatedRoute, private loadingController: LoadingController, private nav: NavController) { }

  ngOnInit() {
    this.vocabId = this.route.snapshot.params['id'];
    if (this.vocabId) {
      this.loadVocab();
    }
  }

  async loadVocab(){
    const loading = await this.loadingController.create({
      message: "Loading.."
    });
    await loading.present();
    
    this.vocabService.getVocab(this.vocabId).subscribe(res => {
      loading.dismiss();
      this.vocab = res;
    });
  }

}
