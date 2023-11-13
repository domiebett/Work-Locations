import { TestBed } from '@angular/core/testing';
import { SelectOptionService } from './select-option.service';
import { LocationNode } from '../utils/location-node';
import { LocationType } from '../types/location';

describe('SelectOptionService', () => {
  let selectOptionService: SelectOptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectOptionService],
    });

    selectOptionService = TestBed.inject(SelectOptionService);
  });

  it('should be created', () => {
    expect(selectOptionService).toBeTruthy();
  });

  it('should update selected option', (done: DoneFn) => {
    const location = new LocationNode('Country', LocationType.Country, 'C');
    
    selectOptionService.updateSelectedOption(location);

    selectOptionService.selectedOption$.subscribe((selectedOption) => {
      expect(selectedOption).toEqual(location);
      done();
    });
  });

  it('should reset selection', (done: DoneFn) => {
    const location = new LocationNode('Country', LocationType.Country, 'C');

    // Set an initial value
    selectOptionService.updateSelectedOption(location);
    selectOptionService.resetSelection();

    selectOptionService.selectedOption$.subscribe((selectedOption) => {
      // After resetting, it should be null
      expect(selectedOption).toBeNull();
      done();
    });
  });
});
