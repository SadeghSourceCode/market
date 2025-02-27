import { IKeyValue } from "../base";

export interface ICoinTicker {
    base?: string;
    target?: string;
    market?: IKeyValue;
    last?: number;
    volume?: number;
    converted_last?: IKeyValue;
    converted_volume?: IKeyValue;
    bid_ask_spread_percentage?: number;
    trust_score?: string;
    timestamp?: string;
    last_traded_at?: string;
    last_fetch_at?: string;
    coin_id?: string;
    target_coin_id?: string;
    trade_url?: string | null;
    is_anomaly?: boolean;
    is_stale?: boolean;
    token_info_url?: string | null,
}
