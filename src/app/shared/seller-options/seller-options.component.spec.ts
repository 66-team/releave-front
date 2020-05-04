import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerOptionsComponent } from './seller-options.component';

describe('SellerOptionsComponent', () => {
  let component: SellerOptionsComponent;
  let fixture: ComponentFixture<SellerOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
