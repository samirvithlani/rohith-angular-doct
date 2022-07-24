import { Component, OnInit } from '@angular/core';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

  constructor(private uploadservice:UploadService) { }
  selectedFiles?: FileList;
  currentFileUpload?: File;
  selectFile(event :any){

      this.selectedFiles = event.target.files;
      console.log(this.selectedFiles);
      this.currentFileUpload = this.selectedFiles.item(0);
      this.uplaod();
  }

  uplaod(){

    console.log("upload function...")
      this.uploadservice.upload(this.currentFileUpload).subscribe(res=>{
        alert(JSON.stringify(res));
      })
  }

  ngOnInit() {
  }

}
