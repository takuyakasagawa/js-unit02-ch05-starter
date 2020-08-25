import Polyglot from 'node-polyglot';

// localeを取得するのが良さそうですね。以下の場合は日本語のみを取得し続けることになります
// localeもしくは、localeがないのであれば日本語localeとするのが良さそうです
// もしくは、という演算子がありましたね、基礎編Lesson 1か2で習得しています
// スコープの問題がconstructorメソッド内にはあります。constructorメソッド内の変数は、全てconstructorメソッドの外で呼び出すことを前提としていますから、スコープを意識した書き方をしましょう


let readData = localStorage.getItem('jp');

class TranslationApp {
  constructor() {
    this.polyglot = new Polyglot();
    this.updateLocale = this.updateLocale.bind(this);
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