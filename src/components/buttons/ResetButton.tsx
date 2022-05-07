import Button from "@mui/material/Button";

interface IProps {
    text: string;
    resetVariant?: "text" | "outlined" | "contained" | undefined;
    disabledProps: any;
}

const resetButton = (props: any) => <button {...props} type="reset" />;

export default function ResetButton({ text, resetVariant = "outlined", disabledProps }: IProps) {
    return (
        <Button variant={resetVariant} size="large" color="warning" component={resetButton} disabled={disabledProps}>
            {text}
        </Button>
    );
}
