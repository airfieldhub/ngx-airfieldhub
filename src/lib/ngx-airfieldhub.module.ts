import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { NgxAirfieldhubComponent } from './ngx-airfieldhub.component';
import { CommonModule } from '@angular/common'; 
import { NgxAirfieldhubService, AirfieldhubConfig } from './ngx-airfieldhub.service';

//import { IframeAutoHeightDirective } from './iframe.directive';,
//    IframeAutoHeightDirective

import { SafePipe } from './safe.pipe';
import { BookoutComponent } from './bookout/bookout.component';
import { PprComponent } from './ppr/ppr.component'


@NgModule({
  declarations: [
    NgxAirfieldhubComponent,
    SafePipe,
    BookoutComponent,
    PprComponent
  ],
  imports: [CommonModule],
  exports: [
    NgxAirfieldhubComponent,
    BookoutComponent,
    PprComponent
  ]
})

export class NgxAirfieldhubModule {

  constructor(@Optional() @SkipSelf() parentModule?: NgxAirfieldhubModule){
    if(parentModule){
      throw new Error (
        'NgxAirfieldHub module is already loaded, import it in AppModule only'
        );
      }
    }
  

  public static forRoot(config: AirfieldhubConfig): ModuleWithProviders<NgxAirfieldhubModule> {
    console.log("AIRFIELDHUB : ", config);
    return {
      ngModule: NgxAirfieldhubModule,
      providers: [
        {provide: NgxAirfieldhubService, useValue: config}
      ]
    };

  }

}
