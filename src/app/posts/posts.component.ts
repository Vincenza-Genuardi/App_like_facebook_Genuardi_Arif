import { Component, Input } from '@angular/core';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  @Input() post !: Post;

  addLike(){
    this.post.like += 1;
  }

 /*  removeLike(){
    this.post.like -= 1;
  }*/
} 


