import { HttpClient, HttpParams } from '@angular/common/http';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { config } from '../../providers/Config';
import { Heplers } from '../../providers/Helper/Helpers';
/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {
  //https://example.com/api/v1
  url: string = 'http://localhost:24741/api/values/';
  data: any;
  playlist: any;
  newsitems: any;

  constructor(public http: HttpClient, public httpclient: Http, public helper: Heplers, public config: config, public storage: Storage) {
    this.storage.get(this.config.MainURL_Key).then(res => this.url = res)
      .catch(err => helper.showMessage(err, "Error"));

  }

  callGet(endpoint: string, params?: any, reqOpts?: any) {
    debugger;

    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept', 'application/json');
    headers.append('content-type', 'application/json');

    return this.http.post(endpoint, { headers: headers })
      .map(response => {
        //this.data = response.json();
        debugger;
        return (this.data);
      })

    // var headers = new Headers();
    // headers.append('Access-Control-Allow-Origin' , '*');
    // headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    // headers.append('Accept','application/json');
    // headers.append('content-type','application/json');



    // if (!reqOpts) {
    //   reqOpts = {
    //     params: new HttpParams(),
    //     headers:headers
    //   };
    // }

    // // Support easy query params for GET requests
    // if (params) {
    //   reqOpts.params = new HttpParams();
    //   for (let k in params) {
    //     reqOpts.params = reqOpts.params.set(k, params[k]);
    //   }
    //  }

    //return this.http.post(this.url + '/' + endpoint,reqOpts);
    // return new Promise(resolve => {
    //   this.http.get(this.url + '/' + endpoint,reqOpts).subscribe(data => {
    //     //debugger;
    //     //resolve(data);
    //   }, err => {
    //    // debugger;
    //     console.log(err);
    //   });
    // });
  }


  get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params = reqOpts.params.set(k, params[k]);
      }
    }
    debugger;
    //this.url + '/' +
    return this.http.get(endpoint, reqOpts);
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    debugger;
    //this.url + '/' + 
    return this.http.post(endpoint, body, reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.url + '/' + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.patch(this.url + '/' + endpoint, body, reqOpts);
  }
}
