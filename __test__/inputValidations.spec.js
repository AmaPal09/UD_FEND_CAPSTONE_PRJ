import {validateInputs} from '../src/client/js/inputValidations.js';
import {validateFutureDate} from '../src/client/js/inputValidations.js';

describe("Validate user has provided inputs", () => {
	test("It should validate user has provided some input", () => {

		let result = validateInputs('','');
		expect(result.valid).toBeFalsy();
		expect(result.msg).toMatch('Enter a destination and select a date');

		result = validateInputs('','123');
		expect(result.valid).toBeFalsy();
		expect(result.msg).toMatch('Enter a destination');

		result = validateInputs('newPlace','');
		expect(result.valid).toBeFalsy();
		expect(result.msg).toMatch('Select a date');

		result = validateInputs('newPlace','12/01/2021');
		expect(result.valid).toBeTruthy();
		expect(result.msg).toMatch('All OK');
	});
});

describe("Validate future Date provided by the user is greater than the current date", () => {
	test("Dates are vaidated", ()=> {
		const currDate = new Date();
		let futureDate = new Date();
		expect(validateFutureDate(futureDate, currDate)).toBeFalsy();

		futureDate.setDate(futureDate.getDate()+2);
		expect(validateFutureDate(futureDate, currDate)).toBeTruthy();

		futureDate.setDate(futureDate.getDate()-4);
		expect(validateFutureDate(futureDate, currDate)).toBeFalsy();
	});
});
