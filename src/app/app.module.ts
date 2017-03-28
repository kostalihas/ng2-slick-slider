import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from "./app.routing";
import { FoodService} from "./food.service";

import { FoodComponent } from './food/food.component';
import { FoodsComponent } from './foods/foods.component';
import { NewFoodComponent } from './new-food/new-food.component';
import { SlickSliderComponent } from './slick.slider.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodComponent,
    FoodsComponent,
    NewFoodComponent,
    SlickSliderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
   
  ],
  
  providers: [FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
