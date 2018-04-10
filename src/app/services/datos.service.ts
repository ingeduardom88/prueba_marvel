import {Injectable} from "@angular/core";
import {Headers, Http, Response} from "@angular/http";
import {contentHeaders} from "./../components/common/headers";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {ipServer} from "./../components/common/ip";

@Injectable()
export class DatosService {

    private url: string = ipServer + "/api/datos";

    constructor(private http: Http) {}

    // Obtiene todos los registros del sistema
    public getAll(): Promise<any> {
        return this.http
                   .get(this.url)
                   .toPromise()
                   .then(res => res.json())
                   .catch(this.handleError);
    }

    // Guarda el objeto
    public create(object: any): Promise<any> {
        return this.http
                   .post(this.url, JSON.stringify(object), {headers: contentHeaders})
                   .toPromise()
                   .then(res => res.json())
                   .catch(this.handleError);
    }

    // Actualiza el objeto
    public update(object: any): Promise<any> {
        return this.http
                   .put(this.url, JSON.stringify(object), {headers: contentHeaders})
                   .toPromise()
                   .then(res => res.json())
                   .catch(this.handleError);
    }

    // Elimina el objeto
    public delete(object: any): Promise<any> {
        let url: string = this.url + "/" + object.id;
        return this.http
                   .delete(url)
                   .toPromise()
                   .then(res => res.json())
                   .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}