// ra;
// const Mpesa = require("mpesa-node");
// const mpesaApi = new Mpesa({
//   consumerKey: "<your consumer key>",
//   consumerSecret: "<your consumer secret>",
// });
// // another instance
// // const instance = new Mpesa({ consumerKey: 'test', consumerSecret: 'test', environment: 'production' })
// mpesaApi
//   .c2bSimulate(254708374149, 500, "h6dk0Ue2")
//   .then((result) => {
//     //do something
//   })
//   .catch((err) => {
//     // retry?
//   });
// new Mpesa({
//   consumerKey: "<your consumer key>",
//   consumerSecret: "<your consumer secret>",
//   environment: "sandbox",
//   shortCode: "600111",
//   initiatorName: "Test Initiator",
//   lipaNaMpesaShortCode: 123456,
//   lipaNaMpesaShortPass: "<some key here>",
//   securityCredential: "<credential here>",
//   certPath: path.resolve("keys/myKey.cert"),
// });
// const mpesaApi = new Mpesa({
//   consumerKey: "<your consumer key>",
//   consumerSecret: "<your consumer secret>",
// });
// const {
//   accountBalance,
//   b2b,
//   b2c,
//   c2bRegister,
//   c2bSimulate,
//   lipaNaMpesaOnline,
//   lipaNaMpesaQuery,
//   reversal,
//   transactionStatus,
// } = mpesaApi;
// /*
//  * b2c(senderParty, receiverParty, amount, queueUrl, resultUrl, commandId = 'BusinessPayment', initiatorName = null, remarks = 'B2C Payment', occasion = null)
//  * Example:
//  */
// const { shortCode } = mpesaApi.configs;
// const testMSISDN = 254708374149;
// await mpesaApi.b2c(
//   shortCode,
//   testMSISDN,
//   100,
//   URL + "/b2c/timeout",
//   URL + "/b2c/success"
// );
// /*
//  * c2bRegister(confirmationUrl, validationUrl, shortCode = null, responseType = 'Completed')
//  * Example:
//  */

// await mpesaApi.c2bRegister(URL + "/c2b/validation", URL + "/c2b/success");
// /*
//  * c2bSimulate(msisdn, amount, billRefNumber, commandId = 'CustomerPayBillOnline', shortCode = null)
//  * Example:
//  */
// const testMSISDN = 254708374149;
// await mPesa.c2bSimulate(
//   testMSISDN,
//   100,
//   Math.random().toString(35).substr(2, 7)
// );
// /*
//  * lipaNaMpesaOnline(senderMsisdn, amount, callbackUrl, accountRef, transactionDesc = 'Lipa na mpesa online', transactionType = 'CustomerPayBillOnline', shortCode = null, passKey = null)
//  * Example:
//  */
// const testMSISDN = 254708374149;
// const amount = 100;
// const accountRef = Math.random().toString(35).substr(2, 7);
// await mpesaApi.lipaNaMpesaOnline(
//   testMSISDN,
//   amount,
//   URL + "/lipanampesa/success",
//   accountRef
// );
// /*
//  * lipaNaMpesaQuery(checkoutRequestId, shortCode = null, passKey = null)
//  * Example:
//  */
// const checkoutRequestId = "ws_co_123456789";
// await mpesaApi.lipaNaMpesaQuery(checkoutRequestId);
// /*
//  * reversal(transactionId, amount, queueUrl, resultUrl, shortCode = null, remarks = 'Reversal', occasion = 'Reversal', initiator = null, receiverIdType = '11', commandId = 'TransactionReversal')
//  * Example:
//  */
// await mpesaApi.reversal(
//   "LKXXXX1234",
//   100,
//   URL + "/reversal/timeout",
//   URL + "/reversal/success"
// );
// /*
//  * transactionStatus(transactionId, receiverParty, idType, queueUrl, resultUrl, remarks = 'TransactionReversal', occasion = 'TransactionReversal', initiator = null, commandId = 'TransactionStatusQuery')
//  * Example:
//  */
// await mpesaApi.transactionStatus(
//   "LKXXXX1234",
//   shortCode,
//   4,
//   URL + "/transactionstatus/timeout",
//   URL + "/transactionstatus/success"
// );
// /*
//  * accountBalance(shortCode, idType, queueUrl, resultUrl, remarks = 'Checking account balance', initiator = null, commandId = 'AccountBalance')
//  * Example:
//  */
// const { shortCode } = mpesaApi.configs;
// await mpesaApi.accountBalance(
//   shortCode,
//   4,
//   URL + "/accountbalance/timeout",
//   URL + "/accountbalance/success"
// );
// new Mpesa({
//   consumerKey: "<your consumer key>",
//   consumerSecret: "<your consumer secret>",
//   environment: "production", //<------
// });
