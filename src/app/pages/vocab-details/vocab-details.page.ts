import { Component, OnInit } from '@angular/core';
import { Vocab, VocabService } from 'src/app/services/vocab.service';
import { LoadingController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vocab-details',
  templateUrl: './vocab-details.page.html',
  styleUrls: ['./vocab-details.page.scss'],
})
export class VocabDetailsPage implements OnInit {

  vocab: Vocab = {
    vocab: "",
    category: "vocabulary",
    subcategory: "",
    notes: "",
    createddate: new Date(),
    modifieddate: new Date()
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

  async saveVocab(){
    const loading = await this.loadingController.create({
      message: "Saving.."      
    });
    await loading.present();

    if (this.vocabId) {
      
      // this.vocab.createddate = new Date();
      this.vocab.modifieddate = new Date();

      this.vocabService.updateVocab(this.vocab, this.vocabId).then(() => {
        loading.dismiss();
        this.nav.back();
      });
    }
    else {
      this.vocabService.addVocab(this.vocab).then(() => {
        loading.dismiss();
        this.nav.back();
      });
    }

  }

}
