import { Component, Input } from "@angular/core";
import { HTMLComponent } from "./HTMLComponent";

@Component({
    template: ""
})
export class HTMLPhotoComponent extends HTMLComponent {
    @Input() image: string = "";

    public getImage(): string {
        return `url('${this.image}')`;
    }
}