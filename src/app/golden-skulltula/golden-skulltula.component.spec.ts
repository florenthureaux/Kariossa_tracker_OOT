import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldenSkulltulaComponent } from './golden-skulltula.component';

describe('GoldenSkulltulaComponent', () => {
  let component: GoldenSkulltulaComponent;
  let fixture: ComponentFixture<GoldenSkulltulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoldenSkulltulaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldenSkulltulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
