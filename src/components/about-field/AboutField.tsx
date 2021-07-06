import { TextField } from '@material-ui/core'
import React, { FC, FocusEvent } from 'react'

interface IProps {
    showHelperText?: boolean
    showLable?: boolean
    value: string
    autoFocus?: boolean
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void
    onChangeText: (text: string) => void
}

export const AboutField: FC<IProps> = ({ autoFocus, onBlur, showHelperText, showLable, value, onChangeText }) => {
    return (
        <TextField
            id="outlined-multiline-static"
            label={showLable ? 'О кандидате' : ''}
            name="about"
            value={value}
            onChange={(e) => onChangeText(e.target.value)}
            multiline
            fullWidth
            onBlur={onBlur}
            autoFocus={autoFocus}
            helperText={showHelperText ? 'Максимальная длинна 300 символов' : ''}
            inputProps={{ maxLength: 300 }}
        />
    )
}

