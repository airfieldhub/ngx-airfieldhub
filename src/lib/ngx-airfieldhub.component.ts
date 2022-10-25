import { Component, OnInit, AfterViewInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
import { NgxAirfieldhubService } from './ngx-airfieldhub.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RemoteLibraryService } from './remote-library.service';

declare var iFrameResize:any;


@Component({
  selector: 'airfieldhub',
  templateUrl: './ngx-airfieldhub.component.html',
  styleUrls: ['./ngx-airfieldhub.component.css']
 
})
export class NgxAirfieldhubComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void { }


}
