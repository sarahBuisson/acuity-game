import {Component, HostListener, OnInit} from '@angular/core';
import {WantedText} from '../../../domain/model';
import {IntervalService} from '../interval.service';
import {AbstractWantComponent} from '../want/want-abstract.component';

@Component({
  selector: 'app-want-text',
  template: `
    <div class="hollow" [ngStyle]="{backgroundColor:backgroundColor} ">{{want.text}}</div>
  `,
  styleUrls: ['./want-text.scss']
})
export class WantTextComponent extends AbstractWantComponent<WantedText> implements OnInit {
  private currentText = '';


  constructor(intervalService: IntervalService) {
    super(intervalService);
  }


  public get backgroundColor(): string {
    return super.backgroundColor;
  }

  ngOnInit(): void {
  }


  @HostListener('document:keydown', ['$event'])
  handleKeyboardDownEvent($event: KeyboardEvent): void {
    if ($event.key.length === 1) {
      this.currentText += $event.key;
    }
    this.process($event);
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyboardUpEvent($event: KeyboardEvent): void {
    this.process($event);

  }



  public maybeDone($event: Event): boolean {
    return $event instanceof KeyboardEvent && this.currentText.endsWith(this.want.text);
  }
}
