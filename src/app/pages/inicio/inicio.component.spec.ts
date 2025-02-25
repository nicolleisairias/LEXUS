import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioComponent } from './inicio.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('InicioComponent', () => {
  let component: InicioComponent;
  let fixture: ComponentFixture<InicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InicioComponent],
      imports: [RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(InicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to correct route', () => {
    spyOn(component['router'], 'navigate');

    component.seleccionarUsuario('admin');
    expect(component['router'].navigate).toHaveBeenCalledWith(['/admin/home']);

    component.seleccionarUsuario('cliente');
    expect(component['router'].navigate).toHaveBeenCalledWith(['/cliente']);

    component.seleccionarUsuario('empleado');
    expect(component['router'].navigate).toHaveBeenCalledWith(['/empleado']);
  });
});
