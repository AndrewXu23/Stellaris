// This file is finished by Yuting Shao and Zihan Xu.
// The functions that are related to the collection "universe" are finished by Yuting,
// which are getUniverses, insertUniverses, updateUniverses, and deleteUniverses.
//
// The functions that are related to the collection "builder" are finished by Zihan,
// which are insertBuilders, deleteBuilders, and getBuilders.

import { MongoClient } from "mongodb";

function MyMongoDB() {
  const myDB = {};
  const url =
    process.env.ATLAS_URI ||
    "mongodb+srv://kelly:QUKGeA3kxOndEb62@cluster0.aknyknz.mongodb.net/?retryWrites=true&w=majority";
  const DB_NAME = "project3";
  const DON_COL_NAME = "universe";

  myDB.getUniverses = async function () {
    let client;
    console.log("getUniverses");
    try {
      client = new MongoClient(url);

      // TODO handle errors
      const colUniverses = client.db(DB_NAME).collection(DON_COL_NAME);

      const query = {};
      console.log("getUniverses running query");
      return await colUniverses.find(query).toArray();
    } catch (e) {
      console.log("getUniverses error", e);
      throw e;
    } finally {
      console.log("getUniverses closing connection");
      await client.close();
    }
  };

  myDB.insertUniverse = async function (matchDocument) {
    let client;
    console.log("insertUniverse");
    try {
      client = new MongoClient(url);
      const colUniverses = client.db(DB_NAME).collection(DON_COL_NAME);
      console.log("insertUniverse running query");
      await colUniverses.insertOne(matchDocument);
    } catch (e) {
      console.log("insertUniverse error", e);
      throw e;
    } finally {
      console.log("insertUniverse closing connection");
      await client.close();
    }
  };

  myDB.updateUniverse = async function (matchDocument) {
    let client;
    console.log("updateUniverse");
    const listingQuery = {
      name: matchDocument.name,
      builder: matchDocument.builder,
    };
    const update = {
      $set: {
        last_modified: matchDocument.last_modified,
        N_value: matchDocument.N_value,
        O_value: matchDocument.O_value,
        Cell_value: matchDocument.Cell_value,
        dist_value: matchDocument.dist_value,
        gravity_value: matchDocument.gravity_value,
        mitosis_value: matchDocument.mitosis_value,
        mitochondria: matchDocument.mitochondria_value,
        mitosis: matchDocument.nucleus_value,
        Final: matchDocument.Final,
      },
    };
    try {
      client = new MongoClient(url);
      const colUniverses = client.db(DB_NAME).collection(DON_COL_NAME);
      console.log("updateUniverse running query");
      await colUniverses.updateOne(listingQuery, update);
    } catch (e) {
      console.log("updateUniverse error", e);
      throw e;
    } finally {
      console.log("updateUniverse closing connection");
      await client.close();
    }
  };

  myDB.deleteUniverse = async function (matchDocument) {
    let client;
    console.log("deleteUniverse");
    try {
      client = new MongoClient(url);
      const colUniverses = client.db(DB_NAME).collection(DON_COL_NAME);
      console.log("deleteUniverse running query");
      await colUniverses.deleteOne(matchDocument);
    } catch (e) {
      console.log("deleteUniverse error", e);
      throw e;
    } finally {
      console.log("deleteUniverse closing connection");
      await client.close();
    }
  };

  myDB.insertBuilder = async function (matchDocument2) {
    let client;
    console.log("insertBuilder");
    try {
      client = new MongoClient(url);
      const colBuilder = client.db(DB_NAME).collection("builder");
      console.log("insertBuilder running query");
      // check if the builder is already there
      const query = { builder: matchDocument2.builder };
      const tmp = await colBuilder.find(query).toArray();
      console.log(tmp.length);
      if(tmp.length === 0){
        console.log("insert to builder");
        matchDocument2.universe = [matchDocument2.universe];
        await colBuilder.insertOne(matchDocument2);
      } else{
        const oldUniverse = tmp[0]["universe"];
        oldUniverse.push(matchDocument2.universe);
        const listingQuery = {
          builder: matchDocument2.builder,
        };
        const update = {
          $set: {
            universe: oldUniverse
          },
        };
        await colBuilder.updateOne(listingQuery, update);
      }
      
    } catch (e) {
      console.log("insertBuilder error", e);
      throw e;
    } finally {
      console.log("insertBuilder closing connection");
      await client.close();
    }
  };

  myDB.deleteBuilder = async function (matchDocument2) {
    let client;
    console.log("deleteBuilder");
    try {
      client = new MongoClient(url);
      const colBuilder = client.db(DB_NAME).collection("builder");
      console.log("deleteBuilder running query");
      // check if the builder is already there
      const query = { builder: matchDocument2.builder };
      const tmp = await colBuilder.find(query).toArray();
      console.log(tmp.length);
      if(tmp.length > 0){
        let oldUniverse = tmp[0]["universe"];
        oldUniverse = oldUniverse.filter(item => item !== matchDocument2.name);
        const listingQuery = {
          builder: matchDocument2.builder,
        };
        const update = {
          $set: {
            universe: oldUniverse
          },
        };
        await colBuilder.updateOne(listingQuery, update);
      }
      
    } catch (e) {
      console.log("deleteBuilder error", e);
      throw e;
    } finally {
      console.log("deleteBuilder closing connection");
      await client.close();
    }
  };

  myDB.getBuilders = async function () {
    let client;
    console.log("getBuilders");
    try {
      client = new MongoClient(url);

      // TODO handle errors
      const colBuilders = client.db(DB_NAME).collection("builder");

      const query = {};
      console.log("getBuilders running query");
      return await colBuilders.find(query).toArray();
    } catch (e) {
      console.log("getBuilders error", e);
      throw e;
    } finally {
      console.log("getBuilders closing connection");
      await client.close();
    }
  };

  return myDB;
}

export const myDB = MyMongoDB();
