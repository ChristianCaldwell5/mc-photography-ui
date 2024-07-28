import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

interface ServiceType {
  value: string;
  viewValue: string;
}

interface PackageType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatDividerModule, 
    MatIconModule, MatInputModule, MatButtonModule, MatSelectModule],
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss'
})
export class ProcessComponent {
  selectedService?: string;
  selectedPackage?: string;

  services: ServiceType[] = [
    {value: 'senior_grad', viewValue: 'Senior Grad'},
    {value: 'portfolio', viewValue: 'Portfolio'},
    {value: 'couples', viewValue: 'Couples'},
    {value: 'family', viewValue: 'Family'},
    {value: 'event', viewValue: 'Event'},
  ];

  packages: PackageType[] = [
    {value: 'standard', viewValue: 'Standard'},
    {value: 'pro', viewValue: 'Pro'},
    {value: 'vip', viewValue: 'VIP/Event'},
  ];
}
