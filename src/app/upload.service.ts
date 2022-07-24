import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http:HttpClient) { }

  public upload(file:File):Observable<any>{
    const formData:FormData = new FormData();
    console.log("file...",file);

    formData.append('profilePic',file);
    

    return this.http.post('http://localhost:8080/upload',formData);
  }
}
