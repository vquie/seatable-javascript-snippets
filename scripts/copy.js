// Define the source and destination tables
const destinationTable = base.getTableByName('target_table');

// Define the mapping of columns between the source and destination tables
var columnMapping = {
  'source_column1': 'target_column1',
  'source_column2': 'target_column2',
  // Add more column mappings as needed
};

// Get the records from the source table
var sourceRecord = base.context.currentRow;
var mappedRecord = {};

// Iterate through each columnMapping
for (let key in columnMapping) {
  // Map the key from the source column to the value in columnMapping
  mappedRecord[columnMapping[key]] = sourceRecord[key];
}

base.addRow(destinationTable, mappedRecord);
