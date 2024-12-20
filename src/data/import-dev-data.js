import fs from "fs";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { MongoClient, ServerApiVersion } from "mongodb";

import Criminal from "../models/criminalModel.js";
/*import Crime from "../models/crimeModel";
import Sanction from "../models/sanctionModel";
import Evidence from "../models/evidenceModel";
import LegalAction from "../models/legalActionModel";*/

dotenv.config({ path: "./config.env" });

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

/* Handle uncaught exceptions */
process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  console.log("Uncaught Exception");
  process.exit(1);
});

/* Connect to the database */
const uri = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect to the "insertDB" database and access its "haiku" collection
    const database = client.db("awct-db");
    const awct = database.collection("awct-collection");

    if (process.argv[2] === "--import") {
      /* Read the json file */
      const criminals = JSON.parse(
        fs.readFileSync(`${__dirname}/criminal-simple.json`, "utf-8")
      );
      const result = await awct.insertOne(criminals);

      // Print the ID of the inserted document
      console.log(`A document was inserted with the _id: ${result.insertedId}`);
    }

    if (process.argv[2] === "--delete") {
      const result = await awct.deleteMany({});
      console.log(`${result.deletedCount} documents were deleted`);
    }
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
