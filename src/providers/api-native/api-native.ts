import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
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

function getRating(status:string): Array<number> {
  let ratings = {
    "Good": 3,
    "Hot": 4,
    "Fair": 2,
    "Slow": 1,
    "Closed": 0,
    "No recent report": 0
  }
  return Array.from(new Array(ratings[status]), (x,i) => i)
  //return ratings[status];
}

function getDirectionUrl(latitude, longitude) {
  return `http://maps.google.com/?q=${latitude},${longitude}`
}

function getWaterBody(text,waterbodies = []) {
  if (!text) {
    return;
  }
  let findAndClean = findTextAndReturnRemainder(text, "var waterbody =")
  if (findAndClean) {
    var result = eval(findAndClean);

    result.forEach((waterbody) => {
      let url = `https://wildlife.utah.gov/hotspots/detailed.php?id=${waterbody[3]}`;
      waterbodies.push({
        title: waterbody[0],
        latitude: waterbody[1],
        longitude: waterbody[2],
        status: waterbody[4],
        rating: getRating(waterbody[4]),
        kind: waterbody[5],
        link: url,
        direction: getDirectionUrl(waterbody[1], waterbody[2])
      });
    })
  }
  return waterbodies;
}

/*
  Generated class for the ApiNativeProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ApiNativeProvider {

  utahFishingRoot: string = "https://wildlife.utah.gov/hotspots/";

  utahStockingRoot: string = "https://dwrapps.utah.gov/fishstocking/Fish";

  utahFishingSpeciesRoot: string = "http://www.utahfishinginfo.com/utahfish/";

  utahFishingInfoRoot: string = "http://www.utahfishinginfo.com/";

  constructor(public http: HTTP) {
    console.log('Hello ApiNativeProvider Provider');
  }

  getFishingSpecies() {
    let promise = this.http.get(this.utahFishingSpeciesRoot, {}, {}).then(raw => raw.data).then(html => {
      let $ = cheerio.load(html);
      let items = [];
      $('#center table tbody td').each((index, element) => {
        let item = {
          title: '',
          image: '',
          link: ''
        };
        let link = $(element).children('a').first();
        let img = $(link).children('img').first();
        item.title = $(element).text();
        item.image = `${this.utahFishingInfoRoot}${$(img).attr('src').substring(3)}`;
        item.link = `${this.utahFishingSpeciesRoot}${$(link).attr('href')}`;
        items.push(item);
      });

      return items;
    });

    return Observable.fromPromise(promise);
  }

  getFishingSpeciesDetail(link) {
    let promise = this.http.get(link, {}, {}).then(raw => raw.data).then(html => {
      let $ = cheerio.load(html);
      let summary = $(".full-article h4 + p").text();
      let details = $(".full-article ul").text();
      let obj = {
        summary: summary,
        details: details
      }
      $(".full-article ul li").each((index, element) => {
        let entry = $(element).text().split(":");
        obj[entry[0].replace(" ", "_")] = entry[1].trim();
      });

      return obj;
    })

    return Observable.fromPromise(promise);
  }

  getStockingReport() {
    let promise = this.http.get(this.utahStockingRoot, {}, {}).then(raw => raw.data).then(html => {
      let $ = cheerio.load(html);
      let items = [];
      $('#fishTable tbody tr').each((index, element) => {
        let item = {};

        $(element).children('td').each((index, child) => {
          let td = $(child);
          let key = td.attr('class');
          item[key] = td.text();
        });

        items.push(item);
      });

      return items;
    });

    return Observable.fromPromise(promise);
  }

  getHotSpots() {
    let promise = this.http.get(this.utahFishingRoot, {}, {}).then(raw => raw.data).then(html => {
      let $ = cheerio.load(html);
      let waterbodies = [];
      $('script').each((index, element) => {
        getWaterBody($(element).html(), waterbodies);
      });
      return waterbodies;
    });

    return Observable.fromPromise(promise);
  }

  getHotSpotDetail(link) {
    let promise = this.http.get(link, {}, {}).then(raw => raw.data).then(html => {
      let $ = cheerio.load(html);
      let summary = $(".full-article h4 + p").text();
      let details = $(".full-article ul").text();
      let obj = {
        summary: summary,
        details: details
      }
      $(".full-article ul li").each((index, element) => {
        let entry = $(element).text().split(":");
        obj[entry[0].replace(" ", "_")] = entry[1].trim();
      });

      return obj;
    })

    return Observable.fromPromise(promise);
  }

}
