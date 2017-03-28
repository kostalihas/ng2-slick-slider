import { Component,ViewChild, Input, ElementRef} from '@angular/core';
import * as jQuery from 'jquery';
import 'slick-carousel/slick/slick';

@Component({
    selector: 'slick-slider',
  
    template: `
        <ng-content></ng-content>`,
    styleUrls:['./slick.component.css']  
    })
export class SlickSliderComponent {
  @Input() options: [any];
 $element: any;
 private el : any;
 private start : [any];
// @ViewChild('el') el : ElementRef;
     // this.start = [{setting : "unslick"}];
  constructor( el : ElementRef){
    this.el = el;
    this.start = [{setting : "unslick"}];
     
  }
     /*ngAfterViewInit(){
    this.$element = this.el.nativeElement;   
     }*/
     ngOnInit(){
this.options = [

        {
          variableWidth: true,
          asNavFor:false,
          dots: true,
          focusOnSelect:true,
          swipe:true,
          vertical:true,
  autoplay:true,
  infinite:true,
arrows:true,
  centerMode: true,
  slidesToScroll:1,
  centerPadding: '10px',
  slidesToShow: 3,
  mobileFirst:true,
  responsive: [ {  breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3 } },
        { breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        dots: true,
        slidesToShow: 1,
        }}]}
      ];
     }
    ngAfterViewInit(){
    this.$element = jQuery(this.el.nativeElement).slick(this.options);  
    }

 ngOnChanges() {
//this.$element = jQuery(this.el.nativeElement).slick(this.start);
this.$element = jQuery(this.el.nativeElement).slick(this.options);

 
}


}