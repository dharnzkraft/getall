import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AkubepostComponent } from './akubepost.component';

describe('AkubepostComponent', () => {
  let component: AkubepostComponent;
  let fixture: ComponentFixture<AkubepostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AkubepostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AkubepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
