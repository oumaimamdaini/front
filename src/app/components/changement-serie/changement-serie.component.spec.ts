import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangementSerieComponent } from './changement-serie.component';

describe('ChangementSerieComponent', () => {
  let component: ChangementSerieComponent;
  let fixture: ComponentFixture<ChangementSerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangementSerieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangementSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
