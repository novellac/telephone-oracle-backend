(function(e){function t(t){for(var n,i,l=t[0],o=t[1],c=t[2],d=0,p=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,l=1;l<a.length;l++){var o=a[l];0!==r[o]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},s=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=o;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("header",{staticClass:"accent pa-2 mb-4 lime--text text--lighten-5 elevation-5"},[a("h1",{},[e._v("Telephone Oracle")]),a("p",{staticClass:"subtitle-1 font-italic"},[e._v("Pandemic edition")])]),a("v-main",{staticClass:"mx-4"},[e.game?e._e():a("Start",{attrs:{hasError:e.hasGameCodeError},on:{start:e.initGame,join:e.joinGame}}),e.gameDataIsLoaded?a("div",["open"===e.game.status?a("Pregame",{attrs:{game:e.game,localPlayer:e.localPlayer,"player:update":e.storePlayerData}}):e._e(),"active"===e.game.status?a("Game",{attrs:{game:e.game,localPlayer:e.localPlayer,sheet:e.activeSheet}}):e._e(),"complete"===e.game.status?a("Finale",{attrs:{sheets:e.sheets,game:e.game}}):e._e()],1):e._e(),e.gameDataIsLoaded?a("v-container",{attrs:{fluid:""}},[a("v-row",{staticClass:"d-md-flex justify-space-between align-stretch"},[a("Players",{staticClass:"ma-2",attrs:{players:e.players,localPlayer:e.localPlayer,queues:e.queues}}),a("GameInfo",{staticClass:"ma-2",attrs:{game:e.game,progress:e.progress}})],1),a("v-row",{staticClass:"d-flex justify-end"},[a("HostControls",{staticClass:"ma-2",attrs:{isHost:!!e.localPlayer.isHost,status:e.game.status},on:{start:e.startGame,newGame:e.initGame}})],1)],1):e._e()],1)],1)},s=[],i=(a("8e6e"),a("456d"),a("ac6a"),a("75fc")),l=(a("20d6"),a("a481"),a("386d"),a("7f7f"),a("bd86")),o=(a("96cf"),a("3b8d")),c=(a("7514"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-btn",{staticClass:"my-4",attrs:{color:"primary"},on:{click:function(t){return e.$emit("start")}}},[e._v("Start a new game ")]),a("form",{staticClass:"mt-4",on:{submit:function(t){return t.preventDefault(),e.joinGame(t)}}},[a("div",{staticClass:"d-md-flex"},[a("v-text-field",{attrs:{clearable:"",label:"Got a game link? Paste it here","aria-describedby":e.hasError?"game-code-invalid":null},model:{value:e.gameLink,callback:function(t){e.gameLink=t},expression:"gameLink"}}),a("v-btn",{staticClass:"ml-md-8 black--text",attrs:{type:"submit",color:"secondary"}},[e._v(" Find game ")])],1),e.hasError?a("p",{attrs:{id:"game-code-invalid"}},[e._v("Please enter a valid game code")]):e._e()])],1)}),u=[],d=(a("f559"),{props:{hasError:{type:Boolean,default:!1}},data:function(){return{gameLink:null}},methods:{joinGame:function(){var e=this.gameLink;if(e.startsWith("http")){var t=new URL(e),a=t.search;e=a.replace("?game=","")}this.$emit("join",e)}}}),p=d,h=a("2877"),m=Object(h["a"])(p,c,u,!1,null,null,null),f=m.exports,v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"d-flex flex-column justify-space-between"},[a("ActionPanel",[e.localPlayer.name?a("div",[a("div",{staticClass:"d-md-flex justify-space-between align-center"},[a("h2",[e._v("Welcome "+e._s(e.localPlayer.name)+"!")]),a("v-btn",{staticClass:"my-4 ml-md-4 black--text",attrs:{small:"",color:"secondary"},on:{click:e.copyGameLink}},[a("span",{staticClass:"mr-2"},[e._v("Copy invite link")]),a("v-icon",{attrs:{small:""}},[e._v(" "+e._s(e.copied?"fas fa-clipboard-check":"fas fa-clipboard")+" ")])],1)],1),a("p",{staticClass:"font-italic"},[e._v("Waiting for players to join... ")])]):a("div",[a("h2",[e._v("Please enter your name")]),a("v-form",{on:{submit:function(t){return t.preventDefault(),e.updatePlayer(t)}}},[a("div",{staticClass:"d-md-flex"},[a("v-text-field",{staticClass:"mb-8 mr-md-8",attrs:{label:"Player name",hint:"Please enter your name","persistent-hint":""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("v-btn",{staticClass:"black--text",attrs:{type:"submit",color:"secondary"}},[e._v(" Submit ")])],1)])],1)])],1)},y=[],g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"pa-8"},[e._t("default")],2)},b=[],_={},x=_,w=Object(h["a"])(x,g,b,!1,null,null,null),P=w.exports,k=a("bc3a"),j=a.n(k);j.a.defaults.baseURL="http://localhost:3000/api";var O=function(e){return j.a.post("game",e)},C=function(e){return j.a.post("/game/start",{id:e})},S=function(e){return j()({method:"get",url:"game",params:{id:e}})},I=function(e){return j.a.get("/player",{params:{id:e}})},G=function(e,t){return j.a.post("player",{gameId:e,params:t})},L=function(e,t){return j.a.patch("player",{id:e,params:t})},q=function(e){return j.a.get("/line/last",{params:{sheetId:e}})},R=function(e){return j.a.post("/line",e)},E=function(e){return j.a.get("/sheet",{params:{gameId:e}})},A=function(e){return j.a.get("/sheet/full",{params:{gameId:e}})},D={name:"Pregame",components:{ActionPanel:P},props:{game:{type:Object,required:!0},localPlayer:{type:Object,required:!0}},data:function(){return{copied:!1,name:""}},computed:{gameLink:function(){return"".concat("/","/?game=").concat(this.game.uuid)}},methods:{copyGameLink:function(){var e=document.createElement("input");e.value=this.gameLink,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),this.copied=!0},updatePlayer:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,L(this.localPlayer.uuid,{name:this.name});case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},$=D,N=Object(h["a"])($,v,y,!1,null,null,null),Q=N.exports,T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ActionPanel",[!e.sheet||e.waiting?a("h2",[e._v("Waiting for the oracle...")]):e.lastLine&&e.lastLine.uuid?a("h2",{staticClass:"font-italic mb-4"},[a("span",[e._v(e._s(e.isQuestion?"Answer:":"Question:"))]),e._v(" "+e._s(e.lastLine.text)+" ")]):a("h2",{staticClass:"mb-4"},[e._v(" Ask the oracle a question ")]),e.sheet?a("div",[a("v-form",{staticClass:"d-md-flex align-start",on:{submit:function(t){return t.preventDefault(),e.addLine(t)}}},[a("v-textarea",{staticClass:"mr-8",attrs:{label:e.label,rows:1,"auto-grow":""},model:{value:e.line,callback:function(t){e.line=t},expression:"line"}}),a("v-btn",{attrs:{type:"submit",color:"primary"}},[e._v(" "+e._s(e.isQuestion?"Submit question":"Submit answer")+" ")])],1)],1):e._e()])},H=[],F={components:{ActionPanel:P},name:"Game",props:{game:{type:Object,required:!0},localPlayer:{type:Object,default:null},sheet:{type:Object,default:null}},data:function(){return{line:null,lastLine:null,waiting:!1}},computed:{gameIsActive:function(){return"active"===this.game.status},isQuestion:function(){return!this.lastLine||!(this.lastLine.order%2)},label:function(){return this.lastLine?this.isQuestion?"Please enter a question":"Please enter an answer":"Please enter a question for the Oracle"}},methods:{addLine:function(e){var t=this.line;t?(this.line=null,this.waiting=!0,R({text:t,gameId:this.game.uuid,sheetId:this.sheet.uuid,playerId:this.localPlayer.uuid})):console.error("where is the text")},endGame:function(){}},watch:{sheet:{handler:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,q(t.uuid);case 4:a=e.sent,n=a.data,this.lastLine=n,this.waiting=!1;case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}}},U=F,B=Object(h["a"])(U,T,H,!1,null,null,null),M=B.exports,W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ActionPanel",[a("h2",{staticClass:"text-center"},[e._v("The Oracle has spoken!")]),e.fullSheets.length?a("div",{staticClass:"d-flex align-center justify-space-between"},[a("div",[e.canGoBack?a("v-btn",{staticClass:"secondary black--text",attrs:{icon:"","aria-label":"previous sheet"},on:{click:function(t){e.currentIndex--}}},[a("i",{staticClass:"fas fa-chevron-left"})]):e._e()],1),a("div",{staticClass:"flex-grow-1"},[a("Sheet",{staticClass:"mt-4 px-4",attrs:{sheet:e.currentSheet}})],1),a("div",[e.canGoForward?a("v-btn",{staticClass:"secondary black--text",attrs:{icon:"","aria-label":"next sheet"},on:{click:function(t){e.currentIndex++}}},[a("i",{staticClass:"fas fa-chevron-right"})]):e._e()],1)]):e._e()])},J=[],Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"d-flex align-start"},[a("h3",[e._v("Question: ")]),a("p",{staticClass:"ml-4"},[e._v(e._s(e.firstLineText))])]),a("div",{staticClass:"d-flex align-start"},[a("h3",[e._v("Answer:")]),a("div",{staticClass:"ml-4"},[e.showAnswer?e._e():a("v-btn",{attrs:{text:"",color:"accent"},on:{click:function(t){e.showAnswer=!0}}},[a("span",[e._v("See Oracle's answer")]),a("i",{staticClass:"fas fa-chevron-right ml-4"})])],1),e.showAnswer?a("p",[e._v(" "+e._s(e.lastLineText)+" ")]):e._e()]),e.showAnswer?a("v-dialog",{attrs:{scrollable:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[a("v-btn",e._g({attrs:{text:"",color:"accent"}},n),[a("span",[e._v("See full sequence")]),a("i",{staticClass:"fas fa-chevron-right ml-4"})])]}}],null,!1,4001529129),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"text-truncate"},[e._v(" "+e._s(e.firstLineText)+" ")]),a("v-card-text",e._l(e.lines,(function(t){return a("p",{key:t.uuid},[e._v(" "+e._s(t.text)+" ")])})),0),a("v-card-actions",[a("v-btn",{on:{click:function(t){e.dialog=!1}}},[e._v("Close")])],1)],1)],1):e._e()],1)},z=[],K={props:{sheet:{type:Object,required:!0}},data:function(){return{showAnswer:!1,dialog:!1}},computed:{lines:function(){return this.sheet.lines},firstLineText:function(){return this.lines.length?this.lines[0].text:""},lastLineText:function(){var e=this.lines.length;return e?this.lines[e-1].text:""},middleLinesText:function(){return this.lines.length?this.lines.slice(1,-1).map((function(e){return e.text})):[]}}},V=K,X=Object(h["a"])(V,Y,z,!1,null,null,null),Z=X.exports,ee={components:{Sheet:Z,ActionPanel:P},props:{sheets:{type:Array,required:!0},game:{type:Object,required:!0}},data:function(){return{fullSheets:[],currentIndex:0}},computed:{canGoBack:function(){return this.currentIndex>0},canGoForward:function(){return!!this.fullSheets.length&&this.currentIndex<this.fullSheets.length-1},currentSheet:function(){return this.fullSheets[this.currentIndex]}},created:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,A(this.game.uuid);case 2:t=e.sent,a=t.data,this.fullSheets=a;case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},te=ee,ae=Object(h["a"])(te,W,J,!1,null,null,null),ne=ae.exports,re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-col",{staticClass:"elevation-3"},[e.players.length?a("v-list",{attrs:{"min-width":"250px",height:"100%"}},[a("v-subheader",[e._v("Players")]),e._l(e.players,(function(t,n){return a("Player",e._b({key:t.uuid,attrs:{player:t,isUser:e.localPlayer.uuid===t.uuid,order:n}},"Player",e.$attrs,!1))}))],2):e._e()],1)},se=[],ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-list-item",{staticClass:"d-flex"},[a("div",{staticClass:"mr-2"},[e._v(e._s(e.name))]),e.isUser?a("div",{staticClass:"mr-2"},[e._v("(You)")]):e._e(),e.player.isHost?a("v-chip",{attrs:{color:"accent",small:""}},[a("i",{staticClass:"fas fa-crown mr-2"}),e._v(" Host ")]):e._e(),e._l(e.queue,(function(t){return a("v-icon",{key:t.uuid,staticClass:"mx-2",attrs:{color:"primary"}},[e._v(" far fa-sticky-note ")])}))],2)},le=[],oe=(a("c5f6"),{props:{player:{type:Object,required:!0},isUser:{type:Boolean,default:!1},status:{type:String},order:{type:Number,required:!0},queues:{type:Object,required:!0}},computed:{queue:function(){return this.queues[this.player.uuid]||[]},name:function(){return this.player.name||"Player".concat(this.order+1)}}}),ce=oe,ue=Object(h["a"])(ce,ie,le,!1,null,null,null),de=ue.exports,pe={components:{Player:de},props:{localPlayer:{type:Object,required:!0},players:{type:Array,default:function(){return[]}}},data:function(){return{order:[]}},methods:{updateOrder:function(){this.$emit("updateOrder",[])}}},he=pe,me=Object(h["a"])(he,re,se,!1,null,null,null),fe=me.exports,ve=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-col",{staticClass:"elevation-3"},[a("v-subheader",[e._v("Game "+e._s(e.game.uuid))]),a("div",{staticClass:"pa-4 d-flex font-italic justify-space-between align-center"},[a("span",[e._v("Progress:")]),a("v-progress-linear",{staticClass:"ml-4",attrs:{striped:"",value:e.progress,color:"accent",height:24}},[a("div",{staticClass:"lime lighten-4 pa-4 rounded-pill border font-weight-bold"},[e._v(e._s(e.progress+"%")+" ")])])],1)],1)},ye=[],ge={props:{game:{type:Object,required:!0},progress:{type:Number,default:0}}},be=ge,_e=Object(h["a"])(be,ve,ye,!1,null,null,null),xe=_e.exports,we=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"d-flex justify-end align-center"},[e.isHost||"open"!==e.status?e._e():a("p",{staticClass:"mr-4 mb-0 red--text text--darken-2 font-italic"},[e._v(" Only the host may start the game ")]),"open"===e.status?a("v-btn",{attrs:{disabled:!e.isHost,color:"primary"},on:{click:function(t){return e.$emit("start")}}},[e._v(" Start Game ")]):e._e(),"complete"===e.status?a("v-btn",{staticClass:"black--text",attrs:{color:"secondary"},on:{click:function(t){return e.$emit("newGame")}}},[e._v("Play again ")]):e._e()],1)},Pe=[],ke=(a("6762"),a("2fdb"),{props:{isHost:{type:Boolean,default:!1},status:{type:String,required:!0,validator:function(e){return["open","active","complete"].includes(e)}}}}),je=ke,Oe=Object(h["a"])(je,we,Pe,!1,null,null,null),Ce=Oe.exports,Se=a("daa8"),Ie=void 0;function Ge(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Le(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ge(Object(a),!0).forEach((function(t){Object(l["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ge(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var qe={name:"app",components:{Start:f,Pregame:Q,Game:M,Finale:ne,Players:fe,GameInfo:xe,HostControls:Ce},data:function(){return{game:null,localPlayerId:null,players:null,hasGameCodeError:!1,socket:null,queues:{},sheets:[],progress:0,playerName:null}},computed:{localPlayer:function(){var e=this;return this.localPlayerId&&this.players.length?this.players.find((function(t){return t.uuid===e.localPlayerId})):null},ioNamespace:function(){return this.game?"http://localhost:3000/"+this.game.uuid:null},activeSheet:function(){if(!this.localPlayer)return null;var e=this.queues[this.localPlayer.uuid];return e&&e.length?e.reduce((function(e,t){return e&&new Date(e.updatedAt)<=new Date(t.updatedAt)?e:t}),null):null},gameDataIsLoaded:function(){return this.game&&this.players&&this.localPlayer}},watch:{"window.location":{deep:!0,handler:function(e,t){e.location!==t.location&&Ie.getGameFromRoute()}}},created:function(){this.getGameFromRoute()},beforeDestroy:function(){this.socket&&this.socket.disconnect()},methods:{initGame:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=window.localStorage.getItem("localPlayerName"),t&&(this.playerName=t),e.next=4,O({player:{name:this.playerName}});case 4:a=e.sent,n=a.data,this.game=n.game,this.players=n.players,this.localPlayerId=n.players[0].uuid,this.storePlayerData(),this.initSocket(),this.updateRoute();case 12:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),initSocket:function(e){var t=this;this.socket=Object(Se["a"])(this.ioNamespace),this.socket.on("connect",(function(){console.log("connected to socket!")})),this.socket.on("disconnect",(function(){console.log("disconnected!")})),this.socket.on("player:add",(function(e){console.log("player added!"),t.getPlayers()})),this.socket.on("player:update",(function(e){t.handlePlayerUpdate(e)})),this.socket.on("game:start",(function(e){t.players=e.players,t.game=e.game,t.buildQueues(e.sheets)})),this.socket.on("sheet:pass",(function(e){t.buildQueues(e),t.updateProgress(e)})),this.socket.on("game:complete",(function(e){t.buildQueues(e),t.updateProgress(e),t.sheets=e,t.game=Le(Le({},t.game),{},{status:"complete"})}))},getPlayers:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,I(this.game.uuid);case 2:t=e.sent,a=t.data,this.players=a;case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),joinGame:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var a,n,r,s,i,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S(t);case 3:if(a=e.sent,n=a.data,r=n.game,s=n.players,this.game=r,this.players=s,this.initSocket(r.uuid),this.updateRoute(),this.loadPlayer(),"active"!==this.game.status){e.next=18;break}return e.next=14,E(this.game.uuid);case 14:i=e.sent,l=i.data,this.buildQueues(l),this.updateProgress(l);case 18:e.next=23;break;case 20:e.prev=20,e.t0=e["catch"](0),console.error(e.t0);case 23:case"end":return e.stop()}}),e,this,[[0,20]])})));function t(t){return e.apply(this,arguments)}return t}(),loadPlayer:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=window.localStorage.getItem("localPlayerId"),a=window.localStorage.getItem("localPlayerName"),a&&(this.playerName=a),!t||!this.players.find((function(e){return e.uuid===t}))){e.next=6;break}return this.localPlayerId=t,e.abrupt("return");case 6:return e.next=8,this.createPlayer();case 8:this.getPlayers();case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),createPlayer:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G(this.game.uuid,{name:this.playerName});case 3:t=e.sent,a=t.data,this.localPlayerId=a.uuid,this.storePlayerData(),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(){return e.apply(this,arguments)}return t}(),startGame:function(){C(this.game.uuid)},storePlayerData:function(){this.localPlayer&&(this.localPlayerId&&window.localStorage.setItem("localPlayerId",this.localPlayerId),this.localPlayer.name&&window.localStorage.setItem("localPlayerName",this.localPlayer.name))},getGameFromRoute:function(){var e=window.location.search;if(e){var t=e.replace("?game=","");this.joinGame(t)}},updateRoute:function(){var e="?game=".concat(this.game.uuid);window.history.pushState({path:e},"",e)},handlePlayerUpdate:function(e){var t=this.players.findIndex((function(t){return t.uuid===e.uuid})),a=Object(i["a"])(this.players);a.splice(t,1,e),this.players=a,e.uuid===this.localPlayerId&&this.storePlayerData()},buildQueues:function(e){var t={},a=[];this.players.forEach((function(e){t[e.uuid]=[]})),e.forEach((function(e){e.active_player_id?t[e.active_player_id].push(e):a.push(e)})),this.queues=t,this.completedSheets=a},updateProgress:function(e){var t=this.game.length*this.players.length,a=e.reduce((function(e,t){return e+t.lineCount}),0);this.progress=a/t*100}}},Re=qe,Ee=Object(h["a"])(Re,r,s,!1,null,null,null),Ae=Ee.exports,De=a("ce5b"),$e=a.n(De),Ne=(a("bf40"),a("fcf4"));a("15f5");n["default"].use($e.a);var Qe={theme:{themes:{light:{primary:Ne["a"].blue.darken1,secondary:Ne["a"].blue.lighten4,accent:Ne["a"].indigo.base}}},icons:{iconfont:"fa"}},Te=new $e.a(Qe);n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(Ae)},vuetify:Te}).$mount("#app")}});
//# sourceMappingURL=app.7b720648.js.map