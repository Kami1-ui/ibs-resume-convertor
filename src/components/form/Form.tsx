import React, { FC } from "react";
import { Grid, Button, Radio, RadioGroup, FormLabel, FormControl, FormControlLabel, makeStyles, Theme, createStyles } from '@material-ui/core';
import { ExportFormat } from "../../models/format";
import { IidCheck, IdField } from "../id-field/IdField";
import { IResumePreview } from "../../models/resume";
import { AboutField } from "../about-field/AboutField";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        sybmitBtn: {
            height: 48,
            borderRadius: 87
        },
    }),
);

interface IProps {
    resume: IResumePreview | null
    idCheck: IidCheck
    sybmit: () => void
    loading: boolean

    about: string
    setAbout: (value: string) => void

    format: ExportFormat
    setFormat: (value: ExportFormat) => void

    resetResume: () => void
}

export const Form: FC<IProps> = ({ resume, idCheck, sybmit, about, setAbout, format, setFormat, loading, resetResume }) => {

    const classes = useStyles();

    const formatChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormat((event.target as HTMLInputElement).value as ExportFormat);
    };

    const sybmitForm = (e: React.FormEvent) => {
        e.preventDefault();

        sybmit();
    }

    return (
        <form onSubmit={e => { sybmitForm(e) }}>
            <Grid container alignItems="flex-start" spacing={3}>
                <Grid item xs={12}>
                    <IdField
                        loading={loading}
                        idCheck={idCheck}
                        resume={resume}
                        resetResume={resetResume} />
                </Grid>

                <Grid item xs={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend" >Выбор формата экспорта</FormLabel>
                        <RadioGroup value={format} name="format" onChange={formatChange} row>
                            <FormControlLabel value={ExportFormat.withOutName} control={<Radio color="primary" />} label="IBS без ФИО" />
                            <FormControlLabel value={ExportFormat.withName} control={<Radio color="primary" />} label="IBS c ФИО" />
                        </RadioGroup>
                    </FormControl>
                </Grid>

                <Grid item xs={12}>
                    <AboutField
                        showLable={true}
                        value={about}
                        showHelperText={true}
                        onChangeText={setAbout} />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.sybmitBtn}>Загрузить</Button>
                </Grid>
            </Grid>
        </form >
    )
}