import { NextRequest, NextResponse } from "next/server";
import Clan from "src/models/clan";
import User from "src/models/user";
import { connect } from "src/db/config";

connect();
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, uniqueName, leader, coLeaders, members, imageUrl } = body;

  if (!name)
    return NextResponse.json({ message: "Name is required" }, { status: 400 });

  if (!uniqueName)
    return NextResponse.json(
      { message: "Unique Name Fee is required" },
      { status: 400 }
    );
  if (!leader)
    return NextResponse.json(
      { message: "Leader is required" },
      { status: 400 }
    );

  const res = await Clan.findOne({ uniqueName });
  if (res) {
    return NextResponse.json(
      { message: "Unique name already in use" },
      { status: 400 }
    );
  }

  const clan = new Clan({
    name,
    uniqueName,
    leader,
    coLeaders: coLeaders || [],
    members: members || [],
    imageUrl,
  });
  await clan.save();
  await User.findByIdAndUpdate(leader, { clan: clan._id });

  return NextResponse.json(
    { message: "New Clan Created", clan },
    { status: 201 }
  );
}
