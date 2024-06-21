import React from 'react';
import {
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip,
    Typography
} from '@mui/material';
import { Report } from "../../../types/Reports";
import MenuIcon from "@mui/icons-material/Menu";
import { viewDate } from "../../../utils/utils";
import { StyledSubTitle } from "./styles";
import { RiskScoreComponent, StatusComponent } from "./HelperComponents";
import DataGridRow from "./DataGridRow";

interface Props {
    data: Report[]
}

export default function DataGrid({data}: Props) {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Created</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Risk Score</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((report) => (
                        <DataGridRow key={report.id} report={report} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};