import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AkubeformComponent } from './akubeform.component';

describe('AkubeformComponent', () => {
  let component: AkubeformComponent;
  let fixture: ComponentFixture<AkubeformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AkubeformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AkubeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
