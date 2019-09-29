import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BusinessService } from '../business.services';


@Component({
  selector: 'app-gst-detail',
  templateUrl: './gst-detail.component.html'
})


export class GstDetailComponent implements OnInit {

  gst_detailForm: FormGroup;
  business: any = {};

  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private router: Router, private bs: BusinessService, private fb: FormBuilder) { this.createForm(); }

  createForm() {
    this.gst_detailForm = this.fb.group({
      person_name: ['', Validators.required],
      business_name: ['', Validators.required],
      business_gst_number: ['', Validators.required]
    });
  }

  // updateBusiness(person_name, business_name, business_gst_number) {
  //   this.route.params.subscribe(params => {
  //     this.bs.updateBusiness(person_name, business_name, business_gst_number, params['id']);
  //     this.router.navigate(['business']);
  //   });
  // }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bs.detailBusiness(params['id']).subscribe(res => {
        this.business = res;
      });
    });
  }
}
