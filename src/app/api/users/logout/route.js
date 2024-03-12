import { connect } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";

connect();

export async function GET() {
  try {
    const response = NextResponse.json(
      {
        message: "Logging out successfully",
        success: true,
      },
      { status: 200 }
    );

    response.cookies.set("token", "", { httpOnly: true, expires: new Date(0) });

    return response;
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error while logging out",
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}
