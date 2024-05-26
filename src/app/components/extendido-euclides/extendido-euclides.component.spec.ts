import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendidoEuclidesComponent } from './extendido-euclides.component';

describe('ExtendidoEuclidesComponent', () => {
  let component: ExtendidoEuclidesComponent;
  let fixture: ComponentFixture<ExtendidoEuclidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtendidoEuclidesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtendidoEuclidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
