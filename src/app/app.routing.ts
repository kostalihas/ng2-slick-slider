import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FoodsComponent } from "./foods/foods.component";
import { NewFoodComponent } from "./new-food/new-food.component";

const APP_ROUTES: Routes = [
  { path: '', component: FoodsComponent },
  { path: 'new-food', component: NewFoodComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
