import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  genders = ["male", "female"];
  forbiddenUserNames = ["Bharath", "Ritish"];
  signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        this.forbiddenUserNameValidation.bind(this),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      gender: new FormControl(this.genders[0]),
    });

    this.signupForm.get('username').valueChanges.subscribe((value)=>{
      console.log("ENTERED USERNAME : "+value);
    });

  }

  onSubmit(): void {
    console.log(this.signupForm);
  }

  forbiddenUserNameValidation(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUserNames.indexOf(control.value) != -1) {
      return { isForbiddenName: true };
    }
  }
}
