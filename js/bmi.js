'use strict';
/*-------------------------------------
ＢＭＩを計算する.js
入力さっれた ”身長”　”体重” を取得し
結果をメッセージウインドウに表示する。
-------------------------------------*/

const bmi = () => {

  /* 身長を取得する */
  const $height = document.getElementById('js_height');
  const height = $height.value;
  console.log("身長は " + height + "cm です。");
  
  /* 体重を取得する */
  const $weight = document.getElementById('js_weight');
  const weight = $weight.value;
  console.log("体重は " + weight + "kg です。");

  /* ＢＭＩを計算する */
  const ans = weight / ( ( height / 100 ) **2 ) ;
  console.log(ans);

  /* メッセージウィンドウを取得 */
  const $text = document.getElementById('js_text');
  console.log($text);

  /* 処理結果をメッセージウィンドウに出力する */
  if (ans < 20) {
    $text.innerHTML = "やせ型です。　ＢＭＩは " + ans + " でした。";

    } else if (ans >= 20 && ans < 25 ) {
      $text.innerHTML = "標準体型です。　ＢＭＩは " + ans + " でした。";
      
    } else if (ans >= 25) {
      $text.innerHTML = "太り気味です。　ＢＭＩは " + ans + " でした。";
      
    } else {
      $text.innerHTML = "身長と体重に、数字を入力して、もう１度計算して下さい。";
      
    }
    
  }
