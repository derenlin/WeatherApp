import Head from 'next/head'
export default () => (
    <div>
        <Head>
            <title>WeatherApp</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
        </Head>
        <style jsx global>{`
            @import url('https://fonts.googleapis.com/css?family=PT+Sans&display=swap');
            html * { 
                margin: 0; 
                padding: 0;
                font-family: 'PT Sans', sans-serif;
            }
        `}</style>
    </div>
)