import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeApiServiceComponent } from './fake-api-service.component';

describe('FakeApiServiceComponent', () => {
  let component: FakeApiServiceComponent;
  let fixture: ComponentFixture<FakeApiServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakeApiServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeApiServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
