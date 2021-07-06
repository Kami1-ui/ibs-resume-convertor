import React from 'react';
import { Typography, Box, Container, Link } from '@material-ui/core';
import { BoxCenter } from '../components/box-center/BoxCenter';
import { Link as RouteLink } from 'react-router-dom';

export const Page404 = () => {

    return (
        <Container>
            <BoxCenter >
                <Box>
                    <Typography variant="h4" component="h2" paragraph >
                        404! Страница не найдена
                    </Typography>
                    <Typography variant="subtitle2" >
                        <Link component={RouteLink} to='/'>
                            На главную страницу
                        </Link>
                    </Typography>
                </Box>
            </BoxCenter>
        </Container>
    )
}
