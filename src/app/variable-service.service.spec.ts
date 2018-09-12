import { TestBed, inject } from '@angular/core/testing';

import { VariableService } from './variable-service.service';

describe('VariableServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VariableService]
    });
  });

  it('should be created', inject([VariableService], (service: VariableService) => {
    expect(service).toBeTruthy();
  }));
});
