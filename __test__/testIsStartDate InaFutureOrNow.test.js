// Import the js file to test
import { isStartDateInFutureOrNow } from '../src/client/js/validation.js';

test("Testing if start_date is tomorrow then isStartDateInFutureOrNow returns true", () => {
    const start_date = new Date();
    start_date.setDate(start_date.getDate() + 1);
    expect(isStartDateInFutureOrNow(start_date)).toBeTruthy();
});

test("Testing if start_date is yesterday then isStartDateInFutureOrNow returns false", () => {
    const start_date = new Date();
    start_date.setDate(start_date.getDate() - 1);
    expect(isStartDateInFutureOrNow(start_date)).toBeFalsy();
});