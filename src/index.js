import Polyglot from 'node-polyglot';

let localData1 = {
  local: jp,
}

let localData2 = {
  local: en,
}

localStorage.setItem('jp', localData1);
localStorage.setItem('en', localData2);

class TranslationApp {
  constructor() {
    this.polyglot = new Polyglot();
    this.updateLocale = this.updateLocale.bind(this);
    let readData = localStorage.getItem('jp');
  }
  
  setup() {
    /* 
      現在のLocaleに合わせて、polyglotにメッセージをセットします。
      メッセージのセットにはpolyglot.extend()を利用します。
    */
    if (条件式) {//現在取得されてる言語が日本語ならば
      // 処理内容
    } else {
      // 処理内容が return 値;のようにある場合
    }

    this.polyglot.extend({
      "hello": "こんにちは、世界"
    });

    this.polyglot.extend({
      "hello": "Hello World"
    });
  }

  updateLocale(e) {
    /*
      ボタンにセットされたdata-localeを元に現在のlocaleを変更します。
    */
   this.showMessage();
  }

  showMessage() {
    /*
      mainというidがセットされた要素の下にh1タグで現在のlocaleに応じて、メッセージを表示します。 
    */
    const main = document.getElementById('main');
    main.innerHTML = `<h1>${this.polyglot.t("hello")}</h1>`;
  }
}

{
  const app = new TranslationApp();

  const button1 = document.getElementById('button1');
  button1.addEventListener("click", app.updateLocale);
  
  const button2 = document.getElementById('button2');
  button2.addEventListener("click", app.updateLocale);

  app.showMessage();
}

// function showMessage() {
//   //関数showMessageの実装内容
// }
// showMessage();