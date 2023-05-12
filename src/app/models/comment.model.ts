export class Comment{
    private id: number;
    private autore: string;
    private testo: string;
    private like: number;

    constructor(id: number, autore: string, testo: string, like:number) {
      this.id = id;
      this.autore = autore;
      this.testo = testo;
      this.like = like;
    }
}