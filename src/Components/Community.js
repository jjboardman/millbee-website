import * as React from "react";
import WidgetBot from "@widgetbot/react-embed";
import { Helmet } from "react-helmet";

//Component to be exported
const Community = () => {
  return (
    <div id="discord-container">
      <Helmet>
        <title>Millbee Community</title>
      </Helmet>
      <WidgetBot
        id="discord"
        server="557579297028833282"
        channel="557579297817231405"
        defer={false}
        height="1000px"
        width="1400px"
      />
    </div>
  );
};
//
// <iframe
//   src="https://discord.com/widget?id=557579297028833282&theme=dark"
//   width="350"
//   height="500"
//   allowtransparency="true"
//   frameborder="0"
//   sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
// ></iframe>
// <WidgetBot
// id="discord"
// server="557579297028833282"
// channel="557579297817231405"
// defer={false}
// height="1000px"
// width="1400px"
// />
// <iframe
//   src="https://e.widgetbot.io/channels/557579297028833282/557579297817231405"
//   height="1000"
//   width="1400"
//   frameborder="0"
//   ></iframe>
export default Community;
