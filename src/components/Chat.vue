<template>
<div id="chat">
  <v-navigation-drawer app v-model="drawer" temporary right  width="60%">
    <v-row
      class="px-6 py-8 d-flex flex-wrap"
    >
      <v-card 
        v-for="(item, i) in stampList" :key="i" 
        class="mx-4 my-3 px-2 py-2"
        @click="pushStamp(i)"
      >
        <v-avatar tile size="128">
          <v-img contain :src="item.path" />
        </v-avatar>
      </v-card>
    </v-row>
  </v-navigation-drawer>

  <v-row justify="center" class="px-8 py-6">
    <v-list width="100%" max-width="500px" three-line>
      <v-list-item v-for="(item, i) in chatLog" :key="i">
        <v-list-item-avatar>
          <v-img v-show="!isYou(i)" :src="require('@/assets/icon/icon.png')" />
        </v-list-item-avatar>
        <v-list-item-content>
          <div>
            <div v-if="isStamp(i)" class="msg-box-stamp">
              <v-avatar tile size=128>
                <v-img contain :src="item.stamp" />
              </v-avatar>
            </div>
            <div v-else-if="!isYou(i)" class="msg-box-robo">
              <span>{{item.msg}}</span>
            </div>
            <div v-else class="msg-box-you">
              <span>{{item.msg}}</span>
            </div>
          </div>
        </v-list-item-content>
        <v-list-item-avatar>
          <v-icon v-show="isYou(i)" color="dark-blue">mdi-account</v-icon>
        </v-list-item-avatar>
      </v-list-item>
    </v-list>
  </v-row>

  <v-footer
    light fixed app
    color="rgba(0, 0, 0, 0)"
  >
    <v-layout justify-center>
      <v-card width="90%" max-width="480px" class="px-8 py-1">
        <v-text-field
          v-model="textmsg"
          color="deep-orange"
          label="Input a Joke!"
          :prepend-icon="'mdi-stamper'"
          :append-icon="'mdi-send'"
          @click:prepend="drawer=!drawer"
          @click:append="send()"
          @keydown.enter="send()"
        />
      </v-card>
    </v-layout>
  </v-footer>
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
      // スタンプバーの表示切替
      drawer: null,
      // チャットの履歴
      chatLog: [
        {
            who: "robot",
            style: "message",
            msg: "鋭いツッコミ入れたるで。",
            stamp: null
        },
        {
            who: "you",
            style: "message",
            msg: "ほなボケかましたりますわ。",
            stamp: null
        },
      ],
      // スタンプ一覧
      stampList: [
        {
          name: "stp1",
          path: require("@/assets/stamp/stp1.png"),
        },
        {
          name: "stp2",
          path: require("@/assets/stamp/stp2.png"),
        },
        {
          name: "stp3",
          path: require("@/assets/stamp/stp3.png"),
        },
        {
          name: "stp4",
          path: require("@/assets/stamp/stp4.png"),
        },
        {
          name: "stp5",
          path: require("@/assets/stamp/stp5.png"),
        },
        {
          name: "stp6",
          path: require("@/assets/stamp/stp6.png"),
        },
        {
          name: "stp7",
          path: require("@/assets/stamp/stp7.png"),
        },
        {
          name: "stp8",
          path: require("@/assets/stamp/stp8.png"),
        },
        {
          name: "stp9",
          path: require("@/assets/stamp/stp9.png"),
        },
        {
          name: "stp10",
          path: require("@/assets/stamp/stp10.png"),
        },
        {
          name: "stp11",
          path: require("@/assets/stamp/stp11.png"),
        },
      ],
    }
  },
  methods: {
    // チャット履歴がスタンプかどうか確認
    isStamp(i) {
      return this.chatLog[i].style == "stamp";
    },

    // チャット履歴が入力者か確認
    isYou(i) {
      return this.chatLog[i].who == "you";
    },

    // スタンプ押した時の処理
    pushStamp(i) {
      // 配列chatLogに追加
      this.chatLog.push({
        who: "you",
        msg: null,
        style: "stamp",
        stamp: this.stampList[i].path
      });

      // スタンプナビゲーションを閉じる
      this.drawer = !this.drawer;

      // チャット最新まで強制スクロール
      this.$vuetify.goTo(document.getElementById("chat").scrollHeight);
    },

    // 送信ボタン実行時の処理
    send(test=false) {
      // 空白の時は何もしない
      if (this.textmsg === '') return;

      // 入力者の入力内容をchatLogに追記
      this.chatLog.push({
        who: "you",
        msg: this.textmsg,
        style: "message",
        stamp: null
      });

      // チャット最新まで強制スクロール
      this.$vuetify.goTo(document.getElementById("chat").scrollHeight);

      // URIで本番APIと通信
      if (!test) {
        let uritext = encodeURIComponent(this.textmsg);
        this.api_release(uritext);
      }
      // デモ用APIと通信
      else {
        let jsontext = JSON.stringify({
          "text": this.textmsg
        });
        this.api_demo(jsontext);
      }

      // 送信ボタンを押した後は空欄に戻す
      this.textmsg = '';
    },

    // 擬似API
    api_demo(data) {
      const push = () => {
        // AIの実行結果を会話に反映
        this.chatLog.push({
          who: "robot",
          msg: data,
          style: "message",
          stamp: null
        })

        // チャット最新まで強制スクロール
        this.$vuetify.goTo(document.getElementById("chat").scrollHeight);
      }

      // 1秒後に応答
      setTimeout(push, 1000);
    },

    // API通信
    api_release(data) {
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
      let url = 'https://tlabapi-hackday2021.azurewebsites.net/api/aichat/';
      let uri = url + '?' + 'text' + '=' + data;

      // 送信時パラメータの設定
      let params = new URLSearchParams();
      params.append("X-CSRFToken", csrftoken);

      // fetch GETの実行
      axios.post(uri, params)
      .then(res => {
        // 正常処理
        if (res.status == 200) {
          this.chatLog.push({
            who: "robot",
            msg: res.data.output,
            style: "message",
            stamp: null,
          });

          // チャット最新まで強制スクロール
          this.$vuetify.goTo(document.getElementById("chat").scrollHeight);
        }
        // ステータスコードが200以外のとき
        else {
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
.msg-box-robo {
  background: #ff4609;
  float: left;
  margin: 0;
  padding: 12px 24px;
  border-radius: 0px 12px 12px 12px;
}
.msg-box-robo span {
  word-wrap: break-word;
  text-align: left;
  color: #dfdfdf;
}
.msg-box-you {
  background: #31302F;
  float: right;
  margin: 0;
  padding: 12px 24px;
  border-radius: 12px 0px 12px 12px;
}
.msg-box-you span {
  word-wrap: break-word;
  text-align: left;
  color: #dfdfdf;
}
.msg-box-stamp {
  float: right;
}
</style>
