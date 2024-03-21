import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualArtComponent } from './visual-art.component';

describe('VisualArtComponent', () => {
  let component: VisualArtComponent;
  let fixture: ComponentFixture<VisualArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualArtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
