import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {
  @Input() taskToShow: {};

  constructor() { }

  ngOnInit() {
    console.log('task component')
    // console.log(this.taskToShow)
  }

}
