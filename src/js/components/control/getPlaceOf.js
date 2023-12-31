// ottengo degli specifici elementi html. Il contenitore dove appariranno i libri e dove apparira' un avviso in caso la ricerca non sia andata a buon fine

import { researchType } from "./researchType"
import { getValueType } from "../input/getValues"

const cards = {
    DOM: document.getElementById('cards-place'),
    reset: function() { this.DOM.innerHTML = '' }

}

const warning = {
    DOM: document.getElementById('warning'),
    reset: function () { this.DOM.innerHTML = '' },
    print: function () {
        this.DOM.innerHTML = `
        The search has no results. Try searching for a valid ${researchType[getValueType()].type}
        in the page <a href = 'https://openlibrary.org${researchType[getValueType()].urlToSite}'
        target ='_blank'> Open Library </a>
    `
    },
}
 
export { cards, warning }