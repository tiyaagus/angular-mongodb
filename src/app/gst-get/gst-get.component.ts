import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../business.services';
import Business from '../model/Business.model';


@Component({
  selector: 'app-gst-get',
  templateUrl: './gst-get.component.html',
  styleUrls: ['./gst-get.component.css']
})


export class GstGetComponent implements OnInit {
  business: Business[];
  constructor(private bs: BusinessService) { }
// bs mewakili businessservice bebas standar businessService

  ngOnInit() {
      this.bs.getBusiness().subscribe((data: Business[]) => {
      this.business = data;
      // console.log(this.business);
    });
  }

  getDataBusiness() {

  }

  refresh() {
    location.reload();
  }
  deleteBusiness(data) {
    if (confirm('Are you sure to delete this data?' + name)) {
    this.bs.deleteBusiness(data).subscribe(response => {
      console.log('deleted', response);
      this.ngOnInit();
    });
    // console.log('berjalan', data);
  }
}

}
