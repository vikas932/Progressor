import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberworkoutListComponent } from './memberworkout-list.component';

describe('MemberworkoutListComponent', () => {
  let component: MemberworkoutListComponent;
  let fixture: ComponentFixture<MemberworkoutListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberworkoutListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberworkoutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
