import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  isoCode = null;
  country = '';

  info = {
    flag: null,
    capital: null,
    currency: null,
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.isoCode = this.activatedRoute.snapshot.paramMap.get('isocode');
    this.country = this.activatedRoute.snapshot.paramMap.get('country');

    this.dataService.clientState().subscribe((ready) => {
      if (ready) {
        this.loadCountryData();
      }
    });
  }

  loadCountryData() {
    this.dataService.getFlagForCountry(this.isoCode).subscribe((res) => {
      this.info.flag = res;
    });

    this.dataService.getCapitalForCountry(this.isoCode).subscribe((res) => {
      this.info.capital = res;
    });

    this.dataService.getCurrencyForCountry(this.isoCode).subscribe((res) => {
      this.info.currency = res;
    });
  }
}
