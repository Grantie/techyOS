const cid = "UCe96auIGXA3_1rmHvoSEP2Q";
const channelURL = encodeURIComponent(
  `https://www.youtube.com/feeds/videos.xml?channel_id=${cid}`
);
const reqURL = `https://api.rss2json.com/v1/api.json?rss_url=${channelURL}`;

fetch(reqURL)
  .then((response) => response.json())
  .then((result) => {
    for (let i = 0; i < 4; i++) {
      const video = result.items[i];

      $(".videoCards").append(`
            <div class="videoCard" onclick="window.open('${video.link}', '_blank')">
                <img src="http://img.youtube.com/vi/${video.guid.split(":")[2]}/mqdefault.jpg" alt="thumbnail" />
                <div class="gradient"></div>
                <div class="title">${video.title}</div>
            </div>
        `);
    }
  })
  .catch((error) => console.log("error", error));
