import { google } from "googleapis";

export interface FormData {
  source: string;
  company: string;
  department?: string;
  name: string;
  email: string;
  phone?: string;
  type?: string;
  message?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}

export async function appendToSheet(data: FormData): Promise<void> {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const timestamp = new Date().toISOString();
  const row = [
    timestamp,
    data.source,
    data.company,
    data.department ?? "",
    data.name,
    data.email,
    data.phone ?? "",
    data.type ?? "",
    data.message ?? "",
    data.utm_source ?? "",
    data.utm_medium ?? "",
    data.utm_campaign ?? "",
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
    range: "A:L",
    valueInputOption: "RAW",
    requestBody: {
      values: [row],
    },
  });
}
