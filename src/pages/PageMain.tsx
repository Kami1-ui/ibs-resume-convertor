import React from 'react';
import { Typography, Grid, Box, Link, Container } from '@material-ui/core';
import { Form } from '../components/form/Form';
import { IidCheck } from '../components/id-field/IdField';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useAction';
import { useHistory } from 'react-router-dom';
import { BoxCenter } from '../components/box-center/BoxCenter';


export const PageMain = () => {

    const { form } = useTypedSelector(state => state)
    const { form__getResumePreview, form__setAbout, form__setFormat, form__setResumePreview } = useActions()
    const history = useHistory();
    const idCheck: IidCheck = (id: string) => {
        form__getResumePreview(id);
    }
    const sybmit = () => {
        if (form.resumePreview) history.push(`/resume/${form.resumePreview.id}?${form.format}`)
    }
    const resetId = () => {
        form__setResumePreview(null)
    }
    return (
        <Container>
            <BoxCenter maxWidth={404}>
                <Grid container >
                    <Grid item>
                        <Typography variant="h4" align="center" component="h2" paragraph >
                            Резюме конвертер
                        </Typography>
                        {/*     <Typography align="center" variant="body2" paragraph >
                            Для использования необходимо
                            <Link href={`https://hh.ru/oauth/authorize?  response_type=code&  client_id=QLK6K3JI3SOA0IJ3AVUPFADT8C7T0FKNPCJ7L330P7S59EDQ8UTVC1TLJ03T81P6&redirect_uri=http:\\vk.com`}>войти</Link>{` `} или зарегистрироваться на сайте hh.ru
                        </Typography> */}
                        <Typography align="center" variant="body2" paragraph >
                            Данный сервис предназначен для автоматизации конвертирования резюме с сайта <Link href="https://hh.ru">
                                hh.ru
                            </Link>.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Form sybmit={sybmit}
                            about={form.about}
                            setAbout={form__setAbout}
                            idCheck={idCheck}
                            resume={form.resumePreview}
                            format={form.format}
                            setFormat={form__setFormat}
                            loading={form.loading}
                            resetResume={resetId} />
                    </Grid>
                    <Grid item xs={12} >
                        <Box mt={2} display="flex" justifyContent="flex-end">
                            <Typography variant="subtitle2" >
                                <Link href="https://git.trainee.ru.com/group5/g5front">
                                    Как это работает?
                                </Link>
                            </Typography>
                        </Box>

                    </Grid>
                </Grid>
            </BoxCenter>
        </Container>
    )
}

