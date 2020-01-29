import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  currentPost: Post = { id: 0, title: '', body: '' };
  isEdit: boolean = false;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  onNewPost(post: Post) {
    this.posts.unshift(post);
  }

  onUpdatedPost(post: Post) {
    this.posts.forEach((currentPost, index) => {
      if (post.id === currentPost.id) {
        this.posts.splice(index, 1);
        this.posts.unshift(post);
        this.isEdit = false;
        this.currentPost = { id: 0, title: '', body: '' };
      }
    });
  }

  editPost(post: Post) {
    this.currentPost = post;
    this.isEdit = true;
  }

  removePost(post: Post) {
    if (confirm('are you sure?')) {
      this.postService.removePost(post.id).subscribe(() => {
        this.posts.forEach((currentPost, index) => {
          if (post.id === currentPost.id) {
            this.posts.splice(index, 1);
          }
        });
      });
    }
  }
}
