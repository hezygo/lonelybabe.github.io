module.exports = {
  "title": "LearnPythonToWork",
  "description": "learn python in favorite",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {

    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      // {
      //   "text": "Docs",
      //   "icon": "reco-message",
      //   "items": [
      //     {
      //       "text": "vuepress-reco",
      //       "link": "/docs/theme-reco/"
      //     }
      //   ]
      // },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "HoLittlePig",
            "link": "https://github.com/hezygo",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Pages"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "LittlePigHo",
    "authorAvatar": "/avatar.png",
    // "record": "xxxx",
    "startYear": "2022",

  },
  'plugins': [
    [
      "vuepress-plugin-nuggets-style-copy",
      {
        'copyText': "复制代码",
        'tip': {
          'content': "复制成功"
        }
      }
    ],
    [
      '@vuepress-reco/vuepress-plugin-kan-ban-niang',
      {
        'theme': ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'],
      }
    ],
    [
      'meting',
      {
         // 这个 API 是不可用的，只是作为示例而已
        // 'metingApi': 'https://meting.example.com/api/',
        'meting': {
          'auto': 'https://music.163.com/#/playlist?id=5407105315'
        }, // 不配置该项的话不会出现全局播放器
         'aplayer': {
            'lrcType': 3,
         },
      },
   ]
  ],
  "markdown": {
    "lineNumbers": true,
    // 用来解决 标签问题
    extendMarkdown: md => {
      // Remember old renderer, if overridden, or proxy to default renderer
      var defaultRender = md.renderer.rules.image || function (tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options);
      };

      md.renderer.rules.image = function (tokens, idx, options, env, self) {
        // If you are sure other plugins can't add `target` - drop check below
        var aIndex = tokens[idx].attrIndex('referrerPolicy');

        if (aIndex < 0) {
          tokens[idx].attrPush(['referrerPolicy', 'no-referrer']); // add new attribute
        } else {
          tokens[idx].attrs[aIndex][1] = 'no-referrer';    // replace value of existing attr
        }

        // pass token to default renderer.
        return defaultRender(tokens, idx, options, env, self);
      };
    }
  },
}
