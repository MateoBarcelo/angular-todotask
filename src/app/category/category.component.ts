import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../datamodels/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  @Input() category:Category = new Category()

}
