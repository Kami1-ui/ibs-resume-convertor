import { Route, Switch } from 'react-router-dom';
import React from 'react';
import { PageMain } from '../../pages/PageMain';
import { PageResume } from '../../pages/PageResume';
import { CssBaseline } from '@material-ui/core';
import { Page404 } from '../../pages/Page404';


export const LayoutMain = () => {
    return (
        <>
            <CssBaseline />
            <Switch>
                <Route exact path='/' render={() => <PageMain />} />
                <Route path='/resume/:userId' render={() => <PageResume />} />
                <Route path='*' render={() => <Page404 />} />
            </Switch>
        </>
    )
}

