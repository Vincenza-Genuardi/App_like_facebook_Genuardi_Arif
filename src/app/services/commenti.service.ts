import { Injectable } from '@angular/core';
import { Comment } from '../models/comment.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CommentiService {
  private elencoComm : Comment[] = [];
  oComment !: Observable<Comment[]>;
  serviceURLComment : string = 'https://my-json-server.typicode.com/Vincenza-Genuardi/Genu_facebook/comments'
  constructor(public http: HttpClient) { 
    this.makeTypedRequest();
  }
  makeTypedRequest() : void
    {
      this.oComment = this.http.get<Comment[]>(this.serviceURLComment);
      this.oComment.subscribe( d => {this.elencoComm = d;});  
    }
    getComment(): Comment[] {
      return this.elencoComm;
    } 
    getCommSingoloPost(idPost:number): Comment[]{
      const commenti = this.elencoComm.filter(c => c.idpost == idPost);
      return commenti;
    }
    addComment(comment: Comment): void {
      this.elencoComm.push(comment);
    }
}
