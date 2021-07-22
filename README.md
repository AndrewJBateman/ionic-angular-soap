# :zap: Ionic Angular SOAP

* Ionic-Angular app that displays data about countries from a SOAP API
* Data fetched using the SOAP web services, instead of Representational State Transfer (REST), over HTTP
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/ionic-angular-soap?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/ionic-angular-soap?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/ionic-angular-soap?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/ionic-angular-soap?style=plastic)

## :page_facing_up: Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## :books: General info

* SOAP uses eXtensible Markup Language (XML)
* SOAP data is from the [DataFlex Web Service](http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso)
* [Postman List of SOAP APIs](https://documenter.getpostman.com/view/8854915/Szf26WHn#33a2b225-11a6-48d3-a695-fb0989cc4971)
* [This file](http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL) was copied into `assets/CountryInfoServices.xml`
* The SOAP API used does not need an API key
* SOAP does not have to be used with HTTP although in this app it is

## :camera: Screenshots

![Ionic page](./img/country.jpg)

## :signal_strength: Technologies

* [Ionic v5](https://ionicframework.com/)
* [Angular v12](https://angular.io/)
* [Ionic/angular v5](https://www.npmjs.com/package/@ionic/angular)
* [rxjs v7](https://rxjs.dev/) Reactive Extensions library
* [ngx-soap v0.2.1](https://www.npmjs.com/package/ngx-soap/v/0.2.1) SOAP client for browser.
* [Web Services Definition Language WSDL](https://www.w3.org/TR/wsdl.html) structured communications language used in conjuction with the SOAP protocol over HTTP

## :floppy_disk: Setup

* Run `npm i` to install dependencies
* Run `ionic serve` to start the server on _localhost://8100_
* Run`npm run lint` to lint entire app

## :computer: Code Examples

* `data.service.ts` creating a SOAP client

```typescript
constructor(private soap: NgxSoapService) {
  this.soap.createClient('./assets/CountryInfoService.xml').then((client) => {
    console.log('client: ', client);
    this.client = client;
    this.clientReady.next(true);
  });
}
```

## :cool: Features

* SOAP is highly standardized, allows for automation in certain cases, and is more secure
* ACID stands for Atomicity, Consistency, Isolation, and Durability, an enterprise-grade transaction quality and one of the reasons why SOAP is still used when exchanging sensitive information in enterprise architectures.
* SOAP APIs almost always use a WSDL document.
* SOAP supports stateful and stateless operations.
* XML response messages can include an error code and its explanation.

## :clipboard: Status & To-do list

* Status: Working
* To-do:

## :clap: Inspiration

* [Simon Grimm: How to use a SOAP API with Ionic](https://www.youtube.com/watch?v=96Zvzomz4Uw&t=68s)
* [SmartBear: SOAP vs REST. What's the Difference?](https://smartbear.com/blog/soap-vs-rest-whats-the-difference/)
* [Alexsoft: What is SOAP: Formats, Protocols, Message Structure, and How SOAP is Different from REST](https://www.altexsoft.com/blog/engineering/what-is-soap-formats-protocols-message-structure-and-how-soap-is-different-from-rest/)

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com