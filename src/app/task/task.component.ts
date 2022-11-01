import { Component, Input, OnInit } from '@angular/core';
import { DoTask } from '../datamodels/task';
import { faCircleCheck, faCircle, faXmarkCircle, faEdit } from '@fortawesome/free-regular-svg-icons'
import { faFolder } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task:DoTask = new DoTask()
  checkIcon = faCircleCheck;
  uncheckIcon = faCircle;
  deleteIcon = faXmarkCircle;
  editIcon = faEdit;
  
  constructor() { }

  ngOnInit(): void {
  }

  getCompleted() {

  }

  

}
