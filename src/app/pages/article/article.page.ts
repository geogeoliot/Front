import { Component, OnInit } from '@angular/core';

import { ArticleService } from '../../services/article.service';
import { NewApiArticle } from '../../models/newsapi-article.modele'
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {

  news: any;
  error: any;

  constructor(public navCtrl: NavController, private newsApiService: ArticleService) {

    this.newsApiService.getArticles()
    .then((newsFetched: any) => {
      if (newsFetched.status) {
        this.news = newsFetched.response;
      } else {
        this.error = newsFetched.error;
      }
      //console.log(this.news);
    })
   }

  ngOnInit() {
  }


}
