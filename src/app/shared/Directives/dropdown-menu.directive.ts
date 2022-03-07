import { Directive,ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdownMenu]'
})
export class DropdownMenuDirective {

  constructor(private elRef: ElementRef) { }
  @HostListener('click') toggleMenu ()
  {
    this.elRef.nativeElement.classList.toggle('open')
  }
}
