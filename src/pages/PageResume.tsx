import React, { useEffect, useState } from 'react';
import { Avatar, Link, Box, Chip, Container, createStyles, Fab, makeStyles, Theme, Fade, CircularProgress } from '@material-ui/core'
import PrintIcon from '@material-ui/icons/Print';
import Resume from '../components/resume/Resume';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useAction';
import { ExportFormat } from '../models/format';
import PaperClose from '../components/paper-close/PaperClose';
import { useHistory, useLocation } from 'react-router-dom';
import { BoxCenter } from '../components/box-center/BoxCenter';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        content: {
            maxWidth: 728,
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(3),
            '@media print': {
                padding: 0
            }
        },
        smallestBtn: {
            height: theme.spacing(4) + 2,
            width: theme.spacing(4) + 2,
            minHeight: 0,
            marginRight: 12,
            '& svg': {
                height: 22,
                width: 22,
            }
        },

        chip: {
            cursor: 'pointer'
        },

        noPrint: {
            '@media print': {
                display: 'none'
            }
        }
    }),
);


export const PageResume = () => {

    const classes = useStyles();

    const { resume, form } = useTypedSelector(state => state);
    const { resume__getResume, resume__setResume, form__setAbout, form__getResumePreview, resume__setLoading } = useActions();

    const [format, setFormat] = useState(form.format);
    const [showLink, setShowLink] = useState(form.resumePreview !== null);
    const [showResume, setShowResume] = useState(false);

    const location = useLocation();

    const getUrlParams = () => {
        let format: ExportFormat = ExportFormat.withName;
        const search = location.search.slice(1);
        const id = location.pathname.split('resume/').pop() + '';;

        switch (search) {
            case ExportFormat.withName:
                format = ExportFormat.withName;
                break;
            case ExportFormat.withOutName:
                format = ExportFormat.withOutName
                break;
        }
        return { format, id };
    }
        ;
    useEffect(() => {
        const { format, id } = getUrlParams();
        resume__getResume(id, format);
        setFormat(format);
        if (form.resumePreview === null) {
            form__getResumePreview(id);
        }
        return () => {
            resume__setResume(null);
            resume__setLoading(null);
        }
    }, []);


    const history = useHistory();

    useEffect(() => {
        if (resume.loading === false) {

            if (resume.data === null) {
                history.push('/404');
            } else setShowResume(true);
        }

    }, [resume.loading]);

    useEffect(() => {
        setShowLink(form.resumePreview !== null);
    }, [form.resumePreview]);

    const onClose = () => {
        setShowResume(false);
        setShowLink(false);
    }

    return (
        <Container className={classes.content}>
            <Fade in={showResume}>

                <div className={classes.noPrint}>
                    <Fab onClick={() => window.print()} className={classes.smallestBtn} color="primary" aria-label="printing">
                        <PrintIcon />
                    </Fab>
                    <Fade in={showLink}>
                        <Chip
                            avatar={<Avatar alt="userAvatar" src={form.resumePreview?.photo} />}
                            style={{ fontWeight: 500 }}
                            label={form.resumePreview?.name}
                            component={Link}
                            href={`https://hh.ru/resume/${form.resumePreview?.id}`}
                            target="_blank"
                            underline="none"
                            className={classes.chip}
                        />
                    </Fade>
                </div>

            </Fade>


            {/*     {form.resumePreview ? (       ) : 'not found'} */}
            <Box mt={2} >
                <PaperClose minHeight={960} onClose={onClose}>
                    {showResume ? (

                        <Resume data={resume.data} format={format} about={form.about} setAbout={form__setAbout} />

                    ) : (

                        <BoxCenter>
                            <CircularProgress />
                        </BoxCenter>

                    )}
                </PaperClose>
            </Box>


        </ Container >
    )
}
