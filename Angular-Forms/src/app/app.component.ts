import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  questionAnswered: string = "";
  @ViewChild("form") userForm: NgForm;
  user = {
    username : "",
    email : "",
    secret : "",
    answer : ""
  }


  suggestUserName() {
    const suggestedName = "Superuser";
    this.userForm.form.patchValue({
      username: suggestedName,
    });
  }

  onSubmit(): void {
    this.user.username = this.userForm.value.username;
    this.user.email = this.userForm.value.email;
    this.user.secret = this.userForm.value.secretQuestion;
    this.user.answer = this.userForm.value.questionAnswered;
    console.table(this.user)
    this.userForm.reset();
  }
}
