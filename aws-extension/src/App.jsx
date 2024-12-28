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
//   const toggleWebchat = () => {
//     setIsWebchatOpen((prevState) => !prevState);
//   };
//   return (
//     // <div style={{ width: "100vw", height: "100vh" }}>
//       <div style={{ width: "400px", height: "100vh" }}>
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


import { Webchat, WebchatProvider, getClient } from "@botpress/webchat";
import { buildTheme } from "@botpress/webchat-generator";

const { theme, style } = buildTheme({
  themeName: "prism",
  themeColor: "#634433",
});

// Add your Client ID here ⬇️
const clientId = "3497f87d-95fe-4561-b883-bc370ebf5444";

export default function App() {
  const client = getClient({ clientId });

  return (
    <div style={{ width: "440px", height: "600px" }}>
      <style>{style}</style>
      <WebchatProvider theme={theme} client={client}>
        {/* Chat Container Always Visible */}
        <div
          style={{
            // position: "fixed",
            // bottom: "20px",
            // right: "20px",
            width: "440px",
            height: "600px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <Webchat hideWidget />
        </div>
      </WebchatProvider>
    </div>
  );
}
