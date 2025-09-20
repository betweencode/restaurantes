import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTokenBackendComponent } from './custom-token-backend.component';

describe('CustomTokenBackendComponent', () => {
  let component: CustomTokenBackendComponent;
  let fixture: ComponentFixture<CustomTokenBackendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomTokenBackendComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomTokenBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
