import { Injectable } from '@angular/core';
import { Client, NgxSoapService } from 'ngx-soap';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  client: Client;
  private clientReady = new BehaviorSubject(false);
  constructor(private soap: NgxSoapService) {
    this.soap.createClient('./assets/CountryInfoService.xml').then((client) => {
      console.log('client: ', client);
      this.client = client;
      this.clientReady.next(true);
    });
  }

  clientState() {
    return this.clientReady.asObservable();
  }

  getAllCountries() {
    return this.client
      .call('ListOfCountryNamesByName', {})
      .pipe(
        map(
          (data) =>
            data.result.ListOfCountryNamesByNameResult.tCountryCodeAndName
        )
      );
  }

  getFlagForCountry(isocde: string) {
    return this.client
      .call('CountryFlag', { sCountryISOCode: isocde })
      .pipe(map((data) => data.result.CountryFlagResult));
  }

  getCurrencyForCountry(isocde: string) {
    return this.client
      .call('CountryCurrency', { sCountryISOCode: isocde })
      .pipe(map((data) => data.result.CountryCurrencyResult));
  }

  getCapitalForCountry(isocde: string) {
    return this.client
      .call('CapitalCity', { sCountryISOCode: isocde })
      .pipe(map((data) => data.result.CapitalCityResult));
  }
}
