import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail-from',
  templateUrl: './payment-detail-from.component.html',
  styles: [
  ]
})
export class PaymentDetailFromComponent {
  constructor(public service: PaymentDetailService, private toastr: ToastrService) {
  }

  onSubmit(form: NgForm) {
    this.service.formSubmitted = true
    if (form.valid) {
      if (this.service.formData.paymentDetailID == 0)
      this.insertRecord(form)
    else
      this.UpdateRecord(form)

     }
  }

  insertRecord(form: NgForm) {
    this.service.postPaymentDetail()
      .subscribe({
        next: res => {
          this.service.list = res as PaymentDetail[]
          this.service.resetForm(form)
          this.toastr.success('Inserted Success', 'Payment Detail Register')
        },
        error: err => {
          console.log(err);
        }
      })
  }
  UpdateRecord(form: NgForm) { 
    this.service.putPaymentDetail()
      .subscribe({
        next: res => {
          this.service.list = res as PaymentDetail[]
          this.service.resetForm(form)
          this.toastr.info('Updated Success', 'Payment Detail Register')
        },
        error: err => {
          console.log(err);
        }
    })
  }

}
