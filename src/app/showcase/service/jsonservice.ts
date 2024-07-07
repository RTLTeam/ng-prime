import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class JsonService {
    constructor(private http: HttpClient) {}

    getVersions() {
        return this.http
            .get<any>('https://www.primefaces.org/ng_prime/versions.json')
            .toPromise()
            .then((res) => res.versions)
            .then((data) => {
                return data;
            });
    }

    getAnnouncement() {
        return this.http
            .get<any>('https://www.primefaces.org/cdn/news/ng_prime.json')
            .toPromise()
            .then((data) => {
                return data;
            });
    }
}
