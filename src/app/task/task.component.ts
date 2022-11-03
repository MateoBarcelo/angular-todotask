import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() oncheck:EventEmitter<DoTask> = new EventEmitter();
  @Output() ondelete:EventEmitter<DoTask> = new EventEmitter();
  @Output() onedit:EventEmitter<DoTask> = new EventEmitter();
  checkIcon = faCircleCheck;
  uncheckIcon = faCircle;
  deleteIcon = faXmarkCircle;
  editIcon = faEdit;
  words = ''
  constructor() { }

  ngOnInit(): void {
  }

  onCheck(task: DoTask) {
    task.completed = !task.completed
    this.oncheck.emit(task)
  }

  onDelete(task:DoTask) {
    this.ondelete.emit(task)
  }

  onEdit(task:DoTask) {
    this.onedit.emit(task)
  }

  onKey(value:string,task:DoTask) {
    task.content = value;
    task.isEditing = false;

  }
  

}
