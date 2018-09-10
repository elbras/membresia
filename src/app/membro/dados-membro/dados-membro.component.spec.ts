import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosMembroComponent } from './dados-membro.component';

describe('DadosMembroComponent', () => {
  let component: DadosMembroComponent;
  let fixture: ComponentFixture<DadosMembroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosMembroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosMembroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
