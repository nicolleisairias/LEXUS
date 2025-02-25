import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaInmueblesComponent } from './busqueda-inmuebles.component';

describe('BusquedaInmueblesComponent', () => {
  let component: BusquedaInmueblesComponent;
  let fixture: ComponentFixture<BusquedaInmueblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusquedaInmueblesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusquedaInmueblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
