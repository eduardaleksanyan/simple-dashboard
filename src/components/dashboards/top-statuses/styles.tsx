import {Box, styled, Typography} from "@mui/material";

export const StyledContainer = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 16px;
`;

export const StyledItem = styled(Box)`
    flex: 1;
    padding: 20px;
    min-height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const StyledCountText = styled(Typography)`
    
`;

export const StyledStatusText = styled(Typography)`
    color: white;
    position: absolute;
    bottom: 10px;
    left: 10px;
`;
