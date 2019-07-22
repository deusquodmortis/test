import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private yapilacaklar=new BehaviorSubject<any>(['Asil yapilacak','Baska yapilacaklar']);
  yapi=this.yapilacaklar.asObservable();

  constructor() { }

  baskaYapilacak(yapi){
    this.yapilacaklar.next(yapi);
  }
}
