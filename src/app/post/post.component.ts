import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post/post.service';
import { Post } from '../service/post/post';
import { HttpEventType, HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService]
})
export class PostComponent implements OnInit {
  postData: Post[];
  post: Post = new Post();
  constructor(private postService: PostService) { }

  ngOnInit() {
    // console.log('this is post component');
    // this.postService.getPosts().subscribe((data) => this.postData = data);

    this.postService.getPostsData().subscribe((event) => {
      if (event.type === HttpEventType.DownloadProgress) {
        console.log(event.total)
        console.log(event.loaded);
        let totalData= event.total === undefined ? event.loaded :  event.total ;
        let percentage = Math.round(100 * event.loaded / totalData)
        console.log(percentage);
      }
      else if (event instanceof HttpResponse) {
        this.postData = <Post[]>event.body;
      }

    });
  }

  addPost() {
    this.postService.addPost(this.post).subscribe((data) => console.log(data));
    this.post = new Post();
  }

}
