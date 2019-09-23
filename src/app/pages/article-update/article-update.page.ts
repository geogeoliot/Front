import { Component, OnInit } from '@angular/core';
import { NewApiArticle } from 'src/app/models/newsapi-article.modele';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ArticleService } from 'src/app/services/article.service';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-article-update',
  templateUrl: './article-update.page.html',
  styleUrls: ['./article-update.page.scss'],
})
export class ArticleUpdatePage implements OnInit {

  articleId
  new: NewApiArticle
  updateForm: FormGroup

  constructor(public actRoute: ActivatedRoute, public navCtrl: NavController, private newsApiService: ArticleService, public formBuilder: FormBuilder) {

    this.updateForm = this.formBuilder.group({
      title: new FormControl('', Validators.compose([ 
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15)
      ]))
    })

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

  setTitle() {
  this.newsApiService.updateArticle(this.updateForm.value.title)
  .then((updateArticle: NewApiArticle) => {
    return updateArticle
  })

    console.log('New title :', this.updateForm.value.title)
  }

  ngOnInit() {
    console.log(this.actRoute.snapshot.params);

  }
}
