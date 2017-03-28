import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()

export class FoodService{
    constructor(private http: Http){
}
getFoods(): Observable<any> {
    return this.http.get('http://livrer/api/getFood')
    .map(
        (response: Response) => {
            return response.json().foods;
         }
    );
    
}
getFoodsByCat(id :number): Observable<any> {
    return this.http.get('http://livrer/api/menu/' +id)
    .map(
        (response: Response) => { return response.json().foods;
         }
    );}

}