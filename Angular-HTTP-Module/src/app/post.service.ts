import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Post } from "./post.model";

@Injectable({
  providedIn: "root",
})
export class PostService {
  constructor(private http: HttpClient) {}

  createStoryPost(post: Post): Observable<any> {
    return this.http.post<{ key: String }>(
      "https://ng-test-app-fd6c8-default-rtdb.firebaseio.com/posts.json",
      post
    );
  }

  fetchStoryPosts(): Observable<any> {
    return this.http
      .get<{ [key: string]: Post }>(
        "https://ng-test-app-fd6c8-default-rtdb.firebaseio.com/posts.json"
      )
      .pipe(
        map((posts) => {
          let postArray: Post[] = [];
          for (const id in posts) {
            if (posts.hasOwnProperty(id)) {
              postArray.push({ ...posts[id], id: id });
            }
          }
          return postArray;
        })
      );
  }

  clearStoryPosts(): Observable<any> {
    return this.http.delete(
      "https://ng-test-app-fd6c8-default-rtdb.firebaseio.com/posts.json"
    );
  }
}
