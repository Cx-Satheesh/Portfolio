import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDesignComponent } from './mobile-design.component';

describe('MobileDesignComponent', () => {
  let component: MobileDesignComponent;
  let fixture: ComponentFixture<MobileDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
