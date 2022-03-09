import { useState } from "react";
import { Formik, Form as ContactForm, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Theme, Paper, Typography, useTheme, useMediaQuery } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import useIsMobile from "../../hooks/useIsMobile";
import Spacer from "../spacer/Spacer";
import ResetButton from "../buttons/ResetButton";
import SubmitButton from "../buttons/SubmitButton";

const useStyles = (isMobile: boolean, md: boolean, lg: boolean) =>
    makeStyles((theme: Theme) =>
        createStyles({
            root: {},
            form: {
                display: "flex",
                flexDirection: md ? "column" : "row",
            },
            formFields: {
                backgroundColor: theme.palette.grey[800],
                padding: theme.spacing(isMobile ? 2 : 4),
                flex: lg ? 2 : 1,
                display: "flex",
                flexDirection: "column",
            },
            label: {
                color: theme.palette.primary.contrastText,
            },
            input: {
                padding: theme.spacing(1),
                fontSize: isMobile ? 14 : 16,
            },
            warning: {
                color: theme.palette.error.light,
                margin: 0,
            },
            row: {
                display: "flex",
                alignItems: "center",
            },
            contact: {
                textAlign: lg ? "center" : "initial",
            },
            textArea: {
                height: isMobile ? 165 : 130,
                fontSize: isMobile ? 14 : 16,
                resize: "none",
            },
        })
    );

export interface IFormValues {
    firstName: string;
    surName: string;
    email: string;
    phone: number | string;
    message: string;
}

export interface IErrors {
    ok: boolean;
    message: string;
}

export default function Form() {
    const [status, setStatus] = useState<IErrors>();
    const theme = useTheme();
    const isMobile = useIsMobile();
    const md = useMediaQuery(theme.breakpoints.down("md"));
    const lg = useMediaQuery(theme.breakpoints.down("lg"));
    const classes = useStyles(isMobile, md, lg)();

    const handleStatusResponse = (ok: boolean, message: string) => {
        setStatus({ ok, message });
    };

    const initialValues: IFormValues = {
        firstName: "",
        surName: "",
        email: "",
        phone: "",
        message: "",
    };

    const phoneRegExp =
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const signupSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, "contains too few characters!")
            .max(70, "contains too many characters!")
            .required("is required!"),
        surName: Yup.string()
            .min(2, "contains too few characters!")
            .max(70, "contains too many characters!")
            .required("is required!"),
        email: Yup.string().email("is not valid!").required("is required!"),
        phone: Yup.string().matches(phoneRegExp, "is not valid!").required("Email is required!"),
        message: Yup.string()
            .min(2, "contains too few characters!")
            .max(300, "contains too many characters!")
            .required("is required!"),
    });

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={signupSchema}
                onSubmit={async (values, actions) => {
                    await axios({
                        method: "POST",
                        url: `https://formspree.io/f/xpzkkkvz`,
                        data: values,
                    })
                        .then((response) => {
                            actions.setSubmitting(false);
                            actions.resetForm();
                            handleStatusResponse(true, "Thank you!");
                        })
                        .catch((error) => {
                            actions.setSubmitting(false);
                            actions.resetForm({
                                values: {
                                    firstName: "",
                                    surName: "",
                                    email: "",
                                    phone: "",
                                    message: "",
                                },
                            });
                            handleStatusResponse(false, error.response.data.error);
                        });
                }}
            >
                {({ isSubmitting, resetForm, dirty, isValid }) => (
                    <div className={classes.form}>
                        <Paper
                            sx={{
                                backgroundColor: theme.palette.grey[900],
                                padding: theme.spacing(isMobile ? 2 : 4),
                                flex: 1,
                                display: "grid",
                                placeItems: "center",
                            }}
                            elevation={3}
                        >
                            <Typography
                                variant={isMobile ? "h6" : "h4"}
                                color={theme.palette.primary.contrastText}
                                className={classes.contact}
                            >
                                Contact Form
                            </Typography>
                        </Paper>
                        <ContactForm className={classes.formFields}>
                            <span className={classes.row}>
                                <label className={classes.label} htmlFor="firstName">
                                    First Name
                                </label>
                                <Spacer />
                                <ErrorMessage className={classes.warning} component="p" name="firstName" />
                            </span>
                            <Field className={classes.input} id="firstName" name="firstName" />
                            <Spacer />
                            <span className={classes.row}>
                                <label className={classes.label} htmlFor="surName">
                                    Surname
                                </label>
                                <Spacer />
                                <ErrorMessage className={classes.warning} component="p" name="surName" />
                            </span>
                            <Field className={classes.input} id="surName" name="surName" />
                            <Spacer />
                            <span className={classes.row}>
                                <label className={classes.label} htmlFor="email">
                                    Email Address
                                </label>
                                <Spacer />
                                <ErrorMessage className={classes.warning} component="p" name="email" />
                            </span>
                            <Field className={classes.input} id="email" name="email" type="email" />
                            <Spacer />
                            <span className={classes.row}>
                                <label className={classes.label} htmlFor="phone">
                                    Phone Number
                                </label>
                                <Spacer />
                                <ErrorMessage className={classes.warning} component="p" name="phone" />
                            </span>
                            <Field className={classes.input} id="phone" name="phone" type="tel" />
                            <Spacer />

                            <span className={classes.row}>
                                <label className={classes.label} htmlFor="message">
                                    Message
                                </label>
                                <Spacer />
                                <ErrorMessage className={classes.warning} component="p" name="message" />
                            </span>
                            <Field
                                className={(classes.input, classes.textArea)}
                                as="textarea"
                                rows="5"
                                id="message"
                                name="message"
                            />
                            <Spacer size={2} />
                            {status?.ok === true ? (
                                <h5>Submission successful. Thank you!</h5>
                            ) : (
                                <div className={classes.row}>
                                    <SubmitButton disabledProps={!(isValid && dirty)} text="submit" />
                                    <Spacer size={4} />
                                    <ResetButton text="reset" />
                                </div>
                            )}
                            {status?.ok === false && <h5>Please try submitting the form again.</h5>}
                        </ContactForm>
                    </div>
                )}
            </Formik>
        </div>
    );
}
