import { NextResponse } from "next/server";
import { utapi } from "uploadthing/server";

async function doUpload() {
  const url =
    "https://pbs.twimg.com/profile_images/1605762947686375425/lsoGWWty_400x400.jpg";

  const resp = await utapi.uploadFilesFromUrl([new URL(url)]);
  console.log(resp);
  return resp;
}

export const GET = async () => {
  const response = await doUpload();

  return NextResponse.json(response);
};
