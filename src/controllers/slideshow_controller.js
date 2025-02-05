import {Controller} from "@hotwired/stimulus";

export default class extends Controller {
    static targets = ["slide"];

    initialize() {
        this.showCurrentSlide()
    }

    next(){
        this.index++
    }

    showCurrentSlide(){
        this.slideTargets.forEach((el,i) => {
            el.classList.toggle("slide--current", this.index === i)
        })
    }

    get index(){
        return parseInt(this.data.get("index"))
    }

    set index(value){
        this.data.set("index", value);
        this.showCurrentSlide()
    }
}