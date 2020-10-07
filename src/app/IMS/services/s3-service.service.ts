import { Observable } from 'rxjs';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIconstantsService } from '../apiconstants.service';

@Injectable({
  providedIn: 'root'
})
export class S3ServiceService {
  Fileurl;uploadURL ;baseUrl: string;
  constructor(private http: HttpClient,aPIconstantsService : APIconstantsService) { 
    this.Fileurl = aPIconstantsService.GetPurhcaseOrderFileNames;
    this.uploadURL =aPIconstantsService.UpLoadFile;
    this.baseUrl = aPIconstantsService.BasePurchaseOrderURL;
  }

  GetS3PurchaseFileNames(id : string):Observable<string[]>
  {
   return this.http.get<string[]>(this.baseUrl+this.Fileurl+id);
  }

  public uploadFile(files,_POID)
  {
    if(files.length === 0)
    return;
    let fileToUpload = <File>files;
    const formData = new FormData();
    let fileNameId =_POID+"_"+fileToUpload.name;
    formData.append('file', fileToUpload,fileNameId);
    return this.http.post(this.baseUrl+this.uploadURL, formData, {reportProgress: true, observe: 'events'})
  }
}
