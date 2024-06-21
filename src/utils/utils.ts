import {Report} from "../types/Reports";
import Color from "color";
import { DateTime } from "luxon";

export const calculateStatusCounts = (reports: Report[]) => {
    return reports.reduce((acc: {[key: string]: number}, report: Report) => {
        acc[report.status] = (acc[report.status] || 0) + 1;
        return acc;
    }, {});
};

export const getStatusName = (status: string): string => {
    return status.charAt(0).toUpperCase() + status.slice(1);
}

export const darkColor = (color: string): string => {
    return Color(color).darken(0.2).hex();
}

export const viewDate = (date: string, format = "MMMM d, yyyy"): string => {
    return DateTime.fromISO(date).toFormat(format);
};

export const capitalizeEachWord = (status: string): string => {
    return status
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/(^|\s)\S/g, letter => letter.toUpperCase());
};