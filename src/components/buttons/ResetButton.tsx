import * as React from "react";
import Button from "@mui/material/Button";

interface IProps {
    text: string;
}

const resetButton = (props: any) => <button {...props} type="reset" />;

export default function ResetButton({ text }: IProps) {
    return (
        <Button variant="outlined" size="large" color="warning" component={resetButton}>
            {text}
        </Button>
    );
}
