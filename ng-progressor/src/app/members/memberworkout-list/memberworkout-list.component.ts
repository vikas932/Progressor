import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/shared/member.service';
import { Member } from 'src/app/shared/member.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-memberworkout-list',
  templateUrl: './memberworkout-list.component.html',
  styleUrls: ['./memberworkout-list.component.css']
})
export class MemberworkoutListComponent implements OnInit {

  constructor(private service: MemberService,
    private toastr : ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(mem : Member){
    this.service.formData = Object.assign({}, mem);
  }

  onDelete(id : number){
    if(confirm('Are you sure to delete this record?'))
    this.service.deleteMember(id).subscribe(res => {
      this.service.refreshList();
      this.toastr.warning('Deleted successfully', 'MEM. Progress');
    })
  }
}
