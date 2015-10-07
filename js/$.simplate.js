/*global jQuery */
/*jslint regexp: true*/
/*

	https://github.com/uki213/simplate

	simpleなテンプレートエンジン 「 $.simplate.js 」

*/
(function ($) {
	'use strict';
	$.fn.simplate = function (domData, objectData) {
		var i,
			j,
			exportText, // 最終出力用
			extractionVariable, // テンプレート変数抽出用
			substitutionArray, // テンプレート置き換え用
			association,
			RegExPattern = /\{\$\s*(.*?)\s*\}/g,
			RegExReplce = /\{\$\s*(.*?)\s*\}/;

		// domDataから配列を作成
		extractionVariable = domData.match(RegExPattern, '$1');
		for (i = 0; i < extractionVariable.length; i = i + 1) {
			substitutionArray = extractionVariable[i].replace(RegExPattern, '$1');

			association = substitutionArray.split('.');
			exportText = objectData;
			for (j = 0; j < association.length; j = j + 1) {
				exportText = exportText[association[j]];
			}
			domData = domData.replace(RegExReplce, exportText);
		}
		$(this).html(domData);
	};
}(jQuery));
