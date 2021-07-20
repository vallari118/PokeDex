import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeTypeComponent } from './poke-type.component';

describe('PokeTypeComponent', () => {
  let component: PokeTypeComponent;
  let fixture: ComponentFixture<PokeTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
