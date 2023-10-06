import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async'


function Metatags({ title }) {
    return (
        <HelmetProvider>
            <Helmet>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
                <script src="https://kit.fontawesome.com/82dfb6e127.js" crossorigin="anonymous"></script>
                <title>{title}</title>
                <script ></script>
            </Helmet>
        </HelmetProvider>
    )
}

export default Metatags