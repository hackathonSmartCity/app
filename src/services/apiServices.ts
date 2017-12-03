import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {
  private apiUrl = 'http://10.20.3.194:5000/';

  constructor(private http: HttpClient) {}

  authFacebook(userData) {
    return this.http.post(this.apiUrl + 'auth/facebook/', userData)
      .toPromise()
      .then((response) =>
      {
        return response;
      })
      .catch((error) =>
      {
        console.error('API Error : ', error.status);
        console.error('API Error : ', JSON.stringify(error));
      });
  }

}
