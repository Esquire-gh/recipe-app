import { EventHandlerVars } from "@angular/compiler/src/compiler_util/expression_converter";
import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen: boolean = false;
    constructor (private _elementRef: ElementRef, private _renderer: Renderer2) {

    }
    
    @HostListener('document:click', ['$event']) onClick(eventData: Event) {
        this.isOpen = this._elementRef.nativeElement.contains(eventData.target) ? !this.isOpen : false;
    }
}
