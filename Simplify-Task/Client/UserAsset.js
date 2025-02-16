const ClientApplication = require('./client');

let userClient = new ClientApplication();
userClient.submitTxn(
    "org1user",
    "taskchannel",
    "Asset",
    "GetUserAssets",
    "Asset-200",
).then(result => {
    console.log(new TextDecoder().decode(result));
    console.log(" Asset successfully created");
}).catch(error => {
    console.error(" Failed to submit transaction:", error);
});

