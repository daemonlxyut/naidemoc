<template>
  <div id="chat">

    <!-- 左側 -->
    <div id="talk">

      <!-- 会話履歴 -->
      <div id="field">

        <div class="balloon" v-for="(val, i) in chatLog" v-bind:key="i">
          <div class="stamp_you" v-if="isStamp(i)">
            <!-- スタンプの場合の処理 -->
            <img class="stamp_chat" v-bind:src="val.stamp">
          </div>

          <div class="balloon_you" v-else-if="isYou(i)">
            <!-- 入力者の場合の処理 -->
            <p>{{ val.msg }}</p>
          </div>

          <div class="balloon_robot" v-else>
            <!-- AIの場合の処理 -->
            <div class="icon">
              <img src="@/assets/icon.png">
            </div>
            <div class="text_robot">
              <div class="chat_robot">
                <p>{{ val.msg }}</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- 送信，テキストボックス -->
      <div id="input_field">
        <!-- textmsgに代入 -->
        <input id="chat_input" v-model="textmsg" placeholder="ここに入力してね">
        <button id="chat_button" v-on:click="send()">送信</button>
      </div>
    </div>

    <!-- 右側 -->
    <div id="stamp_field">
      <div id="stamp_area">
        <div class="stamp_card" v-for="(item, i) in stampList" v-bind:key="i">
          <img class="stamp_fig" v-bind:src="item.path" v-on:click="pushStamp(i)">
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios'

export default {
  name: 'Chat',
  data () {
    return {
      // 最初，テキストボックスの中身は空欄
      textmsg: '',
      // チャットの履歴
      chatLog: [
        {
            who: "robot",
            style: "message",
            msg: "鋭いツッコミ入れたるで。",
            stamp: null
        },
      ],
      // スタンプ一覧
      stampList: [
        {
          name: "stp1",
          path: require("@/assets/stp1.png"),
          score: 10
        },
        {
          name: "stp2",
          path: require("@/assets/stp2.png"),
          score: 10
        },
        {
          name: "stp3",
          path: require("@/assets/stp3.png"),
          score: 10
        },
        {
          name: "stp4",
          path: require("@/assets/stp4.png"),
          score: 10
        },
        {
          name: "stp5",
          path: require("@/assets/stp5.png"),
          score: 10
        },
        {
          name: "stp6",
          path: require("@/assets/stp6.png"),
          score: 10
        },
        {
          name: "stp7",
          path: require("@/assets/stp7.png"),
          score: 10
        },
        {
          name: "stp8",
          path: require("@/assets/stp8.png"),
          score: 10
        },
      ],
    }
  },
  methods: {
    isStamp(i) {
      // チャット履歴がスタンプかどうか確認
      return this.chatLog[i].style == "stamp";
    },
    isYou(i) {
      // チャット履歴が入力者か確認
      return this.chatLog[i].who == "you";
    },

    pushStamp(i) {
      // スタンプ押した時の処理
      console.log(i);
      // 配列chatLogに追加
      this.chatLog.push({
        who: "you",
        msg: null,
        style: "stamp",
        stamp: this.stampList[i].path
      });
    },

    send() {
      // 送信ボタン実行時の処理

      // 空白の時は何もしない
      if (this.textmsg === '') return;

      // 配列chatLogに追加
      this.chatLog.push({
        who: "you",
        msg: this.textmsg,
        style: "message",
        stamp: null
      });

      // データを送信用に変換
      let jsontext = JSON.stringify({
        "text": this.textmsg
      });
      let uritext = encodeURIComponent(this.textmsg);

      // APIと通信
      // this.api_demo(jsontext);
      this.api_release(uritext);

      // 送信ボタンを押した後は空欄に戻す
      this.textmsg = '';

      // 下端までスクロール
      // var obj = document.getElementById(targetId);
      // obj.scrollTop = obj.scrollHeight;
      // let target = document.getElementById('field');
      // target.scroll(false);
    },

    api_demo(data) {
      // 擬似API
      const push = () => {
        // AIの実行結果を会話に反映
        this.chatLog.push({
          who: "robot",
          msg: data,
          style: "message",
          stamp: null
        })
      }

      // 1秒後に応答
      setTimeout(push, 1000);
    },

    api_release(data) {
      // API通信
      // クッキー取得関数
      function getCookie(name) {
          var cookieValue = null;
          if (document.cookie && document.cookie !== '') {
              var cookies = document.cookie.split(';');
              for (var i = 0; i < cookies.length; i++) {
                  var cookie = jQuery.trim(cookies[i]);
                  // Does this cookie string begin with the name we want?
                  if (cookie.substring(0, name.length + 1) === (name + '=')) {
                      cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                      break;
                  }
              }
          }
          return cookieValue;
      }

      // CSRFトークンの取得
      let csrftoken = getCookie('csrftoken');

      // APIのURL
      let url = 'https://tlabapi-hackday2021.azurewebsites.net/test/';
      let uri = url + '?' + 'text' + '=' + data;

      // 送信時パラメータの設定
      let params = new URLSearchParams();
      params.append("X-CSRFToken", csrftoken);

      // fetch GETの実行
      axios.get(uri, params)
      .then(res => {
        // 正常処理
        if (res.status == 200) {
          this.chatLog.push({
            who: "robot",
            msg: res.data.input,
            style: "message",
            stamp: null,
          });
        }
        else {
          // ステータスコードが200以外のとき
          throw "status is not normal.";
        }
      })
      .catch(err => {
        // エラー処理
        console.log(err)
      })
    },
  }
}

</script>


<style scoped>
  /* チャットページ全体 */
  #chat{
    height: calc(100vh - 60px);
    margin: 0;
    padding: 0;
    /* background-color: #FFCC8A; */
    /* font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", YuGothic, "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif; */
  }

  /* チャット蘭 */
  #talk{
    width: 70%;
    height: calc(98% - 0px);
    margin: 0;
    padding: 0 2%;
    position: relative;
    float: left;
    /* background-color: #ffcc8a; */
    /* text-align: right; */
  }

  #field{
    width: 96%;
    height: calc(97% - 50px);
    bottom: calc(50px + 1%);
    padding: 0 1%;
    position: absolute;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    background-color: #ffe0b8;
  }

  #input_field{
    width: 96%;
    height: 50px;
    bottom:1%;
    margin-bottom: 0;
    position: absolute;
    display: flex;
    background-color: #350800;
  }

  #chat_input{
    height: 28px;
    width: calc(100% - 10% - 1% - 10% - 72px);
    display: block;
    font-size: 18px;
    color: #31302F;
    background-color: #ffffff;
    box-sizing: border-box;
    border: 1px solid #777;
    border-radius: 4px;
    padding-left: 1%;
    margin: auto 1% auto 10%;
  }

  #chat_input:focus{
    border: 2.0px solid #FFCC8A;
    outline: 0;
  }

  #chat_button{
    cursor: pointer;
    height: 28px;
    width: 72px;
    margin: auto 10% auto auto; /* auto 0 */
    font-size: 18px;
    background: #FF4609;
    color: #ffffff;
    display: block;
    border: none;
    box-sizing: border-box;
    border-radius: 6.5px;
  }
  
  #chat_button:active{
    /* 変な枠線をどうにかしたい - when chrome */
    background-color: #a32900;
    color: #fdfdfd;
    outline: none;
  }

  /* トーク内容 */
  .balloon{
    background-color: #ffe0b8;
  }

  .stamp_you {
    /* margin-right: auto; */
    text-align: right;
  }
  .stamp_chat {
    max-width: 150px;
    max-height: 150px;
    margin: 10px;
    padding: 8px;
  }

  .balloon_you{
    margin: 10px 0;
    text-align: right; /* ふきだし自体は右揃え */
  }
  .balloon_you p{
    display: inline-block;
    position: relative;
    margin: 0 10px 0 0;
    padding: 8px;
    max-width: 70%;
    border-radius: 12px;
    background-color: #FF4609;
    color: #dfdfdf;
    font-size: 15px;
    word-wrap: break-word; /* 単語の改行． */
    text-align: left; /* ふきだしの中では左揃え */
  }
  .balloon_you p:after{
    content: "";
    position: absolute;
    top: 3px;
    right: -19px;
    border: 8px solid transparent;
    border-left: 18px solid #ff4609;
    -webkit-transform: rotate(-35deg);
    transform: rotate(-35deg);
  }
  .balloon_robot{
    width: 100%;
    margin: 10px 0;
    font-size: 15px;
  }
  .icon{
    float:left;
    margin-right: -50px;
    width: 50px;
  }
  .icon img{
    width: 100%;
    height: auto;
    border-radius: 50%;
  }
  .text_robot{
    width: 100%;
    text-align: left;
  }
  .chat_robot{
    display: inline-block;
    position: relative;
    margin: 0 0 0 60px;
    padding: 10px;
    max-width: 250px;
    border-radius: 12px;
    color: #dfdfdf;
    background-color: #31302F;
    word-wrap: break-word;
  }
  .chat_robot:after{
    content: "";
    display: inline-block;
    position: absolute;
    top: 3px;
    left: -19px;
    border: 8px solid transparent;
    border-right: 18px solid #31302F;
    -webkit-transform: rotate(35deg);
    transform: rotate(35deg); 
  }
  .chat_robot p{
    margin: 0;
    padding: 0;
  }

  /* スタンプ系列 */
  #stamp_field{
    width: 25%;
    height: calc(100vh - 60px);
    margin: 0;
    padding: 0;
    float: right;
  }

  #stamp_area {
    width: 19%;
    top: calc(2% + 60px);
    bottom: 2%;
    padding: 2%;
    background-color: #ffe0b8;
    position: absolute;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    align-content: flex-start;
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }

  .stamp_card {
    margin: 5px;
    width: 120px;
    height: 120px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    position: relative;
  }

  .stamp_fig {
    max-height: 100px;
    max-width: 100px;
    display: block;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%
  }

</style>
