import React from 'react';
import { StyledItem, StyledCountText, StyledStatusText } from "./styles";
import { Status, statusColorMap } from "../../../constants/constants";
import {capitalizeEachWord, darkColor, getStatusName} from "../../../utils/utils";

interface Props {
    status: Status;
    count: number;
}

export default function TopStatusItem({ status, count }: Props) {
    const color = statusColorMap[status];
    const darkenedColor = darkColor(color);

    return (
        <StyledItem
            sx={{
                background: `linear-gradient(to bottom, ${color} 50%, ${darkenedColor} 50%)`
            }}
        >
            <StyledCountText variant="h5">{count}</StyledCountText>
            <StyledStatusText variant="body2">{capitalizeEachWord(status)}</StyledStatusText>
        </StyledItem>
    );
}