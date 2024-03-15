import { Component, Input } from "@angular/core";

@Component({
    template: ""
})
export class HTMLComponent {
    @Input() public size: number = 0;
    @Input() public text: string = "";


    // formating the size provided by user
    public getSize(): string {
        return `${this.size}px`;
    }
}