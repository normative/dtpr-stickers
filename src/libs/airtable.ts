import Airtable from 'airtable';

const airtable = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_API_KEY });
const baseAirtable = airtable.base(process.env.REACT_APP_AIRTABLE_DATABASE_ID);

export default baseAirtable;
