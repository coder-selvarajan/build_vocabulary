import { Component, OnInit } from '@angular/core';
import { Vocab, VocabService } from '../../services/vocab.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, IonItemSliding, NavController } from '@ionic/angular';

@Component({
  selector: 'app-vocab-listing',
  templateUrl: './vocab-listing.page.html',
  styleUrls: ['./vocab-listing.page.scss'],
})
export class VocabListingPage implements OnInit {

  vocabs: Vocab[] = [];
  category: string = "";

  constructor(private vocabService: VocabService, private route: ActivatedRoute, 
    private loadingController: LoadingController, private navController: NavController) {

  }

  ngOnInit() {
    this.category = this.route.snapshot.params['category'];
    if (this.category) {
      // this.getItemsByCategory();
      this.getDataByTime();
    }
  }

  remove(item) {
    this.vocabService.removeVocab(item.id);
  }

  async getDataByTime(){
    const loading = await this.loadingController.create({
      message: "Loading.."
    });
    await loading.present();

    this.vocabs = [];
    
    this.vocabService.getVocabsByTime().subscribe(res => {
      console.log(this.category);
      loading.dismiss();
      this.vocabs = res.filter(item => item.category == this.category);
    });
  }

  async getDataByAZ(){
    const loading = await this.loadingController.create({
      message: "Loading.."
    });
    await loading.present();

    this.vocabs = [];
    
    this.vocabService.getVocabsByAZ().subscribe(res => {
      console.log(this.category);
      loading.dismiss();
      this.vocabs = res.filter(item => item.category == this.category);
    });
  }

  edit(slidingItem: IonItemSliding, id: String) {
    slidingItem.close();
    this.navController.navigateForward("details/" + id);
  }
}
