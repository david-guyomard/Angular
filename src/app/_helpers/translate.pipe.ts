import {Pipe, Inject, PipeTransform, LOCALE_ID } from '@angular/core';

@Pipe({
    name: 'translate'
})
export class TranslatePipe implements PipeTransform {
    locale: string;
    constructor(@Inject(LOCALE_ID) locale: string) {
        this.locale = locale;
    }

    transform(value: any, attr: string) {
        if (!value) { return ''; }
        if (!value.hasOwnProperty('translations')) {
            console.log('No translations here, object return as he is');
            return value;
        }
        if (!value.translations.hasOwnProperty(this.locale)) {
            console.log(`No ${this.locale} translations here, object return in fr`);
            if (!value.translations.fr.hasOwnProperty(attr)) {
                console.log(`Ǹo required attribute translations here`);
                return 'undifined' ;
            }
            return value.translations.fr[attr];
        }
        if (!value.translations[this.locale].hasOwnProperty(attr)) {
            console.log('no required attribute translations here');
            return 'undifined';
        }
        return value.translations[this.locale][attr];
    }
}
