import { dbConfig } from "@/utils/dbConfig";
import heroModel from "@/utils/model/heroModel";
import { NextRequest, NextResponse } from "next/server";

export const PATCH = async (req: NextRequest, { params }: any) => {
  try {
    await dbConfig();
    const { heroID } = params;
    const { desc, title, image, imageID, fontSize, color } = await req.json();

    const hero = await heroModel.findByIdAndUpdate(
      heroID,
      { desc, title, image, imageID, fontSize, color },
      { new: true }
    );

    return NextResponse.json({
      status: 201,
      message: "updating Hero",
      data: hero,
    });
  } catch (error) {
    return NextResponse.json({
      status: 404,
      message: "Error",
    });
  }
};
