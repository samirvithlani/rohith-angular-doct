import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  constructor(private router:ActivatedRoute,private service:UserService) { }
  id:number
  user:any;

  userGroup = new FormGroup({
    
    uName: new FormControl(),
    uEmail: new FormControl(),
    uPassword: new FormControl(),
  })

  update(){
    this.service.updateUser(this.userGroup.value,this.id).subscribe(res=>{
      alert("User Updated Successfully");
    })
  }

  ngOnInit() {
    this.id = this.router.snapshot.params['id'];

    this.service.getUserById(this.id).subscribe(res=>{

      console.log(res)
      this.user = res;
    })
  }

}
