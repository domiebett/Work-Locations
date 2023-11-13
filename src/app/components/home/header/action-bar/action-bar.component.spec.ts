import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBarsStaggered,
  faSearch,
  faTableCells,
} from '@fortawesome/free-solid-svg-icons';
import { ActionBarComponent } from './action-bar.component';
import { ActiveViewService } from 'src/app/services/active-view.service';
import { ModalService } from 'src/app/services/modal.service';
import { of } from 'rxjs';
import { IconInputComponent } from 'src/app/components/common/icon-input/icon-input.component';
import { IconToggleComponent } from 'src/app/components/common/icon-toggle/icon-toggle.component';
import { ButtonComponent } from 'src/app/components/common/button/button.component';
import { MatDialogModule } from '@angular/material/dialog';

describe('ActionBarComponent', () => {
  let component: ActionBarComponent;
  let fixture: ComponentFixture<ActionBarComponent>;
  let activeViewService: jasmine.SpyObj<ActiveViewService>;
  let modalService: jasmine.SpyObj<ModalService>;
  let formBuilder: FormBuilder;

  beforeEach(() => {
    const activeViewServiceSpy = jasmine.createSpyObj('ActiveViewService', [
      'activeViewChanged',
    ]);
    const modalServiceSpy = jasmine.createSpyObj('ModalService', [
      'openNewLocationModal',
    ]);

    TestBed.configureTestingModule({
      declarations: [
        ActionBarComponent,
        IconInputComponent,
        IconToggleComponent,
        ButtonComponent,
      ],
      imports: [MatDialogModule,
        ReactiveFormsModule,
        FormsModule,
        FontAwesomeModule,],
      providers: [
        { provide: ActiveViewService, useValue: activeViewServiceSpy },
        { provide: ModalService, useValue: modalServiceSpy },
        FormBuilder,
      ],
    });

    fixture = TestBed.createComponent(ActionBarComponent);
    component = fixture.componentInstance;
    activeViewService = TestBed.inject(
      ActiveViewService
    ) as jasmine.SpyObj<ActiveViewService>;
    modalService = TestBed.inject(ModalService) as jasmine.SpyObj<ModalService>;
    formBuilder = TestBed.inject(FormBuilder);

    // Mock the activeViewChanged observable
    activeViewService.activeViewChanged = {
      emit: jasmine.createSpy(),
      subscribe: jasmine.createSpy().and.returnValue(of()),
    } as any;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form and viewToggleOptions', () => {
    fixture.detectChanges();

    expect(component.form).toBeDefined();
    expect(component.form.controls['search']).toBeDefined();
    expect(component.viewToggleOptions).toEqual([
      { name: 'list', icon: faBarsStaggered, defaultChecked: true },
      { name: 'grid', icon: faTableCells },
    ]);
  });

  it('should emit activeViewChanged event on setCurrentView', () => {
    const viewName = 'list';

    fixture.detectChanges();

    component.setCurrentView(viewName);

    expect(activeViewService.activeViewChanged.emit).toHaveBeenCalledWith(
      viewName as any
    );
  });

  it('should call openNewLocationModal on showNewLocationModal', () => {
    fixture.detectChanges();

    component.showNewLocationModal();

    expect(modalService.openNewLocationModal).toHaveBeenCalled();
  });
});
