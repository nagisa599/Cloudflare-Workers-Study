export type SwitchBotRequest = {
	// イベント種別
	eventType: string;

	// イベントバージョン
	eventVersion: string;

	// 詳細情報
	context: {
		// デバイスのMACアドレス
		deviceMac: string;

		// デバイスの種類(開閉センサー: WoContact)
		deviceType: string;

		// 動体検知(検知: DETECTED, 未検知: NOT_DETECTED)
		detectionState: string;

		// ドアモード(帰宅: IN_DOOR, 外出: OUT_DOOR)
		doorMode: string;

		// 明るさ(明るい: bright, 暗い: dim)
		brightness: string;

		// ドアの開閉状態(開いている: open, 閉じている: close, 開きっぱなし: timeOutNotClose)
		openState: string;

		// イベント送信時のタイムスタンプ
		timeOfSample: number;
	};
};
