import { Box, makeStyles, Theme } from '@material-ui/core';
import React, { FC } from 'react'


const useStyles = makeStyles((theme: Theme) => ({
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '16px 0',
        margin: '0 auto',
    },

}));
interface IProps {
    children: React.ReactNode
    maxWidth?: number
}

export const BoxCenter: FC<IProps> = ({ children, maxWidth }) => {
    const classes = useStyles();

    return (
        <Box className={classes.content} style={{ maxWidth }}>
            {children}
        </Box>
    )
}

