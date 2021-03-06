/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FunnyComponent } from './funny.component';

describe('FunnyComponent', () => {
  let component: FunnyComponent;
  let fixture: ComponentFixture<FunnyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunnyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
