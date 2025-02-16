const ClientApplication = require('./client');

let userClient = new ClientApplication();
userClient.submitTxn(
    "org1admin",
    "taskchannel",
    "Asset",
    "UpdateAsset",
    "Asset-600",
    "user2",
    "10000"
).then(result => {
    console.log(new TextDecoder().decode(result));
    console.log("Asset successfully updated");
}).catch(error => {
    console.error("Failed to update asset:", error);
});
