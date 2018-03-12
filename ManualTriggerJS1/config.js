var config = {}
config.endpoint = "https://smart-db.documents.azure.com:443/";
config.primaryKey = "CPAVbTrspS7JCuKH4PEgyNDTD26q2kkJXXR7FH13a5YF5qunDizcNU9JMdSWaTVpRuKVLUaLJgX81UQJmY7Otw==";
config.database = "Transactuation";
config.collection = {
    "tx" : "TxCol",
    "txip" : "TxInProgressCol",
    "state" : "StateCol"
};
module.exports = config