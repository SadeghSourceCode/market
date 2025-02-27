import { IKeyValue } from "../base";

export interface ICoinDeveloperData {
    forks?: number;
    stars?: number;
    subscribers?: number;
    total_issues?: number;
    closed_issues?: number;
    pull_requests_merged?: number;
    pull_request_contributors?: number;
    code_additions_deletions_4_weeks?: IKeyValue;
    commit_count_4_weeks?: number;
    last_4_weeks_commit_activity_series?: [];
}
