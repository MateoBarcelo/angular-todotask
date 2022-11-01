import { Component, OnInit } from '@angular/core';
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons'
import {faBarChart} from '@fortawesome/free-regular-svg-icons'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  chartbar=faBarChart;
  circleplus = faCirclePlus;
  ngOnInit(): void {
    
  }

}
