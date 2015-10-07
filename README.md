# simplate
simpleなテンプレートエンジン 「 $.simplate.js 」

    var dom = '<p>{$ test }</p><p>{$ sample.test_A }</p><p>{$ sample.test_B.test }</p><p>{$ test }</p>',
        data = {
            test: 'test_OK',
            sample: {
                test_A: 'sample_test_A_OK',
                test_B: {
                    test:"sample_test_B_OK"
                }
            }
        }
    
    $('.test').simplate(dom, data);

domにはテンプレート変数を使用したHTMLが入ります。<br>
テンプレート変数は {$ } で囲まれた部分になります。<br>
<br>
テンプレート変数の中の記述は通常の配列と同様に書けます。（ブラケット表記は不可）<br>
<br>
$(targetDom).simplate(dom, data);<br>
目的のDOM(targetDom)に対して、domとobjectを指定すると整形されたhtmlで上書きします。
