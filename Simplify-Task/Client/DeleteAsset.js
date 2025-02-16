const ClientApplication = require('./client');

let userClient = new ClientApplication();
userClient.submitTxn(
    "org1admin",
    "taskchannel",
    "Asset",
    "DeleteAsset",
    "Asset-500"
).then(result => {
    console.log(new TextDecoder().decode(result));
    console.log(" Asset successfully deleted");
}).catch(error => {
    console.error(" Failed to delete asset:", error);
});
