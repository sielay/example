# Example


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.4.

## Design

You can see design document as a [markdown here](./design/design.md) or as a [PDF](./design/design.pdf).

## Goals

*Design*
Provide an architecture design for a front-end website. The website should provide the following views:
* List of payments
* Payments details Submit the design as a PDF.

*Implementation*
Implement the above design. Please feel free to use your JavaScript framework of choice.
 * The default page of the website should show a list of payment instructions.
 * A list of payments might look like http://mockbin.org/bin/41ca3269-d8c4-4063-9fd5-
f306814ff03f
 * It should be possible to select a payment and view its details
 * Write your code with the same quality you would use for production

## Commentary
* To approach sensible time and `production` quality we need to do some compromise to show bits of each technique
* What was done
  1. Setup application frame (angular-cli)
  2. Analyze data (build interfaces, model, basic unit tests) 
    * if project was done in waterfal that would be part of specification before design, design would be done reviewed and the implemented; I took more agile approach (see folowing)
  3. Design was created first as more structural wireframe
  4. Later added branding (skipped branding while implementation)
  5. Functionality have been setup
  6. Styling appied
  7. Tests verified
  8. Documented
* What would be done in the real life
  1. Design process would take much more time, involving both designer and developer and might result not only with mockup, but also with working prototype
  2. Unit tests would be built for all model layer before implemententation (as API is known and you don't do incremental + R&D in this case)
  3. Design would be slit down to functiona/structural parts and listed as tasks
  4. SCSS files wouldn't contain so much information about each case, variables and and repeated parts (as mixings) would be stored in central place, allowing injecting branding
* Why half-baked product is still production ready?
  * By not reinventing the wheel and using tools like angular-cli we stablished usage of TDD and BDD from the first moment
  * Design/implementation is not visual oriented, but funcitonal which lead to less unexpected issues.

# Original Angular CLI insstructions

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
