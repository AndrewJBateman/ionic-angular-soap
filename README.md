# :zap: Ionic Angular SOAP

* Ionic-Angular app that displays data about countries from a SOAP API
* Data fetched using the SOAP web services, instead of Representational State Transfer (REST), over HTTP
* Tutorial Code from [Simon Grimm](https://www.youtube.com/channel/UCZZPgUIorPao48a1tBYSDgg) - see [:clap: Inspiration](#clap-inspiration) below
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/ionic-angular-soap?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/ionic-angular-soap?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/ionic-angular-soap?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/ionic-angular-soap?style=plastic)

## :page_facing_up: Table of contents

* [Ionic Angular Soap](#ionic-angular-soap)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:file_folder: License](#file_folder-license)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* SOAP uses eXtensible Markup Language (XML)
* The SOAP API data is from the [DataFlex Web Service](http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso) - no API key needed
* [ngx-soap](https://www.npmjs.com/package/ngx-soap) requires a list of dependencies, including [browser buffer module](https://www.npmjs.com/package/buffer), [concat-stream](https://www.npmjs.com/package/concat-stream) to collect all the data from a stream into a single buffer, [core-js](https://www.npmjs.com/package/core-js) modular standard library, [crypto-js](https://www.npmjs.com/package/crypto-js) library of crypto standards, [events](https://www.npmjs.com/package/events) event emitter, [lodash](https://www.npmjs.com/package/lodash) library, [sax](https://www.npmjs.com/package/sax) sax-style parser for XML and HTML, [stream](https://www.npmjs.com/package/stream) for Node.js streams in the browser & [uuid](https://www.npmjs.com/package/uuid) for creation of RFC4122 UUIDs. This creates a huge vendor build bundle (5.29MB) - see source-map image
* [source-map-explorer](https://www.npmjs.com/package/source-map-explorer) installed globally and used to generate Source-map
* [Postman List of SOAP APIs](https://documenter.getpostman.com/view/8854915/Szf26WHn#33a2b225-11a6-48d3-a695-fb0989cc4971)
* [This file](http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL) was copied into `assets/CountryInfoServices.xml` as the WSDL document
* SOAP does not have to be used with HTTP although in this app it is

## :camera: Screenshots

![Ionic page](./img/country.png)
![Ionic page](./img/map.png)

## :signal_strength: Technologies

* [Ionic v6](https://ionicframework.com/)
* [Angular v13](https://angular.io/)
* [Ionic/angular v6](https://www.npmjs.com/package/@ionic/angular)
* [rxjs v7](https://rxjs.dev/) Reactive Extensions library
* [ngx-soap v0.7.0](https://www.npmjs.com/package/ngx-soap/v/0.2.1) SOAP client for browser.
* [uuid v3.3.2](https://www.npmjs.com/package/uuid) for the creation of RFC4122 UUIDs. Do not update to latest version or the app will not work.
* [Web Services Definition Language WSDL](https://www.w3.org/TR/wsdl.html) structured communications language used in conjuction with the SOAP protocol over HTTP


## :floppy_disk: Setup

* Run `npm i` to install dependencies
* Run `ionic serve` to start the server on _localhost://8100_
* Run `npm run lint` to lint entire app. No linting errors
* Run `npm run build` to create a build file
* Run `npm run build --prod` to create a build file with named chunks and a source map
* Run `source-map-explorer www/main*.js` to view source map

## :computer: Code Examples

* `data.service.ts` creating a SOAP client

```typescript
constructor(private soap: NgxSoapService) {
  this.soap.createClient('./assets/CountryInfoService.xml').then((client) => {
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
* To-do: Nothing.

## :clap: Inspiration

* [Simon Grimm: How to use a SOAP API with Ionic](https://www.youtube.com/watch?v=96Zvzomz4Uw&t=68s)
* [SmartBear: SOAP vs REST. What's the Difference?](https://smartbear.com/blog/soap-vs-rest-whats-the-difference/)
* [Alexsoft: What is SOAP: Formats, Protocols, Message Structure, and How SOAP is Different from REST](https://www.altexsoft.com/blog/engineering/what-is-soap-formats-protocols-message-structure-and-how-soap-is-different-from-rest/)
* [5 Tips to Improve Ionic Angular App Performance](https://ionicframework.com/blog/5-tips-to-improve-ionic-angular-app-performance/)

## :file_folder: License

* N/A

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
