var a3_0x11df=['error','code','AIzaSyCZ9S-iDzh92vL6XHhbDVo4eMgoQyn0sCk','var\x20timeToGo\x20=\x201;\x20var\x20checkoutId\x20=\x20','cop.js','onAuthStateChanged','v0.2','then','includes','signInWithEmailAndPassword','false','un-auth','httpsCallable','remove','create','signOut','https://snkrsforall-a.firebaseio.com','catch','auth','432060042708','snkrsforall-a.firebaseapp.com','initializeApp','log','sender','onMessage','success','updateCopSubmissionErrorStatus','COP_STUCK','push','logoutAuth','runtime','loginUser','copStuck','G-QRWPFF8BPB','length','indexOf','executeScript','tab','command','checkoutId','data','1:432060042708:web:33ac8d18558811b18d1a41','tabs','functions','addListener','onConnect'];(function(_0x3a6610,_0x11dfb1){var _0x402fd4=function(_0x4f344f){while(--_0x4f344f){_0x3a6610['push'](_0x3a6610['shift']());}};_0x402fd4(++_0x11dfb1);}(a3_0x11df,0x131));var a3_0x402f=function(_0x3a6610,_0x11dfb1){_0x3a6610=_0x3a6610-0x0;var _0x402fd4=a3_0x11df[_0x3a6610];return _0x402fd4;};var _0x420b3a=a3_0x402f,firebaseConfig={'apiKey':_0x420b3a('0x13'),'authDomain':_0x420b3a('0x25'),'databaseURL':_0x420b3a('0x21'),'projectId':'snkrsforall-a','storageBucket':'snkrsforall-a.appspot.com','messagingSenderId':_0x420b3a('0x24'),'appId':_0x420b3a('0xc'),'measurementId':_0x420b3a('0x4')};firebase[_0x420b3a('0x26')](firebaseConfig),console[_0x420b3a('0x27')](_0x420b3a('0x17'));var functions=firebase[_0x420b3a('0xe')](),lastUpdatedStatus,lastUpdatedTime=0x0,copStuckHistory=[];function sleep(_0x4f344f){return new Promise(_0x547eaf=>setTimeout(_0x547eaf,_0x4f344f));}chrome[_0x420b3a('0x1')][_0x420b3a('0x10')][_0x420b3a('0xf')](_0x57d0c5=>{var _0x5f090f=_0x420b3a;_0x57d0c5[_0x5f090f('0x29')][_0x5f090f('0xf')](_0x20968b=>{var _0x3ea855=_0x5f090f;if(_0x20968b[_0x3ea855('0x9')]===_0x3ea855('0x3')){if(copStuckHistory[_0x3ea855('0x19')](_0x20968b[_0x3ea855('0xb')][_0x3ea855('0xa')])){chrome[_0x3ea855('0xd')]['remove'](_0x57d0c5[_0x3ea855('0x28')]['tab']['id'],function(){});return;}else copStuckHistory[_0x3ea855('0x2d')](_0x20968b[_0x3ea855('0xb')][_0x3ea855('0xa')]);console[_0x3ea855('0x27')](_0x20968b[_0x3ea855('0xb')]),functions[_0x3ea855('0x1d')](_0x3ea855('0x2b'))({'checkoutId':_0x20968b[_0x3ea855('0xb')]['checkoutId'],'submissionError':_0x3ea855('0x2c')})[_0x3ea855('0x18')](function(_0x5de809){var _0x4f4ac5=_0x3ea855;chrome[_0x4f4ac5('0xd')][_0x4f4ac5('0x1e')](_0x57d0c5['sender'][_0x4f4ac5('0x8')]['id'],async function(){var _0x3b0cd6=_0x4f4ac5;await sleep(0x3e8);if(_0x5de809['data']===undefined)return;chrome[_0x3b0cd6('0xd')][_0x3b0cd6('0x1f')]({'url':_0x5de809[_0x3b0cd6('0xb')]},function(_0x9468e4){var _0xd37921=_0x3b0cd6;chrome[_0xd37921('0xd')]['executeScript'](_0x9468e4['id'],{'code':_0xd37921('0x14')+JSON['stringify'](_0x20968b['data'][_0xd37921('0xa')])},function(){var _0x4e74f1=_0xd37921;chrome['tabs'][_0x4e74f1('0x7')](_0x9468e4['id'],{'file':_0x4e74f1('0x15')},function(){});});});});});}});}),chrome[_0x420b3a('0x1')][_0x420b3a('0x29')]['addListener']((_0x33c15e,_0xb17e6b,_0x1d727e)=>{var _0x51c145=_0x420b3a;_0x33c15e[_0x51c145('0x9')]===_0x51c145('0x0')&&firebase[_0x51c145('0x23')]()[_0x51c145('0x20')]()['then'](function(){var _0x4e3458=_0x51c145;_0x1d727e({'type':'un-auth','status':_0x4e3458('0x2a'),'message':!![]});},function(_0x130192){var _0x39e2a5=_0x51c145;_0x1d727e({'type':_0x39e2a5('0x1c'),'status':_0x39e2a5('0x1b'),'message':_0x130192});});if(_0x33c15e['command']==='checkAuth'){var _0x24712f=firebase['auth']()['currentUser'];_0x24712f?_0x1d727e({'type':_0x51c145('0x23'),'status':_0x51c145('0x2a'),'message':_0x24712f}):_0x1d727e({'type':_0x51c145('0x23'),'status':'no-auth','message':![]});}if(_0x33c15e['command']===_0x51c145('0x2')){var _0x47dc81=_0x33c15e[_0x51c145('0xb')]['e'],_0x3da381=_0x33c15e['data']['p'];firebase['auth']()[_0x51c145('0x1a')](_0x47dc81,_0x3da381)[_0x51c145('0x22')](function(_0x9c0ecf){var _0x4d2a7e=_0x51c145,_0x377682=_0x9c0ecf[_0x4d2a7e('0x12')],_0x221ccb=_0x9c0ecf['message'];_0x1d727e({'type':_0x4d2a7e('0x23'),'status':_0x4d2a7e('0x11'),'message':_0x9c0ecf});}),firebase['auth']()[_0x51c145('0x16')](function(_0x1dcf4e){var _0x5ba337=_0x51c145;_0x1dcf4e&&_0x1d727e({'type':'auth','status':_0x5ba337('0x2a'),'message':_0x1dcf4e});});}return!![];});function removeValueFromArray(_0x2e13a9){var _0x50e3e6=_0x420b3a,_0x2aff89,_0x4da4a0=arguments,_0x2b06bb=_0x4da4a0[_0x50e3e6('0x5')],_0x446370;while(_0x2b06bb>0x1&&_0x2e13a9[_0x50e3e6('0x5')]){_0x2aff89=_0x4da4a0[--_0x2b06bb];while((_0x446370=_0x2e13a9[_0x50e3e6('0x6')](_0x2aff89))!==-0x1){_0x2e13a9['splice'](_0x446370,0x1);}}return _0x2e13a9;}