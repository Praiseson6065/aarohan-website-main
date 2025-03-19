
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
    if (!data || data.length === 0) return [];
  
    const headers = data[0];
    const rows = data.slice(1);
    
    const referenceDate = new Date(2024, 2, 20); // March 20, 2024 (Months are 0-based)
    const schedule = [];
  
    rows.forEach((row) => {
      const entry = Object.fromEntries(headers.map((key, index) => [key, row[index] || ""]));
      
      if (!entry["Date"]) return;
  
      const eventDate = new Date(entry["Date"]);
      const dayIndex = Math.floor((eventDate - referenceDate) / (1000 * 60 * 60 * 24)); // Calculate day index
  
      if (dayIndex < 0) return; // Ignore past events
  
      const formattedEntry = {
        name: entry["Event/Workshop Name"],
        poster: entry["Poster"].replace("file/d/", "uc?id=").replace("/view?usp=sharing", ""),
        venue: entry["Venue"],
        time: entry["Time"],
        description: entry["Description"],
        registrationLink: entry["Registration Link"],
      };
  
      if (!schedule[dayIndex]) {
        schedule[dayIndex] = { events: [], workshops: [] };
      }
  
      if (entry["Type"].toLowerCase() === "event") {
        schedule[dayIndex].events.push(formattedEntry);
      } else if (entry["Type"].toLowerCase() === "workshop") {
        schedule[dayIndex].workshops.push(formattedEntry);
      }
    });
    console.log(schedule)
    return schedule;
  };