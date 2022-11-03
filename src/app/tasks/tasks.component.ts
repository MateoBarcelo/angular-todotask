import { Component, OnInit } from '@angular/core';
import { DoTask } from '../datamodels/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor() { }
  tasks:DoTask[] = [{id:0,content:"test",completed:true,isEditing:false}]

  ngOnInit(): void {
    this.tasks.push({id:1,content:"test2",completed:true,isEditing:false})
  }

  onCheck(task:DoTask) {
    
  }

  onDelete(taskemit:DoTask) {
    this.tasks = this.tasks.filter(task => task.content != taskemit.content)
  }

  onEdit(taskemit:DoTask) {
    taskemit.isEditing = true
  }

  



}
