import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})

export class PostsService {
  private elencoPost : Post[] = [];
  oPost !: Observable<Post[]>;
  private serviceURLPosts = 'https://my-json-server.typicode.com/Vincenza-Genuardi/Genu_facebook/posts'
  constructor(public http: HttpClient) {
    this.makeTypedRequest();
    
  }
  makeTypedRequest() : void
  {
    this.oPost = this.http.get<Post[]>(this.serviceURLPosts);
    this.oPost.subscribe( d => {this.elencoPost = d;});  
  }
  getPost(): Observable<Post[]> {
  return this.oPost;
}
  addPost(post:Post): void{
    this.elencoPost.push(post);
    this.ordinaPost();
  }
  ordinaPost(): Post[]{
    const postOrdinati = this.elencoPost.sort((a: Post, b: Post) => b.like - a.like);
    return postOrdinati;
  }
}
