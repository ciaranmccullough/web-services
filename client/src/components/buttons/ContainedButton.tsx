import * as React from "react";
import Button from "@mui/material/Button";
import { NavHashLink } from "react-router-hash-link";

interface IProps {
    text: string;
    to: string;
}

export default function ContainedButton({ text, to }: IProps) {
    return (
        <Button variant="contained" size="large" color="primary" component={NavHashLink} smooth to={to}>
            {text}
        </Button>
    );
}
