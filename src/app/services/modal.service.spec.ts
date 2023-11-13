import { TestBed } from '@angular/core/testing';
import { ModalService } from './modal.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NewLocationModalComponent } from '../components/home/new-location-modal/new-location-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ModalService', () => {
  let modalService: ModalService;
  let matDialog: jasmine.SpyObj<MatDialog>;

  beforeEach(() => {
    const matDialogSpy = jasmine.createSpyObj('MatDialog', ['open']);

    TestBed.configureTestingModule({
      imports: [MatDialogModule, BrowserAnimationsModule],
      providers: [ModalService, { provide: MatDialog, useValue: matDialogSpy }],
    });

    modalService = TestBed.inject(ModalService);
    matDialog = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;
  });

  it('should be created', () => {
    expect(modalService).toBeTruthy();
  });

  it('should call MatDialog open method with NewLocationModalComponent', () => {
    modalService.openNewLocationModal();

    expect(matDialog.open).toHaveBeenCalledWith(NewLocationModalComponent, {
      panelClass: 'visible-overflow',
    });
  });
});
