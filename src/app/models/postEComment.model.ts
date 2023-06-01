import { Post } from "./post.model";
import { Comment } from "./comment.model";
export class PostEComment{
    public posts: Post[];
    public comments: Comment[];

    constructor(posts: Post[], comments: Comment[]) {
      this.posts = posts;
      this.comments = comments;
    }
}