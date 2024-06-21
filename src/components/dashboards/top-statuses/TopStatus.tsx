import React from 'react';
import { Report } from "../../../types/Reports";
import { calculateStatusCounts, darkColor, getStatusName } from "../../../utils/utils";
import { StyledContainer, StyledItem, StyledCountText, StyledStatusText } from "./styles";
import { Status, statusColorMap } from "../../../constants/constants";
import TopStatusItem from "./TopStatusItem";

interface Props {
    data: Report[]
}

export default function TopStatus({ data }: Props) {
    const statuses = calculateStatusCounts(data);

    return (
        <StyledContainer>
            {Object.entries(statuses).map(([status, count]) =>
                <TopStatusItem key={status} status={status as Status} count={count} />
            )}
        </StyledContainer>
    );
}