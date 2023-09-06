import Image from "next/image";
import { utapi } from "uploadthing/server";

async function doUpload() {
  "use server";
  const url =
    "https://pbs.twimg.com/profile_images/1605762947686375425/lsoGWWty_400x400.jpg";

  const resp = await utapi.uploadFilesFromUrl([new URL(url)]);
  console.log(resp);
}

const UploadForm = () => {
  return (
    <form action={doUpload}>
      <button type="submit">Run</button>
    </form>
  );
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UploadForm />
    </main>
  );
}
