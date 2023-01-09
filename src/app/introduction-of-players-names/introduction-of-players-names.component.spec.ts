import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionOfPlayersNamesComponent } from './introduction-of-players-names.component';

describe('IntroductionOfPlayersNamesComponent', () => {
  let component: IntroductionOfPlayersNamesComponent;
  let fixture: ComponentFixture<IntroductionOfPlayersNamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroductionOfPlayersNamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroductionOfPlayersNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
