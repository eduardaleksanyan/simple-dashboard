import React from "react";
import { Typography } from '@mui/material';
import TopStatus from "../components/dashboards/top-statuses/TopStatus";
import {reports} from "../data/reports";
import DataGrid from "../components/dashboards/data-grid/DataGrid";
import {Report} from "../types/Reports";
import { StyledContainer, StyledContent } from "./styles";

export default function Dashboards() {
    return (
        <StyledContainer>
            <Typography variant="h4" gutterBottom>
                Dashboard
            </Typography>
            <StyledContent>
                <Typography variant="h6" gutterBottom>
                    KYC Application Reports
                </Typography>
                <TopStatus data={reports as Report[]} />
                <DataGrid data={reports as Report[]} />
            </StyledContent>
        </StyledContainer>
    );
}