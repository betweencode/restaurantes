import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConangularfireComponent } from './conangularfire.component';

describe('ConangularfireComponent', () => {
  let component: ConangularfireComponent;
  let fixture: ComponentFixture<ConangularfireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConangularfireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConangularfireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
