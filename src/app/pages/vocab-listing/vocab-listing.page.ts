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
  subcategory: string = "";

  constructor(private vocabService: VocabService, private route: ActivatedRoute, 
    private loadingController: LoadingController, private navController: NavController) {

  }

  ngOnInit() {
    this.category = this.route.snapshot.params['category'];
    this.subcategory = this.route.snapshot.params['subcategory'];
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
      // console.log(this.category);
      loading.dismiss();
      if (this.subcategory == "ALL") {
        this.vocabs = res.filter(item => item.category == this.category);
      }
      else {
        this.vocabs = res.filter(item => item.category == this.category && item.subcategory == this.subcategory);
      }
          
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

      if (this.subcategory == "ALL") {
        this.vocabs = res.filter(item => item.category == this.category);
      }
      else {
        this.vocabs = res.filter(item => item.category == this.category && item.subcategory == this.subcategory);
      }
    });
  }

  edit(slidingItem: IonItemSliding, id: String) {
    slidingItem.close();
    this.navController.navigateForward("details/" + id);
  }
}
