import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebFrontendComponent } from './web-frontend.component';

describe('WebFrontendComponent', () => {
  let component: WebFrontendComponent;
  let fixture: ComponentFixture<WebFrontendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebFrontendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebFrontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
