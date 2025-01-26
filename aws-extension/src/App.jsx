// import React, { useState } from 'react';
// import axios from 'axios';

// const App = () => {

//   const [userPrompt,setuserPrompt]=useState("");
//   const [result,setresult]=useState("");
  
//   const handleClick= () =>{
//       axios.post('http://localhost:3000/generate' ,{prompt: userPrompt})
//       .then((res)=>{
//         console.log("Response",res.data);
//         setresult(res.data.response);
//       })
//       .catch((error)=>{
//         console.error("Erorr", error);
//       })
//   };

//   return (
//      <section>
//       <div>AWS Genie</div>
//       <div>
//         Enter the prompt <input type="text"  value={userPrompt} onChange={(e)=> setuserPrompt(e.target.value)}/>
//         <button onClick={handleClick}>Go</button>
//       </div>
//       {result && <div id="response">{result}</div>}
//      </section>
//   );
// };

// export default App;


// import { Webchat, WebchatProvider, Fab, getClient } from "@botpress/webchat";
// import { buildTheme } from "@botpress/webchat-generator";
// import { useState } from "react";

// const { theme, style } = buildTheme({
//   themeName: "prism",
//   themeColor: "#634433",
// });

// //Add your Client ID here ⬇️
// const clientId = "3497f87d-95fe-4561-b883-bc370ebf5444";

// export default function App() {
//   const client = getClient({ clientId });
//   const [isWebchatOpen, setIsWebchatOpen] = useState(false);

  
//   return (
//     <div style={{ width: "100vw", height: "100vh" }}>
//       <style>{style}</style>
//       <WebchatProvider
//         theme={theme}
//         client={client}
//       >
//            <Fab onClick={toggleWebchat} />
//         <div
//           style={{
//             display: isWebchatOpen ? "block" : "none",
//           }}
//         >
//           <Webchat />
//         </div>
//       </WebchatProvider>
//     </div>
//   );
// }


// import { Webchat, WebchatProvider, Fab, getClient } from "@botpress/webchat";
// import { buildTheme } from "@botpress/webchat-generator";  // Ensure this is imported
// import { useState } from "react";

// // Add your Client ID here ⬇️
// const clientId = "3497f87d-95fe-4561-b883-bc370ebf5444";

// const { theme, style } = buildTheme({
//   themeName: "prism",
//   themeColor: "#634433",
// });

// export default function App() {
//   const client = getClient({ clientId });
//   const [isWebchatOpen, setIsWebchatOpen] = useState(false);

//   const toggleWebchat = () => {
//     setIsWebchatOpen((prevState) => !prevState);
//   };

//   return (
//     <div style={{ width: "100vw", height: "100vh" }}>
//       <style>{style}</style>
//       <WebchatProvider theme={theme} client={client}>
//         <div
//           style={{
//             display: isWebchatOpen ? "block" : "none",
//           }}
//         >
//           <Webchat />
//         </div>
//       </WebchatProvider>
//     </div>
//   );
// }


// button click open bot

// import { Webchat, WebchatProvider, Fab, getClient } from "@botpress/webchat";
// import { buildTheme } from "@botpress/webchat-generator";
// import { useState } from "react";
// const { theme, style } = buildTheme({
//   themeName: "prism",
//   themeColor: "#634433",
// });
// //Add your Client ID here ⬇️
// // const clientId = "3497f87d-95fe-4561-b883-bc370ebf5444";
// const clientId = "496c66e0-2c91-4f22-bda9-5769d1449fed";
// export default function App() {
//   const client = getClient({ clientId });
//   const [isWebchatOpen, setIsWebchatOpen] = useState(false);
//   const toggleWebchat = () => {
//     setIsWebchatOpen((prevState) => !prevState);
//   };
//   return (
//     <div style={{ width: "100vw", height: "100vh" }}>
   
//       <style>{style}</style>
//       <WebchatProvider
//         theme={theme}
//         client={client}
//       >
//         <Fab onClick={toggleWebchat} />
//         <div
//           style={{
//             display: isWebchatOpen ? "block" : "none",
//           }}
//         >
//           <Webchat />
//         </div>
//       </WebchatProvider>
//     </div>
//   );
// }

/// blue colored bot
// import { Webchat, WebchatProvider, getClient } from "@botpress/webchat";
// import { buildTheme } from "@botpress/webchat-generator";

// const { theme, style } = buildTheme({
//   themeName: "prism",
//   themeColor: "#634433",
// });

// // Add your Client ID here ⬇️
// const clientId = "3497f87d-95fe-4561-b883-bc370ebf5444";

// export default function App() {
//   const client = getClient({ clientId });

//   return (
//     <div style={{ width: "440px", height: "600px" }}>
//       <style>{style}</style>
//       <WebchatProvider theme={theme} client={client}>
//         {/* Chat Container Always Visible */}
//         <div
//           style={{
//             // position: "fixed",
//             // bottom: "20px",
//             // right: "20px",
//             width: "440px",
//             height: "600px",
//             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//             borderRadius: "10px",
//             overflow: "hidden",
//           }}
//         >
//           <Webchat hideWidget />
//         </div>
//       </WebchatProvider>
//     </div>
//   );
// }


// Customised bot
import React from "react";

export default function App() {
  return (
    <div style={{ width: "400px", height: "100vh" }}>
      <iframe
        // src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/12/27/11/20241227113603-BC7NC1F7.json"
        src="https://cdn.botpress.cloud/webchat/v2.3/shareable.html?configUrl=https://files.bpcontent.cloud/2024/12/29/05/20241229054558-0WDN18X5.json"
        title="Botpress Webchat"
        style={{
          width: "400px",
          height: "100vh",
          border: "none",
        }}
      />
    </div>
  );
}

// import React, { useState, useEffect } from "react";

// export default function App() {
//   const [highlightedButton, setHighlightedButton] = useState("");

//   useEffect(() => {
//     const handleMessage = (event) => {
//       if (event.origin === "https://cdn.botpress.cloud") {
//         const { type, payload } = event.data;
//         if (type === "highlightButton") {
//           setHighlightedButton(payload.buttonId);
//         }
//       }
//     };

//     window.addEventListener("message", handleMessage);

//     return () => {
//       window.removeEventListener("message", handleMessage);
//     };
//   }, []);

//   return (
//     <div style={{ display: "flex" }}>
//       {/* Chatbot */}
//       <div style={{ width: "400px", height: "100vh" }}>
//         <iframe
//           id="botpress-iframe"
//           src="https://cdn.botpress.cloud/webchat/v2.3/shareable.html?configUrl=https://files.bpcontent.cloud/2024/12/29/05/20241229054558-0WDN18X5.json"
//           title="Botpress Webchat"
//           style={{
//             width: "400px",
//             height: "100vh",
//             border: "none",
//           }}
//         />
//       </div>

//       {/* Buttons Section */}
//       <div style={{ flex: 1, padding: "20px" }}>
//         <h1>AWS Service Launcher</h1>
//         <button
//           id="launch-ec2"
//           style={{
//             padding: "10px 20px",
//             margin: "10px",
//             backgroundColor: highlightedButton === "launch-ec2" ? "yellow" : "gray",
//           }}
//         >
//           Launch EC2
//         </button>
//         <button
//           id="configure-s3"
//           style={{
//             padding: "10px 20px",
//             margin: "10px",
//             backgroundColor: highlightedButton === "configure-s3" ? "yellow" : "gray",
//           }}
//         >
//           Configure S3
//         </button>
//         <button
//           id="setup-lambda"
//           style={{
//             padding: "10px 20px",
//             margin: "10px",
//             backgroundColor: highlightedButton === "setup-lambda" ? "yellow" : "gray",
//           }}
//         >
//           Setup Lambda
//         </button>
//       </div>
//     </div>
//   );
// }
