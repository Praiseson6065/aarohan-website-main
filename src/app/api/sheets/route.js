export async function GET() {
  const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID;
  const API_KEY = process.env.GOOGLE_API_KEY;
  const SHEET_NAME = "Form responses 1";
  const SHEET_URL = `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;

  try {
    const response = await fetch(SHEET_URL);
    if (!response.ok) {
      throw new Error(`Google Sheets API error: ${response.statusText}`);
    }

    const data = await response.json();
    return Response.json({ success: true, data: data.values });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
