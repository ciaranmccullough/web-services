import React from "react";
import Button from "@mui/material/Button";

interface IProps {
    text: string;
    disabledProps: any;
}

const submitButton = React.forwardRef((props: any, ref) => <button {...props} type="sumbit" />);

export default function SubmitButton({ text, disabledProps }: IProps) {
    return (
        <Button variant="contained" size="large" color="success" component={submitButton} disabled={disabledProps}>
            {text}
        </Button>
    );
}
