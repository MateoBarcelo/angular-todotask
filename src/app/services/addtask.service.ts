import { Injectable } from '@angular/core';
import { DoTask } from '../datamodels/task';

@Injectable({
  providedIn: 'root'
})
export class AddtaskService {

  constructor() { }

  tasks:DoTask[] = [{id:0,content:"test",completed:true,isEditing:false}]

  public getTasks() {
    return this.tasks
  }

  public addTask(task:DoTask) {
    this.tasks.push(task)
  }

  public generateID() {
    
  }
}
