import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from 'rxjs'

import { Post } from "../post.model";
import { PostService } from "../post.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit, OnDestroy{
  // posts = [
  //   {title: "First post", content: "content of first post"},
  //   {title: "Second post", content: "content of second post"},
  //   {title: "Third post", content: "content of third post"}
  // ];
  posts:Post[] = [];
  private postsSub : Subscription;

  constructor(public postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts();
    this.postsSub = this.postService.getPostUpdateListener()
      .subscribe((posts:Post[]) => {
        this.posts = posts;
      })
  }

  ngOnDestroy()
  {
    this.postsSub.unsubscribe();
  }
}
