import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerContenidoComponent } from './ver-contenido.component';

describe('VerContenidoComponent', () => {
  let component: VerContenidoComponent;
  let fixture: ComponentFixture<VerContenidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerContenidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
