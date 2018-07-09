import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ServersEnvironmentComponent} from './servers-environment.component';

describe('ServersEnvironmentComponent', () => {
  let component: ServersEnvironmentComponent;
  let fixture: ComponentFixture<ServersEnvironmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ServersEnvironmentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServersEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
