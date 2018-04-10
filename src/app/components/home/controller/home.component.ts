import { Component, ViewChild, OnInit, Inject, ElementRef } from "@angular/core";
import { Datos } from './../../../models/datos'
import { DatosService } from "./../../../services/datos.service";
import { PersonajesService } from "./../../../services/personajes.services";
declare var jQuery: any;


@Component({
    selector: 'home',
    templateUrl: './../views/home.html',
    providers: [
                PersonajesService,
        DatosService
    ],
    styleUrls: ['./../../../app.component.css']

})

export class HomeComponent {
    public title = 'ComicDiscover.com';
    public _object: Datos;
    public personajes: any;
    private insertView: boolean = true;
    private _elRef: ElementRef;


    constructor( @Inject(ElementRef) _elRef: ElementRef,
        private personajesServices: PersonajesService,
        private datosService: DatosService) {
        this._object = new Datos();

    }

    ngOnInit() {
         this.loadData();
    }

    private loadData(): void {
        this.loadArray();
        this.loadPersonajes();
    }

    private loadPersonajes(): void {
        this.personajesServices
            .getAll()
            .then(res => {
                if (res.code == 200) {
                    this.personajes = res.data.results;
                    console.log(this.personajes);
                } else {
                    alert(res.message);
                }
            })
            .catch(error => { console.log(error); });
    }

    private loadArray() {
        this.datosService
            .getAll()
            .then(res => {
                if (res.success) {
                    this._object = res.object;
                    console.log(this._object);
                } else {
                    alert(res.message);
                }
            })
            .catch(error => { console.log(error); });
    }



    protected onSubmit() {
        if (this._object.nombre.trim() != '' && this._object.email.trim() != '') {
            this.insertView = false;
            
        }
    }

    private save(): void {
        this.datosService
            .create(this._object)
            .then(res => {
                if (res.success) {
                    alert(res.message);
                } else {
                    alert(res.message);
                }
            })
            .catch(error => { console.log(error); });
    }

    private enlace(personaje, tipo, url){
        console.log(personaje);
        console.log(tipo);
        this._object.personaje = personaje.name;
        this._object.url = url;
        this._object.type = tipo;;
        this.save();
    }

}