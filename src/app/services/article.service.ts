import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NewApiArticle } from '../models/newsapi-article.modele'

@Injectable()
export class ArticleService {
  private baseUrl = 'http://localhost:3001/article';

  constructor(private http: HttpClient) {
    

  }

  public getArticles() {
    const url = `${this.baseUrl}`;
    return this.http.get(url)
    .toPromise()
    .then((response) => {
      console.log(response)
      return {status: true, response}
    })
    .catch((error) => {
      console.log(error)
      return {status: false, error}
    })
  }

  public getArticleById(id) {

    const url = `${this.baseUrl}/${id}`;
    return this.http.get(url)
    .toPromise()
    .then((response) => {
      // console.log(response);
      // console.log(url);
      return response;
    })
    .catch(error =>  console.log('errxxxxxxxxxrrrr' , error))
  }

  public postArticle(title) {
    const url = `${this.baseUrl}/add`;
    return this.http.post(url, { title })
    .toPromise()
    .then((response) => {
      return response;
    })
  }

  public updateArticle(id) {
    const url = `${this.baseUrl}/update/${id}`
    return this.http.post(url, { title })
    .toPromise()
    .then((response) => {
      return response
    })
  }
 }
