export interface ICoinLinks {
    homepage?: string[];
    whitepaper?: string;
    blockchain_site?: string[];
    official_forum_url?: string[];
    chat_url?: [];
    announcement_url?: [];
    snapshot_url?: any;
    twitter_screen_name?: string;
    facebook_username?: string;
    bitcointalk_thread_identifier?: any;
    telegram_channel_identifier?: string;
    subreddit_url?: string;
    repos_url?: ICoinRepoLinks;
}

export interface ICoinRepoLinks {
    github?: string[];
    bitbucket?: [];
}