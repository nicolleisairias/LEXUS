import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarInmueblesComponent } from './gestionar-inmuebles.component';

describe('GestionarInmueblesComponent', () => {
  let component: GestionarInmueblesComponent;
  let fixture: ComponentFixture<GestionarInmueblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestionarInmueblesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionarInmueblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
