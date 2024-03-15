import { Component, Input } from "@angular/core";
import { HTMLComponent } from "./HTMLComponent";

@Component({
    template: ""
})
export class HTMLWelcomeUserComponent extends HTMLComponent {
    @Input() public username: string  = "";
}