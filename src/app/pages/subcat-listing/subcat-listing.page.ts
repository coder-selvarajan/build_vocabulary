import { Component, OnInit } from '@angular/core';
import { VocabService, Vocab } from 'src/app/services/vocab.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-subcat-listing',
  templateUrl: './subcat-listing.page.html',
  styleUrls: ['./subcat-listing.page.scss'],
})
export class SubcatListingPage implements OnInit {

  vocabs: Vocab[] = [];
  othervocabs: Vocab[] = [];  
  category: string = "expression";
  subcategory: Vocab[] = [];

  constructor(private vocabService: VocabService, private route: ActivatedRoute, 
    private loadingController: LoadingController, private navController: NavController) {

  }

  ngOnInit() {
    this.getDataByTime();
    
  }

  async getDataByTime(){
    const loading = await this.loadingController.create({
      message: "Loading.."
    });
    await loading.present();

    this.vocabs = [];

    this.vocabService.getVocabsByTime().subscribe(res => {
      loading.dismiss();
      this.vocabs = res.filter(item => item.category == this.category);

      this.othervocabs = this.vocabs.filter(vocab => vocab.subcategory == '');

      this.subcategory = this.vocabs.filter((vocab, i, arr) => {
        return arr.indexOf(arr.find(t => t.subcategory != '' && t.subcategory === vocab.subcategory)) === i;
      });
  
    });
  }

}
