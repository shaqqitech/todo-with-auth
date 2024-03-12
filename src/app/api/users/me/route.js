import { connect } from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

connect();

export async function GET(request) {
  try {
    const userId = await getDataFromToken(request);

    const user = await User.findById({ _id: userId }).select("-password");

    return NextResponse.json(
      {
        message: "User found successfully",
        success: true,
        data: user,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error while fetching user",
        success: false,
        error: error,
      },
      { status: 500 }
    );
  }
}
