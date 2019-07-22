import { Component, OnInit } from '@angular/core';
import {trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[
  trigger('yp',[
    transition('* => *',[
      query(':enter',style({opacity:0}),{optional:true}),

      query(':enter',stagger('300ms',[
         animate('.6s ease-in',keyframes([
           style({opacity:0,transform:'translateY(-75%)',offset:0}),
           style({opacity:.5,transform:'translateY(35px)',offset:.3}),
           style({opacity:1,transform:'translateY(0)',offset:1}),

         ]))]),{optional:true}),
         
      query(':leave',stagger('300ms',[
         animate('.6s ease-in',keyframes([
           style({opacity:1,transform:'translateY(0)',offset:0}),
           style({opacity:.5,transform:'translateY(35px)',offset:.3}),
           style({opacity:0,transform:'translateY(-75%)',offset:1}),

         ]))]),{optional:true})
    ])
  ])

  ]
})
export class HomeComponent implements OnInit {

  itemCount:number;
  btnText:string='Ekle';
  ypText:string='ilk yapilacak';
  yp=[];
  constructor(private _data:DataService) { }

  ngOnInit() {
    this._data.yapi.subscribe(res=>this.yp=res);
    this.itemCount=this.yp.length;
    this._data.baskaYapilacak(this.yp);

  }

  addItem(){
    this.yp.push(this.ypText);
    this.ypText='';
    this.itemCount=this.yp.length;
  }
  removeItem(i){
    this.yp.splice(i,1);
    this.itemCount=this.yp.length;
    this._data.baskaYapilacak(this.yp);
  }
}
