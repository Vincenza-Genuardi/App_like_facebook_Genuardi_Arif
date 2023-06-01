import { Component } from '@angular/core';
import { Comment } from './models/comment.model';
import { Post } from './models/post.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PostEComment } from './models/postEComment.model';
import { Data } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* dataPost !: Post[];
  dataComment !: Comment[]; */
  /* oPost !: Observable<Post[]>;
  oComment !: Observable<Comment[]>;
  private serviceURLPosts = 'https://my-json-server.typicode.com/Vincenza-Genuardi/Genu_facebook/posts'
  private serviceURLComments = 'https://my-json-server.typicode.com/Vincenza-Genuardi/Genu_facebook/comments' */
  data !: PostEComment;
  oPosteComm !: Observable<PostEComment>;
  mostra : boolean = false;
  private serviceURLPostEComment = 'https://my-json-server.typicode.com/Vincenza-Genuardi/Genu_facebook/db';

  constructor(public http: HttpClient) {
  this.makeTypedRequest()
  }

  /* makeTypedRequest() : void
  {
    this.oPost = this.http.get<Post[]>(this.serviceURLPosts);
    this.oPost.subscribe( d => {this.dataPost = d;});
    this.oComment = this.http.get<Comment[]>(this.serviceURLComments);
    this.oComment.subscribe( d => {this.dataComment = d;});
  }  */

   makeTypedRequest() : void
  {
    this.oPosteComm = this.http.get<PostEComment>(this.serviceURLPostEComment);
    this.oPosteComm.subscribe( d => {this.data = d;});  
  }
  addPost(autore: HTMLInputElement, testo: HTMLInputElement): boolean{
      const id = this.data.posts.length + 1;
      this.data.posts.push(new Post(id, autore.value, testo.value, 0));
      
      autore.value = '';
      testo.value = '';
      return false;
  }
  addCommento(autore: HTMLInputElement, testo: HTMLInputElement, idPost:number): boolean{
    const id = this.contaNumeroCommenti(idPost) + 1;
    this.data.comments.push(new Comment(id, autore.value, testo.value, idPost));
    autore.value = '';
    testo.value = '';
    return false;
  }

  contaNumeroCommenti(idPost: number): any{
    const comm = this.data.comments.filter(c => c.idpost == idPost)
    return comm.length
  }
  sortedPost(): Post[] {
    return this.data.posts.sort((a: Post, b: Post) => b.like - a.like);
  }
  visualCreaComment(): void {
    if (this.mostra){
      this.mostra = false;
    }else{
      this.mostra = true;
    }
  }
 
  
}
