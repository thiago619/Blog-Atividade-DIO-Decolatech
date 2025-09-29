import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemportComponent } from './itemport.component';

describe('ItemportComponent', () => {
  let component: ItemportComponent;
  let fixture: ComponentFixture<ItemportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
