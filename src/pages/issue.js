import * as React from "react"




// markup
const IssuePage = () => {
  return (
    <main >
      <title>Issue Page</title>
      <h1 >
        Issue Page
      </h1>
      <div id="otnotice-9438532b-0504-4faa-882e-923bafea1b14" class="otnotice"></div>

      <script 
        src="https://appds8093.blob.core.windows.net/privacy-notice-scripts/otnotice-1.0.min.js" 
        type="text/javascript" 
        charset="UTF-8" 
        id="otprivacy-notice-script"
        dangerouslySetInnerHTML={{
          __html: `
          settings="eyJjYWxsYmFja1VybCI6Imh0dHBzOi8vcHJpdmFjeXBvcnRhbC5vbmV0cnVzdC5jb20vcmVxdWVzdC92MS9wcml2YWN5Tm90aWNlcy9zdGF0cy92aWV3cyJ9"
        `,
        }}
      />
      <script 
        type="text/javascript" 
        charset="UTF-8"
        dangerouslySetInnerHTML={{
          __html: `
          OneTrust.NoticeApi.Initialized.then(function() {
            OneTrust.NoticeApi.LoadNotices(["https://appds8093.blob.core.windows.net/3546d798-21cd-434d-b031-f8701f4d2f21/privacy-notices/9438532b-0504-4faa-882e-923bafea1b14.json"], undefined, undefined, false);
          });
        `,
        }}
      />
    </main>
  )
}

export default IssuePage
