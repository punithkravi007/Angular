import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post } from "./post.model";
import { PostService } from "./post.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  error : string;

  constructor(private http: HttpClient, private postService: PostService) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    this.postService.createStoryPost(postData).subscribe(
      (responseData) => {
        this.error = "";
        this.fetchPosts();
      },
      (error) => {
        this.error = error.message;
      }
    );
  }

  onFetchPosts() {
    // Send Http request
  }

  onClearPosts() {
    this.postService.clearStoryPosts().subscribe((response) => {
      console.log(response);
      this.fetchPosts();
    });
  }

  fetchPosts() {
    this.postService.fetchStoryPosts().subscribe((posts) => {
      this.error = "";
      this.loadedPosts = posts;
    }, (error)=>{
      this.error = error.message;
    });
  }
}
