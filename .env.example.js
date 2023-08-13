/* 
    *   From this file copy all the code to
    *   a file .env.js and costomize it according 
    *   to our need.
*/

const development = {
    ...process.env,
    NODE_ENV: "development" || process.env.NODE_ENV,
    PORT: 3000,
    mongoDB_Atlas: {
        databaseUserName: "",
        password: "",
        collectionName: "",
        clusterName: "",
        connectionString:
            "mongodb+srv://<databaseUserName>:<password>@<cluster>.oyoia0n.mongodb.net/<collectionName>?retryWrites=true&w=majority",
    }
};

const production = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || "production",
    PORT: 3001,
    mongoDB_Atlas: {
        databaseUserName: "",
        password: "",
        collectionName: "",
        clusterName: "",
        connectionString:
            "mongodb+srv://<databaseUserName>:<password>@<cluster>.oyoia0n.mongodb.net/<collectionName>?retryWrites=true&w=majority",
    }
};

const test = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || "test",
    PORT: 8080,
    mongoDB_Atlas: {
        databaseUserName: "",
        password: "",
        collectionName: "",
        clusterName: "",
        connectionString:
            "mongodb+srv://<databaseUserName>:<password>@<cluster>.oyoia0n.mongodb.net/<collectionName>?retryWrites=true&w=majority",
    }
};

const fallback = {
    ...process.env,
    NODE_ENV: undefined,
};

module.exports = (environment) => {
    if (environment === "development") 
    return development;
    else if (environment === "production") return production;
    else if (environment === "test") return test;
    else return fallback;
};