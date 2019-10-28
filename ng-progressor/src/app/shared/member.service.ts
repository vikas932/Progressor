import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { HttpClient} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class MemberService {

  formData : Member;
  list : Member[];
  readonly rootURL = "http://localhost:64171/api";
  constructor(private http : HttpClient) { }

  postMember(formData : Member){
    return this.http.post(this.rootURL + '/Member', formData);
  }

  refreshList(){
    this.http.get(this.rootURL + '/Member')
    .toPromise().then(res => this.list = res as Member[]);
  }

  putMember(formData : Member){
    return this.http.put(this.rootURL + '/Member/'+formData.MemberID , formData);
  }

  deleteMember(id : number){
    return this.http.delete(this.rootURL + '/Member/'+id)
  }
}
