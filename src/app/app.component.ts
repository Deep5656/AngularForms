import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm ,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularForms';
  defaultCountry = 'India';

  firstName: string='';
  lastName:string = '';
  email:string = '';
  gen: string ='';
  country:string='';

  

  defaultGender = 'Male';

  gender = [
    {id:'1',value:'Male'},
    {id:'2',value:'Female'},
    {id:'3',value:'Other'},
  ]

  @ViewChild('myForm') form!: NgForm;

  // onSubmit(form:NgForm){
  //   console.log(form);
  // }

  onSubmit(){
    console.log(this.form);
    this.firstName = this.form.value.personalDetails.firstName;
    this.lastName = this.form.value.personalDetails.lastName;
    this.email = this.form.value.personalDetails.email;
    this.gen = this.form.value.personalDetails.gender;
    this.country = this.form.value.personalDetails.country

    // this.form.reset();
  }

  setDefaultValues(){
    // this.form.value.personalDetails.firstName = "Ram";

    // this.form.setValue({
    //   country:'',
    //   gender:'',
    //   hobbies:'',
    //   personalDetails:{
    //     email:'ram@gmail.com',
    //     firstName:'ram',
    //     lastName:'ram',
    //   }
    // });

    this.form.form.patchValue({
      personalDetails:{
        email:'ram@gmail.com',
        firstName:'ram',
        lastName:'ram',
      }  
    })
  }



  // reactive form..

  reactiveForm:FormGroup;

  ngOnInit(): void {
      this.reactiveForm = new FormGroup({
        myDetails: new FormGroup({
          firstname: new FormControl(null, Validators.required),
          lastname: new FormControl(null, Validators.required),
          Email: new FormControl(null, [Validators.required, Validators.email]),
        }),
        gender : new FormControl('male'),
        cntry: new FormControl('India'),
        hobbies: new FormControl(null),
        skills: new FormArray([
          new FormControl(null,Validators.required)
        ])
      });
  }

  onSubmitForm(){
    console.log(this.reactiveForm);
    
  }
  addSkills(){
    (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null,Validators.required));
  }
}
