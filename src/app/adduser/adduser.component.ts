import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(private service: UserService) { }
  
  userGroup = new FormGroup(
    {
      uName: new FormControl(),
      uEmail: new FormControl(),
      uPassword: new FormControl(),
      value:new FormControl()
    })

  submit() {

    //console.log(this.userGroup.value);

    this.service.addUser(this.userGroup.value).subscribe(res => {
      alert("User Added Successfully");
    })
  }


  ngOnInit() {
  }

}
