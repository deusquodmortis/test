import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {DataService} from '../data.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  yapilacaklar:any;
  constructor(private _data:DataService,private route:ActivatedRoute,private router:Router)  { 
    //burada activated router ile consola değer çağırdık
    this.route.params.subscribe(res=>console.log(res.id));
  }

  ngOnInit() {
    this._data.yapi.subscribe(res=>this.yapilacaklar=res)
  }
  eveDon(){
    this.router.navigate([''])
  }

}
