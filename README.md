## how to run test

run all tests:
npx playwright test

Run tests with the browser visible:
npx playwright test --headed


## Scenarios covered

| Test case | Data | Expected result | Actual result

| Positive Login test | Valid username + valid password | Redirected to successful login page, success message shown, Logout button visible | Redirected to successful login page, success message shown, Logout button visible

| Negative username test | Invalid username + valid password | Error message: "Your username is invalid!" | Error message: "Your username is invalid!"

| Negative password test | Valid username + invalid password | Error message: "Your password is invalid!" | Error message: "Your password is invalid!"

