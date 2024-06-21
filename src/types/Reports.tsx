import {Status} from "../constants/constants";

export interface Report {
    id: number,
    created: string,
    name: string,
    email: string,
    type: string,
    riskScore: string,
    status: Status,
}