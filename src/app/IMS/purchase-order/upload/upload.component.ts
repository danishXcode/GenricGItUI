import { S3ServiceService } from './../../services/s3-service.service';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  public message : string;
  public progress: number;
  @Input() _POID: string;
  constructor(private http: HttpClient,private _S3ServiceService : S3ServiceService
    ) { }
  @Output() public onUploadFinished = new EventEmitter();
  public pathsimg:string[];
  ngOnInit(): void {
    this.GetFileNames();
  }
  
  public uploadFile = (files)=>
  {
    if(files.length === 0)
    return;
    let fileToUpload = <File>files[0];

    this._S3ServiceService.uploadFile(fileToUpload,this._POID)
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event.loaded / event.total);
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.onUploadFinished.emit(event.body.toString());
          window.location.reload();
        }
      });
  }

  public GetFileNames()
  {
    this._S3ServiceService.GetS3PurchaseFileNames(this._POID).subscribe({
    next:data=>
    {
      console.log("FileNAmes")
      this.pathsimg = data;
    }  
    })
  }



}
