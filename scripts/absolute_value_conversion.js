var currentTable = base.context.currentTable;
var currentRow = base.context.currentRow;
var columnName = "Betrag";

currentRow[columnName] = -currentRow[columnName]; //converts the negative value to positive

//Call the modifyrow function
base.modifyRow(currentTable, currentRow, {[columnName]: currentRow[columnName]});
