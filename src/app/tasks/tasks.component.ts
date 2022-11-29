import { Component, OnInit } from '@angular/core';
import { DoTask } from '../datamodels/task';
import { AddtaskService } from '../services/addtask.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private addService : AddtaskService) { }

  tasks:DoTask[] = this.addService.getTasks()

  ngOnInit(): void {
    this.tasks.push({id:1,content:"test2",completed:true,isEditing:false})
  }

  onCheck(task:DoTask) {
    
  }

  onDelete(taskemit:DoTask) {
    this.tasks = this.tasks.filter(task => task.id != taskemit.id)
  }

  onEdit(taskemit:DoTask) {
    taskemit.isEditing = true
  }
  



}
