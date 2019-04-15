import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'listing/:category/:subcategory', loadChildren: './pages/vocab-listing/vocab-listing.module#VocabListingPageModule' },
  { path: 'details', loadChildren: './pages/vocab-details/vocab-details.module#VocabDetailsPageModule' },
  { path: 'details/:id', loadChildren: './pages/vocab-details/vocab-details.module#VocabDetailsPageModule' },
  { path: 'view/:id', loadChildren: './pages/vocab-view/vocab-view.module#VocabViewPageModule' },
  { path: 'flipcard', loadChildren: './pages/flipcard/flipcard.module#FlipcardPageModule' },
  { path: 'randompick', loadChildren: './pages/randompick/randompick.module#RandompickPageModule' },
  { path: 'subcat-listing/:category', loadChildren: './pages/subcat-listing/subcat-listing.module#SubcatListingPageModule' },
  { path: 'getexpressions', loadChildren: './pages/getexpressions/getexpressions.module#GetexpressionsPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
