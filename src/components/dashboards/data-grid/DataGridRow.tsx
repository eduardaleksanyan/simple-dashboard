import React from 'react';
import {IconButton, TableCell, TableRow, Tooltip, Typography} from '@mui/material';
import { Report } from "../../../types/Reports";
import { viewDate } from "../../../utils/utils";
import { StyledSubTitle } from "./styles";
import {RiskScoreComponent, StatusComponent} from "./HelperComponents";
import MenuIcon from "@mui/icons-material/Menu";

interface Props {
    report: Report;
}

export default function DataGridRow({ report }: Props) {
    return (
        <TableRow>
            <TableCell>
                <Typography variant={'body2'}>
                    {viewDate(report.created)}
                </Typography>
                <StyledSubTitle variant={'subtitle2'}>
                    {viewDate(report.created, 'HH:mm:ss')}
                </StyledSubTitle>
            </TableCell>
            <TableCell>
                <Typography variant={'body2'}>
                    {report.name}
                </Typography>
                <StyledSubTitle variant={'subtitle2'}>
                    {report.email}
                </StyledSubTitle>
            </TableCell>
            <TableCell>{report.type}</TableCell>
            <TableCell>
                <RiskScoreComponent data={report} />
            </TableCell>
            <TableCell>
                <StatusComponent data={report} />
            </TableCell>
            <TableCell>
                <IconButton onClick={() => alert(report.id)}>
                    <Tooltip title="Details" placement="top">
                        <MenuIcon />
                    </Tooltip>
                </IconButton>
            </TableCell>
        </TableRow>
    );
}