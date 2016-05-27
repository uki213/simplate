# $.simplate.js
simpleなテンプレートエンジン

## 概要

simplateは、simpleで小型のtemplate pluginです。  
大掛かりなフレームワークを導入するほどでも無い小規模な案件で、簡単にテンプレート機能を実装することが出来ます。

* jQueryプラグインの形式で記述できるので、初心者でも簡単
* 繰り返しの様な複雑な処理はできない
* 実行されると一度だけ書き換える。常にMODELを監視するような高機能は持ち合わせない

## 必要とするもの

* [jQuery](https://jquery.com/)

## 使用法

	<script type="text/javascript" src="$.simplate.js"></script>
[ダウンロードして](http://uki213.github.io/simplate/js/$.simplate.js)scriptタグで読み込ませて準備完了

## プラグインとして利用する

	$(targetDom).simplate(dom, data, callback);
domにはテンプレート変数を使用したHTMLが入ります。  
テンプレート変数は <--{ }--> で囲まれた部分になります。  
テンプレート変数の中の記述は通常の配列と同様に書けます。（ブラケット表記は不可）

目的のDOM(targetDom)に対して、domとobjectを指定すると整形されたhtmlで上書きします。  
callbackは省略可能。

## 関数として利用する

    var hoge = $.simplate(dom, data);
通常の関数としても使用できます。  
その場合、作成されたdomはreturnで戻されます。  
上記のサンプルの場合はhogeの中にdomの内容が格納されます。  

## デモ

* [基本サンプル](http://uki213.github.io/simplate/sampleCode/sample01.html)
* [DOMデータをajaxで取得するサンプル](http://uki213.github.io/simplate/sampleCode/sample02.html)
* [DOMデータとobject両方をajaxで取得するサンプル](http://uki213.github.io/simplate/sampleCode/sample03.html)

## LICENCE

自由。ただしこのプログラム単体そのもので利益をえるような行為はNG  
[http://uki213.github.io/simplate/](http://uki213.github.io/simplate/)  
[https://github.com/uki213/simplate](https://github.com/uki213/simplate)
