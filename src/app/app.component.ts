import { Component, OnInit } from '@angular/core';
import { Post } from './models/post.model';
import { CommentiService } from './services/commenti.service';
import { Comment } from './models/comment.model';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CommentiService, PostsService]
})
export class AppComponent implements OnInit{
  dataPost !: Post[];
  comment !: Comment[];
  inserito !: boolean;
  constructor(private commentiService: CommentiService, private postsService: PostsService) {
    
  }
  ngOnInit() {
    this.postsService.getPost().subscribe((data) => {
      this.dataPost = data;
      this.dataPost = this.postsService.ordinaPost();
    });
   
  }
  
  addPost(autore: HTMLInputElement, testo: HTMLInputElement): void{
      if (autore.value !== '' && testo.value !== ''){
        const id = this.dataPost.length + 1;
        const newPost = new Post(id, autore.value, testo.value, 0);
        this.postsService.addPost(newPost);
        this.postsService.ordinaPost;
        autore.value = '';
        testo.value = '';
        this.inserito = true;
      }else if(autore.value === '' && testo.value === ''){
        alert("*ATTENZIONE, I CAMPI AUTORE E TESTO DEVONO ESSERE RIMPITI PER INSERIRE UN NUOVO POST");
        this.inserito = false;
      }else if(autore.value === ''){
        alert("*ATTENZIONE, IL CAMPO AUTORE DEVE ESSERE RIMPITO PER INSERIRE UN NUOVO POST");
        this.inserito = false;
      }else if(testo.value === '' ){
        this.inserito = false;
        alert("*ATTENZIONE, IL CAMPO TESTO DEVE ESSERE RIMPITO PER INSERIRE UN NUOVO POST");
      }
      
  }
  postOrdinati(){
    const postOrdinati = this.postsService.ordinaPost();
    return postOrdinati;
  }
  commentiPerPost(id:number): Comment[] {
    const commenti = this.commentiService.getCommSingoloPost(id);
    return commenti;
  } 

  
}
