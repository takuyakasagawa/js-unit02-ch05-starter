import Polyglot from 'node-polyglot';

class TranslationApp {
  constructor() {
    this.polyglot = new Polyglot();
  }

  setup() {
    /* 
      現在のLocaleに合わせて、polyglotにメッセージをセットします。
      メッセージのセットにはpolyglot.extend()を利用します。
    */
   polyglot.extend({
    "hello": "こんにちは、世界"
    });
  }

  updateLocale(e) {
    /*
      ボタンにセットされたdata-localeを元に現在のlocaleを変更します。
    */
  }

  showMessage() {
    /*
      mainというidがセットされた要素の下にh1タグで現在のlocaleに応じて、メッセージを表示します。 
    */
    div.innerHTML = `${this.polyglot.t("hello")}`;
    console.log(this.polyglot.t);
  }

}


{
  const app = new TranslationApp();

  const button1 = document.getElementById('button1');
  button1.addEventListener("click", app.updateLocale);
  
  const button2 = document.getElementById('button2');
  button2.addEventListener("click", app.updateLocale);
}