import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AkubeComponent } from './akube.component';

describe('AkubeComponent', () => {
  let component: AkubeComponent;
  let fixture: ComponentFixture<AkubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AkubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AkubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
