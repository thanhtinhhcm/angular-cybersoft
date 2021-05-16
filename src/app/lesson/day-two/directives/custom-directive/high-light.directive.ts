import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  constructor(private ele: ElementRef, private render: Renderer2) { }

  @HostBinding('style.backgroundColor') bgColor = "aqua";

  // listen event
  @HostListener('mouseenter') eventHover(): void{
    // this.ele.nativeElement.style.backgroundColor = "yellow";
    // tạo ra div con bằng thư viện render
    const divChild = this.render.createElement('div');
    this.render.setStyle(divChild, 'background-color', 'red');
    this.render.setStyle(divChild, 'height', '20px');
    this.render.appendChild(this.ele.nativeElement, divChild);
    this.render.setStyle(this.ele.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('mouseleave') eventLeave():void{
    // this.ele.nativeElement.style.backgroundColor = "blue";
    this.render.setStyle(this.ele.nativeElement, 'background-color', 'blue');
    // this.render.removeChild() search more
  }
}
