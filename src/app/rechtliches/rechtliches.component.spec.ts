import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechtlichesComponent } from './rechtliches.component';

describe('RechtlichesComponent', () => {
  let component: RechtlichesComponent;
  let fixture: ComponentFixture<RechtlichesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RechtlichesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechtlichesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
