import { IKeyValue } from "../base";
import { ICoinCommunityData } from "./coin-community-data.interface";
import { ICoinDeveloperData } from "./coin-developer-data.interface";
import { ICoinImages } from "./coin-images.interface";
import { ICoinLinks } from "./coin-links.interface";
import { ICoinMarketData } from "./coin-market-data.interface";
import { ICoinTicker } from "./coin-ticker.interface";

export interface ICoinDetail {
    id: string;
    symbol: string;
    name: string;
    web_slug?: string;
    asset_platform_id?: any;
    platforms?: IKeyValue;
    detail_platforms?: IKeyValue;
    block_time_in_minutes?: number;
    hashing_algorithm?: string;
    categories?: string[];
    preview_listing?: boolean;
    public_notice?: any;
    additional_notices?: [];
    description?: IKeyValue;
    links?: ICoinLinks;
    image?: ICoinImages;
    country_origin?: string;
    genesis_date?: string;
    sentiment_votes_up_percentage?: number;
    sentiment_votes_down_percentage?: number;
    watchlist_portfolio_users?: number;
    market_cap_rank?: number;
    market_data?: ICoinMarketData;
    developer_data?: ICoinDeveloperData;
    status_updates?: [];
    last_updated?: string;
    community_data?: ICoinCommunityData;
    tickers?: ICoinTicker[];
}
