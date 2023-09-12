import { utapi } from "uploadthing/server";

async function uploadFiles(formData: any) {
  "use server";

  console.log("node version", process.version);
  try {
    const files = await formData.getAll("files");
    const response = await utapi.uploadFiles(files);

    console.log("response for utapi", response);
  } catch (e) {
    console.log(e);
  }
  //    ^? UploadedFileResponse[]
}

export default function MyForm() {
  return (
    <form action={uploadFiles}>
      <input name="files" type="file" multiple />
      <button type="submit">Upload</button>
    </form>
  );
}
