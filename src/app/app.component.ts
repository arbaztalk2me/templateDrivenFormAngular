import { Component } from '@angular/core';
import { FormGroup,NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'templateDrivenForm';
  defaultCountry:string="India"
  formData:any;

  genderData=[
    {
      for:"male",
      id:"male",
      label:"Male",
      value:"male"
    },
    {
      for:"female",
      id:"female",
      label:"Female",
      value:"female"
    },
    {
      for:"others",
      id:"others",
      label:"Others",
      value:"others"
    }
  ]

  showContent:boolean=false;
  
@ViewChild('templateRef') formRef:NgForm
  

  handleSubmit(){
    console.log(this.formRef)
    this.formData=this.formRef.value;
    this.showContent=this.formRef?.valid;
    console.log(this.formData)
    this.formRef.reset();
  }


}
