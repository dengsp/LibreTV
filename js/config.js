// 全局常量配置
const PROXY_URL = '/proxy/';    // 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
// 注意：PASSWORD 环境变量是必需的，所有部署都必须设置密码以确保安全
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  // 存储验证状态的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000  // 验证有效期（90天，约3个月）
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png',
    version: '1.0.3'
};

// API站点配置
const API_SITES = {
    mtzy: {
        api: 'https://caiji.maotaizy.cc/api.php/provide/vod',
        name: '茅台资源',
//        detail: '茅台资源站: mtzy.me   备用网址: mtzy0.com(0-7)均可使用'
    },
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速资源',
//        detail: '永久官网: www.jisuzy.com    www.jisuzy.tv   www.jisuziyuan.com   www.jszy666.com   www.jszy333.com'
    },
    dbzy: {
        api: 'https://dbzy.tv/api.php/provide/vod',
//        api: 'https://caiji.dbzy5.com/api.php/provide/vod',
        name: '豆瓣资源',
//        detail: 'dbzy1.com、dbzy.tv doubanzy.net、doubanzy.cc doubanziyuan.net、doubanziyuan.com（总有一条可以打开）'
    },
    snzy: {
        api: 'https://suoniapi.com/api.php/provide/vod',
        name: '索尼资源',
//        detail: 'suonizy.net, suonizy.cc'
    },
    okzy: {
        api: 'https://api.okzyw.net/api.php/provide/vod/',
        name: 'OK资源',
//        detail: 'https://okzyw.cc/'
    },
    gszy: {
        api: 'https://api.guangsuapi.com/api.php/provide/vod/',
        name: '光速资源',
//        detail: 'https://guangsuzy.com/'
    },
    xlzy: {
        api: 'https://api.xinlangapi.com/xinlangapi.php/provide/vod/',
        name: '新浪资源',
//        detail: 'xinlangzy.com、 xinlangziyuan.com、 xinlangziyuan.net、 xinlangzy.net'
    },
    jyzy: {
        api: 'https://jyzyapi.com/provide/vod/',
        name: '金鹰资源',
//        detail: '备用域名: jinyingziyuan.com jyzy1.com jyzy2.com jyzy3.com'
    },
    tpzy: {
        api: 'https://taopianapi.com/cjapi/sda/vod/',
        name: '淘片资源',
//        detail: '备用域名: jinyingziyuan.com jyzy1.com jyzy2.com jyzy3.com'
    },
    dyttzy: {
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
        name: '电影天堂资源',
        detail: 'http://caiji.dyttzyapi.com'
    },
    ruyi: {
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        name: '如意资源',
//        detail: 'https://www.ryzy1.tv/'
    },
    bfzy: {
//        api: 'https://bfzyapi.com/api.php/provide/vod',
        api: 'http://by.bfzyapi.com/api.php/provide/vod', //备用
        name: '暴风资源',
//        detail: '暴风资源bfzy.tv 备用网址:bfzy1.tv (1-10)均可使用'
    },
    tyyszy: {
        api: 'https://tyyszy.com/api.php/provide/vod',
        name: '天涯资源',
//        detail: 'https://tyyszy.com/'
    },
    ffzy: {
        api: 'http://ffzy5.tv/api.php/provide/vod',
//        api: 'http://api.ffzyapi.com/api.php/provide/vod', //备用
        name: '非凡影视',
//        detail: '非凡资源备用网址:ffzy1.tv ffzy2.tv ffzy3.tv ffzy4.tv ffzy5.tv'
    },
    zy360: {
        api: 'https://360zy.com/api.php/provide/vod',
//        api: 'https://360zyzz.com/api.php/provide/vod', //备用
        name: '360资源',
//        detail: '主域名: 360zy.com 360zy.net 360zy.vip 360zy.top 360zy.tv 备用域名: 360zy1.com 360zy2.com 360zy3.com 360zy4.com 360zy5.com  360zy6.com 360zy7.com 360zy8.com 360zy9.com 360zy10.com'
    },
    wolong: {
//        api: 'https://wolongzyw.com/api.php/provide/vod',
        api: 'https://collect.wolongzy.cc/api.php/provide/vod',
        name: '卧龙资源',
        detail: 'https://wolongzyw.com/'
    },

    mozhua: {
        api: 'https://mozhuazy.com/api.php/provide/vod',
        name: '魔爪资源',
//        detail: 'https://mozhuazy.com/'
    },
    mdzy: {
        api: 'https://www.mdzyapi.com/api.php/provide/vod',
        name: '魔都资源',
//        detail: '魔都导航站：moduzy.vip 备用域名：moduzy1.com 至 moduzy15.com'
    },
    zuid: {
        api: 'https://api.zuidapi.com/api.php/provide/vod',
        name: '最大资源'
    },
    yinghua: {
        api: 'https://m3u8.apiyhzy.com/api.php/provide/vod',
        name: '樱花资源',
//        detail: 'https://yhzy.cc/'
    },
    baidu: {
        api: 'https://api.apibdzy.com/api.php/provide/vod',
        name: '百度云资源',
//        detail: 'https://api.apibdzy.com/'
    },
    wujin: {
        api: 'https://api.wujinapi.me/api.php/provide/vod',
        name: '无尽资源',
//        detail: 'wujinzy.com,wujinzy.net,wujinzy.co,wujinzy.cc'
    },
    wwzy: {
        api: 'https://wwzy.tv/api.php/provide/vod',
        name: '旺旺短剧'
    },
    lzi: {
        api: 'https://cj.lziapi.com/api.php/provide/vod/',
        name: '量子资源站'
    },
//    testSource: {
//        api: 'https://www.example.com/api.php/provide/vod',
//        name: '空内容测试源',
//        adult: true
//    },
     ckzy: {
         api: 'https://ckzy.me/api.php/provide/vod/',
         name: 'CK资源',
         adult: true,
//         detail: 'https://www.ckzy1.com'
     },
     huangcang: {
         api: 'https://hsckzy888.com/api.php/provide/vod/',
         name: '黄色仓库',
         adult: true,
         detail: 'https://hsckzy.vip'
     },
     yutu: {
         api: 'https://apiyutu.com/api.php/providedao/vod/',
         detail: 'https://yutuzy10.com',
         name: '玉兔资源',
         adult: true
     },

//     下面是资源失效率高的API源，不建议使用
     subo: {
         api: 'https://subocaiji.com/api.php/provide/vod',
         name: '速播资源'
     },
     fczy: {
         api: 'https://api.fczy888.me/api.php/provide/vod',
         name: '蜂巢资源'
     },
     ukzy: {
         api: 'https://api.ukuapi88.com/api.php/provide/vod',
         name: 'U酷资源'
     }
};

// 定义合并方法
function extendAPISites(newSites) {
    Object.assign(API_SITES, newSites);
}

// 暴露到全局
window.API_SITES = API_SITES;
window.extendAPISites = extendAPISites;


// 添加聚合搜索的配置选项
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,            // 单个源超时时间（毫秒）
    maxResults: 10000,          // 最大结果数量
    parallelRequests: true,   // 是否并行请求所有源
    showSourceBadges: true    // 是否显示来源徽章
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        // 只拼接参数部分，不再包含 /api.php/provide/vod/
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 50, // 最大获取页数
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        // 只拼接参数部分
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true,  // 默认启用自动连播功能
    adFilteringEnabled: true, // 默认开启分片广告过滤
    adFilteringStorage: 'adFilteringEnabled' // 存储广告过滤设置的键名
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 100,        // 最大搜索长度
    // allowedApiDomains 不再需要，因为所有请求都通过内部代理
};

// 添加多个自定义API源的配置
const CUSTOM_API_CONFIG = {
    separator: ',',           // 分隔符
    maxSources: 5,            // 最大允许的自定义源数量
    testTimeout: 5000,        // 测试超时时间(毫秒)
    namePrefix: 'Custom-',    // 自定义源名称前缀
    validateUrl: true,        // 验证URL格式
    cacheResults: true,       // 缓存测试结果
    cacheExpiry: 5184000000,  // 缓存过期时间(2个月)
    adultPropName: 'isAdult' // 用于标记成人内容的属性名
};

// 隐藏内置黄色采集站API的变量
const HIDE_BUILTIN_ADULT_APIS = false;
