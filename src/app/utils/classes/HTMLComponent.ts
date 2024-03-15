import { Component, Input } from "@angular/core";

@Component({
    selector: '',
    standalone: true,
    template: ""
})
export class HTMLComponent {
    @Input() public size: number = 0;


    // formating the size provided by user
    public getSize(): string {
        return `${this.size}px`;
    }
}