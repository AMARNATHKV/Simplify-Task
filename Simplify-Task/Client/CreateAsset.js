const ClientApplication = require('./client');

let userClient = new ClientApplication();
userClient.submitTxn(
    "org1admin",
    "taskchannel",
    "Asset",
    "CreateAsset",
    "Asset-600",
    "org1user",
    "5000"
).then(result => {
    console.log(new TextDecoder().decode(result));
    console.log(" Asset successfully created");
}).catch(error => {
    console.error(" Failed to submit transaction:", error);
});
