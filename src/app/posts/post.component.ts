import { Component, Input } from '@angular/core';
import { Post } from '../models/post.model';
import { Comment } from '../models/comment.model';
import { CommentiService } from '../services/commenti.service';

@Component({
  selector: 'app-posts',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  @Input() post !: Post;
  @Input() comm !: Comment[];
  mostra: boolean = false;
  inserito !: boolean;
  constructor(private commentiService: CommentiService) {}

  addLike() {
    this.post.like += 1;
  }

  /*  removeLike(){
    this.post.like -= 1;
  } */

  addCommento(autore: HTMLInputElement, testo: HTMLInputElement, idPost: number): void {
    if(autore.value !== '' && testo.value !== ''){
      const id = this.comm.length + 1;
      const commentoNuovo = new Comment(id, autore.value, testo.value, idPost);
      this.commentiService.addComment(commentoNuovo);
      autore.value = '';
      testo.value = '';
      this.inserito = true;
    }else if(autore.value === '' && testo.value === ''){
      alert("*ATTENZIONE, I CAMPI AUTORE E TESTO DEVONO ESSERE RIMPITI PER INSERIRE UN NUOVO COMMENTO");
      this.inserito = false;
    }else if(autore.value === ''){
      alert("*ATTENZIONE, IL CAMPO AUTORE DEVE ESSERE RIMPITO PER INSERIRE UN NUOVO COMMENTO");
      this.inserito = false;
    }else if(testo.value === '' ){
      this.inserito = false;
      alert("*ATTENZIONE, IL CAMPO TESTO DEVE ESSERE RIMPITO PER INSERIRE UN NUOVO COMMENTO");
    }
  }

  contaNumeroCommenti(): any {
    return this.comm.length;
  }

  visualCreaComment(): void {
    this.mostra = !this.mostra;
    this.inserito = true;
  }

}
