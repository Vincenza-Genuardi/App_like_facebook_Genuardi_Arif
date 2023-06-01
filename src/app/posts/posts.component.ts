import { Component, Input } from '@angular/core';
import { Post } from '../models/post.model';
import { Comment } from '../models/comment.model';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  @Input() post !: Post;
  @Input() comm !: Comment[];
  mostra: boolean = false;
  addLike(){
    this.post.like += 1;
  }

 /*  removeLike(){
    this.post.like -= 1;
  }*/
  addCommento(autore: HTMLInputElement, testo: HTMLInputElement, idPost:number): any{
    const id = this.comm.length + 1;
    const commentoNuovo=(new Comment(id, autore.value, testo.value, idPost));
    this.comm.push(commentoNuovo);
    autore.value = '';
    testo.value = '';
    return commentoNuovo;
  } 
    contaNumeroCommenti(): any{
    return this.comm.length;
   } 
   visualCreaComment(): void {
    if (this.mostra){
      this.mostra = false;
    }else{
      this.mostra = true;
    }
  } 
} 


