import { Component, OnInit } from '@angular/core';
import { Vocab, VocabService } from '../../services/vocab.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-vocab-listing',
  templateUrl: './vocab-listing.page.html',
  styleUrls: ['./vocab-listing.page.scss'],
})
export class VocabListingPage implements OnInit {

  vocabs: Vocab[] = [];
  category: string = "";

  constructor(private vocabService: VocabService, private route: ActivatedRoute, private loadingController: LoadingController) {

  }

  ngOnInit() {
    this.category = this.route.snapshot.params['category'];
    if (this.category) {
      this.getItemsByCategory();
    }
  }

  async getItemsByCategory() {
    console.log(this.category);

    const loading = await this.loadingController.create({
      message: "Loading.."
    });
    await loading.present();

    this.vocabService.getVocabs().subscribe(res => {
      loading.dismiss();
      this.vocabs = res.filter(item => item.category == this.category);
    });
  }

  remove(item) {
    this.vocabService.removeVocab(item.id);
  }

}
