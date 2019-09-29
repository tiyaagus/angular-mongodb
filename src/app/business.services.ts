import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/Http';

@Injectable({
    providedIn: 'root'
})
export class BusinessService {
    constructor(private http: HttpClient) { }

    uri = 'http://localhost:3000/business';

    detailBusiness(id) {
        return this.http.get(`${this.uri}/edit/${id}`);
      }

    getBusiness() {
        return this.http.get(`${this.uri}`);
    }
    deleteBusiness(id) {
        return this.http.get(`${this.uri}/delete/${id}`);
    }
}

