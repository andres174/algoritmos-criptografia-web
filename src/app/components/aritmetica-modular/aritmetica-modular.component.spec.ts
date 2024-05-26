import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AritmeticaModularComponent } from './aritmetica-modular.component';

describe('AritmeticaModularComponent', () => {
  let component: AritmeticaModularComponent;
  let fixture: ComponentFixture<AritmeticaModularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AritmeticaModularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AritmeticaModularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
