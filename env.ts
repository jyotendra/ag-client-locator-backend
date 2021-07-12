const path = require("path");
const devConfigPath = "./env/.dev.env";
const prodConfigPath = "./env/.prod.env";

export const PROD_ENV = "production";
export const DEV_ENV = "development";
export let APP_ENV: string;

if (process.env.NODE_ENV === PROD_ENV) {
    require("dotenv").config({ path: path.join(__dirname, prodConfigPath) });
    APP_ENV = PROD_ENV;
} else {
    require("dotenv").config({ path: path.join(__dirname, devConfigPath) });
    APP_ENV = DEV_ENV;
}

export const APP_PORT = process.env["APP_PORT"];

// Db configs

export const YELP_URL = process.env["YELP_URL"];


// Lambda configs
export const LAMBDA_STAGING = process.env["LAMBDA_STAGING"] || "testing";



