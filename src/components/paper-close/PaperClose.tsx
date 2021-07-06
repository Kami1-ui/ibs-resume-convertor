import React, { FC } from 'react'
import CloseIcon from "@material-ui/icons/Clear";
import { createStyles, Fade, makeStyles, Paper, Theme } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        closeBtn: {
            position: 'absolute',
            top: 16, right: 16,
            cursor: 'pointer',
            '@media print': {
                display: 'none'
            }
        },

        paper: {
            borderRadius: 16,
            padding: theme.spacing(5),
            position: 'relative',
            '@media print': {
                transform: 'scale(1.05)',
                border: 'none',
                boxShadow: 'none',
            }
        },
    }),
);

interface IProps {
    children: React.ReactNode
    minHeight?: number
    onClose?: () => void
}

const PaperClose: FC<IProps> = ({ children, minHeight, onClose }) => {
    const [checked, setChecked] = React.useState(true);
    const classes = useStyles();

    const history = useHistory();
    const timeOut = 300;
    const closeHandler = () => {
        setChecked(false);
        if (onClose) onClose();
        setTimeout(() => history.push('/'), timeOut);
    }

    return (
        <Fade timeout={timeOut} in={checked}>
            <Paper className={classes.paper} style={{ minHeight }}>
                <div className={classes.closeBtn}>
                    <div onClick={() => closeHandler()} >
                        <CloseIcon color='action' />
                    </div>
                </div>
                {children}
            </Paper>
        </Fade>
    )
}

export default PaperClose