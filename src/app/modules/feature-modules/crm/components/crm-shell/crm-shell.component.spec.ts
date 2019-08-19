import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmShellComponent } from './crm-shell.component';

describe('CrmShellComponent', () => {
  let component: CrmShellComponent;
  let fixture: ComponentFixture<CrmShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
