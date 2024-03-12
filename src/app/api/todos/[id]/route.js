import { connect } from "@/dbConfig/dbConfig";
import Todo from "@/models/todoModel";
import { NextResponse } from "next/server";

connect();

export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const {
      newTitle: title,
      newDescription: description,
    } = await req.json();
    const todo = await Todo.findByIdAndUpdate(id, { title, description }, {new: true});
    return NextResponse.json(
      {
        message: "Todo updated successfully",
        success: true,
        todo,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error while updating Todo",
        success: false,
      },
      { status: 500 }
    );
  }
}

export async function GET(req, { params }) {
  try {
    const { id } = params;
    const todo = await Todo.findOne({_id: id});
    return NextResponse.json(
      {
        message: "Todo found successfully",
        success: true,
        todo,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error while finding Todo",
        success: false,
      },
      { status: 500 }
    );
  }
}
