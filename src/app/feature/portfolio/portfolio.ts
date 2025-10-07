import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './porfolio.html',
  styleUrls: ['./portfolio.scss']
})
export class PortfolioFormComponent implements OnInit {
  
  investmentForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.investmentForm = this.fb.group({
      assetType: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]],
      purchasePrice: ['', [Validators.required, Validators.min(0.01)]],
      purchaseDate: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.investmentForm.valid) {
      console.log('Form Submitted', this.investmentForm.value);
    } else {
      this.investmentForm.markAllAsTouched();
    }
  }
}
