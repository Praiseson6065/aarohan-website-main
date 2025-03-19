
const GOOGLE_SHEET_ID = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const SHEET_NAME = "Form responses 1";
const SHEET_URL = `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;

export const fetchGoogleSheetData = async () => {
    console.log(SHEET_URL)
  try {
    const response = await fetch(SHEET_URL);
    const data = await response.json();
    console.log(data)
    return data.values;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return [];
  }
};

export const processSheetData = (data) => {
  if (!data || data.length === 0) return { events: [], workshops: [] };
  const headers = data[0];
  const rows = data.slice(1);

  const jsonData = { events: [], workshops: [] };
  rows.forEach((row) => {
    const entry = Object.fromEntries(headers.map((key, index) => [key, row[index] || ""]));
    const formattedEntry = {
      name: entry["Event/Workshop Name"],
      poster: entry["Poster"].replace("file/d/", "uc?id=").replace("/view?usp=sharing", ""),
      venue: entry["Venue"],
      date: entry["Date"],
      time: entry["Time"],
      description: entry["Description"],
      registrationLink: entry["Registration Link"],
    };
    if (entry["Type"].toLowerCase() === "events") {
      jsonData.events.push(formattedEntry);
    } else if (entry["Type"].toLowerCase() === "workshops") {
      jsonData.workshops.push(formattedEntry);
    }
  });

  return jsonData;
};