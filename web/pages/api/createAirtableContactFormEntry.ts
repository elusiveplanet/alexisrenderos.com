import { NextApiRequest, NextApiResponse } from "next";
import table from "./airtable";

const createAirtableContactFormEntry = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }
  const fields = req.body;
  try {
    const createdContactFormEntry = await table.create(
      {
        fld1nJIYWqeOUMejq: fields.firstName,
        fldQvofXuCwST8MkS: fields.lastName,
        fldbYKkLmfbOIq8ai: fields.email,
        fldaO1Vlb9XqFLjSB: fields.message,
      },
      (err, record) => {
        if (err) {
          console.error(err);
          throw new Error("Error creating new record");
        }
      }
    );
    res.status(200).send({ message: "Successfully created new record" });
    return;
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Error creating new record" });
  }
};

export default createAirtableContactFormEntry;
