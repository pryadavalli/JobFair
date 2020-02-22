import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockdataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      schemas: [  ],
      imports: [HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockdataService = jasmine.createSpyObj(['getSubscriptionTypes', 'postUserSettingsForm',
      'getJobs']
    );

    component = new HomeComponent(mockdataService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title in anchor tag ', () => {

    expect(fixture.nativeElement.querySelector('a').textContent).toContain('Home Component');

  });

  it('data service should be called from homecomponent', () => {
    mockdataService.getJobs.and.returnValue(of(true));
    component.getJobs();
    expect(mockdataService.getJobs).toHaveBeenCalled();
  });

  it('data service should be called from homecomponent for 3 times', () => {
    mockdataService.getJobs.and.returnValue(of(true));
    component.getJobs();
    expect(mockdataService.getJobs).toHaveBeenCalledTimes(3);
  });

});

