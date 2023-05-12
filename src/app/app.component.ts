import { Component } from '@angular/core';
import { Comment } from './models/comment.model';
import { Post } from './models/post.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts !: Post[];
  comments !: Comment[]
  oPost !: Observable<Post>;
  private serviceURL = ''
  

  constructor(public http: HttpClient) {
  this.makeTypedRequest()
  }

  makeTypedRequest(){

  }
}
