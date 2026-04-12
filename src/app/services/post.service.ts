import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post, PostCreateInput } from '../data/post';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = `${environment.apiUrl}/v1/posts`;
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  getAll(): Observable<Post[]> {
    return this.getPosts();
  }

  create(post: PostCreateInput): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, post);
  }
}