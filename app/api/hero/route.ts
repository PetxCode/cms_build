import { dbConfig } from "@/utils/dbConfig";
import heroModel from "@/utils/model/heroModel";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  try {
    await dbConfig();
    const hero = await heroModel.find();
    return NextResponse.json({
      status: 200,
      message: "Reading Hero",
      data: hero,
    });
  } catch (error) {
    return NextResponse.json({
      status: 404,
      message: "Error",
    });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    await dbConfig();
    const { desc, title, image, imageID } = await req.json();
    const hero = await heroModel.create({ desc, title, image, imageID });
    return NextResponse.json({
      status: 200,
      message: "Reading Hero",
      data: hero,
    });
  } catch (error) {
    return NextResponse.json({
      status: 404,
      message: "Error",
    });
  }
};
