import { connect } from "mongoose";

export const dbConfig = async () => {
  try {
    await connect("mongodb://127.0.0.1:27017/cmsDB").then(() => {
      console.clear();
      console.log("connected");
    });
  } catch (error) {
    console.log("Error");
  }
};
