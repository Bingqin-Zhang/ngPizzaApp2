import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appPizzaBorderCard]'
})
export class BorderCardDirective {

  @Input('appPizzaBorderCard') borderColor: string | undefined;

  GREY_COLOR = '#f5f5F5';
  GREEN_COLOR = '#009688';
  PINK_COLOR = '#ee6e73';
  RED_COLOR = '#d0021b';

  constructor(private element: ElementRef) {
    this.setBorder(this.GREY_COLOR);
    this.setHeight(180);
  }

  /**
   * Définir une bordure
   * @param color
   */
  private setBorder(color: string): void {
    const border = 'solid 4px ' + color;
    this.element.nativeElement.style.border = border;
  }

  /**
   * Définir une hauteur
   * @param height
   */
  private setHeight(height: number): void {
    this.element.nativeElement.style.height = height + 'px';
  }


  /**
   * Création d'un évènement qui change la couleur lorsque l'utilisateur survole un bloc
   */
  @HostListener('mouseenter') onMouseEnter() {
    // this.setBorder(this.GREEN_COLOR);
    // console.log('---> : ', this.borderColor);
    this.setBorder(this.borderColor || this.PINK_COLOR);
  }

  /**
   * Création d'un évènement qui change de couleur lorsque l'utilisateur quitte le bloc
   */
  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.GREY_COLOR);
  }
}
