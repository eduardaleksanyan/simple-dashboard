export enum Status {
    Approved = 'approved',
    Rejected = 'rejected',
    Cancelled = 'cancelled',
    ReadyForReview = 'readyForReview',
    InProgress = 'inProgress',
}

export const statusColorMap: Record<Status, string> = {
    [Status.Approved]: '#8cc052',
    [Status.Rejected]: '#fd9727',
    [Status.Cancelled]: '#fc5830',
    [Status.ReadyForReview]: '#f5f335',
    [Status.InProgress]: '#1da9f1',
};