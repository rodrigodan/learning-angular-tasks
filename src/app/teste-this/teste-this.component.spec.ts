import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteThisComponent } from './teste-this.component';

describe('TesteThisComponent', () => {
  let component: TesteThisComponent;
  let fixture: ComponentFixture<TesteThisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteThisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteThisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
