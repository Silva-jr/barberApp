import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroConcluidoPage } from './cadastro-concluido.page';

describe('CadastroConcluidoPage', () => {
  let component: CadastroConcluidoPage;
  let fixture: ComponentFixture<CadastroConcluidoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroConcluidoPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroConcluidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
