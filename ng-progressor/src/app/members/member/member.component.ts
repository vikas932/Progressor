import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/shared/member.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  weight = ["pds", "kg"];
  constructor(private service: MemberService,
    private toastr : ToastrService,) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form != null) 
      form.resetForm();
    this.service.formData = {

        MemberID: null,
        FullName: '',
        Workout: '', 
        WorkoutWeight: null,
        AddTime: null,
        WeightType: ''
    }
  }
  private getRegExArray(mask: Array<string>): Array<RegExp | string> {
    return mask.map(a => ((a.startsWith('\\') || a.startsWith('[')) ? new RegExp(a) : a));
  }
  onSubmit(form : NgForm){
    if(form.value.MemberID == null)
    this.insertRecord(form);
    else 
    this.updateRecord(form);
  }

  insertRecord(form : NgForm){
    this.service.postMember(form.value).subscribe(res => {
      this.toastr.success('Inserted successfully', 'MEM. Progress');
      this.resetForm(form);
      this.service.refreshList();
    });
  }
  updateRecord(form : NgForm){
      this.service.putMember(form.value).subscribe(res => {
        this.toastr.info('Updated successfully', 'MEM. Progress');
        this.resetForm(form);
        this.service.refreshList();
      });
  }
}
