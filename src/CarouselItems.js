import React from 'react';
import { FacebookEmbed } from 'react-social-media-embed';


const items = [
  <div className="facebook-post" key="1">
    <FacebookEmbed
      url="https://www.facebook.com/permalink.php?story_fbid=122126359934311964&amp;id=61559358922953"
       className="facebook-embed"
    />
  </div>,
  <div className="facebook-post" key="2">
    <FacebookEmbed
      url="https://www.facebook.com/permalink.php?story_fbid=122123720474311964&amp;id=61559358922953"
       className="facebook-embed"
    />
  </div>,
  <div className="facebook-post" key="3">
    <FacebookEmbed
      url="https://www.facebook.com/permalink.php?story_fbid=122104183922311964&amp;id=61559358922953"
       className="facebook-embed"
    />
    </div>,
    <div className="facebook-post" key="4">
      <FacebookEmbed
        url="https://www.facebook.com/permalink.php?story_fbid=122108301158311964&amp;id=61559358922953"
         className="facebook-embed"
      />
    </div>,
    <div className="facebook-post" key="5">
      <FacebookEmbed
        url="https://www.facebook.com/permalink.php?story_fbid=122099210996311964&amp;id=61559358922953"
         className="facebook-embed"
      />
    </div>,
];

export default items;