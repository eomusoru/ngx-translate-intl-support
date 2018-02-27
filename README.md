# ngx-translate-intl-support

=======

This project use ngx-translate library with ICU internationalization.
 
First step run `npm install` to install all node dependencies. 

Also take care of the fact that by default, this library use `HttModule` method and you will need to use the `HttpClientMdule`.

**AppModule imports**


`import {HttpClient, HttpClientModule} from "@angular/common/http";
 import {TranslateCompiler, TranslateModule, TranslateLoader} from "@ngx-translate/core";
 import {TranslateHttpLoader} from "@ngx-translate/http-loader";
 import {TranslateMessageFormatCompiler} from "ngx-translate-messageformat-compiler";
 import {MESSAGE_FORMAT_CONFIG} from "ngx-translate-messageformat-compiler";`
 
 
**Ng Module import declarations**
 
 `imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      compiler: {
        provide: TranslateCompiler,
        useClass: TranslateMessageFormatCompiler
      }
    })
  ],
  providers: [
    {provide: MESSAGE_FORMAT_CONFIG, useValue: {intlSupport: true}}
  ],`

**Loader for a special json location**


`export function HttpLoaderFactory(http: HttpClient) {
   return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
 }`
 
 
 
 **Component**
 
 `import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
  import {TranslateHttpLoader} from "@ngx-translate/http-loader";
  import {TranslateService} from "@ngx-translate/core";
  `
  
 `constructor(public translate: TranslateService) {
     translate.setDefaultLang("en");
      translate.use("en");
   }
 `
 
 **Call**
 
 `{{'things' | translate:"{ count: 2 }"}}`
 
 
 **json**
 
 `{
   "HELLO": "hello {value}",
   "translateMe": "Translate me",
   "things": "There {count, plural, =0{is} one{is} other{are}} {count, plural, =0{} one{a} other{several}} {count, plural, =0{nothing} one{thing} other{things}}",
   "people": "{gender, select, male{He is} female{She is} other{They are}} {how}"
 }`



