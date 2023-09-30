import { execute } from "../execute";
import * as cf from "../config"

// il bottone per lo scrolling infinito
class BtnScroll {
    constructor() {
        this.text = 'SHOW MORE';
        this.id = 'btn-scroll';
        this.width = '100%';

    }
    createIn(place) {
        this.btn = document.createElement('button');
        this.btn.innerHTML = this.text;
        this.btn.style.width = this.width;

        this.btn.id = this.id;
        $(this.btn).insertAfter(place);
    }
    showOthers(books) {
        books.offset = books.offset + books.limit;
        execute(false, books, cf.warning, cf.cardsPlace)
    }
}

export default function replaceButton(research) {
    let scrolling = new BtnScroll();
    $('#btn-scroll').remove();
    scrolling.createIn(cf.cardsPlace.DOM);
    $('#btn-scroll').on('click', () => scrolling.showOthers(research))

}