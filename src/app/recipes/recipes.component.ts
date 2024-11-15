import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ApiService } from '../services/api.service';
import { SearchPipe } from '../pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [HeaderComponent,SearchPipe,FormsModule,NgxPaginationModule],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {

  p: number = 1;
  

  allRecipes:any = []
  dummyAllRecipes:any=[]
  searchKey:string = ""

  constructor(private api:ApiService){}

  ngOnInit(){
    this.getAllRecipes()
  }

  getAllRecipes(){
    this.api.getAllRecipesAPI().subscribe((res)=>{
      this.allRecipes = res
      this.dummyAllRecipes= res
      console.log(this.allRecipes);
      
    })
  }

  filterRecipes(recipeType:string,recipeName:string){
    console.log("inside filter recipes");
    
      this.allRecipes=this.dummyAllRecipes.filter((item:any)=>item[recipeType].includes(recipeName))
  }

}
