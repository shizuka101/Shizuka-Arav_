const request = require("request");
const fs = require("fs-extra");

module.exports.config = {
  name: "owner",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝗖𝗢𝗖𝗔 𝗔𝗥𝗔𝗩",
  description: "𝗔𝗥𝗔𝗩 Owner Info with styled box & random photo",
  commandCategory: "Information",
  usages: "owner",
  cooldowns: 2
};

module.exports.run = async function ({ api, event }) {

  
  const info = `
╔═════════════════════ ✿
║ ✨ 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 ✨
╠═════════════════════ ✿
║ 👑 𝗡𝗮𝗺𝗲 : 𝗖𝗢𝗖𝗔 𝗔𝗥𝗔𝗩
║ 🧸 𝗡𝗶𝗰𝗸 𝗡𝗮𝗺𝗲 : 𝗔𝗥𝗔𝗩
║ 🎂 𝗔𝗴𝗲 : 20+
║ 💘 𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻 : 𝗖𝗼𝗺𝗽𝗹𝗶𝗰𝗮𝘁𝗲𝗱
║ 🎓 𝗣𝗿𝗼𝗳𝗲𝘀𝘀𝗶𝗼𝗻 : 𝗦𝘁𝘂𝗱𝗲𝗻𝘁
║ 📚 𝗘𝗱𝘂𝗰𝗮𝘁𝗶𝗼𝗻 : 𝗛𝗡𝗥’𝘀 2𝗻𝗱 𝗬𝗲𝗮𝗿
║ 🏡 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 : 𝗗𝗵𝗮𝗸𝗮, 𝗕𝗮𝗻𝗴𝗹𝗮𝗱𝗲𝘀𝗵 🇧🇩
╠═════════════════════ ✿
║ 🔗 𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗟𝗜𝗡𝗞𝗦
╠═════════════════════ ✿
║ 📘 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 :
║ fb.com/cocaarav
║ 💬 𝗠𝗲𝘀𝘀𝗲𝗻𝗴𝗲𝗿 :
║ m.me/61552846104112
║ 📞 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 :
║ wa.me/0188🖤🚩
║ ✈️ 𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺 :
║ t.me/cocaarav_
╚═════════════════════ ✿
`;

  const images = [
    "https://i.imgur.com/8WBso8x.png",
    "https://i.imgur.com/0VZu5eY.png",
    "https://i.imgur.com/bkixgPK.jpeg",
    "https://i.imgur.com/z6G6L4c.jpeg"
  ];

  const randomImg = images[Math.floor(Math.random() * images.length)];

  const callback = () => api.sendMessage(
    {
      body: info,
      attachment: fs.createReadStream(__dirname + "/cache/owner.jpg")
    },
    event.threadID,
    () => fs.unlinkSync(__dirname + "/cache/owner.jpg")
  );

  return request(encodeURI(randomImg))
    .pipe(fs.createWriteStream(__dirname + "/cache/owner.jpg"))
    .on("close", () => callback());
};
