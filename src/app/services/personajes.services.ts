import {Injectable} from "@angular/core";
import {Headers, Http, Response} from "@angular/http";
import {contentHeaders} from "./../components/common/headers";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";

@Injectable()
export class PersonajesService {

    private url: string = "https://gateway.marvel.com:443/v1/public/characters?limit=6&apikey=41177ccd61737637d3500014940a4348&hash=e5e66c383c2fa822ebd6b4cbf59d2eab&ts=1";

    constructor(private http: Http) {}

    // Obtiene todos los registros del sistema
    public getAll(): Promise<any> {
        return this.http
                   .get(this.url)
                   .toPromise()
                   .then(res => res.json())
                   .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}