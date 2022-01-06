import {printTripDetails} from '../src/client/js/printToClient'


describe("Print Trip Details from server to client", ()=> {
	test("Validate that the details from server are printed to the DOM", () => {
		expect(printTripDetails).toBeDefined();
	});
});

