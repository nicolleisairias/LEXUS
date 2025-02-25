import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisisRiesgoComponent } from './analisis-riesgo.component';

describe('AnalisisRiesgoComponent', () => {
  let component: AnalisisRiesgoComponent;
  let fixture: ComponentFixture<AnalisisRiesgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnalisisRiesgoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalisisRiesgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
