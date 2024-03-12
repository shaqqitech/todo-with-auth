import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(req) {
  try {
    const reqBody = await req.json();
    const { email, password } = reqBody;
    console.log(reqBody);

    // check whether email exists or not
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: "Email not found" }, { status: 400 });
    }

    // check password
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json(
        { message: "password is incorrect" },
        { status: 400 }
      );
    }

    // create token data
    const tokenData = {
      id: user._id,
      email: user.email,
      password: user.password,
    };

    // create token
    const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "6d",
    });

    // create response object
    const response = NextResponse.json(
      {
        message: "Token generated successfully",
        success: true,
      },
      { status: 200 }
    );

    // creating cookies
    response.cookies.set("token", token, { httpOnly: true });

    // return response object
    return response;
  } catch (error) {
    return NextResponse.json(
      { message: "Error while finding a user", error: error },
      { status: 500 }
    );
  }
}
