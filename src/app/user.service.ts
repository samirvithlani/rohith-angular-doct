import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public addUser(user: any): Observable<any> {

    return this.http.post("http://localhost:8080/adduser", user);
  }
  public listUser(): Observable<any> {

    return this.http.get("http://localhost:8080/users");
  }

  public deleteUser(uId: number): Observable<any> {

    return this.http.delete("http://localhost:8080/delete/" + uId);
  }

  public getUserById(uId: number): Observable<any> {

    return this.http.get("http://localhost:8080/users/" + uId);
  }

  public updateUser(user: any,id:number): Observable<any> {

    var data = {
      uId: id,
      uName: user.uName,
      uEmail: user.uEmail,
      uPassword: user.uPassword
    }
    return this.http.put("http://localhost:8080/updateuser", data);
  }

  public loginUser(user:any):Observable<any>{

    console.log(user);

    return this.http.post("http://localhost:8080/userlogin",user);
  }

}
