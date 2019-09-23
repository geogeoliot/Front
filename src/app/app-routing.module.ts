import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'article', pathMatch: 'full' },
  { path: 'article', loadChildren: './pages/article/article.module#ArticlePageModule' },
  { path: 'article-details/:id', loadChildren: './pages/article-details/article-details.module#ArticleDetailsPageModule' },
  { path: 'article-add', loadChildren: './pages/article-add/article-add.module#ArticleAddPageModule' },
  { path: 'article/update/:id', loadChildren: './pages/article-update/article-update.module#ArticleUpdatePageModule' },
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
