import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProductsService } from './products.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { RestService } from './rest.service';
import { Employee } from './Employee';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { login } from './login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp2';
  strName = "Chaitanya";
  strFile="tom.jpg";
  ButtonClicked()
  {
    alert ("Happy Birthday Chaitanya....");
  }
  login=true;
  registration=false;
  toggleForm(){
    if(this.login==true)
    {
      this.login=false;
      this.registration=true;
    }
    else{
      this.registration=false;
      this.login=true;
    }
  }
  prodLst=[
    {"productId": 101, "productName":"Tv",              "description":"Samsung TV",         "cost":55000},
    {"productId": 102, "productName":"Mobile",          "description":"Samsung Mobile",     "cost":35000},
    {"productId": 103, "productName":"Washing Machine", "description":"LG Washing Machine", "cost":55000},
    {"productId": 104, "productName":"Mixer",           "description":"Butterfly Mixer",    "cost":5000},
    {"productId": 105, "productName":"AC",              "description":"BlueStar AC",        "cost":35000}
  ]

  DisplayProductData: boolean = false;

  displayData(){
    this.DisplayProductData=true;
  }

SwitchNumber="1";
connect = true;
toggleInternet(){
  this.connect=this.connect==true?false:true;
}

strColor="red";
fontSize=10;
strText="Hello, Welcome Chaitanya..!"

Morning=true;
toggleDay(){
  this.Morning=this.Morning?false:true;
}
@ViewChild('inputBox') inputRef! : ElementRef
changeStyleWithViewChild(){
  this.inputRef.nativeElement.style.backgroundColor='green';
  this.inputRef.nativeElement.style.fontSize='50px';
  this.inputRef.nativeElement.style.borderRadius='15px';
  this.inputRef.nativeElement.style.boxShadow='10px 10px';

  alert ('Data Entered in the Input box is :'+this.inputRef.nativeElement.value);
}

// constructor(private prodService : ProductsService){}

prodLst1 : any;
displayProductsData = false;
displayProductData(){
  this.prodLst1 = this.prodService.getAllProductsFromService();
  this.displayProductsData=true;
}
strLoginFormResult='';
loginuser=false;
imageList = [
  { 
    url: 'tom.jpg',
    title: 'Tom and Jerry', 
    description: 'Tom & Jerry is my favourite Cartoon',
    videoUrl : 'https://youtu.be/Mstx_8Y2Wps?si=DyTn2L91bTl2o_Yj'
  },
  { 
    url: 'tom1.jpg',
    title: 'Tom and Jerry', 
    description: 'Tom & Jerry is my favourite Cartoon',
    videoUrl : 'https://youtu.be/yR1wbqGz06c?si=IPdRqB_pSjqYGnJQ'
  },
  { 
    url: 'tom2.jpg',
    title: 'Tom and Jerry', 
    description: 'Tom & Jerry is my favourite Cartoon',
    videoUrl : 'https://youtu.be/zp7zPEKVF7I?si=ew329npJ1ogb5uM9'
  },
  { 
    url: 'tom3.jpg',
    title: 'Tom and Jerry', 
    description: 'Tom & Jerry is my favourite Cartoon',
    videoUrl : 'https://youtu.be/MfJnv2l6bls?si=hCgKPSgQnQZcRjD6'
  },
  { 
    url: 'tom.jpg',
    title: 'Tom and Jerry', 
    description: 'Tom & Jerry is my favourite Cartoon',
    videoUrl : 'https://youtu.be/HNIt0Ougk0k?si=tpmIacMU75MD8eUw'
  },
  { 
    url: 'tom1.jpg',
    title: 'Tom and Jerry', 
    description: 'Tom & Jerry is my favourite Cartoon',
    videoUrl : 'https://youtu.be/s0VruXmA__k?si=NQ-kAB94I8EDxTaC' 
  },
  { 
    url: 'tom2.jpg',
    title: 'Tom and Jerry', 
    description: 'Tom & Jerry is my favourite Cartoon',
    videoUrl : 'https://youtu.be/aG4CaJuQxQ8?si=L2KfZFACexDhIjfK'  
  },
  { 
    url: 'tom3.jpg',
    title: 'Tom and Jerry', 
    description: 'Tom & Jerry is my favourite Cartoon',
    videoUrl : 'https://youtu.be/uXxikS1hgdk?si=Kso7ynXEQO1GgVXG' 
  },
  { 
    url: 'tom.jpg',
    title: 'Tom and Jerry', 
    description: 'Tom & Jerry is my favourite Cartoon',
    videoUrl : 'https://youtu.be/cbfpiuPhaP8?si=w0cqt79n3-5crvQZ' 
  },
  { 
    url: 'tom1.jpg',
    title: 'Tom and Jerry', 
    description: 'Tom & Jerry is my favourite Cartoon',
    videoUrl : 'https://youtu.be/qHl8E24Eznw?si=yQ2ESebm8MPsfIpF'  
  },
  { 
    url: 'tom2.jpg',
    title: 'Tom and Jerry', 
    description: 'Tom & Jerry is my favourite Cartoon',
    videoUrl : 'https://youtu.be/id7qgnqIZtg?si=xpnWq91Sv2aOsP1R' 
  },
  { 
    url: 'tom3.jpg',
    title: 'Tom and Jerry', 
    description: 'Tom & Jerry is my favourite Cartoon',
    videoUrl : 'https://youtu.be/2cdxTXZ5_6U?si=lvl4PFvZciBYv62b' 
  }
];
registration1 = false;
onSubmitTemplateDriven(loginform : any){
  let strUserId = loginform.value.userId;
  let pwd = loginform.value.pwd;

  if(strUserId=='Chaitanya' && pwd=='admin'){
    this.strLoginFormResult="You are a Valid User..!";
    this.login1=false;
    this.authService.setAuthentication();
    this.router.navigate(['/home']);
  }
  else{
    this.strLoginFormResult="Invalid User Credentials..!";
    if(this.registration1==false)
      this.login1=true;
    else
      this.login1=false;
  }
}

toggleForm1(){
  if(this.login1==true)
  {
    this.login1=false;
    this.registration1=true;
  }
  else{
    this.registration1=false;
    this.login1=true;
  }
}

registrationForm! : FormGroup;
EmployeeForm! : FormGroup;

constructor(private prodService : ProductsService,private authService : AuthService ,private fb : FormBuilder, private rest:RestService, private router : Router, private http: HttpClient){ //FormBuilder is used to reduce the boilerplate code. And it is used to creating instances of a FormControl, FormGroup, or FormArray. It reduces the amount of boilerplate needed to build complex forms.
  this.registrationForm = this.fb.group({
    userId : ['',Validators.required],
    pwd : ['', [Validators.required, Validators.minLength(5), this.passwordValidator]],
    confirmPwd : ['', [Validators.required, Validators.minLength(5), this.passwordValidator]]
  })

  this.EmployeeForm = this.fb.group({
    id : [''],
    name : [''],
    dept : [''],
    designation : ['']
  })
}

DisplayAddOrEditForm = false;
strAddOrEditDisplayTitle = '';
addEmployeeRecord(){
  this.DisplayAddOrEditForm = true;
  this.strAddOrEditDisplayTitle = "Add Record";
}

AddOrEditEmployeeRecord(){
  let id = this.EmployeeForm.get('id')?.value;
  let name = this.EmployeeForm.get('name')?.value;
  let dept = this.EmployeeForm.get('dept')?.value;
  let designation = this.EmployeeForm.get('designation')?.value;

  console.log('Id '+id);
  console.log('Name '+name);
  console.log('Dept '+dept);
  console.log('Designation '+designation);

  let empObj = new Employee(id, name, dept, designation);
  if( this.strAddOrEditDisplayTitle=="Add Record"){
  this.rest.insertEmployeeRecord(empObj).subscribe({
    next : (data) => {
                      alert ('Record Inserted successfully..');
                      this.getAllEmployees()
                      },
    error : (err) => alert(err),
    complete : () => console.log('Insert Operation is successfull')
  })
  }
  else if(this.strAddOrEditDisplayTitle=="Edit Record"){
    this.rest.updateEmployeeRecord(empObj).subscribe({
      next : (data) => { alert('Record Updated Successfully...');
                         this.getAllEmployees()
                       },
      error : (err) => alert(err),
      complete : () => console.log('Update Operation is successfully...')
    })

  }

}

passwordValidator(control : AbstractControl) : ValidationErrors | null{
  const value = control.value;

  if(value.startsWith('Cha')==false)
    return {invalidPassword : 'Password must be start with Cha'};
  return null;
}

strRegistrationMsg='';
RegistrationFormSubmit(){
  let userId = this.registrationForm.get(['userId'])?.value;
  let pwd = this.registrationForm.get(['pwd'])?.value;
  let confirmPwd = this.registrationForm.get(['confirmPwd'])?.value;

  if(pwd==confirmPwd){
    this.strRegistrationMsg="Registration is Successfull...";
  }
  else
    this.strRegistrationMsg="Password is not matching with confirm Password..."
}
get userId(){return this.registrationForm.get('userId')}
get pwd(){return this.registrationForm.get('pwd')}
get confirmPwd(){return this.registrationForm.get('confirmPwd')}

empLst : any;
getAllEmployees(){
  this.rest.getAllEmployeesFromService().subscribe({
    next : (data) => {this.empLst=data;},
    error : (err) => alert (err),
    complete : () => console.log("Fetching data from server is complete....")
  })
}

carLst : any;
getAllCartoons(){
  this.rest.getAllCartoonsFromService().subscribe({
    next : (data) => {this.carLst=data;},
    error : (err) => alert (err),
    complete : () => console.log("Fetching data from server is complete....")
  })
}



onEditEmployeeRecord(employeeRecord : Employee){
  // alert("Given Employee Record : "+JSON.stringify(employeeRecord));
  this.DisplayAddOrEditForm = true;
  this.strAddOrEditDisplayTitle = "Edit Record";
  this.EmployeeForm.patchValue({
    id : employeeRecord.id,
    name : employeeRecord.name,
    dept : employeeRecord.dept,
    designation : employeeRecord.designation
  })
}

onDeleteEmployeeRecord(id : number){
  // alert("Given Employee id is : "+JSON.stringify(id));
  this.rest.deleteEmployeeRecord(id).subscribe({
    next : (data) => {
                        alert ( "Record Deleted Successfully");
                        this.getAllEmployees()
                     },
    error : (err) => alert(err),
    complete : () => console.log("Deleted Record Successfully...")
  })
}
// loginForm = false;
login1=false;
userLoggedIn(){
  // this.authService.setAuthentication();
  this.login1 = true;
}
userLoggedOut(){
  this.authService.setAuthenticationFalse();
  // document.body.innerHTML = '';
  this.login1 = true;
  this.router.navigate(['/'])
}
loginValidation(){

}
strParentData="Hello, Data from the parent file..!"
}

