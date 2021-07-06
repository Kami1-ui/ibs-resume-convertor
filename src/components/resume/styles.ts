import { makeStyles, Theme, createStyles } from "@material-ui/core";

const mobileBreakPoint = 590;
export const useStylesResume = makeStyles((theme: Theme) =>
    createStyles({
        header: {
            alignItems: "center",
            justifyContent: 'center',
            marginBottom: theme.spacing(2),

            [`@media (max-width: ${mobileBreakPoint}px)`]: {
                flexDirection: 'column',
                alignItems: "flex-start",
            },
            '@media print': {
                flexDirection: 'row',
                alignItems: "center",
            },
        },
        upperText: {
            textTransform: 'uppercase'
        },
        avatar: {
            width: theme.spacing(18),
            height: theme.spacing(18),
            marginBottom: theme.spacing(2),
        },
        title: {
            [`@media (max-width: ${mobileBreakPoint}px)`]: {
                maxWidth: '100%',
                paddingLeft: 0,
            },
        },

        subtitle: {
            fontSize: 16,
            fontWeight: 'bold',
            textTransform: 'uppercase',
            marginBottom: theme.spacing(1),
        },
        lable: {
            fontWeight: 500,
        },
        text: {
            fontSize: 14,
            fontWeight: 500,
            color: theme.palette.text.secondary
        },
        skils: {
            '& div': {
                marginRight: theme.spacing(1),
                marginBottom: theme.spacing(1),
            }
        },
        main: {
            position: 'relative',
            '&>div': {
                paddingLeft: theme.spacing(2),
            },
            '&:after': {
                content: '""',
                width: 2,
                height: '100%',
                position: 'absolute',
                left: 4,
                top: 16,
                backgroundColor: theme.palette.primary.main,
            },
            '&:before': {
                content: '""',
                width: 9,
                height: 9,

                position: 'absolute',
                left: 0,
                borderRadius: '50%',
                bottom: -16,
                backgroundColor: theme.palette.primary.main,
            },
            [`@media (max-width: ${mobileBreakPoint}px)`]: {
                maxWidth: '100%'
            },
        },
        mainItem: {
            position: 'relative',
            '&:before': {
                content: '""',
                width: 9,
                height: 9,
                position: 'absolute',
                left: -3 - theme.spacing(1),
                borderRadius: '50%',
                top: 16,
                backgroundColor: theme.palette.primary.main,
            }
        },
        paragraph: {
            position: 'relative',
            paddingLeft: theme.spacing(1),
            '&:before': {
                content: '""',
                width: 5,
                height: 5,
                position: 'absolute',
                left: -2,
                borderRadius: '50%',
                top: 5,
                backgroundColor: theme.palette.primary.main,
            },

            '@media print': {
                display: 'block',
            },
        },
        body: {
            [`@media (max-width: ${mobileBreakPoint}px)`]: {
                flexDirection: 'column'
            },
            '@media print': {
                flexDirection: 'row'
            },
        },
        info: {
            [`@media (max-width: ${mobileBreakPoint}px)`]: {
                maxWidth: '100%'
            },
        },
        editBtn: {
            fontWeight: 500,
            color: theme.palette.text.secondary,
            fontSize: '14px',
            textTransform: 'none',
            marginLeft: theme.spacing(1),
            cursor: 'pointer',
            '@media print': {
                display: 'none'
            }
        },


    }),
);
