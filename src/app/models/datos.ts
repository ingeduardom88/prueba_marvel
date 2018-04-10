export class Datos {
	public id
	public nombre: string;
	public email: string;
	public personaje: string;
	public url: string;
	public type = {
		'debate': 'debate',
		'wiki': 'wiki',
		'comiclink': 'comiclink',
	};

	constructor() {
		this.nombre = "";
		this.email = "";
		this.personaje = "";
		this.url = "";
		

	}
}