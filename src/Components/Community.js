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

export default Community;
