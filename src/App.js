import React from 'react'
import {CssBaseline, AppBar, Typography, Container, Toolbar, Stack, Button, Grid, Card, CardMedia, CardContent, CardActions} from '@mui/material'


const App  = () => {
    return(
        <>
            <CssBaseline />
            <AppBar color='primary' position="relative">
                <Toolbar >
                    <Typography vartiant='h5' >Photo Album</Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div>
                    <Container maxWidth="sm">
                        <Typography variant='h3' align='center'>Album layout</Typography>
                        <Typography variant='h6' paragraph gutterBottom align='center' color='textPrimary'>
                            Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.
                        </Typography>
                        <div>
                            <Stack direction='row' justifyContent='center' spacing={2}>
                                <Button variant='contained' size='sm' >Call to Action</Button>
                                <Button variant='outlined' size='sm' >Call to Action</Button>
                            </Stack>
                        </div>
                    </Container>
                </div>
                <div>
                    <Container maxWidth='md'>
                        <Grid container >
                            <Grid item xs={12} sm={6} md={4}>
                                <Card sx={{height:'100%', display:'flex', flexDirection:'column'}}>
                                    <CardMedia component='img' sx={{pt:'56.25%'}} image='"https://source.unsplash.com/random' alt='img' />
                                    <CardContent>
                                        <Typography variant='h5'>Heading </Typography>
                                        
                                    </CardContent>
                                    <CardActions>
                                        <Button size='m'>View</Button>
                                        <Button size='m'>Edit</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </main>
        </>
    )
}

export default App