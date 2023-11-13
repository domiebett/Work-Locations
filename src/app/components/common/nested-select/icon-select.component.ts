import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { LocationNode } from 'src/app/services/locations.service';
import { SelectOptionService } from 'src/app/services/select-option.service';

@Component({
  selector: 'app-icon-select',
  templateUrl: './icon-select.component.html',
  styleUrls: ['./icon-select.component.scss'],
})
export class IconSelectComponent implements OnInit, OnDestroy {
  @Input() locations!: any[];
  @Input() name!: string;
  @Input() form!: FormGroup;
  @Input() placeholder: string = '-- Select an option --';

  selectedOption: LocationNode | undefined;
  expanded: boolean = false;

  locationDot = faLocationDot;

  constructor(
    private selectOptionService: SelectOptionService,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.selectOptionService.selectedOption$.subscribe((location) => {
      this.selectedOption = location;
      // patch the value because form group doesnt like programmatically updated values.
      this.form.patchValue({
        [this.name]: this.selectedOption?.name ?? '',
      });

      // close the dropdown
      this.expanded = false;
    });
  }

  ngOnDestroy(): void {
    this.form.reset();
    this.selectOptionService.resetSelection();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.expanded = false;
    }
  }

  toggleExpanded(): void {
    this.expanded = !this.expanded;
  }
}
