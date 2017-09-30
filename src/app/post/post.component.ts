import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post/post.service';
import { Post } from '../service/post/post';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService]
})
export class PostComponent implements OnInit {
  postData: Post[];
  constructor(private postService: PostService) { }

  ngOnInit() {
    console.log('this is post component');
    this.postService.getPosts().subscribe((data) => this.postData = data);
  }

}
