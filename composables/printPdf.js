export default async function printPdf(language = "en") {
  await fetch("/api/pdf", {
    method: "post",
    body: language,
  });
}
