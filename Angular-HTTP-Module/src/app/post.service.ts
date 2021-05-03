import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Post } from "./post.model";

@Injectable({
  providedIn: "root",
})
export class PostService {
  private URL: string =
    "https://ng-test-app-fd6c8-default-rtdb.firebaseio.com/posts.json";

  constructor(private http: HttpClient) {}

  createStoryPost(post: Post): Observable<any> {
    return this.http.post<{ key: String }>(this.URL, post,{
      observe : 'response'
    });
  }

  fetchStoryPosts(): Observable<any> {
    return this.http
      .get<{ [key: string]: Post }>(this.URL, {
        headers: new HttpHeaders({
          "cutom-header": "Custom Header",
        }),
        params: new HttpParams()
        .set("print", "pretty")
        .set('name','Punith'),
      })
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
    return this.http.delete(this.URL);
  }
}
