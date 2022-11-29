import { Component, OnInit } from '@angular/core';
import { Category } from '../datamodels/category';
import { AddcategoryService } from '../services/addcategory.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private AddCategoryService : AddcategoryService) { }

  ngOnInit(): void {
  }

  categories:Category[] = this.AddCategoryService.getCategories();

}
