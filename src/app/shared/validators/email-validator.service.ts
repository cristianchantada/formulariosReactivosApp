
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { log } from 'console';
import { Observable, delay, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidator implements AsyncValidator {


	validate(control: AbstractControl): Observable<ValidationErrors | null> {

		const email = control.value;
		console.log({email});


		const httpCallObservable = new Observable<ValidationErrors | null>((subscriber) => {

			console.log({email});

			if(email === 'cris@email.com'){
				subscriber.next({emailTake: true});
				subscriber.complete();
				//return;
			}

			subscriber.next(null);
			subscriber.complete

		}).pipe(delay(3000));

		return httpCallObservable;

	}

/* 	validate(control: AbstractControl): Observable<ValidationErrors | null> {

		const email = control.value;
		console.log({email});


		return of({
			emailTaken: true
		}).pipe(
			delay(2000)
		);

	} */


}