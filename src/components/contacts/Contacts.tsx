import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import React, { FC } from 'react'
import { IContact } from '../../models/resume-items';

import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import MapIcon from "@material-ui/icons/Room";
import SiteIcon from "@material-ui/icons/Language";

import { cellFormat } from '../../utils/formation';
import SkypeIcon from "./../../asset/icons/skype-icon.svg"
import IcqIcon from "./../../asset/icons/icq-icon.svg"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        contact: {
            fontSize: 14,
            display: 'flex',
            alignItems: 'center',
            marginBottom: theme.spacing(1),

            '& svg,img': {
                width: 20,
                height: 20,
                marginRight: theme.spacing(1) + 4,
            }
        },
        lable: {
            wordBreak: 'break-all',
            fontSize: 14,
            fontWeight: 500
        }
    }),
);


interface IProps {
    contacts: Array<IContact> | null
    area: string
}

export const Contacts: FC<IProps> = ({ contacts, area }) => {

    const classes = useStyles();
    return (
        <>
            {contacts?.map(c => {
                return (
                    <div key={c.type} className={classes.contact}>
                        {{
                            'cell': <PhoneIcon />,
                            'email': <MailIcon />,
                            'site': <SiteIcon />,
                            'skype': <img src={SkypeIcon} alt="skype" />,
                            'icq': <img src={IcqIcon} alt="icq" />
                        }[c.type]}

                        <Typography className={classes.lable}>
                            {c.type === 'cell' ? cellFormat(c.value) : c.value}
                        </Typography>
                    </div>
                )
            })}

            {area ? (
                <div className={classes.contact}>
                    <MapIcon />
                    <Typography variant="body2" >
                        {area}
                    </Typography>
                </div>
            ) : ''}

        </>
    )
}
