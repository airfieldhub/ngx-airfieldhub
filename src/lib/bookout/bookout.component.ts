import { Component, OnInit, AfterViewInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RemoteLibraryService } from '../remote-library.service';
import { NgxAirfieldhubService } from '../ngx-airfieldhub.service';

declare var iFrameResize:any;

@Component({
  selector: 'airfieldhub-bookout',
  templateUrl: './bookout.component.html',
  styleUrls: ['./bookout.component.css']
})
export class BookoutComponent implements OnInit {

  airfieldhub_key = "";

  iframeTag: string = "";

  constructor(ngxAirfieldhubService: NgxAirfieldhubService, public sanitizer: DomSanitizer, private el: ElementRef,
    private renderer: Renderer2,
    public remoteLibraryService: RemoteLibraryService) { 
    this.airfieldhub_key = ngxAirfieldhubService.airfieldhub_key;
  }
  
  ngOnInit(): void {
    this.iframeTag = `
      <iframe src="https://airfieldhub.com/widget.html/departure/`+this.airfieldhub_key+`/" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
      `;
  }

  ngAfterViewInit(): void {
    const scriptArray: Promise<any>[] = [
      this.remoteLibraryService.loadScript('/assets/iframeResizer.js').toPromise(),
    ];
    Promise.all(scriptArray).then(_ => {
      iFrameResize({
        log: true,
        checkOrigin: false,
        sizeWidth: false,
        minWidth: 250,
        heightCalculationMethod: 'lowestElement',
      }, 'iframe');

      setTimeout(() => {
        const iframe = this.el.nativeElement.querySelector('iframe');
        this.renderer.setStyle(iframe, 'width', '100%'); //replaced from 98vw to be 100% of the container
        this.renderer.setAttribute(iframe, 'width', '100%');
      }, 200);
    });
  }

  ngOnDestroy() {
    try {
      const iframe  = this.el.nativeElement.querySelector('iframe');
      iframe.iframeResizer.close();
    } catch(ifErr) {
      console.warn('Couldn\'t close the iframe');
    }
    this.iframeTag = "";
  }

}
