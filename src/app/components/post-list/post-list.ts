import { Component, OnInit } from '@angular/core';
import { Post } from '../../data/post';
import { PostService } from '../../services/post.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-list',
  standalone: false,
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})
export class PostList implements OnInit {
  posts$: Observable<Post[]> = new Observable<Post[]>();

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts$ = this.postService.getAll();
  }
}