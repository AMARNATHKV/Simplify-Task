let profile = {

    org1admin: {
        "cryptoPath": "../../Network/organizations/peerOrganizations/org1.task.com",
        "keyDirectoryPath": "../../Network/organizations/peerOrganizations/org1.task.com/users/Admin@org1.task.com/msp/keystore/",
        "certPath": "../../Network/organizations/peerOrganizations/org1.task.com/users/Admin@org1.task.com/msp/signcerts/cert.pem",
        "tlsCertPath": "../../Network/organizations/peerOrganizations/org1.task.com/peers/peer0.org1.task.com/tls/ca.crt",
        "peerEndpoint": "localhost:7051",
        "peerHostAlias": "peer0.org1.task.com",
        "mspId": "org1-task-com"
    },
    org1auditor: {
        "cryptoPath": "../../Network/organizations/peerOrganizations/org1.task.com",
        "keyDirectoryPath": "../../Network/organizations/peerOrganizations/org1.task.com/users/Auditor@org1.task.com/msp/keystore/",
        "certPath": "../../Network/organizations/peerOrganizations/org1.task.com/users/Auditor@org1.task.com/msp/signcerts/cert.pem",
        "tlsCertPath": "../../Network/organizations/peerOrganizations/org1.task.com/peers/peer0.org1.task.com/tls/ca.crt",
        "peerEndpoint": "localhost:7051",
        "peerHostAlias": "peer0.org1.task.com",
        "mspId": "org1-task-com"
    }
};

module.exports = { profile };
