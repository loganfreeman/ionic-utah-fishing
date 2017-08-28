import { Injectable } from '@angular/core';
import { Http, Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';

import cheerio from 'cheerio';


function findTextAndReturnRemainder(target, variable) {
  let index = target.search(variable);
  if(index == -1) {
    return null;
  }
  let chopFront = target.substring(index + variable.length, target.length);
  let result = chopFront.substring(0, chopFront.search(";"));
  return result;
}

function getWaterBody(text,waterbodies = []) {
  if (!text) {
    return;
  }
  let findAndClean = findTextAndReturnRemainder(text, "var waterbody =")
  if (findAndClean) {
    var result = eval(findAndClean);

    result.forEach((waterbody) => {
      //let url = `https://wildlife.utah.gov/hotspots/detailed.php?id=${waterbody[3]}`;
      waterbodies.push({
        title: waterbody[0],
        longitude: waterbody[1],
        latitude: waterbody[2],
        status: waterbody[4],
        kind: waterbody[5],
        link: waterbody[6]
      });
    })
  }
  return waterbodies;
}

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ApiProvider {

  apiRoot: string = 'https://itunes.apple.com/search';

  utahFishingRoot: string = "https://wildlife.utah.gov/hotspots/";

  constructor(private jsonp: Jsonp, private http: Http) {
    console.log('Hello ApiProvider Provider');
  }

  getFilms() {
    return this.http.get('http://swapi.co/api/films').map(res => res.json());
  }

  getTracks(term:string) {
    let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`;
    return this.jsonp.request(apiURL).map(res => res.json());
  }

  getHotSpots() {
    return this.http.get(this.utahFishingRoot).map(raw => raw.text()).map(html => {
      let $ = cheerio.load(html);
      let waterbodies = [];
      $('script').each((index, element) => {
        getWaterBody($(element).html(), waterbodies);
      });
      return waterbodies;
    });
  }

}
