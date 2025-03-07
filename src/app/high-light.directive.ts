import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighLight]',
  standalone: false
})
export class HighLightDirective {

  constructor() { }

  @HostBinding('style.backgroundColor') backgroundColor : string=''
  @HostBinding('style.color') color : string=''
  @HostBinding('style.fontSize') fontSize : string=''

  @HostListener('mouseenter') onMouseEnter(){
    this.backgroundColor='blue';
    this.color='white';
    this.fontSize='50px';
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor='';
    this.color='cyan';
    this.fontSize='20px';
  }
  @HostListener('click') onMouseClick(){
    this.backgroundColor='yellow';
    this.color='red';
  }


}
