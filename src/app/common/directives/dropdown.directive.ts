import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen: boolean = false;
    constructor (private _elementRef: ElementRef, private _renderer: Renderer2) {

    }
    
    @HostListener('click', ['$event']) onClick(eventData: Event) {
        this.isOpen = !this.isOpen;
    }
}
