import baseAirtable from "../libs/airtable";
import { AirtableData, Option, TableName } from "../types";

export async function getAirtableOptionsForTable(tableName: TableName): Promise<Option[]> {
  let options: Array<Option> = []
  return new Promise<Option[]>(function (resolve, reject) {
    baseAirtable(tableName).select().eachPage(function page(records: Array<any>, fetchNextPage: () => void) {
      records.forEach((record) => {
        const option: Option = {
          name: record.get('Name'),
          description: record.get('Description'),
          iconShortname: record.get('Icon Shortname'),
        }
        options.push(option)
      });
      fetchNextPage();
    }, function done(err: Error) {
      if (err) {
        reject(err);
      }
      resolve(options)
    });
  });
}

export async function getAirtableData(onSuccess, onError) {
  try {
    const [techType, purpose, dataType, access, storage, dataProcess, accountable] = await Promise.all([
      await getAirtableOptionsForTable('Technology Type'),
      await getAirtableOptionsForTable('Purpose'),
      await getAirtableOptionsForTable('Data Type'),
      await getAirtableOptionsForTable('Access'),
      await getAirtableOptionsForTable('Storage'),
      await getAirtableOptionsForTable('Data Process'),
      await getAirtableOptionsForTable('Accountability'),
    ]);

    const airtableDataObject: AirtableData = { techType, purpose, dataType, access, storage, dataProcess, accountable }
    onSuccess(airtableDataObject);
  } catch (e) {
    onError(e);
  }
}
