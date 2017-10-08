import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Post } from './post';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts', { headers: new HttpHeaders().set('token', 'testtoken') });
  }

  addPost(post: Post) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', post);
  }

  getPostsData() {
    let request = new HttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts', { reportProgress: true });
    return this.http.request(request);
  }

}
