import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/shared/member.service';
import { Member } from 'src/app/shared/member.model';

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})
export class MyChartComponent implements OnInit {
  constructor(private service: MemberService) { }
  public barChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true
  };
  public barChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    
  ];
    // {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}
    // ];
    //barChartData.data = 
  ngOnInit() {
    this.getWorkoutData( this.service.list, this.barChartData)
  }

  getWorkoutData(mem : Member[], bar){
    debugger
    var y =[];
    for(let x in mem)
    if (mem[x].Workout == 'squat'){
      y[x]  = mem[x].WorkoutWeight
    }
    var obj = { "data": y, "label": 'Series A'};
    //bar['data[]'] = mem[x].WorkoutWeight;
    //bar.push({data: [mem[x].WorkoutWeight]});
    bar.push(obj);
    return bar;
  };
}