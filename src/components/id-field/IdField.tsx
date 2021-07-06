import { Link, TextField, Avatar, InputAdornment, makeStyles, Theme, createStyles, IconButton } from '@material-ui/core';
import React, { useState, useEffect, useRef } from 'react'
import { FC } from 'react';
import { IResumePreview } from '../../models/resume';
import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        smallAvatar: {
            width: theme.spacing(4),
            height: theme.spacing(4),
            marginRight: 10
        },
        cleanBtn: {
            '&:hover': {
                background: 'none',
            }
        },
        linkLable: {
            opacity: 0
        },

        linkInput: {
            height: 32,
            transition: 'height 0.2s'
        },
        editStyle: {
            height: 48,
            transition: 'height 0.3s ease'
        }

    }),
);

export interface IonChange {
    (value: string): void;
}
export interface IidCheck {
    (link: string): void;
}

interface IProps {
    idCheck: IidCheck
    resume: IResumePreview | null
    loading: boolean
    resetResume: () => void
}

export const IdField: FC<IProps> = ({ idCheck, resume, loading, resetResume }) => {
    const classes = useStyles();

    const [error, setError] = useState('');
    const [touched, setTouched] = useState(false);
    const [editMode, setEditMode] = useState(resume === null);
    const [link, setLink] = useState('');
    const LinkRef = useRef<HTMLHeadingElement>(null);

    const getId = (link: string) => {
        const res = link.split('hh.ru/resume/').pop();
        return String(res);
    }

    const testId = (id: string) => {
        return (/^\d*[a-zA-Z\d]*$/).test(id);
    }

    useEffect(() => {
        if (resume?.id) setLink(resume?.id)
    }, [])

    useEffect(() => {
        if (!loading && touched) {
            setError('Пользователь не найден')
        }
        if (!loading && resume !== null) {
            setEditMode(false);
            setError('')
        }
    }, [loading]);

    useEffect(() => {
        if (editMode && touched) LinkRef.current?.focus();
    }, [editMode])

    const lableStyle = !editMode ? { classes: { root: classes.linkLable } } : {};

    const closePreview = () => {
        resetResume();
        setTouched(true);
        setEditMode(true);
    }



    const iconAdornment = !editMode ? {
        classes: { root: `${classes.linkInput} ${classes.editStyle}` },
        startAdornment: (
            <InputAdornment position="start">
                <Avatar alt={resume?.name} src={resume?.photo} className={classes.smallAvatar} ></Avatar>
                <Link href={`https://hh.ru/resume/${resume?.id}`} target="_blank" color="textPrimary">
                    {resume?.name}
                </Link>
            </InputAdornment>
        ),
        endAdornment: (
            <IconButton className={classes.cleanBtn} onClick={closePreview}>
                <ClearIcon />
            </IconButton>
        )
    } : { classes: { root: classes.linkInput }, };

    const LinkHandler = () => {
        const id = getId(link);
        if (id) {
            if (testId(id)) {
                idCheck(id);
                setLink(id);
            } else setError('Поле содержит запрещенные символы')
        }
    };

    const onChangeHandler = (text: string) => {
        setLink(text);
        setTouched(true);
    }

    return (
        <TextField
            label="Ссылка"
            helperText={error.length > 0 ? error : 'Введите ссылку или id'}
            name="link"
            value={editMode ? link : ''}
            onChange={(e) => onChangeHandler(e.target.value)}
            fullWidth
            disabled={loading || !editMode}
            InputProps={iconAdornment}
            onBlur={() => LinkHandler()}
            error={error.length > 0}
            InputLabelProps={lableStyle}
            required
            inputRef={LinkRef}
            onKeyUp={e => { if (e.key === 'Enter') LinkHandler() }}
        />
    )
}

