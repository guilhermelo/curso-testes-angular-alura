import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActionDirective } from './action.directive';
import { ActionDirectiveModule } from './action.module';

describe(ActionDirective.name, () => {

  let fixture: ComponentFixture<ActionDirectiveTestComponent>;
  let component: ActionDirectiveTestComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionDirectiveModule],
      declarations: [ActionDirectiveTestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ActionDirectiveTestComponent);
    component = fixture.componentInstance;
  });

  it(`(D) (@Output appAction) should emit event with payload when ENTER key is pressed`, () => {
    const div: HTMLElement = fixture.nativeElement.querySelector('.component');
    // ou
    const div2 = fixture.debugElement.query(By.directive(ActionDirective)).nativeElement;
    const event = new KeyboardEvent('keyup', { key: 'Enter' });

    div.dispatchEvent(event);

    expect(component.hasEvent()).toBeTrue();
  });

  it(`(D) (@Output appAction) should emit event with payload when clicked`, () => {
    const div: HTMLElement = fixture.nativeElement.querySelector('.component');
    const event = new Event('click');

    div.dispatchEvent(event);

    expect(component.hasEvent()).toBeTrue();
  })
});

@Component({
  template: `<div class="component" (appAction)="actionHandler($event)"></div>`
})
class ActionDirectiveTestComponent {

  private event: Event = null;

  public actionHandler(event: Event): void {
    this.event = event;
  }

  public hasEvent(): boolean {
    return !!this.event;
  }
}
