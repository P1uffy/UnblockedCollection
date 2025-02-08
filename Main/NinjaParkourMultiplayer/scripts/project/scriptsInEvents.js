function coolmathCallStart() {
  if (typeof parent.cmgGameEvent === "function") {

      parent.cmgGameEvent("start");
  }
  console.log("game start event");
}
function coolmathCallLevelStart(level) {
  if (typeof parent.cmgGameEvent === "function") {
    try {
      parent.cmgGameEvent("start", String(level));
    } catch (e) {}
  }
  console.log("level start " + level);
}
function coolmathCallLevelRestart(level) {
  if (typeof parent.cmgGameEvent === "function") {
    try {
      parent.cmgGameEvent("replay", String(level));
    } catch (e) {}
  }
  console.log("level restart " + level);
}


const scriptsInEvents = {

	async ["0-Ev_lobby_Event6_Act1"](runtime, localVars)
	{
		function getQueryString() {
		                var queryStringKeyValue = window.parent.location.search.replace('?', '').split('&');
		                var qsJsonObject = {};
		                if (queryStringKeyValue != '') {
		                    for (let i = 0; i < queryStringKeyValue.length; i++) {
		                        qsJsonObject[queryStringKeyValue[i].split('=')[0]] = queryStringKeyValue[i].split('=')[1];
		                    }
		                }
		                return qsJsonObject;
		            }
					
		if (getQueryString().room_name){
			localVars.room_name_param = getQueryString().room_name;
		}
	},

	async ["0-Ev_lobby_Event124_Act4"](runtime, localVars)
	{
		coolmathCallLevelStart(runtime.globalVars.selectedLevel);
	},

	async ["0-Ev_lobby_Event192_Act4"](runtime, localVars)
	{
		localVars.temp_url = window.parent.location.href.split('?')[0];;
	},

	async Ev_firebase_Event2_Act1(runtime, localVars)
	{
return initialize(runtime, {
	functions: {
		anonymousLogin: {
			onSuccess: "OnLoginSuccess",
			onError: "OnLoginError"
		},
		saveScore: {
			onSuccess: null,
			onError: null
		},
		loadUser: {
			onSuccess: "OnLoginSuccess",
			onError: "OnError"
		}
	},
	variables: {
		"PlayerHat": "myHat"
	},
	
	useAnalytics: true,
	storeUser: true,
	useUsername: true,
	sanitizeUsername: false,
	analyticsCustomHost: `${runtime.globalVars.Endpoint}/api/v1/log-event`,
	sdkName: "FirebaseV9SDK"
});
	},

	async Ev_firebase_Event3_Act1(runtime, localVars)
	{
		return loadUser();
	},

	async Ev_firebase_Event7_Act1(runtime, localVars)
	{
		return anonymousLogin(runtime.globalVars.Username);
	},

	async Ev_firebase_Event12_Act1(runtime, localVars)
	{
		return logEvent(localVars.event);
	},

	async Ev_firebase_Event13_Act1(runtime, localVars)
	{
		return getLeaderboard();
	},

	async Ev_firebase_Event18_Act1(runtime, localVars)
	{
		setPlayerHat(localVars.hat)
	},

	async Ev_firebase_Event21_Act1(runtime, localVars)
	{
		saveScore(localVars.score, localVars.level);
	},

	async Ui_element_game_Event137_Act2(runtime, localVars)
	{
		localVars.temp_url = window.parent.location.href.split('?')[0];;
	},

	async Ev_photon_Event23_Act1(runtime, localVars)
	{
		console.log("joined room")
	},

	async Ev_photon_Event76_Act2(runtime, localVars)
	{
		console.log("emote ricevuta")
	},

	async Ev_photon_Event91_Act2(runtime, localVars)
	{
		console.log("win ricevuta")
	},

	async Ev_photon_Event95_Act1(runtime, localVars)
	{
		const removeQueryParams = (query) => {
		  const url = new URL(window.parent.location.href);
		  url.searchParams.delete(query);
		  window.history.pushState({}, '', url.toString());
		};
		
		removeQueryParams(localVars.query);
	},

	async Ev_photon_Event97_Act2(runtime, localVars)
	{
		const addQueryParam = (key, value) => {
		  const url = new URL(window.parent.location.href);
		  url.searchParams.set(key, value);
		  window.history.pushState({}, '', url.toString());
		};
		
		addQueryParam(localVars.paramName, localVars.paramValue);
	},

	async Ev_debug_Event4_Act1(runtime, localVars)
	{
		const addQueryParam = (key, value) => {
		  const url = new URL(window.location.href);
		  url.searchParams.set(key, value);
		  window.history.pushState({}, '', url.toString());
		};
		
		addQueryParam("room", "asd");
	},

	async Colyseus_Event2_Act1(runtime, localVars)
	{
		console.log("joined room")
	},

	async Colyseus_Event5_Act2(runtime, localVars)
	{
		console.log("Item added")
	},

	async Colyseus_Event6_Act4(runtime, localVars)
	{
		console.log("Item changed")
	},

	async Colyseus_Event7_Act2(runtime, localVars)
	{
		console.log("Item removed")
	},

	async Colyseus_Event9_Act2(runtime, localVars)
	{
		console.log("Item removed")
	},

	async Colyseus_Event10_Act2(runtime, localVars)
	{
		console.log("emote ricevuta")
	},

	async Ev_sdk_Event5_Act2(runtime, localVars)
	{
		const callbacks = {
		  adFinished: () => runtime.callFunction("SDK_CrazyGames_AD_complete", [1]),
		  adError: (error) => runtime.callFunction("SDK_CrazyGames_AD_complete", [0]),
		  adStarted: () => runtime.callFunction("SDK_CrazyGames_AD_start"),
		};
		await window.CrazyGames.SDK.ad.requestAd("midgame", callbacks);
	},

	async Ev_sdk_Event11_Act2(runtime, localVars)
	{
		cmgAdBreak();
	},

	async Ev_sdk_Event28_Act3(runtime, localVars)
	{
		const callbacks = {
		  adFinished: () => runtime.callFunction("SDK_Rewarded_AD_complete", true, localVars.rewardActual),
		  adError: (error) => runtime.callFunction("SDK_Rewarded_AD_complete", false, localVars.rewardActual),
		  adStarted: () => console.log("Start rewarded ad"),
		};
		window.CrazyGames.SDK.ad.requestAd("rewarded", callbacks);
	},

	async Ev_sdk_Event31_Act3(runtime, localVars)
	{
		cmgRewardAds();
	},

	async Ev_sdk_Event58_Act1(runtime, localVars)
	{
		await window.CrazyGames.SDK.banner.hideAllBanners();
	},

	async Ev_sdk_Event66_Act1(runtime, localVars)
	{
		await window.CrazyGames.SDK.banner.requestBanners([
		  {
		    id: localVars.IdBanner,
		    width: localVars.width,
		    height: localVars.height,
		    x: localVars.X,
		    y: localVars.Y,
		  }
		]);
	},

	async Ev_sdk_Event69_Act1(runtime, localVars)
	{
		window.CrazyGames.SDK.game.gameplayStart();
	},

	async Ev_sdk_Event71_Act1(runtime, localVars)
	{
		console.log("coolmath: coolmathCallStart");
	},

	async Ev_sdk_Event71_Act2(runtime, localVars)
	{
		coolmathCallStart();
	},

	async Ev_sdk_Event73_Act1(runtime, localVars)
	{
		window.CrazyGames.SDK.game.gameplayStop();
	},

	async Ev_sdk_Event77_Act1(runtime, localVars)
	{
		window.CrazyGames.SDK.game.happytime();
	},

	async Ev_sdk_Event82_Act2(runtime, localVars)
	{
		if (window.CrazyGames.SDK.game.getInviteParam(localVars.paramName)){
			localVars.value = window.CrazyGames.SDK.game.getInviteParam(localVars.paramName);
		}else{ localVars.value = "" }
	},

	async Ev_sdk_Event83_Act1(runtime, localVars)
	{
		localVars.value = PokiSDK.getURLParam(localVars.paramName);
	},

	async Ev_sdk_Event86_Act1(runtime, localVars)
	{
		window.CrazyGames.SDK.game.hideInviteButton();
	},

	async Ev_sdk_Event89_Act1(runtime, localVars)
	{
		localVars.uri = await window.CrazyGames.SDK.game.inviteLink({ R : localVars.R});
	},

	async Ev_sdk_Event89_Act2(runtime, localVars)
	{
		const link = window.CrazyGames.SDK.game.showInviteButton({ R: localVars.R});
	},

	async Ev_sdk_Event90_Act1(runtime, localVars)
	{
		localVars.uri = await window.CrazyGames.SDK.game.inviteLink({ R : localVars.R, D : localVars.domain});
	},

	async Ev_sdk_Event90_Act2(runtime, localVars)
	{
		const link = window.CrazyGames.SDK.game.showInviteButton({ R: localVars.R, D: localVars.domain});
	},

	async Ev_sdk_Event92_Act1(runtime, localVars)
	{
		// example
		const params = {
		    R : localVars.R
		    // ... any other param
		}
		
		await PokiSDK.shareableURL(params).then(url => {
		    localVars.uri = url});
	},

	async Ev_sdk_Event93_Act1(runtime, localVars)
	{
		// example
		const params = {
		    R : localVars.R,
			D : localVars.domain
		    // ... any other param
		}
		
		await PokiSDK.shareableURL(params).then(url => {
		    localVars.uri = url});
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

