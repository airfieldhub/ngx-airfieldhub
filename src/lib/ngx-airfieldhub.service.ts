import { Injectable, Optional } from '@angular/core';

let nextId = 1;

export class AirfieldhubConfig {
  airfieldhub_key = "t";
}

@Injectable({
  providedIn: 'root'
})
export class NgxAirfieldhubService {
  private id = nextId++;

  constructor(@Optional() config?: AirfieldhubConfig) { 
    if(config){
      this._airfieldhub_key = config.airfieldhub_key;
    }
  }

  get airfieldhub_key(){
    return this._airfieldhub_key;
  }

  private _airfieldhub_key = "tt";

}
