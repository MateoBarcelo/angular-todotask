import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons'
import {faBarChart} from '@fortawesome/free-regular-svg-icons'
import { AddtaskService } from '../services/addtask.service';
import { DoTask } from '../datamodels/task';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() onaddtask = new EventEmitter();

  constructor(private addService : AddtaskService) { }

  chartbar=faBarChart;
  circleplus = faCirclePlus;
  ngOnInit(): void {
    
  }

  onAddTask() {
    const task = new DoTask()
    task.isEditing = true;
    task.id = this.addService.getTasks().length + 1;
    this.addService.addTask(task)
  }

}
