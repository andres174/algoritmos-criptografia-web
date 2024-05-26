import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InversoAditivoComponent } from './inverso-aditivo.component';

describe('InversoAditivoComponent', () => {
  let component: InversoAditivoComponent;
  let fixture: ComponentFixture<InversoAditivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InversoAditivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InversoAditivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
