/**
 * GL Plugin
 * 
 * Version Date Author Remarks 1.00 02 Apr 2015 Kevin
 * 
 */

function customizeGlImpact(transactionRecord, standardLines, customLines, book) {
	for (var i = 0; i < standardLines.getCount(); i++) {
		var currLine = standardLines.getLine(i);
		var newLine = customLines.addNewLine();
		
		if (currLine.getCreditAmount() != 0){
			newLine.setCreditAmount(currLine.getCreditAmount());
			newLine.setAccountId(currLine.getAccountId());
		}
		else{
			newLine.setDebitAmount(currLine.getDebitAmount());
			newLine.setAccountId(54);
		}
		
		
		newLine.setMemo("Payment catches both revenue and cash.");
	}
}