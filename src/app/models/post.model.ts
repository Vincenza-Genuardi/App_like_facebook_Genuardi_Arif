export class Post{
    private id: number;
    private autore: string;
    private testo: string;
    private idpost: number;

    constructor(id: number, autore: string, testo: string, idpost:number) {
      this.id = id;
      this.autore = autore;
      this.testo = testo;
      this.idpost = idpost;
    }
}