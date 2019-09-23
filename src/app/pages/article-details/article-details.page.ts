import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ArticleService } from 'src/app/services/article.service';
import { NewApiArticle } from '../../models/newsapi-article.modele'


@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.page.html',
  styleUrls: ['./article-details.page.scss'],
})
export class ArticleDetailsPage implements OnInit {

  articleId;
  new: NewApiArticle

  constructor(public actRoute: ActivatedRoute, public navCtrl: NavController, private newsApiService: ArticleService) {


    this.actRoute = actRoute;

    this.articleId = this.actRoute.snapshot.params['id'];

    this.newsApiService.getArticleById(this.articleId)
      .then((articleDetail: NewApiArticle) => {
        console.log(articleDetail)
        this.new = articleDetail;
        //  console.log(articleDetail)
        // console.log(this)
      })

  }

  ngOnInit() {
    console.log(this.actRoute.snapshot.params);

  }

}
