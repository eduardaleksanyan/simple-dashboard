import { Report } from "../../../types/Reports";
import { Status } from "../../../constants/constants";
import {StyledColumnsContainer, StyledRiskScoreText, StyledStatusText} from "./styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DoneIcon from '@mui/icons-material/Done';
import React from "react";
import { capitalizeEachWord } from "../../../utils/utils";

interface Props {
    data: Report
}
export const RiskScoreComponent = ({ data }: Props) => {
    return (
        <>
            {data.status === Status.Approved ?
                <StyledColumnsContainer>
                    <CheckCircleIcon /> <StyledRiskScoreText>{data.riskScore}</StyledRiskScoreText>
                </StyledColumnsContainer> :
                data.riskScore}
        </>
    );
}

export const StatusComponent = ({data}: Props) => {
    return (
        <>
            {data.status === Status.Approved ?
                <StyledColumnsContainer>
                    <DoneIcon /> <StyledStatusText>{capitalizeEachWord(data.status)}</StyledStatusText>
                </StyledColumnsContainer> :
                `... ${capitalizeEachWord(data.status)}`
            }
        </>
    );
}