import { Document, models, Schema, model } from "mongoose";

interface iHero {
  title: string;
  desc: string;
  image: string;
  styling: string;
  fontSize: string;
  color: string;
  imageID: string;
}

interface iHeroData extends iHero, Document {}

const heroData = new Schema<iHeroData>(
  {
    title: {
      type: String,
    },
    desc: {
      type: String,
    },
    image: {
      type: String,
    },
    color: {
      type: String,
    },
    fontSize: {
      type: String,
    },
    imageID: {
      type: String,
    },
  },
  { timestamps: true }
);

const heroModel = models.Heros || model<iHeroData>("Heros", heroData);

export default heroModel;
