import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmNavComponent } from './crm-nav.component';

describe('CrmNavComponent', () => {
  let component: CrmNavComponent;
  let fixture: ComponentFixture<CrmNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
