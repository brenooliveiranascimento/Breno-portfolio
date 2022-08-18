import Document, { Main, Head, NextScript, Html } from "next/document";

export default class MyDocument extends Document{
  render(){
    return(
      <Html>
      <Head>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Alumni+Sans+Pinstripe:ital@0;1&family=Oswald&family=Silkscreen&display=swap" rel="stylesheet"/>
      </Head>
      <body>
       <Main/>
       <NextScript/>             
       <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
         <script>
         </script> 
      </body>            
     </Html>
    )
  }
}