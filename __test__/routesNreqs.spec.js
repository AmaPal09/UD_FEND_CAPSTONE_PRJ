import {postAndPrintTrip} from '../src/client/js/routesNreqs'
import {postData} from '../src/client/js/routesNreqs'


describe("Submit post request to the server and print results to DOM", ()=> {
	test("Validate that the function exists", () => {
		expect(postAndPrintTrip).toBeDefined();
	});
});


describe("send URL to Server", ()=> {
	test("Validate tha the function exists", () => {
		expect(postData).toBeDefined();
	});
});
