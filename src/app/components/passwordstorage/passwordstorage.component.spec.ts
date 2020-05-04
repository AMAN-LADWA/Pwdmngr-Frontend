import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordstorageComponent } from './passwordstorage.component';

describe('PasswordstorageComponent', () => {
  let component: PasswordstorageComponent;
  let fixture: ComponentFixture<PasswordstorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordstorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordstorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
