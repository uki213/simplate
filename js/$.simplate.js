/*global jQuery, console, window */
/*jslint regexp: true*/
/*

	https://github.com/uki213/simplate
	http://uki213.github.io/simplate/
	simpleなテンプレートエンジン 「 $.simplate.js 」

*/
(function ($) {
	'use strict';
	$.simplate = function (domData, objectData) {
		var i,
			j,
			exportText, // 最終出力用
			extractionVariable, // テンプレート変数抽出用
			substitutionArray, // テンプレート置き換え用
			association,
			RegExPattern = /\{\$\s*(.*?)\s*\}/g,
			RegExReplce = /\{\$\s*(.*?)\s*\}/;

		// 引数の調整
		domData = String(domData);
		if (typeof (objectData) !== 'object') {
			if (window.console) {
				console.error('引数に指定されたobjectに問題があります');
			}
			return false;
		}

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
		return domData;
	};
	$.fn.simplate = function (domData, objectData, callback) {
		domData = $.simplate(domData, objectData);

		$(this).html(domData);
		$(this).ready(function () {
			// callback関数の実行
			if (typeof (callback) === 'function') {
				callback();
			}
		});
	};
}(jQuery));
