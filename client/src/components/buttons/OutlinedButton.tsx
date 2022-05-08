import * as React from "react";
import Button from "@mui/material/Button";
import { NavHashLink } from "react-router-hash-link";

interface IProps {
    text: string;
    to: string;
}

export default function OutlinedButton({ text, to }: IProps) {
    return (
        <Button variant="outlined" size="large" color="secondary" component={NavHashLink} smooth to={to}>
            {text}
        </Button>
    );
}
