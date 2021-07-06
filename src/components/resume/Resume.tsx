import React, { FC, useState } from 'react'
import { Avatar, Typography, Box, Grid, Chip } from '@material-ui/core';
import { IResume } from '../../models/resume';
import { ExportFormat } from '../../models/format';
import { agePrefix, dataFormat } from '../../utils/formation';
import { useStylesResume } from './styles';
import { AboutField } from '../about-field/AboutField';
import { Contacts } from '../contacts/Contacts';

interface IProps {
    data: IResume | null
    about: string
    setAbout: (value: string) => void
    format: ExportFormat
}

const Resume: FC<IProps> = ({ data, about, setAbout, format }) => {
    const classes = useStylesResume();

    const [aboutEdit, setAboutEdit] = useState(false);
    return (
        <>
            <Box mb={4}>
                <Grid container className={classes.header}>
                    <Grid item xs={4}>
                        <Avatar
                            alt={data?.name}
                            src={format === ExportFormat.withName && data?.photo ? data?.photo.medium : ''}
                            className={classes.avatar} />
                    </Grid>

                    <Grid item xs={8} className={classes.title}>
                        {format === ExportFormat.withName && <Typography variant="h5" component="h2" className={classes.upperText} >
                            {data?.name}
                        </Typography>}
                        <Typography color="primary" variant={`${format === ExportFormat.withOutName ? 'h5' : 'subtitle2'}`} className={classes.upperText} >
                            {data?.title}
                        </Typography>
                        <Typography variant="body2" >
                            {`${data?.gender === 'male' && 'Мужчина'}, ${data?.age && (data?.age + ' ' + agePrefix(data?.age))},  ${data?.birth_date && dataFormat(data?.birth_date)}`} {/*   Мужчина, 23 года, 26/04/1998 */}
                        </Typography>

                    </Grid>
                </Grid>
            </Box>

            <Grid container spacing={2} className={classes.body}>
                <Grid xs={4} item className={classes.info}>
                    <Grid container spacing={3}>
                        {(data?.area || data?.contacts) ? (
                            <Grid item xs={12}>
                                <Contacts area={data?.area} contacts={data?.contacts} />
                            </Grid>
                        ) : ''}

                        <Grid item xs={12}>
                            <Typography className={classes.subtitle} >
                                Языки
                            </Typography>
                            {data?.language && data?.language.map(l => {
                                return <Typography key={l.id} className={classes.text}>
                                    {l.name} {` `} (<span style={{ textTransform: 'capitalize' }}>{l.level}</span>)
                                </Typography>
                            })
                            }
                        </Grid>


                        <Grid item xs={12}>
                            <Typography className={classes.subtitle} >
                                Образование
                            </Typography>
                            {data?.education && data?.education.map((e, i) => {
                                return (
                                    <Box mb={2} key={i}>
                                        <Typography variant="body2" className={classes.lable}>
                                            {e.name}
                                        </Typography>
                                        <Typography gutterBottom variant="body2" className={classes.text}>
                                            {e.organization}
                                        </Typography>
                                        <Typography variant="body2">
                                            {e.result}
                                        </Typography>

                                        <Typography variant="body2">
                                            {e.year}
                                        </Typography>
                                    </Box>
                                )
                            })
                            }
                        </Grid>


                        <Grid item xs={12}>
                            <Typography className={classes.subtitle} >
                                О кандидате
                                <span onClick={() => setAboutEdit(true)} className={classes.editBtn}>ред.</span>
                            </Typography>
                            {aboutEdit
                                ? (
                                    <AboutField onBlur={() => setAboutEdit(false)} autoFocus={true} value={about} onChangeText={setAbout} />
                                )
                                : (
                                    <Typography gutterBottom variant="body2" className={classes.text}>
                                        {about}
                                    </Typography>
                                )
                            }
                        </Grid>

                    </Grid>
                </Grid>
                <Grid xs={8} item className={classes.main} >

                    <Grid item >
                        <Grid container spacing={3}>
                            <Grid item className={classes.mainItem}  >
                                <Typography className={classes.subtitle} >
                                    Ключевые навыки
                                </Typography>

                                <Box className={classes.skils} >
                                    {data?.skill_set && data?.skill_set.map(s => {
                                        return <Chip key={s} label={s} />
                                    })}
                                </Box>
                            </Grid>

                            <Grid item xs={12} className={classes.mainItem}  >
                                <Typography className={classes.subtitle} >
                                    Опыт работы
                                </Typography>
                                {data?.experience && data?.experience.map((job, i) => {
                                    return (<div key={i}>
                                        <Typography variant="body2" className={classes.lable}>
                                            {`${job.company}, ${job.area} | ${job.position}`}
                                        </Typography>

                                        <Typography gutterBottom variant="body2" className={classes.lable}>
                                            {`${dataFormat(job.start)} - ${dataFormat(job.end)}`}
                                        </Typography>
                                        <Typography gutterBottom variant="body2" className={classes.text + ' ' + classes.paragraph}>
                                            {job.description}
                                        </Typography>
                                    </div>)
                                })}
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Resume
