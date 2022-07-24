import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private service:UserService) { }
  
  loginGroup = new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  })
   

  login(){
   
    this.service.loginUser(this.loginGroup.value).subscribe(res=>{
      if(res!==null){

        //local storage object
        //stringiFy method will convert object to string
        //localStorage.setItem("user",JSON.stringify(res));
        localStorage.setItem('id',res.uId)
        localStorage.setItem('name',res.uName)
        localStorage.setItem('email',res.uEmail)
      }
    })


  }

  ngOnInit() {
  }

}
