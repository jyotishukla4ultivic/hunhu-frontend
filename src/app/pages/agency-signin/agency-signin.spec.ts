import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencySignin } from './agency-signin';

describe('AgencySignin', () => {
  let component: AgencySignin;
  let fixture: ComponentFixture<AgencySignin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgencySignin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencySignin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}); 