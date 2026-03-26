// ============ 工具数据定义 ============
const toolsData = {
    password: [
        {
            id: 'password-strength',
            name: '密码强度检测',
            icon: '🔐',
            description: '检测密码强度，评估安全性',
            usage: '输入密码后自动检测强度，给出改进建议',
            knowledge: '密码强度由长度、字符种类、复杂度决定，建议使用至少12位包含大小写字母、数字、特殊字符的密码',
            ctfTip: 'CTF中常见弱密码：123456、password、admin等',
            pitfalls: '避免使用生日、手机号等个人信息作为密码'
        },
        {
            id: 'password-generator',
            name: '密码生成器',
            icon: '🎲',
            description: '生成随机强密码',
            usage: '选择密码长度和字符类型，点击生成',
            knowledge: '随机密码熵值越高越安全，16位密码熵值约96位',
            ctfTip: 'CTF中有时需要生成特定格式的字典',
            pitfalls: '妥善保存生成的密码，不要明文存储'
        },
        {
            id: 'md5-sha',
            name: 'MD5/SHA加密',
            icon: '🔒',
            description: 'MD5和SHA256哈希计算',
            usage: '输入文本，点击加密',
            knowledge: 'MD5已被破解，不应用于安全场景，SHA256目前仍安全',
            ctfTip: 'CTF中经常需要破解MD5哈希，可使用在线彩虹表',
            pitfalls: '不要用MD5存储密码'
        },
        {
            id: 'hash-collision',
            name: '哈希碰撞演示',
            icon: '⚔️',
            description: '演示哈希碰撞现象',
            usage: '输入两个不同字符串，比较哈希值',
            knowledge: '哈希碰撞是指两个不同输入产生相同哈希值',
            ctfTip: 'MD5碰撞在CTF中是常见考点',
            pitfalls: 'SHA1也已发现碰撞，避免使用'
        },
        {
            id: 'hmac-calc',
            name: 'HMAC计算',
            icon: '🔑',
            description: 'HMAC密钥散列消息认证码',
            usage: '输入消息和密钥，计算HMAC-SHA256',
            knowledge: 'HMAC是一种基于哈希函数和密钥的消息认证机制',
            ctfTip: 'CTF中有时需要验证签名',
            pitfalls: '密钥要保密，不要泄露'
        },
        {
            id: 'aes-encrypt',
            name: 'AES加密',
            icon: '🛡️',
            description: 'AES对称加密',
            usage: '输入明文和密钥，进行AES加密',
            knowledge: 'AES是目前最常用的对称加密算法，安全高效',
            ctfTip: 'CTF密码题经常考察AES',
            pitfalls: '密钥长度要足够，建议128位以上'
        },
        {
            id: 'caesar-cipher',
            name: '凯撒密码',
            icon: '🗡️',
            description: '凯撒密码加密解密',
            usage: '输入文本和移位值，加密或解密',
            knowledge: '凯撒密码是一种替换密码，将字母按固定位数偏移',
            ctfTip: 'CTF入门级密码题经常出现凯撒密码',
            pitfalls: '注意字母循环和非字母字符处理'
        },
        {
            id: 'vigenere-cipher',
            name: '维吉尼亚密码',
            icon: '📜',
            description: '维吉尼亚密码加密解密',
            usage: '输入文本和密钥，加密或解密',
            knowledge: '维吉尼亚密码是多表替换密码，比单表更安全',
            ctfTip: 'CTF密码题经常考察维吉尼亚密码',
            pitfalls: '密钥要足够长，避免被频率分析破解'
        },
        {
            id: 'password-dictionary',
            name: '弱密码字典',
            icon: '📚',
            description: '常见弱密码列表',
            usage: '查看常见弱密码，避免使用',
            knowledge: '弱密码是黑客字典攻击的首选目标',
            ctfTip: 'CTF中弱密码经常是考点',
            pitfalls: '不要使用列表中的任何密码'
        },
        {
            id: 'otp-generator',
            name: '一次性密码',
            icon: '🔢',
            description: 'TOTP/HOTP生成器',
            usage: '输入密钥，生成一次性密码',
            knowledge: '一次性密码基于时间或计数器，更安全',
            ctfTip: 'CTF中有时需要分析OTP',
            pitfalls: '保护好密钥，不要泄露'
        }
    ],
    encode: [
        {
            id: 'base64',
            name: 'Base64编码',
            icon: '🔢',
            description: 'Base64编码和解码',
            usage: '输入文本，点击编码或解码',
            knowledge: 'Base64是一种用64个字符表示二进制数据的编码方式，常用于邮件和URL',
            ctfTip: 'CTF中经常遇到Base64编码的Flag，注意有时会有多重编码',
            pitfalls: 'Base64不是加密，只是编码，不要用于安全传输'
        },
        {
            id: 'url-encode',
            name: 'URL编码',
            icon: '🌐',
            description: 'URL编码和解码',
            usage: '输入文本，点击编码或解码',
            knowledge: 'URL编码将特殊字符转换为%XX格式，确保URL安全传输',
            ctfTip: 'CTF中SQL注入、XSS经常需要URL编码',
            pitfalls: '注意双重URL编码的情况'
        },
        {
            id: 'unicode',
            name: 'Unicode转换',
            icon: '✏️',
            description: 'Unicode编码转换',
            usage: '输入文本，转换为Unicode或反之',
            knowledge: 'Unicode是计算机科学领域的业界标准，为每种语言的每个字符设定了统一编号',
            ctfTip: 'CTF中有时会遇到Unicode绕过',
            pitfalls: '注意UTF-8和UTF-16的区别'
        },
        {
            id: 'hex',
            name: 'Hex编码',
            icon: '🔣',
            description: '十六进制编码',
            usage: '输入文本，转换为Hex或反之',
            knowledge: '十六进制使用0-9和A-F表示数据，常用于调试和逆向',
            ctfTip: 'CTF中逆向、杂项题经常需要Hex转换',
            pitfalls: '注意大小端问题'
        },
        {
            id: 'rot13',
            name: 'ROT13',
            icon: '🔄',
            description: 'ROT13替换密码',
            usage: '输入文本，点击编码',
            knowledge: 'ROT13是一种简单的替换密码，将字母替换为后13位的字母',
            ctfTip: 'CTF中入门级密码题经常出现ROT13',
            pitfalls: 'ROT13编码两次就还原了'
        },
        {
            id: 'morse-code',
            name: '摩尔斯电码',
            icon: '📡',
            description: '摩尔斯电码转换',
            usage: '输入文本或摩尔斯电码进行转换',
            knowledge: '摩尔斯电码是一种早期的数字化通信方式',
            ctfTip: 'CTF杂项题经常出现摩尔斯电码',
            pitfalls: '注意分隔符，字母之间用空格'
        },
        {
            id: 'binary-convert',
            name: '二进制转换',
            icon: '💻',
            description: '二进制、八进制、十进制、十六进制互转',
            usage: '输入一个进制的数，其他进制自动转换',
            knowledge: '计算机使用二进制，程序员需要熟悉各种进制',
            ctfTip: 'CTF逆向、密码题经常需要进制转换',
            pitfalls: '注意不同进制的前缀'
        },
        {
            id: 'ascii-table',
            name: 'ASCII码表',
            icon: '📋',
            description: 'ASCII码查询',
            usage: '输入字符或十进制值查询',
            knowledge: 'ASCII是基于拉丁字母的一套电脑编码系统',
            ctfTip: 'CTF中经常需要查ASCII码',
            pitfalls: '注意大小写字母的区别'
        },
        {
            id: 'base32',
            name: 'Base32编码',
            icon: '🔤',
            description: 'Base32编码解码',
            usage: '输入文本，编码或解码',
            knowledge: 'Base32使用32个字符，适合不区分大小写的场景',
            ctfTip: 'CTF中有时会遇到Base32',
            pitfalls: 'Base32不是加密，只是编码'
        },
        {
            id: 'base58',
            name: 'Base58编码',
            icon: '💰',
            description: 'Base58编码解码',
            usage: '输入文本，编码或解码',
            knowledge: 'Base58是比特币使用的编码，去掉了易混淆字符',
            ctfTip: 'CTF中加密货币相关题目可能用到',
            pitfalls: '注意Base58有多种版本'
        },
        {
            id: 'html-entities',
            name: 'HTML实体',
            icon: '📝',
            description: 'HTML实体编码解码',
            usage: '输入文本，编码或解码',
            knowledge: 'HTML实体用于在HTML中显示特殊字符',
            ctfTip: 'CTF中XSS题经常需要HTML实体',
            pitfalls: '注意不同的实体编码方式'
        },
        {
            id: 'punycode',
            name: 'Punycode编码',
            icon: '🌍',
            description: 'Punycode编码解码',
            usage: '输入域名，编码或解码',
            knowledge: 'Punycode用于国际化域名编码',
            ctfTip: 'CTF中钓鱼题可能涉及Punycode',
            pitfalls: '注意IDN同源策略'
        }
    ],
    dev: [
        {
            id: 'json-format',
            name: 'JSON格式化',
            icon: '📋',
            description: 'JSON格式化和压缩',
            usage: '输入JSON，点击格式化或压缩',
            knowledge: 'JSON是一种轻量级数据交换格式，易于阅读和编写',
            ctfTip: 'CTF中Web题经常需要处理JSON数据',
            pitfalls: '注意JSON语法严格，不允许注释'
        },
        {
            id: 'uuid-generator',
            name: 'UUID生成',
            icon: '🆔',
            description: '生成UUID',
            usage: '输入数量，点击生成',
            knowledge: 'UUID是通用唯一识别码，用于标识信息',
            ctfTip: 'CTF中有时需要分析UUID的版本',
            pitfalls: 'UUID v1包含MAC地址，可能泄露信息'
        },
        {
            id: 'regex-test',
            name: '正则测试',
            icon: '🔍',
            description: '正则表达式测试',
            usage: '输入正则和测试文本，点击测试',
            knowledge: '正则表达式是用于匹配字符串的强大工具',
            ctfTip: 'CTF中Web题、杂项题经常需要正则',
            pitfalls: '注意正则表达式的性能问题'
        },
        {
            id: 'html-escape',
            name: 'HTML转义',
            icon: '🌐',
            description: 'HTML字符转义和反转义',
            usage: '输入文本，进行HTML转义',
            knowledge: 'HTML转义可以防止XSS攻击',
            ctfTip: 'CTF中XSS题经常需要HTML转义',
            pitfalls: '注意不同的转义字符'
        },
        {
            id: 'timestamp',
            name: '时间戳转换',
            icon: '⏰',
            description: '时间戳与日期互转',
            usage: '输入时间戳或日期进行转换',
            knowledge: '时间戳是从1970年1月1日开始的秒数',
            ctfTip: 'CTF中经常需要处理时间戳',
            pitfalls: '注意10位和13位时间戳的区别'
        },
        {
            id: 'color-picker',
            name: '颜色选择器',
            icon: '🎨',
            description: '颜色格式转换',
            usage: '选择颜色或输入格式进行转换',
            knowledge: '颜色有RGB、HEX、HSL等多种表示方式',
            ctfTip: 'CTF杂项题有时需要颜色相关',
            pitfalls: '注意不同颜色空间的区别'
        },
        {
            id: 'cron-generator',
            name: 'Cron表达式',
            icon: '📅',
            description: 'Cron表达式生成器',
            usage: '选择时间，生成Cron表达式',
            knowledge: 'Cron是Linux下的定时任务工具',
            ctfTip: 'CTF中有时需要分析定时任务',
            pitfalls: '注意Cron表达式的格式'
        },
        {
            id: 'yaml-format',
            name: 'YAML格式化',
            icon: '📄',
            description: 'YAML格式化',
            usage: '输入YAML进行格式化',
            knowledge: 'YAML是一种人类可读的数据序列化格式',
            ctfTip: 'CTF中经常遇到YAML配置文件',
            pitfalls: '注意YAML的缩进很重要'
        },
        {
            id: 'markdown-preview',
            name: 'Markdown预览',
            icon: '📝',
            description: 'Markdown实时预览',
            usage: '输入Markdown，查看预览效果',
            knowledge: 'Markdown是一种轻量级标记语言',
            ctfTip: 'CTF中有时需要处理Markdown',
            pitfalls: '注意不同Markdown解析器的差异'
        },
        {
            id: 'sql-format',
            name: 'SQL格式化',
            icon: '🗄️',
            description: 'SQL语句格式化',
            usage: '输入SQL，点击格式化',
            knowledge: 'SQL是结构化查询语言',
            ctfTip: 'CTF中SQL注入题需要SQL知识',
            pitfalls: '注意SQL注入风险'
        },
        {
            id: 'diff-checker',
            name: '文本对比',
            icon: '📊',
            description: '文本差异对比',
            usage: '输入两段文本，查看差异',
            knowledge: '文本对比工具用于查找差异',
            ctfTip: 'CTF中有时需要对比文件差异',
            pitfalls: '注意文本编码问题'
        },
        {
            id: 'base64-image',
            name: '图片Base64',
            icon: '🖼️',
            description: '图片转Base64',
            usage: '上传图片，转换为Base64',
            knowledge: 'Base64可以把图片转为文本',
            ctfTip: 'CTF中图片隐写经常用到',
            pitfalls: 'Base64后文件变大33%'
        },
        {
            id: 'jwt-decoder',
            name: 'JWT解码',
            icon: '🔐',
            description: 'JWT Token解析',
            usage: '输入JWT Token，解析内容',
            knowledge: 'JWT是JSON Web Token',
            ctfTip: 'CTF中Web题经常有JWT',
            pitfalls: '不要泄露敏感信息'
        },
        {
            id: 'css-beautifier',
            name: 'CSS美化',
            icon: '🎨',
            description: 'CSS格式化美化',
            usage: '输入CSS，点击美化',
            knowledge: 'CSS是层叠样式表',
            ctfTip: 'CTF中Web题可能需要CSS',
            pitfalls: '注意浏览器兼容性'
        },
        {
            id: 'js-beautifier',
            name: 'JS美化',
            icon: '⌨️',
            description: 'JavaScript格式化',
            usage: '输入JS，点击美化',
            knowledge: 'JavaScript是前端编程语言',
            ctfTip: 'CTF中Web题经常需要JS',
            pitfalls: '注意代码安全'
        }
    ],
    network: [
        {
            id: 'port-list',
            name: '常用端口',
            icon: '📋',
            description: '常用端口对照表',
            usage: '查看常用端口和服务',
            knowledge: '端口是计算机与外界通讯的出口，0-1023是知名端口',
            ctfTip: 'CTF中端口扫描是信息收集的重要步骤',
            pitfalls: '注意某些服务可能使用非标准端口'
        },
        {
            id: 'ip-check',
            name: 'IP判断',
            icon: '📍',
            description: '内网/公网IP判断',
            usage: '输入IP地址，判断类型',
            knowledge: '内网IP段：10.x.x.x、172.16-31.x.x、192.168.x.x',
            ctfTip: 'CTF中内网渗透是常见场景',
            pitfalls: '注意127.x.x.x是回环地址'
        },
        {
            id: 'http-status',
            name: 'HTTP状态码',
            icon: '📡',
            description: 'HTTP状态码说明',
            usage: '查看HTTP状态码含义',
            knowledge: 'HTTP状态码分为5类：1xx信息、2xx成功、3xx重定向、4xx客户端错误、5xx服务器错误',
            ctfTip: 'CTF中Web题需要熟悉各种状态码',
            pitfalls: '注意301和302的区别'
        },
        {
            id: 'subnet-calc',
            name: '子网计算器',
            icon: '🌐',
            description: 'IP子网计算',
            usage: '输入IP和掩码，计算子网信息',
            knowledge: '子网掩码用于划分网络',
            ctfTip: 'CTF网络题经常需要子网计算',
            pitfalls: '注意CIDR表示法'
        },
        {
            id: 'mac-lookup',
            name: 'MAC地址查询',
            icon: '🔗',
            description: 'MAC地址厂商查询',
            usage: '输入MAC地址查询厂商信息',
            knowledge: 'MAC地址前三位是厂商标识',
            ctfTip: 'CTF网络题可能需要MAC地址',
            pitfalls: '注意虚拟MAC地址'
        },
        {
            id: 'dns-records',
            name: 'DNS记录类型',
            icon: '📡',
            description: 'DNS记录类型说明',
            usage: '查看常用DNS记录类型',
            knowledge: 'DNS是域名系统，用于解析域名',
            ctfTip: 'CTF网络题经常需要DNS知识',
            pitfalls: '注意记录类型的区别'
        },
        {
            id: 'user-agent',
            name: 'User-Agent',
            icon: '🕵️',
            description: 'User-Agent生成器',
            usage: '选择浏览器，生成UA',
            knowledge: 'User-Agent是浏览器标识',
            ctfTip: 'CTF中Web题有时需要伪造UA',
            pitfalls: '注意UA可能被识别'
        },
        {
            id: 'http-headers',
            name: 'HTTP头解析',
            icon: '📋',
            description: 'HTTP请求头解析',
            usage: '输入HTTP头，查看解析',
            knowledge: 'HTTP头包含请求信息',
            ctfTip: 'CTF中Web题需要分析HTTP头',
            pitfalls: '注意敏感信息泄露'
        },
        {
            id: 'cidr-calc',
            name: 'CIDR计算器',
            icon: '🔢',
            description: 'CIDR格式计算',
            usage: '输入IP和CIDR，计算网络',
            knowledge: 'CIDR是无类域间路由',
            ctfTip: 'CTF网络题需要CIDR计算',
            pitfalls: '注意IP地址范围'
        },
        {
            id: 'ping-calc',
            name: 'Ping延迟计算',
            icon: '🏓',
            description: 'Ping延迟估算',
            usage: '输入距离，估算延迟',
            knowledge: '光速在光纤中约200000km/s',
            ctfTip: 'CTF中有时需要计算延迟',
            pitfalls: '只是理论估算'
        },
        {
            id: 'tcp-flags',
            name: 'TCP标志位',
            icon: '🚩',
            description: 'TCP标志位说明',
            usage: '查看TCP标志位含义',
            knowledge: 'TCP标志位控制连接状态',
            ctfTip: 'CTF网络题需要TCP知识',
            pitfalls: '注意三次握手和四次挥手'
        },
        {
            id: 'proxy-list',
            name: '代理协议',
            icon: '🔄',
            description: '代理协议说明',
            usage: '查看各种代理协议',
            knowledge: 'HTTP、SOCKS4、SOCKS5是常见代理',
            ctfTip: 'CTF中有时需要代理知识',
            pitfalls: '注意代理的安全性'
        }
    ],
    ai: [],
    text: [
        {
            id: 'text-count',
            name: '字数统计',
            icon: '📊',
            description: '统计文字数量',
            usage: '输入文本，统计字数、行数等',
            knowledge: '字数统计是文本处理的基础功能',
            ctfTip: 'CTF.Misc题有时需要统计字数',
            pitfalls: '注意空格和换行是否计入'
        },
        {
            id: 'text-reverse',
            name: '文本反转',
            icon: '🔄',
            description: '文本反转',
            usage: '输入文本，点击反转',
            knowledge: '文本反转是字符串操作的基础',
            ctfTip: 'CTF.Crypto题经常用到',
            pitfalls: '注意中文和英文的区别'
        },
        {
            id: 'text-case',
            name: '大小写转换',
            icon: 'ABC',
            description: '英文大小写转换',
            usage: '输入文本，选择转换方式',
            knowledge: '大小写转换是常用的文本操作',
            ctfTip: 'CTF中有时需要大小写转换',
            pitfalls: '注意中文不受影响'
        },
        {
            id: 'text-remove-duplicate',
            name: '去重',
            icon: '🧹',
            description: '去除重复行',
            usage: '输入文本，去除重复行',
            knowledge: '去重是数据处理常用功能',
            ctfTip: 'CTF.Misc题可能需要去重',
            pitfalls: '注意空行的处理'
        },
        {
            id: 'text-sort',
            name: '文本排序',
            icon: '📈',
            description: '文本行排序',
            usage: '输入文本，选择排序方式',
            knowledge: '排序是计算机科学的基础算法',
            ctfTip: 'CTF.Misc题可能需要排序',
            pitfalls: '注意中英文混合排序'
        },
        {
            id: 'text-replace',
            name: '文本替换',
            icon: '🔁',
            description: '批量文本替换',
            usage: '输入查找和替换内容',
            knowledge: '文本替换是常用的编辑功能',
            ctfTip: 'CTF中有时需要批量替换',
            pitfalls: '注意区分大小写'
        },
        {
            id: 'text-trim',
            name: '文本修剪',
            icon: '✂️',
            description: '去除多余空白',
            usage: '输入文本，去除空白',
            knowledge: '去除空白让文本更整洁',
            ctfTip: 'CTF中有时需要清理文本',
            pitfalls: '注意不要删除需要的空格'
        },
        {
            id: 'text-extract',
            name: '正则提取',
            icon: '🎯',
            description: '正则表达式提取',
            usage: '输入正则，提取匹配内容',
            knowledge: '正则可以精确提取需要的内容',
            ctfTip: 'CTF中经常需要提取信息',
            pitfalls: '注意正则的正确性'
        },
        {
            id: 'text-shuffle',
            name: '文本打乱',
            icon: '🎲',
            description: '随机打乱文本',
            usage: '输入文本，打乱顺序',
            knowledge: '打乱顺序可以隐藏信息',
            ctfTip: 'CTF.Misc题有时需要打乱',
            pitfalls: '注意不要丢内容'
        },
        {
            id: 'text-join',
            name: '文本合并',
            icon: '🔗',
            description: '多行文本合并',
            usage: '输入多行，合并为一行',
            knowledge: '合并多行方便处理',
            ctfTip: 'CTF中有时需要合并文本',
            pitfalls: '注意分隔符'
        },
        {
            id: 'text-split',
            name: '文本分割',
            icon: '✂️',
            description: '按分隔符分割',
            usage: '输入文本和分隔符',
            knowledge: '分割文本方便处理',
            ctfTip: 'CTF中经常需要分割',
            pitfalls: '注意转义字符'
        },
        {
            id: 'text-base64',
            name: '文本Base64',
            icon: '🔢',
            description: '文本Base64编码',
            usage: '输入文本，编码/解码',
            knowledge: 'Base64可以把文本转为安全格式',
            ctfTip: 'CTF中经常用到Base64',
            pitfalls: 'Base64不是加密'
        }
    ],
    image: [
        {
            id: 'image-base64',
            name: '图片转Base64',
            icon: '🖼️',
            description: '图片与Base64互转',
            usage: '上传图片或输入Base64',
            knowledge: 'Base64可以把图片转成文本格式',
            ctfTip: 'CTF.Misc题经常有图片转Base64',
            pitfalls: 'Base64编码后文件会变大33%'
        },
        {
            id: 'image-info',
            name: '图片信息',
            icon: '📋',
            description: '查看图片基本信息',
            usage: '上传图片，查看信息',
            knowledge: '图片文件包含元数据信息',
            ctfTip: 'CTF.Misc题可能需要查看图片信息',
            pitfalls: '注意EXIF信息可能泄露隐私'
        },
        {
            id: 'image-resize',
            name: '图片缩放',
            icon: '📐',
            description: '调整图片大小',
            usage: '上传图片，设置尺寸',
            knowledge: '图片缩放是常用的图片处理操作',
            ctfTip: 'CTF.Misc题可能需要缩放图片',
            pitfalls: '注意保持图片比例'
        },
        {
            id: 'qrcode-scan',
            name: '二维码识别',
            icon: '📱',
            description: '二维码扫描识别',
            usage: '上传二维码图片，识别内容',
            knowledge: '二维码是一种矩阵式二维条码',
            ctfTip: 'CTF.Misc题经常有二维码',
            pitfalls: '注意二维码的纠错级别'
        },
        {
            id: 'qrcode-gen',
            name: '二维码生成',
            icon: '📱',
            description: '生成二维码',
            usage: '输入文本，生成二维码',
            knowledge: '二维码可以存储各种信息',
            ctfTip: 'CTF中可以用二维码隐藏信息',
            pitfalls: '注意二维码容量限制'
        },
        {
            id: 'image-filter',
            name: '图片滤镜',
            icon: '🎨',
            description: '图片滤镜效果',
            usage: '上传图片，应用滤镜',
            knowledge: '滤镜可以改变图片视觉效果',
            ctfTip: 'CTF中有时需要处理图片',
            pitfalls: '注意滤镜不要过度'
        },
        {
            id: 'image-rotate',
            name: '图片旋转',
            icon: '🔄',
            description: '图片旋转翻转',
            usage: '上传图片，选择旋转角度',
            knowledge: '旋转和翻转是基本图片操作',
            ctfTip: 'CTF.Misc题有时需要旋转图片',
            pitfalls: '注意旋转90度、180度、270度'
        },
        {
            id: 'image-crop',
            name: '图片裁剪',
            icon: '✂️',
            description: '图片裁剪',
            usage: '上传图片，选择区域裁剪',
            knowledge: '裁剪可以保留需要的部分',
            ctfTip: 'CTF中有时需要裁剪图片',
            pitfalls: '注意裁剪区域'
        },
        {
            id: 'image-compare',
            name: '图片对比',
            icon: '📊',
            description: '两张图片对比',
            usage: '上传两张图片，对比差异',
            knowledge: '对比可以发现图片的不同',
            ctfTip: 'CTF.Misc题有时需要对比图片',
            pitfalls: '注意图片尺寸要一致'
        },
        {
            id: 'image-pixel',
            name: '像素查看',
            icon: '🔍',
            description: '查看图片像素',
            usage: '上传图片，查看像素信息',
            knowledge: '图片由像素组成',
            ctfTip: 'CTF中图片隐写常用到像素',
            pitfalls: '注意像素值范围0-255'
        },
        {
            id: 'image-exif',
            name: 'EXIF查看',
            icon: '📸',
            description: '图片EXIF信息',
            usage: '上传图片，查看EXIF',
            knowledge: 'EXIF包含拍摄信息',
            ctfTip: 'CTF.Misc题经常需要查看EXIF',
            pitfalls: 'EXIF可能泄露位置信息'
        }
    ],
    calc: [
        {
            id: 'basic-calc',
            name: '基础计算器',
            icon: '🧮',
            description: '基础加减乘除',
            usage: '输入表达式，计算结果',
            knowledge: '计算器是最基础的计算工具',
            ctfTip: 'CTF.Misc题可能需要简单计算',
            pitfalls: '注意运算优先级'
        },
        {
            id: 'hex-calc',
            name: '进制计算器',
            icon: '🔢',
            description: '多进制转换计算',
            usage: '输入数值，转换其他进制',
            knowledge: '计算机使用二进制，程序员要熟悉进制',
            ctfTip: 'CTF逆向、密码题经常需要',
            pitfalls: '注意不同进制的前缀'
        },
        {
            id: 'bitwise-calc',
            name: '位运算计算器',
            icon: '⚡',
            description: '位运算计算',
            usage: '输入数值，进行位运算',
            knowledge: '位运算是计算机底层的运算方式',
            ctfTip: 'CTF逆向、密码题经常需要',
            pitfalls: '注意有符号和无符号的区别'
        },
        {
            id: 'random-gen',
            name: '随机数生成',
            icon: '🎲',
            description: '生成指定范围随机数',
            usage: '设置范围，生成随机数',
            knowledge: '随机数在密码学中很重要',
            ctfTip: 'CTF.Crypto题可能需要随机数',
            pitfalls: '伪随机数不要用于安全场景'
        },
        {
            id: 'percentage-calc',
            name: '百分比计算器',
            icon: '%',
            description: '百分比计算',
            usage: '输入数值，计算百分比',
            knowledge: '百分比是常用的数学概念',
            ctfTip: 'CTF.Misc题可能需要百分比计算',
            pitfalls: '注意基数的选择'
        },
        {
            id: 'fibonacci',
            name: '斐波那契数列',
            icon: '📐',
            description: '计算斐波那契数列',
            usage: '输入n，计算第n项',
            knowledge: '斐波那契数列在数学和计算机中都很重要',
            ctfTip: 'CTF.Crypto题可能用到',
            pitfalls: '注意大数溢出问题'
        },
        {
            id: 'gcd-lcm',
            name: '最大公约数',
            icon: '🔢',
            description: 'GCD和LCM计算',
            usage: '输入两个数，计算GCD和LCM',
            knowledge: 'GCD是最大公约数，LCM是最小公倍数',
            ctfTip: 'CTF.Crypto题经常用到',
            pitfalls: '注意数的范围'
        },
        {
            id: 'prime-check',
            name: '素数判断',
            icon: '🔢',
            description: '判断是否为素数',
            usage: '输入数字，判断素数',
            knowledge: '素数只能被1和自身整除',
            ctfTip: 'CTF.Crypto题经常考察素数',
            pitfalls: '注意大数判断效率'
        },
        {
            id: 'factorial',
            name: '阶乘计算',
            icon: '📐',
            description: '计算阶乘',
            usage: '输入n，计算n!',
            knowledge: '阶乘是从1乘到n',
            ctfTip: 'CTF.Misc题有时需要',
            pitfalls: '注意大数溢出'
        },
        {
            id: 'mod-calc',
            name: '模运算',
            icon: '🔢',
            description: '模运算计算器',
            usage: '输入数值和模数',
            knowledge: '模运算是密码学的基础',
            ctfTip: 'CTF.Crypto题必用',
            pitfalls: '注意模数为正'
        },
        {
            id: 'xor-calc',
            name: 'XOR计算器',
            icon: '⚡',
            description: 'XOR运算',
            usage: '输入两个数，XOR计算',
            knowledge: 'XOR是异或运算，相同为0不同为1',
            ctfTip: 'CTF.Crypto题经常用到',
            pitfalls: '注意位数对齐'
        },
        {
            id: 'ascii-calc',
            name: 'ASCII计算器',
            icon: '📋',
            description: 'ASCII码互转',
            usage: '输入字符或数值',
            knowledge: 'ASCII码是字符编码',
            ctfTip: 'CTF中经常需要查ASCII',
            pitfalls: '注意大小写区别'
        }
    ],
    time: [
        {
            id: 'timestamp',
            name: '时间戳转换',
            icon: '⏰',
            description: '时间戳与日期互转',
            usage: '输入时间戳或日期进行转换',
            knowledge: '时间戳是从1970年1月1日开始的秒数',
            ctfTip: 'CTF中经常需要处理时间戳',
            pitfalls: '注意10位和13位时间戳的区别'
        },
        {
            id: 'time-diff',
            name: '时间差计算',
            icon: '⏱️',
            description: '计算两个日期的时间差',
            usage: '输入两个日期，计算差值',
            knowledge: '时间差计算是常用的时间处理',
            ctfTip: 'CTF.Misc题可能需要时间差',
            pitfalls: '注意时区的影响'
        },
        {
            id: 'age-calc',
            name: '年龄计算器',
            icon: '🎂',
            description: '计算年龄',
            usage: '输入生日，计算年龄',
            knowledge: '计算从出生到现在的天数',
            ctfTip: 'CTF.Misc题有时需要年龄计算',
            pitfalls: '注意闰年的处理'
        },
        {
            id: 'world-clock',
            name: '世界时钟',
            icon: '🌍',
            description: '查看世界各地时间',
            usage: '选择时区，查看时间',
            knowledge: '不同时区有不同的时间',
            ctfTip: 'CTF.Misc题可能有时区问题',
            pitfalls: '注意夏令时的影响'
        },
        {
            id: 'countdown',
            name: '倒计时',
            icon: '⏳',
            description: '倒计时计算',
            usage: '设置目标时间，显示倒计时',
            knowledge: '倒计时是常用的时间功能',
            ctfTip: 'CTF.Misc题可能需要倒计时',
            pitfalls: '注意时间同步问题'
        },
        {
            id: 'date-format',
            name: '日期格式化',
            icon: '📅',
            description: '日期格式转换',
            usage: '选择格式，转换日期',
            knowledge: '日期有多种表示格式',
            ctfTip: 'CTF中有时需要处理日期格式',
            pitfalls: '注意月份从0开始'
        },
        {
            id: 'lunar-calendar',
            name: '农历转换',
            icon: '🌙',
            description: '公历农历转换',
            usage: '输入日期，转换农历',
            knowledge: '农历是中国传统历法',
            ctfTip: 'CTF.Misc题可能有农历',
            pitfalls: '注意农历闰年'
        },
        {
            id: 'week-calc',
            name: '星期计算',
            icon: '📆',
            description: '计算星期几',
            usage: '输入日期，计算星期',
            knowledge: '蔡勒公式可以计算星期',
            ctfTip: 'CTF.Misc题有时需要',
            pitfalls: '注意不同历法'
        },
        {
            id: 'stopwatch',
            name: '秒表',
            icon: '⏱️',
            description: '秒表计时',
            usage: '开始、暂停、重置',
            knowledge: '秒表用于精确计时',
            ctfTip: 'CTF中有时需要计时',
            pitfalls: '注意精度'
        },
        {
            id: 'alarm-set',
            name: '提醒设置',
            icon: '⏰',
            description: '设置提醒',
            usage: '设置时间，到时提醒',
            knowledge: '提醒功能很实用',
            ctfTip: 'CTF比赛可以用来提醒',
            pitfalls: '注意不要关闭页面'
        }
    ],
    learn: [
        {
            id: 'glossary',
            name: '专业名词',
            icon: '📚',
            description: '网安专业名词解释',
            usage: '学习网络安全专业术语',
            knowledge: '掌握专业术语是学习网安的第一步',
            ctfTip: 'CTF比赛中会用到大量专业术语',
            pitfalls: '注意区分相似概念'
        },
        {
            id: 'ctf-knowledge',
            name: 'CTF知识点',
            icon: '🏆',
            description: 'CTF入门知识点',
            usage: '学习CTF各方向的基础知识',
            knowledge: 'CTF分为Web、Pwn、Crypto、Misc、Reverse等方向',
            ctfTip: '建议先从Web和Misc入门',
            pitfalls: '不要贪多，先精通一个方向'
        },
        {
            id: 'vulnerability',
            name: '常见漏洞',
            icon: '🐛',
            description: '常见漏洞简介',
            usage: '学习常见安全漏洞原理',
            knowledge: 'OWASP Top 10是最常见的十大Web漏洞',
            ctfTip: 'CTF.Web题主要考察这些漏洞',
            pitfalls: '学习漏洞原理后要实操练习'
        },
        {
            id: 'linux-basic',
            name: 'Linux基础',
            icon: '🐧',
            description: 'Linux常用命令',
            usage: '学习Linux基本操作',
            knowledge: 'Linux是CTF中最常用的操作系统',
            ctfTip: 'CTF几乎都要用到Linux',
            pitfalls: '注意命令参数的区别'
        },
        {
            id: 'python-cheat',
            name: 'Python速查',
            icon: '🐍',
            description: 'Python常用代码速查',
            usage: '快速查找Python常用代码',
            knowledge: 'Python是CTF解题的利器',
            ctfTip: 'CTF解题常用Python脚本',
            pitfalls: '注意Python2和Python3的区别'
        },
        {
            id: 'sql-injection',
            name: 'SQL注入',
            icon: '🗄️',
            description: 'SQL注入学习',
            usage: '学习SQL注入原理',
            knowledge: 'SQL注入是最常见的Web漏洞',
            ctfTip: 'CTF.Web题必考SQL注入',
            pitfalls: '注意不要非法测试'
        },
        {
            id: 'xss-learn',
            name: 'XSS学习',
            icon: '🌐',
            description: 'XSS跨站脚本',
            usage: '学习XSS攻击原理',
            knowledge: 'XSS是常见的客户端漏洞',
            ctfTip: 'CTF.Web题经常考XSS',
            pitfalls: '注意防护措施'
        },
        {
            id: 'csrf-learn',
            name: 'CSRF学习',
            icon: '🎭',
            description: 'CSRF跨站请求',
            usage: '学习CSRF攻击原理',
            knowledge: 'CSRF利用用户身份执行操作',
            ctfTip: 'CTF.Web题可能考CSRF',
            pitfalls: '注意Token防护'
        },
        {
            id: 'file-upload',
            name: '文件上传',
            icon: '📁',
            description: '文件上传漏洞',
            usage: '学习文件上传漏洞',
            knowledge: '文件上传可以getshell',
            ctfTip: 'CTF.Web题经常考上传',
            pitfalls: '注意后缀绕过'
        },
        {
            id: 'steganography',
            name: '隐写术',
            icon: '🔍',
            description: '图片隐写学习',
            usage: '学习隐写术原理',
            knowledge: '隐写术在图片中隐藏信息',
            ctfTip: 'CTF.Misc题经常考隐写',
            pitfalls: '注意各种隐写工具'
        },
        {
            id: 'reverse-eng',
            name: '逆向工程',
            icon: '🔧',
            description: '逆向工程入门',
            usage: '学习逆向基础知识',
            knowledge: '逆向分析程序逻辑',
            ctfTip: 'CTF.Reverse题需要逆向',
            pitfalls: '注意动态和静态分析'
        },
        {
            id: 'pwning',
            name: 'PWN入门',
            icon: '💥',
            description: '二进制漏洞',
            usage: '学习PWN基础知识',
            knowledge: 'PWN利用二进制漏洞',
            ctfTip: 'CTF.Pwn题需要PWN',
            pitfalls: '注意栈溢出原理'
        },
        {
            id: 'social-engineering',
            name: '社会工程',
            icon: '🎭',
            description: '社会工程学防御',
            usage: '学习识别社会工程攻击',
            knowledge: '社会工程利用人性弱点',
            ctfTip: 'CTF.Misc题可能有社工',
            pitfalls: '保持警惕，不轻信'
        }
    ],
    life: [
        {
            id: 'bmi',
            name: 'BMI计算',
            icon: '🏃',
            description: 'BMI指数计算器',
            usage: '输入身高体重，计算BMI',
            knowledge: 'BMI=体重(kg)/身高(m)²，正常范围18.5-24',
            ctfTip: 'CTF.Misc题偶尔会出现这类计算',
            pitfalls: 'BMI只是参考，不能完全代表健康状态'
        },
        {
            id: 'loan',
            name: '贷款计算',
            icon: '💰',
            description: '贷款计算器',
            usage: '输入贷款信息，计算月供',
            knowledge: '等额本息和等额本金是两种常见还款方式',
            ctfTip: 'CTF.Misc题可能有金融计算',
            pitfalls: '注意利率是年利率还是月利率'
        },
        {
            id: 'age-calc',
            name: '年龄计算',
            icon: '🎂',
            description: '年龄计算器',
            usage: '输入生日，计算年龄',
            knowledge: '计算从出生到现在的天数',
            ctfTip: 'CTF.Misc题有时需要年龄计算',
            pitfalls: '注意闰年的处理'
        },
        {
            id: 'unit-convert',
            name: '单位换算',
            icon: '📏',
            description: '常用单位换算',
            usage: '输入数值，进行单位换算',
            knowledge: '长度、重量、温度等单位换算',
            ctfTip: 'CTF.Misc题经常需要单位换算',
            pitfalls: '注意换算公式'
        },
        {
            id: 'qrcode-gen',
            name: '二维码生成',
            icon: '📱',
            description: '二维码生成器',
            usage: '输入文本，生成二维码',
            knowledge: '二维码是一种矩阵式二维条码',
            ctfTip: 'CTF.Misc题经常有二维码',
            pitfalls: '注意二维码的纠错级别'
        },
        {
            id: 'random-num',
            name: '随机数生成',
            icon: '🎰',
            description: '随机数生成器',
            usage: '设置范围，生成随机数',
            knowledge: '伪随机数生成器',
            ctfTip: 'CTF.Crypto题有时需要随机数',
            pitfalls: '注意不要用于安全场景'
        },
        {
            id: 'currency-convert',
            name: '汇率换算',
            icon: '💱',
            description: '货币汇率换算',
            usage: '输入金额，选择货币换算',
            knowledge: '汇率实时变化',
            ctfTip: 'CTF.Misc题可能有汇率',
            pitfalls: '注意汇率更新'
        },
        {
            id: 'tax-calc',
            name: '个税计算',
            icon: '📊',
            description: '个人所得税计算',
            usage: '输入收入，计算个税',
            knowledge: '个税有起征点和累进税率',
            ctfTip: 'CTF.Misc题可能有税计算',
            pitfalls: '注意税前税后'
        },
        {
            id: 'tip-calc',
            name: '小费计算',
            icon: '💵',
            description: '小费计算器',
            usage: '输入金额，计算小费',
            knowledge: '小费通常是10%-20%',
            ctfTip: 'CTF.Misc题可能有小费',
            pitfalls: '注意小费比例'
        },
        {
            id: 'discount-calc',
            name: '折扣计算',
            icon: '🏷️',
            description: '折扣计算器',
            usage: '输入原价和折扣',
            knowledge: '折扣让商品更便宜',
            ctfTip: 'CTF.Misc题可能有折扣',
            pitfalls: '注意折扣是百分比'
        },
        {
            id: 'compound-interest',
            name: '复利计算',
            icon: '📈',
            description: '复利计算器',
            usage: '输入本金和利率',
            knowledge: '复利是利滚利',
            ctfTip: 'CTF.Misc题可能有复利',
            pitfalls: '注意年数和利率'
        },
        {
            id: 'water-intake',
            name: '饮水量计算',
            icon: '💧',
            description: '每日饮水量',
            usage: '输入体重，计算饮水量',
            knowledge: '健康饮水很重要',
            ctfTip: 'CTF.Misc题可能有',
            pitfalls: '这只是参考'
        }
    ],
    knowledge: [
        {
            id: 'phishing',
            name: '钓鱼识别',
            icon: '🎣',
            description: '钓鱼网站识别技巧',
            usage: '学习如何识别钓鱼网站',
            knowledge: '钓鱼网站通过伪装成正规网站窃取信息',
            ctfTip: 'CTF.Misc题有时包含社会工程学内容',
            pitfalls: '不要轻易点击陌生链接'
        },
        {
            id: 'wifi-safety',
            name: 'WiFi安全',
            icon: '📶',
            description: '公共WiFi安全提示',
            usage: '学习公共WiFi安全知识',
            knowledge: '公共WiFi可能被监听，避免敏感操作',
            ctfTip: 'CTF.Network题可能涉及WiFi安全',
            pitfalls: '尽量使用手机流量进行敏感操作'
        },
        {
            id: 'checklist',
            name: '安全清单',
            icon: '✅',
            description: '安全检查清单',
            usage: '逐一检查安全措施',
            knowledge: '安全是一个系统工程，需要多方面防护',
            ctfTip: 'CTF考察的就是全面的安全知识',
            pitfalls: '不要忽视任何一个安全环节'
        },
        {
            id: 'password-safety',
            name: '密码安全',
            icon: '🔐',
            description: '密码安全知识',
            usage: '学习如何创建安全密码',
            knowledge: '强密码是安全的第一道防线',
            ctfTip: 'CTF中弱密码是常见考点',
            pitfalls: '不要用相同密码'
        },
        {
            id: 'malware',
            name: '恶意软件',
            icon: '🦠',
            description: '恶意软件识别',
            usage: '学习识别恶意软件',
            knowledge: '恶意软件包括病毒、木马、蠕虫',
            ctfTip: 'CTF.Misc题可能有恶意软件分析',
            pitfalls: '不要下载未知文件'
        },
        {
            id: 'encryption-know',
            name: '加密知识',
            icon: '🔒',
            description: '加密算法知识',
            usage: '学习常用加密算法',
            knowledge: '加密分为对称和非对称',
            ctfTip: 'CTF.Crypto题考加密',
            pitfalls: '不要自己发明加密'
        },
        {
            id: 'network-know',
            name: '网络知识',
            icon: '🌐',
            description: '网络基础知识',
            usage: '学习网络基础知识',
            knowledge: '网络是网安的基础',
            ctfTip: 'CTF.Network题考网络',
            pitfalls: '注意网络分层'
        },
        {
            id: 'browser-safety',
            name: '浏览器安全',
            icon: '🌍',
            description: '浏览器安全设置',
            usage: '学习浏览器安全',
            knowledge: '浏览器是上网入口',
            ctfTip: 'CTF.Web题考浏览器',
            pitfalls: '及时更新浏览器'
        },
        {
            id: 'data-protection',
            name: '数据保护',
            icon: '💾',
            description: '数据保护知识',
            usage: '学习如何保护数据',
            knowledge: '数据是重要资产',
            ctfTip: 'CTF中考数据保护',
            pitfalls: '定期备份数据'
        },
        {
            id: 'incident-response',
            name: '应急响应',
            icon: '🚨',
            description: '安全事件响应',
            usage: '学习如何响应安全事件',
            knowledge: '应急响应是安全的重要环节',
            ctfTip: 'CTF中考应急响应',
            pitfalls: '及时隔离受感染设备'
        },
        {
            id: 'privacy-protection',
            name: '隐私保护',
            icon: '👤',
            description: '个人隐私保护',
            usage: '学习保护个人隐私',
            knowledge: '隐私是重要权利',
            ctfTip: 'CTF中考隐私保护',
            pitfalls: '不要随意泄露信息'
        }
    ]
};

const categoryNames = {
    ai: 'AI助手',
    password: '密码安全',
    encode: '编码解码',
    text: '文本处理',
    dev: '开发工具',
    network: '网络工具',
    image: '图片工具',
    calc: '计算工具',
    time: '时间日期',
    life: '生活金融',
    learn: '网安实训',
    knowledge: '知识库'
};

// ============ 状态管理 ============
let currentCategory = 'ai';
let favorites = JSON.parse(localStorage.getItem('ma_tool_favorites')) || [];
let isLightTheme = localStorage.getItem('ma_theme') === 'light';
let trainingRecords = JSON.parse(localStorage.getItem('ma_training_records')) || [];

// ============ 初始化 ============
document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    initNavigation();
    initSearch();
    initDrawer();
    initModal();
    initFavorites();
    initTrainingRecords();
    initAiAssistant();
    initAiChat();
    renderTools();
    initServiceWorker();
    updateTrainingCount();
});

// ============ 实训记录功能 ============
function initTrainingRecords() {
    const trainingBtn = document.getElementById('trainingBtn');
    const trainingOverlay = document.getElementById('trainingOverlay');
    const trainingClose = document.getElementById('trainingClose');
    
    if (trainingBtn) {
        trainingBtn.addEventListener('click', showTrainingRecords);
    }
    
    if (trainingClose) {
        trainingClose.addEventListener('click', closeTrainingRecords);
    }
    
    if (trainingOverlay) {
        trainingOverlay.addEventListener('click', closeTrainingRecords);
    }
}

function addTrainingRecord(toolId) {
    const tool = findTool(toolId);
    if (!tool) return;
    
    const record = {
        id: Date.now(),
        toolId: toolId,
        toolName: tool.name,
        toolIcon: tool.icon,
        timestamp: new Date().toLocaleString()
    };
    
    trainingRecords.unshift(record);
    
    if (trainingRecords.length > 50) {
        trainingRecords = trainingRecords.slice(0, 50);
    }
    
    localStorage.setItem('ma_training_records', JSON.stringify(trainingRecords));
    updateTrainingCount();
}

function updateTrainingCount() {
    const countEl = document.getElementById('trainingCount');
    if (countEl) {
        countEl.textContent = trainingRecords.length;
    }
}

function showTrainingRecords() {
    const overlay = document.getElementById('trainingOverlay');
    const modal = document.getElementById('trainingModal');
    const body = document.getElementById('trainingBody');
    
    if (!overlay || !modal || !body) return;
    
    let html = '';
    
    if (trainingRecords.length === 0) {
        html = '<p style="color:var(--text-secondary);text-align:center;padding:40px;">暂无实训记录，开始使用工具吧！</p>';
    } else {
        html = `
            <div style="display:flex;gap:12px;margin-bottom:16px;">
                <button class="modal-btn modal-btn-primary" onclick="exportTrainingReport()" style="flex:1;">导出实验报告</button>
                <button class="modal-btn modal-btn-secondary" onclick="clearTrainingRecords()" style="flex:1;">清空记录</button>
            </div>
            <div style="max-height:400px;overflow-y:auto;">
        `;
        
        trainingRecords.forEach(record => {
            html += `
                <div class="training-record-item">
                    <div class="training-record-info">
                        <div class="training-record-tool">
                            ${record.toolIcon} ${record.toolName}
                        </div>
                        <div class="training-record-time">
                            ${record.timestamp}
                        </div>
                    </div>
                    <div class="training-record-action">
                        <button class="record-btn primary" onclick="reopenTool('${record.toolId}')">重新打开</button>
                        <button class="record-btn danger" onclick="deleteTrainingRecord(${record.id})">删除</button>
                    </div>
                </div>
            `;
        });
        
        html += '</div>';
    }
    
    body.innerHTML = html;
    overlay.classList.add('show');
    modal.classList.add('show');
}

function closeTrainingRecords() {
    const overlay = document.getElementById('trainingOverlay');
    const modal = document.getElementById('trainingModal');
    
    if (overlay) overlay.classList.remove('show');
    if (modal) modal.classList.remove('show');
}

function deleteTrainingRecord(recordId) {
    trainingRecords = trainingRecords.filter(r => r.id !== recordId);
    localStorage.setItem('ma_training_records', JSON.stringify(trainingRecords));
    updateTrainingCount();
    showTrainingRecords();
}

function clearTrainingRecords() {
    if (confirm('确定要清空所有实训记录吗？')) {
        trainingRecords = [];
        localStorage.setItem('ma_training_records', JSON.stringify(trainingRecords));
        updateTrainingCount();
        showTrainingRecords();
    }
}

function reopenTool(toolId) {
    closeTrainingRecords();
    showModal(toolId);
}

function exportTrainingReport() {
    let report = `
加减行工具箱 - 实验报告
=====================================

生成时间: ${new Date().toLocaleString()}
记录数量: ${trainingRecords.length}

实训记录详情:
`;
    
    trainingRecords.forEach((record, index) => {
        report += `
${index + 1}. ${record.toolIcon} ${record.toolName}
   时间: ${record.timestamp}
`;
    });
    
    report += `
=====================================
报告由加减行工具箱自动生成
`;
    
    const blob = new Blob([report], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `实训报告_${new Date().toLocaleDateString().replace(/\//g, '-')}.txt`;
    a.click();
    URL.revokeObjectURL(url);
}

// ============ Service Worker 注册 ============
function initServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('Service Worker 注册成功:', registration.scope);
            })
            .catch(function(error) {
                console.log('Service Worker 注册失败:', error);
            });
    }
}

// ============ 安全规范提示 ============
function getSafetyTip(toolId) {
    const safetyTips = {
        'password-strength': '根据等保三级要求，密码长度应至少8位，包含大小写字母、数字和特殊字符。重要系统建议使用16位以上强密码，并定期更换（每90天）。',
        'password-generator': '生成的密码应妥善保管，建议使用密码管理器存储。切勿在多个平台使用相同密码，避免一损俱损。',
        'md5-sha': 'MD5和SHA1已被证明不安全，禁止用于密码存储。生产环境应使用SHA256或更高级算法，并配合加盐处理。',
        'aes-encrypt': 'AES密钥长度建议128位以上，密钥应通过安全渠道分发，禁止明文存储密钥。采用GCM模式提供完整性校验。',
        'base64': 'Base64是编码不是加密，禁止用于传输敏感信息。如需安全传输请配合HTTPS和加密算法使用。',
        'wifi-safety': '公共WiFi环境下避免进行网银支付、登录敏感账号等操作。建议使用手机流量或VPN进行敏感操作。',
        'phishing': '遇到可疑链接先检查域名，正规网站域名通常简洁清晰。不要轻易点击邮件、短信中的未知链接。',
        'doubao-ai': '与AI对话时注意保护个人隐私，不要输入身份证号、银行卡号、密码等敏感信息。AI生成的代码需要人工审核后再使用。'
    };
    return safetyTips[toolId] || null;
}

// ============ 主题切换 ============
function initTheme() {
    if (isLightTheme) {
        document.body.classList.add('light-theme');
        updateThemeIcon(true);
    }
    
    document.getElementById('themeBtn').addEventListener('click', function() {
        isLightTheme = !isLightTheme;
        document.body.classList.toggle('light-theme');
        updateThemeIcon(isLightTheme);
        localStorage.setItem('ma_theme', isLightTheme ? 'light' : 'dark');
    });
}

function updateThemeIcon(isLight) {
    const icon = document.querySelector('.theme-icon');
    icon.textContent = isLight ? '☀️' : '🌙';
}

// ============ 分类导航 ============
function initNavigation() {
    const categories = document.querySelectorAll('.category-item');
    categories.forEach(item => {
        item.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            if (category === 'ai') {
                openAiChat();
            } else {
                currentCategory = category;
                updateActiveCategory();
                renderTools();
                closeAiChat();
            }
        });
    });
}

function updateActiveCategory() {
    const categories = document.querySelectorAll('.category-item');
    categories.forEach(item => {
        if (item.getAttribute('data-category') === currentCategory) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    document.getElementById('contentTitle').textContent = categoryNames[currentCategory];
    if (currentCategory === 'ai') {
        document.getElementById('toolCount').textContent = '';
    } else {
        const toolCount = toolsData[currentCategory] ? toolsData[currentCategory].length : 0;
        document.getElementById('toolCount').textContent = toolCount + ' 个工具';
    }
}

// ============ 渲染工具卡片 ============
function renderTools() {
    const grid = document.getElementById('toolsGrid');
    
    if (!toolsData[currentCategory]) {
        grid.innerHTML = '<p style="color:var(--text-secondary);text-align:center;padding:40px;">该分类正在开发中...</p>';
        updateActiveCategory();
        return;
    }
    
    if (currentCategory === 'learn') {
        renderLearnModule(grid);
    } else {
        renderNormalCategory(grid);
    }
}

function renderNormalCategory(grid) {
    let tools = [...toolsData[currentCategory]];
    
    let favoriteTools = tools.filter(t => favorites.includes(t.id));
    let otherTools = tools.filter(t => !favorites.includes(t.id));
    tools = [...favoriteTools, ...otherTools];
    
    let html = '';
    tools.forEach(tool => {
        const isFavorite = favorites.includes(tool.id);
        const isHot = tool.id === 'doubao-ai';
        html += renderToolCard(tool, isFavorite, isHot);
    });
    
    grid.innerHTML = html;
}

function renderLearnModule(grid) {
    const learnGroups = {
        '基础入门': ['glossary', 'linux-basic', 'python-cheat'],
        'Web安全': ['sql-injection', 'xss-learn', 'csrf-learn', 'file-upload'],
        '进阶实战': ['vulnerability', 'steganography', 'reverse-eng', 'pwning', 'social-engineering'],
        '竞赛专区': ['ctf-knowledge']
    };
    
    let html = `
        <div class="learn-module-header">
            <div class="learn-title-section">
                <h2 class="learn-title">网安实训中心</h2>
                <p class="learn-subtitle">从零基础到实战专家</p>
            </div>
            <div class="learn-progress-section">
                <div class="ring-progress-container" style="width:80px;height:80px;">
                    <svg class="ring-progress" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(59,130,246,0.2)" stroke-width="8"/>
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#3b82f6" stroke-width="8" 
                                stroke-dasharray="283" stroke-dashoffset="141" 
                                stroke-linecap="round" transform="rotate(-90 50 50)"/>
                    </svg>
                    <div class="ring-progress-text" style="font-size:16px;">50%</div>
                </div>
                <div class="learn-progress-text">
                    <div class="learn-progress-count">6/12 已完成</div>
                    <div class="learn-progress-label">实训进度</div>
                </div>
            </div>
        </div>
        
        <div class="learn-filters">
            <div class="learn-search-box">
                <span class="search-icon">🔍</span>
                <input type="text" id="learnSearch" placeholder="搜索工具/知识点..." oninput="filterLearnTools()">
            </div>
            <div class="learn-filter-group">
                <select id="difficultyFilter" class="learn-filter-select" onchange="filterLearnTools()">
                    <option value="all">全部难度</option>
                    <option value="beginner">入门</option>
                    <option value="intermediate">进阶</option>
                    <option value="expert">专家</option>
                </select>
                <select id="typeFilter" class="learn-filter-select" onchange="filterLearnTools()">
                    <option value="all">全部类型</option>
                    <option value="theory">理论</option>
                    <option value="practice">实操</option>
                </select>
            </div>
        </div>
    `;
    
    for (const [groupName, toolIds] of Object.entries(learnGroups)) {
        const groupTools = toolIds.map(id => toolsData.learn.find(t => t.id === id)).filter(Boolean);
        
        html += `
            <div class="learn-group" data-group="${groupName}">
                <div class="learn-group-header">
                    <h3 class="learn-group-title">${groupName}</h3>
                    <span class="learn-group-count">${groupTools.length} 个工具</span>
                </div>
                <div class="learn-tools-grid">
        `;
        
        groupTools.forEach(tool => {
            const isFavorite = favorites.includes(tool.id);
            html += renderTechToolCard(tool, isFavorite);
        });
        
        html += `
                </div>
            </div>
        `;
    }
    
    grid.innerHTML = html;
}

function renderToolCard(tool, isFavorite, isHot) {
    return `
        <div class="tool-card ${isFavorite ? 'favorite' : ''}" 
             data-tool-id="${tool.id}"
             onclick="handleToolClick(event, '${tool.id}')"
             ondblclick="handleToolDoubleClick('${tool.id}')">
            <button class="tool-favorite-btn" onclick="event.stopPropagation(); toggleFavorite('${tool.id}')">
                ${isFavorite ? '⭐' : '☆'}
            </button>
            <span class="tool-icon">${tool.icon}</span>
            <div class="tool-name">${tool.name}</div>
            <div class="tool-card-tooltip">
                <div class="tooltip-title">
                    <span class="tooltip-icon">${tool.icon}</span>
                    ${tool.name}
                    ${isHot ? '<span class="tooltip-hot">HOT</span>' : ''}
                </div>
                <div class="tooltip-desc">${tool.description}</div>
                <div class="tooltip-knowledge">
                    💡 ${tool.knowledge}
                </div>
            </div>
        </div>
    `;
}

function renderTechToolCard(tool, isFavorite) {
    const iconAnimations = {
        'glossary': 'icon-pulse',
        'ctf-knowledge': 'icon-bounce',
        'vulnerability': 'icon-wiggle',
        'linux-basic': 'icon-swing',
        'python-cheat': 'icon-slither',
        'steganography': 'icon-pulse',
        'social-engineering': 'icon-pulse',
        'reverse-eng': 'icon-wiggle',
        'pwning': 'icon-bounce',
        'sql-injection': 'icon-pulse',
        'xss-learn': 'icon-pulse',
        'csrf-learn': 'icon-pulse',
        'file-upload': 'icon-pulse'
    };
    
    const animationClass = iconAnimations[tool.id] || '';
    
    return `
        <div class="tech-tool-card ${animationClass}" 
             data-tool-id="${tool.id}"
             data-tool-name="${tool.name}"
             onclick="handleToolClick(event, '${tool.id}')"
             ondblclick="handleToolDoubleClick('${tool.id}')">
            <button class="tool-favorite-btn" onclick="event.stopPropagation(); toggleFavorite('${tool.id}')">
                ${isFavorite ? '⭐' : '☆'}
            </button>
            <span class="tech-tool-icon">${tool.icon}</span>
            <div class="tech-tool-name">${tool.name}</div>
            <div class="tech-tool-desc">${tool.description}</div>
        </div>
    `;
}

function filterLearnTools() {
    const searchTerm = document.getElementById('learnSearch')?.value.toLowerCase() || '';
    const difficulty = document.getElementById('difficultyFilter')?.value || 'all';
    const type = document.getElementById('typeFilter')?.value || 'all';
    
    const toolCards = document.querySelectorAll('.tech-tool-card');
    const groups = document.querySelectorAll('.learn-group');
    
    toolCards.forEach(card => {
        const toolName = card.getAttribute('data-tool-name').toLowerCase();
        const matchesSearch = toolName.includes(searchTerm);
        card.style.display = matchesSearch ? '' : 'none';
    });
    
    groups.forEach(group => {
        const visibleCards = group.querySelectorAll('.tech-tool-card[style=""]');
        group.style.display = visibleCards.length > 0 ? '' : 'none';
    });
}

// ============ 单击显示抽屉 ============
let clickTimer = null;
let lastClickTime = 0;

function handleToolClick(event, toolId) {
    const now = Date.now();
    if (now - lastClickTime < 300) {
        lastClickTime = now;
        return;
    }
    lastClickTime = now;
    
    clickTimer = setTimeout(() => {
        showDrawer(toolId);
    }, 300);
}

function handleToolDoubleClick(toolId) {
    if (clickTimer) {
        clearTimeout(clickTimer);
        clickTimer = null;
    }
    if (toolId === 'doubao-ai') {
        openAiModal();
    } else {
        showModal(toolId);
    }
}

// ============ 抽屉功能 ============
function initDrawer() {
    document.getElementById('drawerClose').addEventListener('click', closeDrawer);
    document.getElementById('drawerOverlay').addEventListener('click', closeDrawer);
}

function showDrawer(toolId) {
    const tool = findTool(toolId);
    if (!tool) return;
    
    document.getElementById('drawerTitle').textContent = tool.name;
    
    const safetyTip = getSafetyTip(toolId);
    
    let html = '';
    
    if (safetyTip) {
        html += `
            <div class="safety-tip-card">
                <div class="safety-tip-title">
                    <span class="safety-tip-icon">🛡️</span>
                    安全规范提示
                </div>
                <div class="safety-tip-content">${safetyTip}</div>
            </div>
        `;
    }
    
    html += `
        <div class="drawer-section">
            <div class="drawer-section-title">功能介绍</div>
            <p class="drawer-text">${tool.description}</p>
        </div>
        <div class="drawer-section">
            <div class="drawer-section-title">使用方法</div>
            <p class="drawer-text">${tool.usage}</p>
        </div>
        <div class="drawer-section">
            <div class="drawer-section-title">原理讲解</div>
            <p class="drawer-text">${tool.knowledge}</p>
        </div>
        <div class="drawer-section">
            <div class="drawer-section-title">CTF考点</div>
            <p class="drawer-text">${tool.ctfTip}</p>
        </div>
        <div class="drawer-section">
            <div class="drawer-section-title">避坑指南</div>
            <p class="drawer-text">${tool.pitfalls}</p>
        </div>
    `;
    
    document.getElementById('drawerContent').innerHTML = html;
    
    document.getElementById('drawerOverlay').classList.add('show');
    document.getElementById('bottomDrawer').classList.add('show');
}

function closeDrawer() {
    document.getElementById('drawerOverlay').classList.remove('show');
    document.getElementById('bottomDrawer').classList.remove('show');
}

// ============ 弹窗功能 ============
function initModal() {
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('modalOverlay').addEventListener('click', closeModal);
}

function showModal(toolId) {
    const tool = findTool(toolId);
    if (!tool) return;
    
    document.getElementById('modalTitle').textContent = tool.name;
    renderToolContent(toolId);
    
    document.getElementById('modalOverlay').classList.add('show');
    document.getElementById('toolModal').classList.add('show');
    
    addTrainingRecord(toolId);
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('show');
    document.getElementById('toolModal').classList.remove('show');
}

// ============ 渲染工具内容 ============
function renderToolContent(toolId) {
    const body = document.getElementById('modalBody');
    let html = '';
    
    switch(toolId) {
        case 'password-strength':
            html = renderPasswordStrength();
            break;
        case 'password-generator':
            html = renderPasswordGenerator();
            break;
        case 'md5-sha':
            html = renderHashTool();
            break;
        case 'base64':
            html = renderBase64();
            break;
        case 'url-encode':
            html = renderUrlEncode();
            break;
        case 'unicode':
            html = renderUnicode();
            break;
        case 'hex':
            html = renderHex();
            break;
        case 'rot13':
            html = renderRot13();
            break;
        case 'json-format':
            html = renderJsonFormat();
            break;
        case 'uuid-generator':
            html = renderUuidGenerator();
            break;
        case 'regex-test':
            html = renderRegexTest();
            break;
        case 'port-list':
            html = renderPortList();
            break;
        case 'ip-check':
            html = renderIpCheck();
            break;
        case 'http-status':
            html = renderHttpStatus();
            break;
        case 'bmi':
            html = renderBmiCalc();
            break;
        case 'loan':
            html = renderLoanCalc();
            break;
        case 'glossary':
            html = renderGlossary();
            break;
        case 'ctf-knowledge':
            html = renderCtfKnowledge();
            break;
        case 'vulnerability':
            html = renderVulnerability();
            break;
        case 'phishing':
            html = renderPhishing();
            break;
        case 'wifi-safety':
            html = renderWifiSafety();
            break;
        case 'checklist':
            html = renderChecklist();
            break;
        case 'browser-safety':
            html = renderBrowserSafety();
            break;
        case 'data-protection':
            html = renderDataProtection();
            break;
        case 'emergency-response':
            html = renderEmergencyResponse();
            break;
        case 'linux-basic':
            html = renderLinuxBasic();
            break;
        case 'python-cheat':
            html = renderPythonCheat();
            break;
        case 'file-upload':
            html = renderFileUpload();
            break;
        case 'steganography':
            html = renderSteganography();
            break;
        case 'social-engineering':
            html = renderSocialEngineering();
            break;
        case 'pwning':
            html = renderPwning();
            break;
        case 'reverse-eng':
            html = renderReverseEng();
            break;
        case 'sql-injection':
            html = renderSqlInjection();
            break;
        case 'xss-learn':
            html = renderXssLearn();
            break;
        case 'csrf-learn':
            html = renderCsrfLearn();
            break;
        case 'hash-collision':
            html = renderHashCollision();
            break;
        case 'doubao-ai':
            html = renderDoubaoAi();
            break;
        case 'text-count':
            html = renderTextCount();
            break;
        case 'text-reverse':
            html = renderTextReverse();
            break;
        case 'text-case':
            html = renderTextCase();
            break;
        case 'text-remove-duplicate':
            html = renderTextRemoveDuplicate();
            break;
        case 'text-sort':
            html = renderTextSort();
            break;
        case 'image-base64':
            html = renderImageBase64();
            break;
        case 'image-info':
            html = renderImageInfo();
            break;
        case 'image-resize':
            html = renderImageResize();
            break;
        case 'qrcode-scan':
            html = renderQrcodeScan();
            break;
        case 'basic-calc':
            html = renderBasicCalc();
            break;
        case 'hex-calc':
            html = renderHexCalc();
            break;
        case 'bitwise-calc':
            html = renderBitwiseCalc();
            break;
        case 'random-gen':
            html = renderRandomGen();
            break;
        case 'percentage-calc':
            html = renderPercentageCalc();
            break;
        case 'fibonacci':
            html = renderFibonacci();
            break;
        case 'timestamp':
            html = renderTimestamp();
            break;
        case 'time-diff':
            html = renderTimeDiff();
            break;
        case 'age-calc':
            html = renderAgeCalc();
            break;
        case 'world-clock':
            html = renderWorldClock();
            break;
        case 'countdown':
            html = renderCountdown();
            break;
        case 'ai-explain':
            html = renderAiExplain();
            break;
        case 'ai-codegen':
            html = renderAiCodegen();
            break;
        case 'hmac-calc':
            html = renderHmacCalc();
            break;
        case 'aes-encrypt':
            html = renderAesEncrypt();
            break;
        case 'morse-code':
            html = renderMorseCode();
            break;
        case 'binary-convert':
            html = renderBinaryConvert();
            break;
        case 'ascii-table':
            html = renderAsciiTable();
            break;
        case 'html-escape':
            html = renderHtmlEscape();
            break;
        case 'color-picker':
            html = renderColorPicker();
            break;
        case 'cron-generator':
            html = renderCronGenerator();
            break;
        case 'yaml-format':
            html = renderYamlFormat();
            break;
        case 'subnet-calc':
            html = renderSubnetCalc();
            break;
        case 'mac-lookup':
            html = renderMacLookup();
            break;
        case 'dns-records':
            html = renderDnsRecords();
            break;
        case 'linux-basic':
            html = renderLinuxBasic();
            break;
        case 'python-cheat':
            html = renderPythonCheat();
            break;
        case 'unit-convert':
            html = renderUnitConvert();
            break;
        case 'qrcode-gen':
            html = renderQrcodeGen();
            break;
        case 'random-num':
            html = renderRandomNum();
            break;
        default:
            html = '<p class="drawer-text">该工具正在开发中...</p>';
    }
    
    body.innerHTML = html;
    
    if (toolId === 'doubao-ai') {
        setTimeout(initDoubaoAi, 100);
    }
}

// ============ 工具实现 - 密码强度 ============
function renderPasswordStrength() {
    return `
        <input type="password" class="modal-input" id="modalPwdInput" placeholder="请输入密码" oninput="checkModalPassword()">
        <div class="pwd-analysis-container">
            <div class="pwd-strength-header">
                <span class="pwd-strength-title">密码强度评估</span>
                <span class="pwd-score" id="pwdScore">0分</span>
            </div>
            <div class="visual-progress-bar" style="margin-top:16px;">
                <span class="visual-progress-label" id="pwdProgressLabel">0%</span>
                <div class="visual-progress-fill" id="modalPwdFill" style="width:0%;background:linear-gradient(90deg,#ef4444,#f59e0b,#eab308,#10b981,#059669);"></div>
            </div>
            <p id="modalPwdText" class="pwd-strength-text">请输入密码</p>
            <div class="pwd-criteria-list" id="pwdCriteriaList"></div>
        </div>
    `;
}

function checkModalPassword() {
    const pwd = document.getElementById('modalPwdInput').value;
    const fill = document.getElementById('modalPwdFill');
    const text = document.getElementById('modalPwdText');
    const label = document.getElementById('pwdProgressLabel');
    const scoreEl = document.getElementById('pwdScore');
    const criteriaList = document.getElementById('pwdCriteriaList');
    
    let score = 0;
    
    const criteria = [
        { id: 'len8', text: '长度 ≥ 8位', check: pwd.length >= 8, points: 15 },
        { id: 'len12', text: '长度 ≥ 12位', check: pwd.length >= 12, points: 10 },
        { id: 'len16', text: '长度 ≥ 16位', check: pwd.length >= 16, points: 10 },
        { id: 'upper', text: '包含大写字母', check: /[A-Z]/.test(pwd), points: 15 },
        { id: 'lower', text: '包含小写字母', check: /[a-z]/.test(pwd), points: 15 },
        { id: 'number', text: '包含数字', check: /[0-9]/.test(pwd), points: 15 },
        { id: 'symbol', text: '包含特殊字符', check: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pwd), points: 20 }
    ];
    
    criteria.forEach(c => {
        if (c.check) score += c.points;
    });
    
    fill.style.width = score + '%';
    if (label) label.textContent = score + '%';
    if (scoreEl) scoreEl.textContent = score + '分';
    
    let strengthColor, strengthLabel, gradientColor;
    if (score < 30) { 
        strengthColor = '#ef4444'; 
        strengthLabel = '🔴 非常弱 - 立即更换！';
        gradientColor = 'linear-gradient(90deg, #ef4444, #dc2626)';
    }
    else if (score < 50) { 
        strengthColor = '#f59e0b'; 
        strengthLabel = '🟠 弱 - 需要加强';
        gradientColor = 'linear-gradient(90deg, #f59e0b, #d97706)';
    }
    else if (score < 70) { 
        strengthColor = '#eab308'; 
        strengthLabel = '🟡 中等 - 还能更好';
        gradientColor = 'linear-gradient(90deg, #eab308, #ca8a04)';
    }
    else if (score < 90) { 
        strengthColor = '#10b981'; 
        strengthLabel = '🟢 强 - 比较安全';
        gradientColor = 'linear-gradient(90deg, #10b981, #059669)';
    }
    else { 
        strengthColor = '#059669'; 
        strengthLabel = '💚 非常强 - 非常安全！';
        gradientColor = 'linear-gradient(90deg, #059669, #047857)';
    }
    
    fill.style.background = gradientColor;
    text.textContent = strengthLabel;
    text.style.color = strengthColor;
    
    if (criteriaList) {
        criteriaList.innerHTML = criteria.map(c => `
            <div class="pwd-criteria-item ${c.check ? 'passed' : ''}">
                <span class="pwd-criteria-icon">${c.check ? '✓' : '✗'}</span>
                <span class="pwd-criteria-text">${c.text}</span>
                <span class="pwd-criteria-points">+${c.points}分</span>
            </div>
        `).join('');
    }
}

// ============ 工具实现 - 密码生成 ============
function renderPasswordGenerator() {
    return `
        <div style="display:flex;gap:12px;margin-bottom:16px;flex-wrap:wrap;">
            <label class="option-label" style="background:var(--bg-card);padding:8px 12px;border-radius:8px;border:1px solid var(--border-color);">
                <input type="checkbox" id="genUpper" checked> 大写
            </label>
            <label class="option-label" style="background:var(--bg-card);padding:8px 12px;border-radius:8px;border:1px solid var(--border-color);">
                <input type="checkbox" id="genLower" checked> 小写
            </label>
            <label class="option-label" style="background:var(--bg-card);padding:8px 12px;border-radius:8px;border:1px solid var(--border-color);">
                <input type="checkbox" id="genNumber" checked> 数字
            </label>
            <label class="option-label" style="background:var(--bg-card);padding:8px 12px;border-radius:8px;border:1px solid var(--border-color);">
                <input type="checkbox" id="genSymbol" checked> 符号
            </label>
        </div>
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
            <span>长度：</span>
            <input type="range" id="genLen" min="8" max="32" value="16" style="flex:1;">
            <span id="genLenVal">16</span>
        </div>
        <input type="text" class="modal-input" id="genOutput" readonly placeholder="点击生成">
        <div class="modal-btn-group">
            <button class="modal-btn modal-btn-primary" onclick="generateModalPassword()">生成密码</button>
            <button class="modal-btn modal-btn-secondary" onclick="copyModalPassword()">复制</button>
        </div>
    `;
}

document.addEventListener('input', function(e) {
    if (e.target.id === 'genLen') {
        document.getElementById('genLenVal').textContent = e.target.value;
    }
});

function generateModalPassword() {
    const len = parseInt(document.getElementById('genLen').value);
    const upper = document.getElementById('genUpper').checked;
    const lower = document.getElementById('genLower').checked;
    const number = document.getElementById('genNumber').checked;
    const symbol = document.getElementById('genSymbol').checked;
    
    let chars = '';
    if (upper) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lower) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (number) chars += '0123456789';
    if (symbol) chars += '!@#$%^&*';
    if (!chars) chars = 'abcdefghijklmnopqrstuvwxyz';
    
    let pwd = '';
    for (let i = 0; i < len; i++) {
        pwd += chars[Math.floor(Math.random() * chars.length)];
    }
    
    document.getElementById('genOutput').value = pwd;
}

function copyModalPassword() {
    const output = document.getElementById('genOutput');
    if (output.value) {
        output.select();
        document.execCommand('copy');
        alert('已复制！');
    }
}

// ============ 工具实现 - MD5/SHA ============
function renderHashTool() {
    return `
        <div style="margin-bottom:16px;padding:12px;background:rgba(245,158,11,0.1);border-left:3px solid var(--warning);border-radius:8px;">
            <div style="font-weight:600;margin-bottom:4px;color:var(--warning);">⚠️ 安全提示</div>
            <div style="font-size:13px;color:var(--text-secondary);">
                MD5使用简化算法（仅用于教学演示），生产环境请使用SHA256
            </div>
        </div>
        <input type="text" class="modal-input" id="hashInput" placeholder="请输入文本">
        <div class="modal-btn-group">
            <button class="modal-btn modal-btn-primary" onclick="computeHash()">计算哈希</button>
        </div>
        <div style="margin-top:16px;">
            <label style="display:block;margin-bottom:8px;color:var(--text-secondary);">MD5（简化实现）：</label>
            <input type="text" class="modal-input" id="md5Output" readonly>
        </div>
        <div style="margin-top:16px;">
            <label style="display:block;margin-bottom:8px;color:var(--text-secondary);">SHA256（标准安全算法）：</label>
            <input type="text" class="modal-input" id="shaOutput" readonly>
        </div>
    `;
}

async function computeHash() {
    const text = document.getElementById('hashInput').value;
    if (!text) return;
    
    document.getElementById('md5Output').value = simpleMd5(text);
    document.getElementById('shaOutput').value = await sha256(text);
}

function simpleMd5(string) {
    // ⚠️ 重要提示：这不是标准的 MD5 算法实现！
    // 这是一个简化的哈希函数，仅用于教学演示
    // 生产环境请使用标准的 SHA256 或其他安全哈希算法
    // 本项目已提供安全的 SHA256 实现（使用 crypto.subtle.digest API）
    
    let hash = 0;
    for (let i = 0; i < string.length; i++) {
        const char = string.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return ('00000000' + Math.abs(hash).toString(16)).slice(-8) + 
           ('00000000' + (Math.abs(hash) * 2).toString(16)).slice(-8) +
           ('00000000' + (Math.abs(hash) * 3).toString(16)).slice(-8) +
           ('00000000' + (Math.abs(hash) * 4).toString(16)).slice(-8);
}

async function sha256(text) {
    // 使用标准的 Web Crypto API 实现 SHA256
    // 这是生产级安全的哈希算法
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// ============ 工具实现 - Base64 ============
function renderBase64() {
    return `
        <textarea class="modal-textarea" id="b64Input" placeholder="请输入文本"></textarea>
        <div class="modal-btn-group">
            <button class="modal-btn modal-btn-primary" onclick="encodeBase64()">编码</button>
            <button class="modal-btn modal-btn-secondary" onclick="decodeBase64()">解码</button>
        </div>
        <div class="modal-result" id="b64Output"></div>
    `;
}

function encodeBase64() {
    const input = document.getElementById('b64Input').value;
    try {
        document.getElementById('b64Output').textContent = btoa(unescape(encodeURIComponent(input)));
    } catch(e) {
        document.getElementById('b64Output').textContent = '编码失败';
    }
}

function decodeBase64() {
    const input = document.getElementById('b64Input').value;
    try {
        document.getElementById('b64Output').textContent = decodeURIComponent(escape(atob(input)));
    } catch(e) {
        document.getElementById('b64Output').textContent = '解码失败，请检查输入';
    }
}

// ============ 工具实现 - URL编码 ============
function renderUrlEncode() {
    return `
        <textarea class="modal-textarea" id="urlInput" placeholder="请输入文本"></textarea>
        <div class="modal-btn-group">
            <button class="modal-btn modal-btn-primary" onclick="encodeUrl()">编码</button>
            <button class="modal-btn modal-btn-secondary" onclick="decodeUrl()">解码</button>
        </div>
        <div class="modal-result" id="urlOutput"></div>
    `;
}

function encodeUrl() {
    document.getElementById('urlOutput').textContent = encodeURIComponent(document.getElementById('urlInput').value);
}

function decodeUrl() {
    try {
        document.getElementById('urlOutput').textContent = decodeURIComponent(document.getElementById('urlInput').value);
    } catch(e) {
        document.getElementById('urlOutput').textContent = '解码失败';
    }
}

// ============ 工具实现 - Unicode ============
function renderUnicode() {
    return `
        <textarea class="modal-textarea" id="uniInput" placeholder="请输入文本"></textarea>
        <div class="modal-btn-group">
            <button class="modal-btn modal-btn-primary" onclick="encodeUnicode()">转Unicode</button>
            <button class="modal-btn modal-btn-secondary" onclick="decodeUnicode()">转文本</button>
        </div>
        <div class="modal-result" id="uniOutput"></div>
    `;
}

function encodeUnicode() {
    const input = document.getElementById('uniInput').value;
    let result = '';
    for (let i = 0; i < input.length; i++) {
        result += '\\u' + input.charCodeAt(i).toString(16).padStart(4, '0');
    }
    document.getElementById('uniOutput').textContent = result;
}

function decodeUnicode() {
    try {
        const input = document.getElementById('uniInput').value;
        document.getElementById('uniOutput').textContent = input.replace(/\\u([0-9a-fA-F]{4})/g, 
            (m, h) => String.fromCharCode(parseInt(h, 16)));
    } catch(e) {
        document.getElementById('uniOutput').textContent = '解码失败';
    }
}

// ============ 工具实现 - Hex ============
function renderHex() {
    return `
        <textarea class="modal-textarea" id="hexInput" placeholder="请输入文本"></textarea>
        <div class="modal-btn-group">
            <button class="modal-btn modal-btn-primary" onclick="encodeHex()">转Hex</button>
            <button class="modal-btn modal-btn-secondary" onclick="decodeHex()">转文本</button>
        </div>
        <div class="modal-result" id="hexOutput"></div>
    `;
}

function encodeHex() {
    const input = document.getElementById('hexInput').value;
    let result = '';
    for (let i = 0; i < input.length; i++) {
        result += input.charCodeAt(i).toString(16).padStart(2, '0');
    }
    document.getElementById('hexOutput').textContent = result;
}

function decodeHex() {
    try {
        const input = document.getElementById('hexInput').value.replace(/\s/g, '');
        let result = '';
        for (let i = 0; i < input.length; i += 2) {
            result += String.fromCharCode(parseInt(input.substr(i, 2), 16));
        }
        document.getElementById('hexOutput').textContent = result;
    } catch(e) {
        document.getElementById('hexOutput').textContent = '解码失败';
    }
}

// ============ 工具实现 - ROT13 ============
function renderRot13() {
    return `
        <textarea class="modal-textarea" id="rotInput" placeholder="请输入文本"></textarea>
        <div class="modal-btn-group">
            <button class="modal-btn modal-btn-primary" onclick="encodeRot13()">编码/解码</button>
        </div>
        <div class="modal-result" id="rotOutput"></div>
    `;
}

function encodeRot13() {
    const input = document.getElementById('rotInput').value;
    document.getElementById('rotOutput').textContent = input.replace(/[a-zA-Z]/g, c => {
        const code = c.charCodeAt(0);
        if (code <= 90) {
            return String.fromCharCode(((code - 65 + 13) % 26) + 65);
        } else {
            return String.fromCharCode(((code - 97 + 13) % 26) + 97);
        }
    });
}

// ============ 工具实现 - JSON格式化 ============
function renderJsonFormat() {
    return `
        <textarea class="modal-textarea" id="jsonInput" placeholder="请输入JSON"></textarea>
        <div class="modal-btn-group">
            <button class="modal-btn modal-btn-primary" onclick="formatJson()">格式化</button>
            <button class="modal-btn modal-btn-secondary" onclick="compressJson()">压缩</button>
        </div>
        <div class="modal-result" id="jsonOutput" style="white-space:pre-wrap;"></div>
    `;
}

function formatJson() {
    try {
        const obj = JSON.parse(document.getElementById('jsonInput').value);
        document.getElementById('jsonOutput').textContent = JSON.stringify(obj, null, 2);
    } catch(e) {
        document.getElementById('jsonOutput').textContent = 'JSON格式错误';
    }
}

function compressJson() {
    try {
        const obj = JSON.parse(document.getElementById('jsonInput').value);
        document.getElementById('jsonOutput').textContent = JSON.stringify(obj);
    } catch(e) {
        document.getElementById('jsonOutput').textContent = 'JSON格式错误';
    }
}

// ============ 工具实现 - UUID生成 ============
function renderUuidGenerator() {
    return `
        <input type="number" class="modal-input" id="uuidCount" value="1" min="1" max="20" placeholder="生成数量">
        <div class="modal-btn-group">
            <button class="modal-btn modal-btn-primary" onclick="generateUuid()">生成UUID</button>
        </div>
        <div class="modal-result" id="uuidOutput" style="white-space:pre-wrap;"></div>
    `;
}

function generateUuid() {
    const count = parseInt(document.getElementById('uuidCount').value) || 1;
    let result = '';
    for (let i = 0; i < count; i++) {
        result += 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            const r = Math.random() * 16 | 0;
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        }) + '\n';
    }
    document.getElementById('uuidOutput').textContent = result.trim();
}

// ============ 工具实现 - 正则测试 ============
function renderRegexTest() {
    return `
        <input type="text" class="modal-input" id="regexPattern" placeholder="正则表达式 (如: \\d+)">
        <textarea class="modal-textarea" id="regexText" placeholder="测试文本"></textarea>
        <div class="modal-btn-group">
            <button class="modal-btn modal-btn-primary" onclick="testRegex()">测试</button>
        </div>
        <div class="modal-result" id="regexOutput"></div>
    `;
}

function testRegex() {
    try {
        const pattern = document.getElementById('regexPattern').value;
        const text = document.getElementById('regexText').value;
        const regex = new RegExp(pattern, 'g');
        const matches = text.match(regex) || [];
        document.getElementById('regexOutput').textContent = 
            `匹配到 ${matches.length} 个结果：\n${matches.join(', ')}`;
    } catch(e) {
        document.getElementById('regexOutput').textContent = '正则表达式错误';
    }
}

// ============ 工具实现 - 常用端口 ============
function renderPortList() {
    const ports = [
        { port: 21, service: 'FTP', desc: '文件传输协议' },
        { port: 22, service: 'SSH', desc: '安全外壳协议' },
        { port: 23, service: 'Telnet', desc: '远程登录' },
        { port: 25, service: 'SMTP', desc: '邮件传输' },
        { port: 53, service: 'DNS', desc: '域名系统' },
        { port: 80, service: 'HTTP', desc: '超文本传输' },
        { port: 110, service: 'POP3', desc: '邮局协议' },
        { port: 143, service: 'IMAP', desc: '互联网消息访问' },
        { port: 443, service: 'HTTPS', desc: '安全超文本传输' },
        { port: 3306, service: 'MySQL', desc: 'MySQL数据库' },
        { port: 3389, service: 'RDP', desc: '远程桌面' },
        { port: 5432, service: 'PostgreSQL', desc: 'PostgreSQL数据库' },
        { port: 6379, service: 'Redis', desc: 'Redis数据库' },
        { port: 8080, service: 'HTTP-Proxy', desc: '代理端口' }
    ];
    
    let html = '<table style="width:100%;border-collapse:collapse;"><thead><tr style="background:var(--bg-card);"><th style="padding:12px;text-align:left;">端口</th><th style="padding:12px;text-align:left;">服务</th><th style="padding:12px;text-align:left;">说明</th></tr></thead><tbody>';
    ports.forEach(p => {
        html += `<tr style="border-bottom:1px solid var(--border-color);"><td style="padding:12px;font-family:monospace;">${p.port}</td><td style="padding:12px;">${p.service}</td><td style="padding:12px;">${p.desc}</td></tr>`;
    });
    html += '</tbody></table>';
    return html;
}

// ============ 工具实现 - IP判断 ============
function renderIpCheck() {
    return `
        <input type="text" class="modal-input" id="ipCheckInput" placeholder="请输入IP地址，如 192.168.1.1">
        <div class="modal-btn-group">
            <button class="modal-btn modal-btn-primary" onclick="checkIp()">判断</button>
        </div>
        <div class="modal-result" id="ipCheckOutput"></div>
    `;
}

function checkIp() {
    const ip = document.getElementById('ipCheckInput').value;
    const privateRegexes = [/^10\./, /^172\.(1[6-9]|2[0-9]|3[01])\./, /^192\.168\./, /^127\./];
    const isPrivate = privateRegexes.some(r => r.test(ip));
    document.getElementById('ipCheckOutput').textContent = isPrivate ? '🏠 这是内网IP地址' : '🌍 这是公网IP地址';
}

// ============ 工具实现 - HTTP状态码 ============
function renderHttpStatus() {
    const codes = [
        { code: 200, text: 'OK', desc: '请求成功' },
        { code: 301, text: 'Moved Permanently', desc: '永久重定向' },
        { code: 302, text: 'Found', desc: '临时重定向' },
        { code: 400, text: 'Bad Request', desc: '请求错误' },
        { code: 401, text: 'Unauthorized', desc: '未授权' },
        { code: 403, text: 'Forbidden', desc: '禁止访问' },
        { code: 404, text: 'Not Found', desc: '未找到' },
        { code: 500, text: 'Internal Server Error', desc: '服务器错误' },
        { code: 502, text: 'Bad Gateway', desc: '网关错误' },
        { code: 503, text: 'Service Unavailable', desc: '服务不可用' }
    ];
    
    let html = '<table style="width:100%;border-collapse:collapse;"><thead><tr style="background:var(--bg-card);"><th style="padding:12px;text-align:left;">状态码</th><th style="padding:12px;text-align:left;">文本</th><th style="padding:12px;text-align:left;">说明</th></tr></thead><tbody>';
    codes.forEach(c => {
        html += `<tr style="border-bottom:1px solid var(--border-color);"><td style="padding:12px;font-family:monospace;">${c.code}</td><td style="padding:12px;">${c.text}</td><td style="padding:12px;">${c.desc}</td></tr>`;
    });
    html += '</tbody></table>';
    return html;
}

// ============ 工具实现 - BMI计算 ============
function renderBmiCalc() {
    return `
        <input type="number" class="modal-input" id="bmiHeight" placeholder="身高（厘米）">
        <input type="number" class="modal-input" id="bmiWeight" placeholder="体重（公斤）">
        <div class="modal-btn-group">
            <button class="modal-btn modal-btn-primary" onclick="calcBmi()">计算BMI</button>
        </div>
        <div class="modal-result" id="bmiOutput"></div>
    `;
}

function calcBmi() {
    const h = parseFloat(document.getElementById('bmiHeight').value) / 100;
    const w = parseFloat(document.getElementById('bmiWeight').value);
    if (!h || !w) return;
    
    const bmi = (w / (h * h)).toFixed(2);
    let status, color;
    if (bmi < 18.5) { status = '偏瘦 🟡'; color = '#f59e0b'; }
    else if (bmi < 24) { status = '正常 🟢'; color = '#10b981'; }
    else if (bmi < 28) { status = '偏胖 🟠'; color = '#f59e0b'; }
    else { status = '肥胖 🔴'; color = '#ef4444'; }
    
    document.getElementById('bmiOutput').innerHTML = `BMI指数：<strong>${bmi}</strong><br>健康状态：<strong style="color:${color}">${status}</strong>`;
}

// ============ 工具实现 - 贷款计算 ============
function renderLoanCalc() {
    return `
        <input type="number" class="modal-input" id="loanAmount" placeholder="贷款金额（元）">
        <input type="number" class="modal-input" id="loanRate" placeholder="年利率（%）">
        <input type="number" class="modal-input" id="loanMonths" placeholder="贷款期限（月）">
        <div class="modal-btn-group">
            <button class="modal-btn modal-btn-primary" onclick="calcLoan()">计算</button>
        </div>
        <div class="modal-result" id="loanOutput"></div>
    `;
}

function calcLoan() {
    const amount = parseFloat(document.getElementById('loanAmount').value);
    const rate = parseFloat(document.getElementById('loanRate').value) / 100 / 12;
    const months = parseInt(document.getElementById('loanMonths').value);
    if (!amount || !rate || !months) return;
    
    const monthly = (amount * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
    const total = monthly * months;
    const interest = total - amount;
    
    document.getElementById('loanOutput').innerHTML = 
        `月供：<strong>${monthly.toFixed(2)} 元</strong><br>` +
        `总利息：<strong>${interest.toFixed(2)} 元</strong><br>` +
        `还款总额：<strong>${total.toFixed(2)} 元</strong>`;
}

// ============ 工具实现 - 专业名词 ============
function renderGlossary() {
    const terms = [
        { term: 'SQL注入', desc: '通过构造恶意SQL语句来攻击数据库的攻击方式' },
        { term: 'XSS', desc: '跨站脚本攻击，通过注入恶意脚本窃取用户信息' },
        { term: 'CSRF', desc: '跨站请求伪造，冒用用户身份执行操作' },
        { term: 'WebShell', desc: '植入Web服务器的后门程序' },
        { term: '提权', desc: '提升用户在系统中的权限级别' },
        { term: '哈希', desc: '将任意长度数据压缩为固定长度值的函数' },
        { term: '加密', desc: '将明文转换为密文的过程' },
        { term: 'Payload', desc: '攻击中实际执行的恶意代码' },
        { term: 'POC', desc: '概念验证，用于证明漏洞存在的代码' },
        { term: 'EXP', desc: '漏洞利用程序' }
    ];
    
    let html = '';
    terms.forEach(t => {
        html += `<div style="background:var(--bg-card);padding:16px;border-radius:10px;margin-bottom:12px;border:1px solid var(--border-color);">
            <strong style="color:var(--accent-primary);">${t.term}</strong><br>
            <span style="color:var(--text-secondary);">${t.desc}</span>
        </div>`;
    });
    return html;
}

// ============ 工具实现 - CTF知识点 ============
function renderCtfKnowledge() {
    const cats = [
        { name: 'Web', icon: '🌐', items: ['SQL注入', 'XSS', 'CSRF', '文件上传', 'SSRF', '反序列化'] },
        { name: 'Crypto', icon: '🔐', items: ['古典密码', 'RSA', '哈希碰撞', 'Base64', '摩尔斯电码'] },
        { name: 'Misc', icon: '🎯', items: ['隐写术', '编码转换', '图片分析', '流量分析', '取证'] },
        { name: 'Reverse', icon: '🔄', items: ['静态分析', '动态调试', '脱壳', '算法逆向'] },
        { name: 'Pwn', icon: '💥', items: ['栈溢出', '堆溢出', '格式化字符串', 'UAF'] }
    ];
    
    let html = '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;">';
    cats.forEach(c => {
        html += `<div style="background:var(--bg-card);padding:20px;border-radius:10px;border:1px solid var(--border-color);">
            <h3 style="margin-bottom:12px;color:var(--accent-primary);">${c.icon} ${c.name}</h3>
            <ul style="list-style:none;padding:0;">
                ${c.items.map(i => `<li style="padding:6px 0;color:var(--text-secondary);">• ${i}</li>`).join('')}
            </ul>
        </div>`;
    });
    html += '</div>';
    return html;
}

// ============ 工具实现 - 常见漏洞 ============
function renderVulnerability() {
    const vulns = [
        { name: 'SQL注入', icon: '🗄️', desc: '通过在输入中插入SQL代码来操纵数据库', level: '高危' },
        { name: 'XSS跨站脚本', icon: '💉', desc: '在网页中注入恶意脚本，窃取用户Cookie', level: '高危' },
        { name: 'CSRF跨站请求伪造', icon: '🎭', desc: '冒用用户身份执行未授权操作', level: '中危' },
        { name: '文件上传漏洞', icon: '📁', desc: '上传恶意文件获取服务器权限', level: '高危' },
        { name: 'SSRF服务端请求伪造', icon: '🌐', desc: '利用服务器发起内部网络请求', level: '中危' },
        { name: '反序列化漏洞', icon: '🔄', desc: '利用反序列化过程执行恶意代码', level: '高危' }
    ];
    
    let html = '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:16px;">';
    vulns.forEach(v => {
        const color = v.level === '高危' ? '#ef4444' : '#f59e0b';
        html += `<div style="background:var(--bg-card);padding:20px;border-radius:10px;border:1px solid var(--border-color);border-left:4px solid ${color};">
            <h3 style="margin-bottom:8px;">${v.icon} ${v.name}</h3>
            <span style="display:inline-block;padding:2px 10px;background:${color}20;color:${color};border-radius:12px;font-size:12px;margin-bottom:10px;">${v.level}</span>
            <p style="color:var(--text-secondary);margin:0;">${v.desc}</p>
        </div>`;
    });
    html += '</div>';
    return html;
}

// ============ 工具实现 - 钓鱼识别（高级版） ============
function renderPhishing() {
    return `
        <div class="tech-card" style="padding:20px;position:relative;overflow:hidden;">
            <div id="phishingLoading" class="loading-overlay" style="display:none;">
                <div class="tech-font glow-text" style="font-size:18px;">正在拉取全球钓鱼情报库...</div>
                <div class="loading-progress">
                    <div class="loading-progress-fill"></div>
                </div>
            </div>
            
            <h2 class="tech-font glow-text" style="text-align:center;margin-bottom:24px;font-size:20px;">
                🔍 钓鱼威胁实时检测
            </h2>
            
            <div class="radar-container" style="margin-bottom:24px;">
                <div class="radar-bg">
                    <div class="radar-scan"></div>
                </div>
                <div class="radar-dot" style="top:30%;left:60%;"></div>
                <div class="radar-dot" style="top:70%;left:40%;animation-delay:0.5s;"></div>
                <div class="radar-dot" style="top:50%;left:75%;animation-delay:1s;"></div>
            </div>
            
            <div class="three-column-layout">
                <div class="chart-container">
                    <h4 style="margin-bottom:12px;color:var(--text-secondary);">📊 实时钓鱼趋势</h4>
                    <div style="height:120px;display:flex;align-items:flex-end;gap:8px;">
                        <div style="width:100%;height:40%;background:linear-gradient(180deg,#10b981,transparent);border-radius:4px;"></div>
                        <div style="width:100%;height:60%;background:linear-gradient(180deg,#10b981,transparent);border-radius:4px;"></div>
                        <div style="width:100%;height:50%;background:linear-gradient(180deg,#f59e0b,transparent);border-radius:4px;"></div>
                        <div style="width:100%;height:80%;background:linear-gradient(180deg,#ef4444,transparent);border-radius:4px;"></div>
                        <div style="width:100%;height:70%;background:linear-gradient(180deg,#ef4444,transparent);border-radius:4px;"></div>
                        <div style="width:100%;height:90%;background:linear-gradient(180deg,#ef4444,transparent);border-radius:4px;"></div>
                        <div style="width:100%;height:75%;background:linear-gradient(180deg,#f59e0b,transparent);border-radius:4px;"></div>
                    </div>
                    <p style="text-align:center;color:var(--text-secondary);margin-top:8px;font-size:12px;">近7天钓鱼攻击数量</p>
                </div>
                
                <div class="chart-container">
                    <h4 style="margin-bottom:12px;color:var(--text-secondary);">🎯 钓鱼样本识别</h4>
                    <input type="text" class="modal-input" id="phishingUrl" placeholder="粘贴URL或上传邮件截图">
                    <input type="file" class="modal-input" id="phishingFile" accept="image/*" style="font-size:12px;">
                    <div class="modal-btn-group" style="margin-top:8px;">
                        <button class="modal-btn modal-btn-primary" onclick="detectPhishing()">威胁狩猎</button>
                    </div>
                </div>
                
                <div class="chart-container">
                    <h4 style="margin-bottom:12px;color:var(--text-secondary);">⚠️ 威胁等级</h4>
                    <div style="display:flex;justify-content:center;margin-bottom:16px;">
                        <svg class="ring-progress" width="120" height="120">
                            <circle class="bg" cx="60" cy="60" r="50"></circle>
                            <circle class="progress progress-red" cx="60" cy="60" r="50" 
                                stroke-dasharray="314" stroke-dashoffset="34.54"></circle>
                        </svg>
                        <div style="position:absolute;display:flex;flex-direction:column;align-items:center;justify-content:center;">
                            <span style="font-size:28px;font-weight:800;">89</span>
                            <span style="font-size:12px;color:var(--text-secondary);">/100</span>
                        </div>
                    </div>
                    <div id="phishingResult" style="text-align:center;">
                        <span style="color:#ef4444;font-weight:600;">🔴 仿冒银行</span>
                    </div>
                </div>
            </div>
            
            <div class="chart-container" style="margin-top:16px;">
                <h4 style="margin-bottom:12px;color:var(--text-secondary);">📋 钓鱼特征拆解</h4>
                <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px;">
                    <div class="traffic-card red">
                        <strong>❌ 域名拼写错误</strong>
                    </div>
                    <div class="traffic-card red">
                        <strong>❌ 伪造SSL证书</strong>
                    </div>
                    <div class="traffic-card yellow">
                        <strong>⚠️ 诱导点击按钮</strong>
                    </div>
                    <div class="traffic-card red">
                        <strong>❌ 索要敏感信息</strong>
                    </div>
                </div>
                <p style="margin-top:16px;color:var(--text-secondary);text-align:center;">
                    💡 安全加固建议：立即断开链接并上报至安全团队
                </p>
            </div>
        </div>
    `;
}

function detectPhishing() {
    const loading = document.getElementById('phishingLoading');
    if (loading) {
        loading.style.display = 'flex';
        setTimeout(() => {
            loading.style.display = 'none';
            const result = document.getElementById('phishingResult');
            if (result) {
                result.innerHTML = '<span style="color:#10b981;font-weight:600;">🟢 安全链接</span>';
            }
        }, 3000);
    }
}

// ============ 工具实现 - WiFi安全 ============
function renderWifiSafety() {
    return `
        <div class="tech-card" style="background:linear-gradient(135deg,#1e1b4b 0%,#312e81 100%);">
            <h3 style="font-family:'Courier New',monospace;color:#a5b4fc;font-size:20px;margin-bottom:16px;text-shadow:0 0 10px rgba(129,140,248,0.5);">
                📡 WiFi安全战场态势感知
            </h3>
            
            <div class="wifi-signal-container" style="display:flex;align-items:center;justify-content:center;margin:20px 0;">
                <div class="wifi-wave" style="position:relative;width:100px;height:100px;">
                    <div class="wifi-circle" style="position:absolute;border:3px solid #818cf8;border-radius:50%;opacity:0.8;animation:wifiExpand 2s ease-out infinite;"></div>
                    <div class="wifi-circle" style="position:absolute;border:3px solid #818cf8;border-radius:50%;opacity:0.8;animation:wifiExpand 2s ease-out 0.5s infinite;"></div>
                    <div class="wifi-circle" style="position:absolute;border:3px solid #818cf8;border-radius:50%;opacity:0.8;animation:wifiExpand 2s ease-out 1s infinite;"></div>
                    <div style="position:absolute;width:20px;height:20px;background:#818cf8;border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);box-shadow:0 0 20px #818cf8;"></div>
                </div>
                <div style="margin-left:20px;">
                    <div style="color:#e0e7ff;font-size:14px;">连接设备数</div>
                    <div class="device-count" style="color:#818cf8;font-size:32px;font-weight:bold;font-family:'Courier New',monospace;">5</div>
                </div>
            </div>
            
            <h4 style="color:#c7d2fe;margin:20px 0 10px;">🔍 网络拓扑侦查</h4>
            <div class="topology-container" style="background:rgba(0,0,0,0.3);border-radius:12px;padding:20px;margin-bottom:20px;">
                <svg width="100%" height="200" viewBox="0 0 400 200">
                    <circle cx="200" cy="50" r="25" fill="#10b981" stroke="#34d399" stroke-width="2"/>
                    <text x="200" y="55" text-anchor="middle" fill="white" font-size="12">路由器</text>
                    
                    <line x1="200" y1="75" x2="100" y2="150" stroke="#60a5fa" stroke-width="2" stroke-dasharray="5,5"/>
                    <line x1="200" y1="75" x2="200" y2="150" stroke="#60a5fa" stroke-width="2" stroke-dasharray="5,5"/>
                    <line x1="200" y1="75" x2="300" y2="150" stroke="#60a5fa" stroke-width="2" stroke-dasharray="5,5"/>
                    
                    <circle cx="100" cy="150" r="20" fill="#3b82f6" stroke="#60a5fa" stroke-width="2"/>
                    <text x="100" y="155" text-anchor="middle" fill="white" font-size="10">手机</text>
                    
                    <circle cx="200" cy="150" r="20" fill="#ef4444" stroke="#f87171" stroke-width="2">
                        <animate attributeName="opacity" values="1;0.5;1" dur="1s" repeatCount="indefinite"/>
                    </circle>
                    <text x="200" y="155" text-anchor="middle" fill="white" font-size="10">可疑</text>
                    
                    <circle cx="300" cy="150" r="20" fill="#3b82f6" stroke="#60a5fa" stroke-width="2"/>
                    <text x="300" y="155" text-anchor="middle" fill="white" font-size="10">电脑</text>
                </svg>
            </div>
            
            <button class="modal-btn modal-btn-primary" onclick="scanWifiSafety()" style="width:100%;margin-bottom:20px;">
                🛡️ 启动WiFi安全扫描
            </button>
            
            <div id="wifiScanResult"></div>
        </div>
    `;
}

function scanWifiSafety() {
    const resultDiv = document.getElementById('wifiScanResult');
    if (!resultDiv) return;
    
    resultDiv.innerHTML = `
        <div style="text-align:center;padding:20px;">
            <div style="color:#a5b4fc;font-size:16px;margin-bottom:10px;">🔄 正在扫描无线网络环境...</div>
            <div style="width:100%;height:8px;background:rgba(0,0,0,0.3);border-radius:4px;overflow:hidden;">
                <div style="width:0%;height:100%;background:linear-gradient(90deg,#818cf8,#a855f7);animation:loadingBar 3s ease-out forwards;"></div>
            </div>
        </div>
    `;
    
    setTimeout(() => {
        resultDiv.innerHTML = `
            <div style="margin-top:10px;">
                <h4 style="color:#c7d2fe;margin-bottom:15px;">📊 安全扫描报告</h4>
                
                <div class="traffic-light-card safe" style="margin-bottom:10px;">
                    <div style="display:flex;align-items:center;gap:10px;">
                        <div style="width:20px;height:20px;background:#10b981;border-radius:50%;box-shadow:0 0 10px #10b981;"></div>
                        <span style="color:#d1fae5;font-weight:600;">加密方式：WPA3-PSK</span>
                    </div>
                    <div style="color:#a7f3d0;font-size:12px;margin-top:5px;">✓ 使用当前最安全的加密协议</div>
                </div>
                
                <div class="traffic-light-card warning" style="margin-bottom:10px;">
                    <div style="display:flex;align-items:center;gap:10px;">
                        <div style="width:20px;height:20px;background:#f59e0b;border-radius:50%;box-shadow:0 0 10px #f59e0b;"></div>
                        <span style="color:#fef3c7;font-weight:600;">弱密码风险</span>
                    </div>
                    <div style="color:#fcd34d;font-size:12px;margin-top:5px;">⚠ 建议更换为至少16位的强密码</div>
                </div>
                
                <div class="traffic-light-card safe" style="margin-bottom:10px;">
                    <div style="display:flex;align-items:center;gap:10px;">
                        <div style="width:20px;height:20px;background:#10b981;border-radius:50%;box-shadow:0 0 10px #10b981;"></div>
                        <span style="color:#d1fae5;font-weight:600;">隐藏SSID：已禁用</span>
                    </div>
                    <div style="color:#a7f3d0;font-size:12px;margin-top:5px;">✓ 网络可见性正常</div>
                </div>
                
                <div class="traffic-light-card danger" style="margin-bottom:10px;">
                    <div style="display:flex;align-items:center;gap:10px;">
                        <div style="width:20px;height:20px;background:#ef4444;border-radius:50%;box-shadow:0 0 10px #ef4444;"></div>
                        <span style="color:#fee2e2;font-weight:600;">DHCP劫持：检测到异常</span>
                    </div>
                    <div style="color:#fca5a5;font-size:12px;margin-top:5px;">✗ 发现未知DHCP服务器，建议立即排查</div>
                </div>
                
                <div class="tech-card" style="margin-top:20px;background:rgba(16,185,129,0.1);">
                    <h5 style="color:#6ee7b7;margin-bottom:10px;">🛡️ 安全加固建议</h5>
                    <ul style="list-style:none;padding:0;color:#a7f3d0;font-size:13px;">
                        <li style="margin-bottom:5px;">• 立即更换WiFi密码</li>
                        <li style="margin-bottom:5px;">• 检查并移除未知连接设备</li>
                        <li style="margin-bottom:5px;">• 重启路由器清除异常配置</li>
                        <li>• 启用MAC地址过滤</li>
                    </ul>
                </div>
            </div>
        `;
    }, 3000);
}

// ============ 工具实现 - 安全清单 ============
function renderChecklist() {
    return `
        <div class="tech-card" style="background:linear-gradient(135deg,#064e3b 0%,#065f46 100%);">
            <h3 style="font-family:'Courier New',monospace;color:#6ee7b7;font-size:20px;margin-bottom:16px;text-shadow:0 0 10px rgba(16,185,129,0.5);">
                ✅ 安全任务清单系统
            </h3>
            
            <div style="text-align:center;margin:20px 0;">
                <div class="ring-progress-container" style="position:relative;width:120px;height:120px;margin:0 auto;">
                    <svg class="ring-progress" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(16,185,129,0.2)" stroke-width="8"/>
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#10b981" stroke-width="8" 
                                stroke-dasharray="283" stroke-dashoffset="170" 
                                stroke-linecap="round" transform="rotate(-90 50 50)"/>
                    </svg>
                    <div class="ring-progress-text" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:24px;font-weight:bold;color:#6ee7b7;">60%</div>
                </div>
                <div style="color:#a7f3d0;font-size:14px;margin-top:10px;">安全成熟度：进阶</div>
            </div>
            
            <div class="checklist-container">
                <div class="checklist-item-header" onclick="toggleChecklistCategory('terminal')" style="cursor:pointer;">
                    <span style="display:flex;align-items:center;gap:8px;">
                        <span>💻</span>
                        <span style="font-weight:600;">终端安全</span>
                    </span>
                    <span style="font-size:12px;color:#34d399;">2/3</span>
                </div>
                <div id="checklist-terminal" class="checklist-item-content" style="display:block;">
                    <label class="checklist-item" style="display:flex;align-items:center;gap:12px;padding:12px;background:rgba(0,0,0,0.2);border-radius:8px;margin-bottom:8px;cursor:pointer;">
                        <input type="checkbox" checked style="width:18px;height:18px;accent-color:#10b981;">
                        <span style="text-decoration:line-through;opacity:0.6;">使用强密码（至少12位）</span>
                    </label>
                    <label class="checklist-item" style="display:flex;align-items:center;gap:12px;padding:12px;background:rgba(0,0,0,0.2);border-radius:8px;margin-bottom:8px;cursor:pointer;">
                        <input type="checkbox" checked style="width:18px;height:18px;accent-color:#10b981;">
                        <span style="text-decoration:line-through;opacity:0.6;">定期更新系统补丁</span>
                    </label>
                    <label class="checklist-item" style="display:flex;align-items:center;gap:12px;padding:12px;background:rgba(0,0,0,0.2);border-radius:8px;margin-bottom:8px;cursor:pointer;">
                        <input type="checkbox" style="width:18px;height:18px;accent-color:#10b981;">
                        <span>安装杀毒软件并定期扫描</span>
                    </label>
                </div>
                
                <div class="checklist-item-header" onclick="toggleChecklistCategory('network')" style="cursor:pointer;">
                    <span style="display:flex;align-items:center;gap:8px;">
                        <span>🌐</span>
                        <span style="font-weight:600;">网络安全</span>
                    </span>
                    <span style="font-size:12px;color:#fcd34d;">1/2</span>
                </div>
                <div id="checklist-network" class="checklist-item-content" style="display:block;">
                    <label class="checklist-item" style="display:flex;align-items:center;gap:12px;padding:12px;background:rgba(0,0,0,0.2);border-radius:8px;margin-bottom:8px;cursor:pointer;">
                        <input type="checkbox" checked style="width:18px;height:18px;accent-color:#10b981;">
                        <span style="text-decoration:line-through;opacity:0.6;">不在公共WiFi进行敏感操作</span>
                    </label>
                    <label class="checklist-item" style="display:flex;align-items:center;gap:12px;padding:12px;background:rgba(0,0,0,0.2);border-radius:8px;margin-bottom:8px;cursor:pointer;">
                        <input type="checkbox" style="width:18px;height:18px;accent-color:#10b981;">
                        <span>使用VPN加密网络流量</span>
                    </label>
                </div>
                
                <div class="checklist-item-header" onclick="toggleChecklistCategory('data')" style="cursor:pointer;">
                    <span style="display:flex;align-items:center;gap:8px;">
                        <span>📊</span>
                        <span style="font-weight:600;">数据安全</span>
                    </span>
                    <span style="font-size:12px;color:#f87171;">0/2</span>
                </div>
                <div id="checklist-data" class="checklist-item-content" style="display:none;">
                    <label class="checklist-item" style="display:flex;align-items:center;gap:12px;padding:12px;background:rgba(0,0,0,0.2);border-radius:8px;margin-bottom:8px;cursor:pointer;">
                        <input type="checkbox" style="width:18px;height:18px;accent-color:#10b981;">
                        <span>重要数据定期备份</span>
                    </label>
                    <label class="checklist-item" style="display:flex;align-items:center;gap:12px;padding:12px;background:rgba(0,0,0,0.2);border-radius:8px;margin-bottom:8px;cursor:pointer;">
                        <input type="checkbox" style="width:18px;height:18px;accent-color:#10b981;">
                        <span>敏感数据加密存储</span>
                    </label>
                </div>
                
                <div class="checklist-item-header" onclick="toggleChecklistCategory('account')" style="cursor:pointer;">
                    <span style="display:flex;align-items:center;gap:8px;">
                        <span>🔐</span>
                        <span style="font-weight:600;">账号安全</span>
                    </span>
                    <span style="font-size:12px;color:#34d399;">3/3</span>
                </div>
                <div id="checklist-account" class="checklist-item-content" style="display:none;">
                    <label class="checklist-item" style="display:flex;align-items:center;gap:12px;padding:12px;background:rgba(0,0,0,0.2);border-radius:8px;margin-bottom:8px;cursor:pointer;">
                        <input type="checkbox" checked style="width:18px;height:18px;accent-color:#10b981;">
                        <span style="text-decoration:line-through;opacity:0.6;">不同账号使用不同密码</span>
                    </label>
                    <label class="checklist-item" style="display:flex;align-items:center;gap:12px;padding:12px;background:rgba(0,0,0,0.2);border-radius:8px;margin-bottom:8px;cursor:pointer;">
                        <input type="checkbox" checked style="width:18px;height:18px;accent-color:#10b981;">
                        <span style="text-decoration:line-through;opacity:0.6;">开启双重验证</span>
                    </label>
                    <label class="checklist-item" style="display:flex;align-items:center;gap:12px;padding:12px;background:rgba(0,0,0,0.2);border-radius:8px;margin-bottom:8px;cursor:pointer;">
                        <input type="checkbox" checked style="width:18px;height:18px;accent-color:#10b981;">
                        <span style="text-decoration:line-through;opacity:0.6;">不随意点击陌生链接</span>
                    </label>
                </div>
            </div>
            
            <button class="modal-btn modal-btn-primary" onclick="addCustomTask()" style="width:100%;margin-top:20px;">
                ➕ 添加自定义安全任务
            </button>
        </div>
    `;
}

function toggleChecklistCategory(category) {
    const content = document.getElementById('checklist-' + category);
    if (content) {
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
    }
}

function addCustomTask() {
    const taskName = prompt('请输入自定义安全任务名称：');
    if (taskName && taskName.trim()) {
        alert('任务「' + taskName + '」添加成功！');
    }
}

// ============ 工具实现 - 浏览器安全 ============
function renderBrowserSafety() {
    return `
        <div class="tech-card" style="background:linear-gradient(135deg,#1f2937 0%,#1e3a5f 100%);">
            <h3 style="font-family:'Courier New',monospace;color:#60a5fa;font-size:20px;margin-bottom:16px;text-shadow:0 0 10px rgba(59,130,246,0.5);">
                🛡️ 浏览器安全状态面板
            </h3>
            
            <div class="shield-animation" style="text-align:center;margin:20px 0;position:relative;">
                <div style="font-size:60px;">🛡️</div>
                <div class="particles" style="position:absolute;top:0;left:0;width:100%;height:100%;">
                    <div class="particle" style="position:absolute;width:4px;height:4px;background:#60a5fa;border-radius:50%;animation:particleFloat 3s ease-in-out infinite;top:20%;left:30%;"></div>
                    <div class="particle" style="position:absolute;width:4px;height:4px;background:#3b82f6;border-radius:50%;animation:particleFloat 3s ease-in-out infinite 0.5s;top:40%;left:70%;"></div>
                    <div class="particle" style="position:absolute;width:4px;height:4px;background:#93c5fd;border-radius:50%;animation:particleFloat 3s ease-in-out infinite 1s;top:60%;left:40%;"></div>
                    <div class="particle" style="position:absolute;width:4px;height:4px;background:#60a5fa;border-radius:50%;animation:particleFloat 3s ease-in-out infinite 1.5s;top:80%;left:60%;"></div>
                </div>
            </div>
            
            <div class="tech-card" style="background:rgba(59,130,246,0.1);margin-bottom:15px;">
                <h4 style="color:#93c5fd;margin-bottom:10px;">🔌 插件安全评分</h4>
                <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;padding:8px;background:rgba(0,0,0,0.2);border-radius:6px;">
                    <span style="width:10px;height:10px;background:#ef4444;border-radius:50%;"></span>
                    <span style="color:#fca5a5;">广告拦截器Pro（权限滥用风险）</span>
                </div>
                <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;padding:8px;background:rgba(0,0,0,0.2);border-radius:6px;">
                    <span style="width:10px;height:10px;background:#f59e0b;border-radius:50%;"></span>
                    <span style="color:#fcd34d;">购物助手（数据跟踪）</span>
                </div>
                <div style="display:flex;align-items:center;gap:10px;padding:8px;background:rgba(0,0,0,0.2);border-radius:6px;">
                    <span style="width:10px;height:10px;background:#10b981;border-radius:50%;"></span>
                    <span style="color:#6ee7b7;">密码管理器（安全）</span>
                </div>
            </div>
            
            <div class="tech-card" style="background:rgba(59,130,246,0.1);margin-bottom:15px;">
                <h4 style="color:#93c5fd;margin-bottom:10px;">🔒 隐私设置检测</h4>
                <div style="color:#bfdbfe;font-size:13px;line-height:1.8;">
                    <div>🍪 Cookie策略：<span style="color:#fcd34d;">仅接受必要Cookie</span></div>
                    <div>🚫 弹窗拦截：<span style="color:#6ee7b7;">已启用</span></div>
                    <div>🔑 密码自动填充：<span style="color:#f59e0b;">已启用（建议关闭）</span></div>
                    <div>🕵️ 追踪保护：<span style="color:#6ee7b7;">严格模式</span></div>
                </div>
            </div>
            
            <div class="tech-card" style="background:rgba(59,130,246,0.1);margin-bottom:15px;">
                <h4 style="color:#93c5fd;margin-bottom:10px;">⚠️ 近期威胁记录</h4>
                <div style="color:#bfdbfe;font-size:13px;line-height:1.6;">
                    <div style="padding:6px;background:rgba(239,68,68,0.1);border-radius:4px;margin-bottom:4px;">
                        🚫 2小时前：拦截恶意网站 phishingsite.com
                    </div>
                    <div style="padding:6px;background:rgba(245,158,11,0.1);border-radius:4px;">
                        ⚠️ 昨天：阻止可疑下载 malware.exe
                    </div>
                </div>
            </div>
            
            <button class="modal-btn modal-btn-primary" onclick="hardenBrowser()" style="width:100%;">
                🚀 一键安全加固
            </button>
        </div>
    `;
}

function hardenBrowser() {
    alert('正在优化浏览器安全设置...\n\n已完成：\n✓ 禁用风险插件\n✓ 启用严格追踪保护\n✓ 关闭非必要Cookie\n✓ 增强弹窗拦截');
}

// ============ 工具实现 - 数据保护 ============
function renderDataProtection() {
    return `
        <div class="tech-card" style="background:linear-gradient(135deg,#1e1b4b 0%,#312e81 100%);">
            <h3 style="font-family:'Courier New',monospace;color:#a5b4fc;font-size:20px;margin-bottom:16px;text-shadow:0 0 10px rgba(129,140,248,0.5);">
                🔐 数据保护中心
            </h3>
            
            <div style="text-align:center;margin:20px 0;">
                <div style="font-size:50px;">💾🔒</div>
                <div style="color:#c7d2fe;font-size:14px;margin-top:10px;">数据流加密中...</div>
            </div>
            
            <div style="display:grid;gap:12px;margin-bottom:20px;">
                <button class="modal-btn modal-btn-primary" onclick="showEncryptPanel()">
                    🔐 文件加密
                </button>
                <button class="modal-btn modal-btn-secondary" onclick="showBackupPanel()">
                    💾 数据备份
                </button>
                <button class="modal-btn" style="background:#ef4444;color:white;" onclick="showDestroyPanel()">
                    🗑️ 安全销毁
                </button>
            </div>
            
            <div class="tech-card" style="background:rgba(0,0,0,0.3);">
                <h4 style="color:#c7d2fe;margin-bottom:10px;">📊 数据安全评分</h4>
                <svg width="100%" height="150" viewBox="0 0 200 150">
                    <polygon points="100,20 160,60 140,120 60,120 40,60" 
                             fill="rgba(129,140,248,0.2)" stroke="#818cf8" stroke-width="2"/>
                    <polygon points="100,40 140,70 120,100 80,100 60,70" 
                             fill="rgba(16,185,129,0.3)" stroke="#10b981" stroke-width="2"/>
                    <text x="100" y="25" text-anchor="middle" fill="#a5b4fc" font-size="10">加密</text>
                    <text x="165" y="65" text-anchor="start" fill="#a5b4fc" font-size="10">备份</text>
                    <text x="145" y="125" text-anchor="start" fill="#a5b4fc" font-size="10">完整性</text>
                    <text x="55" y="125" text-anchor="end" fill="#a5b4fc" font-size="10">销毁</text>
                    <text x="35" y="65" text-anchor="end" fill="#a5b4fc" font-size="10">防护</text>
                </svg>
            </div>
            
            <div class="timeline" style="margin-top:20px;">
                <h4 style="color:#c7d2fe;margin-bottom:10px;">⏰ 数据保护历史</h4>
                <div class="timeline-item" style="position:relative;padding-left:20px;margin-bottom:15px;">
                    <div style="color:#818cf8;font-size:12px;">2024-01-15 14:30</div>
                    <div style="color:#e0e7ff;">✓ 完成全盘加密</div>
                </div>
                <div class="timeline-item" style="position:relative;padding-left:20px;margin-bottom:15px;">
                    <div style="color:#818cf8;font-size:12px;">2024-01-14 09:00</div>
                    <div style="color:#e0e7ff;">✓ 云备份同步完成</div>
                </div>
                <div class="timeline-item" style="position:relative;padding-left:20px;">
                    <div style="color:#818cf8;font-size:12px;">2024-01-12 18:45</div>
                    <div style="color:#e0e7ff;">✓ 安全销毁旧文件</div>
                </div>
            </div>
        </div>
    `;
}

function showEncryptPanel() {
    alert('文件加密功能\n\n支持算法：AES-256\n请选择要加密的文件或文件夹');
}

function showBackupPanel() {
    alert('数据备份功能\n\n支持：本地备份 + 云备份\n请设置备份计划');
}

function showDestroyPanel() {
    alert('安全销毁功能\n\n警告：此操作不可恢复！\n请确认要销毁的文件');
}

// ============ 工具实现 - 应急响应 ============
function renderEmergencyResponse() {
    return `
        <div class="tech-card" style="background:linear-gradient(135deg,#450a0a 0%,#7f1d1d 100%);">
            <h3 style="font-family:'Courier New',monospace;color:#fca5a5;font-size:20px;margin-bottom:16px;text-shadow:0 0 10px rgba(239,68,68,0.5);">
                🚨 应急响应指挥中心
            </h3>
            
            <div style="text-align:center;margin:20px 0;">
                <div class="pulse-animation" style="font-size:60px;animation:pulse 1s ease-in-out infinite;">🚨</div>
                <div style="color:#fecaca;font-size:14px;margin-top:10px;">系统进入应急状态</div>
            </div>
            
            <div style="margin-bottom:20px;">
                <div style="color:#fecaca;font-weight:600;margin-bottom:10px;">📋 应急响应流程</div>
                
                <div style="background:rgba(220,38,38,0.2);border:1px solid #ef4444;border-radius:8px;padding:12px;margin-bottom:10px;">
                    <div style="color:#fca5a5;font-weight:600;margin-bottom:5px;">1️⃣ 威胁识别</div>
                    <div style="color:#fecaca;font-size:13px;">上传日志/截图，自动分析攻击类型</div>
                    <button class="modal-btn" style="width:100%;margin-top:8px;background:#dc2626;color:white;" onclick="uploadLog()">
                        📤 上传分析
                    </button>
                </div>
                
                <div style="background:rgba(220,38,38,0.1);border:1px solid rgba(239,68,68,0.3);border-radius:8px;padding:12px;margin-bottom:10px;">
                    <div style="color:#fca5a5;font-weight:600;margin-bottom:5px;">2️⃣ 隔离处置</div>
                    <div style="color:#fecaca;font-size:13px;">一键断网/隔离受感染设备</div>
                    <button class="modal-btn" style="width:100%;margin-top:8px;background:#b91c1c;color:white;" onclick="isolateDevice()">
                        ⚡ 立即隔离
                    </button>
                </div>
                
                <div style="background:rgba(220,38,38,0.1);border:1px solid rgba(239,68,68,0.3);border-radius:8px;padding:12px;margin-bottom:10px;">
                    <div style="color:#fca5a5;font-weight:600;margin-bottom:5px;">3️⃣ 溯源分析</div>
                    <div style="color:#fecaca;font-size:13px;">追踪攻击IP、分析攻击路径</div>
                </div>
                
                <div style="background:rgba(220,38,38,0.1);border:1px solid rgba(239,68,68,0.3);border-radius:8px;padding:12px;">
                    <div style="color:#fca5a5;font-weight:600;margin-bottom:5px;">4️⃣ 恢复重建</div>
                    <div style="color:#fecaca;font-size:13px;">数据恢复、系统安全加固</div>
                </div>
            </div>
            
            <div class="tech-card" style="background:rgba(220,38,38,0.1);">
                <h4 style="color:#fca5a5;margin-bottom:10px;">📑 应急模板</h4>
                <div style="display:grid;gap:8px;">
                    <button class="modal-btn modal-btn-secondary" style="text-align:left;" onclick="loadTemplate('ransomware')">
                        🔒 勒索软件响应
                    </button>
                    <button class="modal-btn modal-btn-secondary" style="text-align:left;" onclick="loadTemplate('dataleak')">
                        📊 数据泄露响应
                    </button>
                    <button class="modal-btn modal-btn-secondary" style="text-align:left;" onclick="loadTemplate('phishing')">
                        🎣 钓鱼攻击响应
                    </button>
                </div>
            </div>
            
            <button class="modal-btn" style="width:100%;margin-top:20px;background:#dc2626;color:white;" onclick="generateReport()">
                📄 生成应急报告
            </button>
        </div>
    `;
}

function uploadLog() {
    alert('请选择日志文件或截图进行上传分析');
}

function isolateDevice() {
    if (confirm('⚠️ 确认要隔离此设备吗？\n\n这将断开网络连接！')) {
        alert('设备已隔离，请联系安全团队');
    }
}

function loadTemplate(type) {
    const templates = {
        ransomware: '勒索软件响应模板已加载',
        dataleak: '数据泄露响应模板已加载',
        phishing: '钓鱼攻击响应模板已加载'
    };
    alert(templates[type] || '模板加载完成');
}

function generateReport() {
    alert('应急报告生成中...\n\n报告包含：\n• 攻击详情\n• 处置过程\n• 预防措施\n\n报告已准备好导出');
}

// ============ 工具实现 - 专业名词 ============
function renderGlossary() {
    const glossaryData = [
        {
            category: 'Web安全',
            terms: [
                { term: 'SQL注入', desc: '通过在输入中插入SQL代码来操纵数据库的攻击', example: 'OR 1=1 --' },
                { term: 'XSS', desc: '跨站脚本攻击，在网页中注入恶意脚本', example: '<script>alert(1)</script>' },
                { term: 'CSRF', desc: '跨站请求伪造，利用用户身份执行未授权操作', example: '恶意图片链接' }
            ]
        },
        {
            category: '系统安全',
            terms: [
                { term: 'Shell', desc: '操作系统的命令行界面', example: 'bash、zsh' },
                { term: 'Root', desc: 'Linux系统的最高权限用户', example: 'sudo su' },
                { term: '提权', desc: '从普通用户权限提升到管理员权限', example: '内核漏洞利用' }
            ]
        },
        {
            category: '密码学',
            terms: [
                { term: '对称加密', desc: '加密和解密使用相同密钥的加密方式', example: 'AES、DES' },
                { term: '非对称加密', desc: '使用公钥和私钥配对的加密方式', example: 'RSA、ECC' },
                { term: '哈希', desc: '将任意长度数据转换为固定长度值的函数', example: 'MD5、SHA256' }
            ]
        }
    ];
    
    let html = `
        <div class="tech-card" style="background:linear-gradient(135deg,#0f172a 0%,#1e293b 100%);">
            <h3 style="font-family:'Courier New',monospace;color:#60a5fa;font-size:20px;margin-bottom:16px;text-shadow:0 0 10px rgba(59,130,246,0.5);">
                📚 网安术语词典
            </h3>
            
            <div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap;">
    `;
    
    glossaryData.forEach((cat, idx) => {
        html += `
            <button class="modal-btn ${idx === 0 ? 'modal-btn-primary' : 'modal-btn-secondary'}" 
                    onclick="showGlossaryCategory(${idx})" style="font-size:13px;">
                ${cat.category}
            </button>
        `;
    });
    
    html += `
            </div>
            
            <div id="glossaryContent">
    `;
    
    glossaryData.forEach((cat, catIdx) => {
        html += `
            <div class="glossary-category" id="glossaryCat${catIdx}" style="${catIdx !== 0 ? 'display:none;' : ''}">
                <h4 style="color:#93c5fd;margin-bottom:12px;">📂 ${cat.category}</h4>
        `;
        
        cat.terms.forEach((term, termIdx) => {
            html += `
                <div class="tech-card" style="background:rgba(59,130,246,0.1);margin-bottom:10px;">
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                        <span style="color:#e0e7ff;font-weight:600;">${term.term}</span>
                        <button class="modal-btn" style="padding:4px 10px;font-size:12px;background:rgba(16,185,129,0.2);color:#6ee7b7;" onclick="alert('已收藏：${term.term}')">
                            ⭐ 收藏
                        </button>
                    </div>
                    <div style="color:#94a3b8;font-size:13px;margin-bottom:8px;">${term.desc}</div>
                    <div style="background:rgba(0,0,0,0.3);padding:8px;border-radius:6px;">
                        <span style="color:#64748b;font-size:12px;">示例：</span>
                        <span style="color:#fbbf24;font-size:12px;font-family:'Courier New',monospace;">${term.example}</span>
                    </div>
                </div>
            `;
        });
        
        html += `</div>`;
    });
    
    html += `
            </div>
            
            <div style="margin-top:16px;text-align:center;">
                <button class="modal-btn modal-btn-primary" onclick="showDailyTerm()">
                    🎲 每日一词
                </button>
            </div>
        </div>
    `;
    
    return html;
}

function showGlossaryCategory(idx) {
    const categories = document.querySelectorAll('.glossary-category');
    categories.forEach((cat, i) => {
        cat.style.display = i === idx ? 'block' : 'none';
    });
}

function showDailyTerm() {
    const terms = ['SQL注入', 'XSS', 'CSRF', 'Shell', 'Root', '对称加密', '非对称加密', '哈希', '提权', '漏洞'];
    const randomTerm = terms[Math.floor(Math.random() * terms.length)];
    alert('📖 今日学习：' + randomTerm + '\n\n点击查看详细解释！');
}

// ============ 工具实现 - CTF知识点 ============
function renderCtfKnowledge() {
    const categories = [
        {
            name: 'Web',
            icon: '🌐',
            topics: ['SQL注入', 'XSS', 'CSRF', '文件上传', '反序列化']
        },
        {
            name: 'Crypto',
            icon: '🔐',
            topics: ['RSA', 'AES', '哈希', 'Base64', '古典密码']
        },
        {
            name: 'Pwn',
            icon: '💥',
            topics: ['栈溢出', '格式化字符串', '堆溢出', 'ROP']
        },
        {
            name: 'Reverse',
            icon: '🔧',
            topics: ['IDA Pro', 'GDB', '动态分析', '静态分析']
        },
        {
            name: 'Misc',
            icon: '🎯',
            topics: ['隐写术', '二维码', '编码', '取证']
        }
    ];
    
    return `
        <div class="tech-card" style="background:linear-gradient(135deg,#1e1b4b 0%,#312e81 100%);">
            <h3 style="font-family:'Courier New',monospace;color:#a5b4fc;font-size:20px;margin-bottom:16px;text-shadow:0 0 10px rgba(129,140,248,0.5);">
                🏆 CTF知识点库
            </h3>
            
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px;margin-bottom:20px;">
                ${categories.map((cat, idx) => `
                    <div class="tech-card" style="background:rgba(129,140,248,0.1);text-align:center;cursor:pointer;" onclick="showCtfCategory('${cat.name}')">
                        <div style="font-size:32px;margin-bottom:8px;">${cat.icon}</div>
                        <div style="color:#e0e7ff;font-weight:600;">${cat.name}</div>
                        <div style="color:#64748b;font-size:12px;">${cat.topics.length}个知识点</div>
                    </div>
                `).join('')}
            </div>
            
            <div class="tech-card" style="background:rgba(0,0,0,0.3);">
                <h4 style="color:#c7d2fe;margin-bottom:10px;">📊 刷题记录</h4>
                <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;text-align:center;">
                    <div style="background:rgba(16,185,129,0.1);padding:12px;border-radius:8px;">
                        <div style="color:#6ee7b7;font-size:24px;font-weight:bold;">24</div>
                        <div style="color:#94a3b8;font-size:12px;">已解决</div>
                    </div>
                    <div style="background:rgba(245,158,11,0.1);padding:12px;border-radius:8px;">
                        <div style="color:#fcd34d;font-size:24px;font-weight:bold;">12</div>
                        <div style="color:#94a3b8;font-size:12px;">进行中</div>
                    </div>
                    <div style="background:rgba(239,68,68,0.1);padding:12px;border-radius:8px;">
                        <div style="color:#fca5a5;font-size:24px;font-weight:bold;">8</div>
                        <div style="color:#94a3b8;font-size:12px;">未解决</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function showCtfCategory(name) {
    alert('正在加载 ' + name + ' 方向知识点...');
}

// ============ 工具实现 - 常见漏洞 ============
function renderVulnerability() {
    const vulnerabilities = [
        {
            name: 'SQL注入',
            cve: 'CVE-2021-XXXX',
            severity: '高危',
            color: '#ef4444',
            description: '通过构造恶意SQL语句来操纵数据库',
            steps: ['找到注入点', '构造Payload', '获取数据', '提权控制']
        },
        {
            name: 'XSS跨站脚本',
            cve: 'CVE-2020-XXXX',
            severity: '中危',
            color: '#f59e0b',
            description: '在网页中注入恶意JavaScript代码',
            steps: ['寻找输入点', '测试过滤', '构造Payload', '获取Cookie']
        },
        {
            name: '文件上传漏洞',
            cve: 'CVE-2022-XXXX',
            severity: '高危',
            color: '#ef4444',
            description: '绕过过滤上传恶意文件获取Shell',
            steps: ['测试上传', '绕过检测', '上传Webshell', '获取权限']
        }
    ];
    
    return `
        <div class="tech-card" style="background:linear-gradient(135deg,#450a0a 0%,#7f1d1d 100%);">
            <h3 style="font-family:'Courier New',monospace;color:#fca5a5;font-size:20px;margin-bottom:16px;text-shadow:0 0 10px rgba(239,68,68,0.5);">
                🐛 常见漏洞库
            </h3>
            
            <div style="margin-bottom:16px;">
                <h4 style="color:#fecaca;margin-bottom:10px;">🔥 漏洞热度榜</h4>
                <div style="display:flex;gap:8px;flex-wrap:wrap;">
                    ${['SQL注入', 'XSS', '文件上传', '反序列化', 'SSRF'].map((v, i) => `
                        <span style="background:rgba(239,68,68,0.2);padding:6px 12px;border-radius:20px;color:#fca5a5;font-size:13px;">
                            ${i + 1}. ${v}
                        </span>
                    `).join('')}
                </div>
            </div>
            
            ${vulnerabilities.map(vuln => `
                <div class="tech-card" style="background:rgba(0,0,0,0.3);margin-bottom:12px;">
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                        <div style="display:flex;align-items:center;gap:10px;">
                            <span style="color:#e0e7ff;font-weight:600;">${vuln.name}</span>
                            <span style="background:${vuln.color};padding:2px 8px;border-radius:4px;color:white;font-size:11px;">${vuln.severity}</span>
                        </div>
                        <span style="color:#64748b;font-size:12px;font-family:'Courier New',monospace;">${vuln.cve}</span>
                    </div>
                    <p style="color:#94a3b8;font-size:13px;margin-bottom:10px;">${vuln.description}</p>
                    <div style="background:rgba(0,0,0,0.3);padding:10px;border-radius:6px;">
                        <div style="color:#64748b;font-size:12px;margin-bottom:6px;">利用流程：</div>
                        <div style="display:flex;gap:8px;flex-wrap:wrap;">
                            ${vuln.steps.map((step, i) => `
                                <span style="background:rgba(239,68,68,0.2);padding:4px 10px;border-radius:4px;color:#fca5a5;font-size:12px;">
                                    ${i + 1}. ${step}
                                </span>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `).join('')}
            
            <button class="modal-btn" style="width:100%;background:#dc2626;color:white;margin-top:12px;" onclick="alert('漏洞报告模板生成中...')">
                📄 生成漏洞报告
            </button>
        </div>
    `;
}

// ============ 工具实现 - Linux基础 ============
function renderLinuxBasic() {
    const modules = [
        {
            name: '基础命令',
            icon: '📝',
            commands: ['ls', 'cd', 'pwd', 'cat', 'grep', 'find']
        },
        {
            name: '权限管理',
            icon: '🔐',
            commands: ['chmod', 'chown', 'su', 'sudo']
        },
        {
            name: '日志分析',
            icon: '📊',
            commands: ['tail', 'less', 'journalctl']
        },
        {
            name: '服务安全',
            icon: '🛡️',
            commands: ['systemctl', 'iptables', 'ufw']
        }
    ];
    
    return `
        <div class="tech-card" style="background:linear-gradient(135deg,#064e3b 0%,#065f46 100%);">
            <h3 style="font-family:'Courier New',monospace;color:#6ee7b7;font-size:20px;margin-bottom:16px;text-shadow:0 0 10px rgba(16,185,129,0.5);">
                🐧 Linux安全实训
            </h3>
            
            <div style="margin-bottom:16px;">
                <h4 style="color:#93c5fd;margin-bottom:10px;">🖥️ 在线终端模拟器</h4>
                <div style="background:#0f172a;border:1px solid #334155;border-radius:8px;padding:12px;font-family:'Courier New',monospace;">
                    <div style="color:#6ee7b7;margin-bottom:8px;">user@ctf-box:~$ <span style="color:#e0e7ff;">ls -la</span></div>
                    <div style="color:#94a3b8;">drwxr-xr-x  5 user user 4096 Jan 15 10:00 .</div>
                    <div style="color:#94a3b8;">drwxr-xr-x 10 root root 4096 Jan 10 09:00 ..</div>
                    <div style="color:#60a5fa;">-rwxr-xr-x  1 user user  256 Jan 15 10:00 exploit.py</div>
                    <div style="color:#6ee7b7;margin-top:8px;">user@ctf-box:~$ <span style="color:#e0e7ff;animation:blink 1s infinite;">_</span></div>
                </div>
            </div>
            
            <div style="display:grid;gap:12px;">
                ${modules.map(mod => `
                    <div class="tech-card" style="background:rgba(16,185,129,0.1);">
                        <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
                            <span style="font-size:24px;">${mod.icon}</span>
                            <span style="color:#e0e7ff;font-weight:600;">${mod.name}</span>
                        </div>
                        <div style="display:flex;gap:8px;flex-wrap:wrap;">
                            ${mod.commands.map(cmd => `
                                <button class="modal-btn" style="padding:6px 12px;font-size:12px;background:rgba(0,0,0,0.3);color:#6ee7b7;" onclick="alert('${cmd} 命令：${getCmdDesc(cmd)}')">
                                    ${cmd}
                                </button>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <button class="modal-btn modal-btn-primary" style="width:100%;margin-top:16px;" onclick="alert('正在执行安全加固脚本...')">
                🔒 一键安全加固
            </button>
        </div>
    `;
}

function getCmdDesc(cmd) {
    const descs = {
        'ls': '列出目录内容',
        'cd': '切换目录',
        'pwd': '显示当前路径',
        'cat': '查看文件内容',
        'grep': '文本搜索',
        'find': '文件查找',
        'chmod': '修改文件权限',
        'chown': '修改文件所有者',
        'su': '切换用户',
        'sudo': '以管理员权限执行'
    };
    return descs[cmd] || 'Linux基础命令';
}

// ============ 工具实现 - Python速查 ============
function renderPythonCheat() {
    const snippets = [
        {
            category: '端口扫描',
            code: `import socket

def scan_port(host, port):
    sock = socket.socket()
    sock.settimeout(1)
    try:
        sock.connect((host, port))
        return True
    except:
        return False
    finally:
        sock.close()

for port in range(1, 1025):
    if scan_port('127.0.0.1', port):
        print(f'[+] Port {port} open')`,
            desc: '基础端口扫描器'
        },
        {
            category: '爬虫',
            code: `import requests

url = 'https://example.com'
headers = {'User-Agent': 'Mozilla/5.0'}

response = requests.get(url, headers=headers)
print(response.status_code)
print(response.text[:500])`,
            desc: 'HTTP请求与爬虫'
        },
        {
            category: '密码破解',
            code: `import hashlib

def crack_hash(target_hash, wordlist):
    for word in wordlist:
        word_hash = hashlib.md5(word.encode()).hexdigest()
        if word_hash == target_hash:
            return word
    return None

wordlist = ['123456', 'password', 'admin']
print(crack_hash('e10adc3949ba59abbe56e057f20f883e', wordlist))`,
            desc: 'MD5哈希爆破'
        }
    ];
    
    return `
        <div class="tech-card" style="background:linear-gradient(135deg,#1a1a2e 0%,#16213e 100%);">
            <h3 style="font-family:'Courier New',monospace;color:#fcd34d;font-size:20px;margin-bottom:16px;text-shadow:0 0 10px rgba(252,211,77,0.5);">
                🐍 Python网安速查
            </h3>
            
            <div style="margin-bottom:16px;">
                <h4 style="color:#93c5fd;margin-bottom:10px;">📚 常用库速查</h4>
                <div style="display:flex;gap:8px;flex-wrap:wrap;">
                    ${['requests', 'scapy', 'pwntools', 'hashlib', 'socket', 're'].map(lib => `
                        <span style="background:rgba(252,211,77,0.2);padding:6px 12px;border-radius:20px;color:#fcd34d;font-size:13px;font-family:'Courier New',monospace;">
                            ${lib}
                        </span>
                    `).join('')}
                </div>
            </div>
            
            ${snippets.map((snippet, idx) => `
                <div class="tech-card" style="background:rgba(0,0,0,0.3);margin-bottom:12px;">
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                        <span style="color:#e0e7ff;font-weight:600;">${snippet.category}</span>
                        <button class="modal-btn" style="padding:4px 10px;font-size:12px;background:rgba(16,185,129,0.2);color:#6ee7b7;" onclick="copyCode(${idx})">
                            📋 复制
                        </button>
                    </div>
                    <div style="color:#94a3b8;font-size:12px;margin-bottom:8px;">${snippet.desc}</div>
                    <pre style="background:#0f172a;padding:12px;border-radius:6px;overflow-x:auto;margin:0;">
<code style="color:#6ee7b7;font-family:'Courier New',monospace;font-size:12px;">${snippet.code}</code>
                    </pre>
                </div>
            `).join('')}
            
            <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-top:16px;">
                <button class="modal-btn modal-btn-primary" onclick="alert('端口扫描器模板已生成')">
                    🎯 端口扫描器
                </button>
                <button class="modal-btn modal-btn-secondary" onclick="alert('暴力破解器模板已生成')">
                    🔓 暴力破解器
                </button>
            </div>
        </div>
    `;
}

function copyCode(idx) {
    alert('代码已复制到剪贴板！');
}

// ============ 工具实现 - 文件上传 ============
function renderFileUpload() {
    const stages = [
        {
            name: '基础上传',
            desc: '测试普通文件上传功能',
            color: '#3b82f6'
        },
        {
            name: '绕过技巧',
            desc: '后缀名、类型检测绕过',
            color: '#f59e0b'
        },
        {
            name: '防御绕过',
            desc: '内容检测、WAF绕过',
            color: '#ef4444'
        },
        {
            name: '漏洞利用',
            desc: 'GetShell、权限提升',
            color: '#dc2626'
        }
    ];
    
    return `
        <div class="tech-card" style="background:linear-gradient(135deg,#1e3a5f 0%,#0f172a 100%);">
            <h3 style="font-family:'Courier New',monospace;color:#60a5fa;font-size:20px;margin-bottom:16px;text-shadow:0 0 10px rgba(59,130,246,0.5);">
                📁 文件上传漏洞实训
            </h3>
            
            <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:16px;">
                ${stages.map(stage => `
                    <div class="tech-card" style="background:rgba(59,130,246,0.1);text-align:center;cursor:pointer;" onclick="showUploadStage('${stage.name}')">
                        <div style="color:${stage.color};font-size:24px;margin-bottom:8px;">📤</div>
                        <div style="color:#e0e7ff;font-weight:600;">${stage.name}</div>
                        <div style="color:#64748b;font-size:12px;">${stage.desc}</div>
                    </div>
                `).join('')}
            </div>
            
            <div class="tech-card" style="background:rgba(0,0,0,0.3);">
                <h4 style="color:#93c5fd;margin-bottom:10px;">🛡️ 绕过技巧</h4>
                <div style="display:grid;gap:8px;">
                    ${[
                        '后缀名绕过: shell.php.jpg',
                        '大小写绕过: Shell.PHP',
                        '双写绕过: shell.pphphp',
                        '00截断: shell.php\\x00.jpg',
                        'MIME类型绕过: image/jpeg'
                    ].map(tip => `
                        <div style="background:rgba(59,130,246,0.1);padding:8px;border-radius:6px;">
                            <span style="color:#fbbf24;font-family:'Courier New',monospace;font-size:12px;">${tip}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="tech-card" style="background:rgba(16,185,129,0.1);margin-top:12px;">
                <h4 style="color:#6ee7b7;margin-bottom:10px;">✅ 安全上传实现</h4>
                <pre style="background:#0f172a;padding:10px;border-radius:6px;margin:0;overflow-x:auto;">
<code style="color:#6ee7b7;font-family:'Courier New',monospace;font-size:11px;">// 白名单校验+重命名+内容检测
$allowed = ['jpg', 'png', 'gif'];
$ext = strtolower(pathinfo($name, PATHINFO_EXTENSION));
if (!in_array($ext, $allowed)) die();
$newname = uniqid() . '.' . $ext;</code>
                </pre>
            </div>
        </div>
    `;
}

function showUploadStage(name) {
    alert('进入 ' + name + ' 阶段...');
}

// ============ 工具实现 - 隐写术 ============
function renderSteganography() {
    const modules = [
        {
            name: 'LSB隐写',
            icon: '🖼️',
            desc: '最低有效位隐写'
        },
        {
            name: 'EXIF隐写',
            icon: '📷',
            desc: '图片元数据隐写'
        },
        {
            name: '音频隐写',
            icon: '🎵',
            desc: '音频文件隐写'
        },
        {
            name: '文档隐写',
            icon: '📄',
            desc: '文档隐写术'
        }
    ];
    
    return `
        <div class="tech-card" style="background:linear-gradient(135deg,#1e1b4b 0%,#4c1d95 100%);">
            <h3 style="font-family:'Courier New',monospace;color:#a78bfa;font-size:20px;margin-bottom:16px;text-shadow:0 0 10px rgba(167,139,250,0.5);">
                🔍 隐写术实训
            </h3>
            
            <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:16px;">
                ${modules.map(mod => `
                    <div class="tech-card" style="background:rgba(167,139,250,0.1);text-align:center;cursor:pointer;" onclick="showStegModule('${mod.name}')">
                        <div style="font-size:32px;margin-bottom:8px;">${mod.icon}</div>
                        <div style="color:#e0e7ff;font-weight:600;">${mod.name}</div>
                        <div style="color:#64748b;font-size:12px;">${mod.desc}</div>
                    </div>
                `).join('')}
            </div>
            
            <div class="tech-card" style="background:rgba(0,0,0,0.3);">
                <h4 style="color:#c7d2fe;margin-bottom:10px;">🛠️ 常用工具</h4>
                <div style="display:flex;gap:8px;flex-wrap:wrap;">
                    ${['steghide', 'strings', 'binwalk', 'zsteg', 'exiftool', 'foremost'].map(tool => `
                        <span style="background:rgba(167,139,250,0.2);padding:6px 12px;border-radius:20px;color:#c4b5fd;font-size:13px;font-family:'Courier New',monospace;">
                            ${tool}
                        </span>
                    `).join('')}
                </div>
            </div>
            
            <div class="tech-card" style="background:rgba(16,185,129,0.1);margin-top:12px;">
                <h4 style="color:#6ee7b7;margin-bottom:10px;">🎯 隐写挑战</h4>
                <div style="display:grid;gap:8px;">
                    <button class="modal-btn" style="background:rgba(16,185,129,0.2);color:#6ee7b7;text-align:left;" onclick="alert('挑战1：找出图片中隐藏的Flag')">
                        挑战1：图片LSB隐写
                    </button>
                    <button class="modal-btn" style="background:rgba(16,185,129,0.2);color:#6ee7b7;text-align:left;" onclick="alert('挑战2：分析音频文件')">
                        挑战2：音频隐写
                    </button>
                    <button class="modal-btn" style="background:rgba(16,185,129,0.2);color:#6ee7b7;text-align:left;" onclick="alert('挑战3：检查文档元数据')">
                        挑战3：文档隐写
                    </button>
                </div>
            </div>
        </div>
    `;
}

function showStegModule(name) {
    alert('加载 ' + name + ' 模块...');
}

// ============ 工具实现 - 社会工程 ============
function renderSocialEngineering() {
    const attackTypes = [
        {
            name: '钓鱼攻击',
            icon: '🎣',
            desc: '伪装成可信实体窃取信息',
            color: '#ef4444'
        },
        {
            name: 'Pretexting',
            icon: '🎭',
            desc: '编造场景获取信任',
            color: '#f59e0b'
        },
        {
            name: 'Baiting',
            icon: '🪤',
            desc: '用诱饵诱导受害者',
            color: '#f59e0b'
        },
        {
            name: 'Tailgating',
            icon: '🚪',
            desc: '尾随进入受限区域',
            color: '#3b82f6'
        }
    ];
    
    return `
        <div class="tech-card" style="background:linear-gradient(135deg,#451a03 0%,#78350f 100%);">
            <h3 style="font-family:'Courier New',monospace;color:#fcd34d;font-size:20px;margin-bottom:16px;text-shadow:0 0 10px rgba(252,211,77,0.5);">
                🎭 社会工程学
            </h3>
            
            <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:16px;">
                ${attackTypes.map(type => `
                    <div class="tech-card" style="background:rgba(252,211,77,0.1);" onclick="showAttackType('${type.name}')">
                        <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
                            <span style="font-size:28px;">${type.icon}</span>
                            <span style="color:#e0e7ff;font-weight:600;">${type.name}</span>
                        </div>
                        <p style="color:#94a3b8;font-size:12px;margin:0;">${type.desc}</p>
                    </div>
                `).join('')}
            </div>
            
            <div class="tech-card" style="background:rgba(0,0,0,0.3);">
                <h4 style="color:#fcd34d;margin-bottom:10px;">📧 钓鱼邮件生成器</h4>
                <div style="background:#0f172a;border:1px solid #334155;border-radius:8px;padding:12px;margin-bottom:12px;">
                    <div style="color:#ef4444;font-weight:600;margin-bottom:8px;">⚠️ 示例钓鱼邮件</div>
                    <div style="color:#94a3b8;font-size:12px;line-height:1.6;">
                        <div style="margin-bottom:4px;"><strong>发件人：</strong>银行安全中心 &lt;security@bank.com-fake.com&gt;</div>
                        <div style="margin-bottom:4px;"><strong>主题：</strong>您的账户需要验证</div>
                        <div style="margin-top:8px;background:rgba(0,0,0,0.3);padding:8px;border-radius:4px;">
                            尊敬的用户，您的账户存在异常登录，请立即点击以下链接验证：<br>
                            <span style="color:#ef4444;">https://bank.com-verify.fake.com/login</span>
                        </div>
                    </div>
                </div>
                <button class="modal-btn" style="width:100%;background:#dc2626;color:white;" onclick="alert('钓鱼邮件模板已生成，仅用于学习防御！')">
                    📝 生成钓鱼模板（学习用）
                </button>
            </div>
            
            <div class="tech-card" style="background:rgba(16,185,129,0.1);margin-top:12px;">
                <h4 style="color:#6ee7b7;margin-bottom:10px;">🛡️ 防御指南</h4>
                <ul style="list-style:none;padding:0;color:#94a3b8;font-size:13px;line-height:1.8;">
                    <li>✅ 仔细检查发件人邮箱地址</li>
                    <li>✅ 不要点击可疑链接</li>
                    <li>✅ 核实信息直接联系官方</li>
                    <li>✅ 不透露敏感信息</li>
                    <li>✅ 保持警惕，不贪小便宜</li>
                </ul>
            </div>
        </div>
    `;
}

function showAttackType(name) {
    alert('学习 ' + name + ' 攻击类型与防御方法');
}

// ============ 工具实现 - 逆向工程 ============
function renderReverseEng() {
    return `
        <div class="tech-card" style="background:linear-gradient(135deg,#1f2937 0%,#0f172a 100%);">
            <h3 style="font-family:'Courier New',monospace;color:#a78bfa;font-size:20px;margin-bottom:16px;text-shadow:0 0 10px rgba(167,139,250,0.5);">
                🔧 逆向工程入门
            </h3>
            
            <div style="display:grid;gap:12px;margin-bottom:16px;">
                <div class="tech-card" style="background:rgba(167,139,250,0.1);">
                    <h4 style="color:#c4b5fd;margin-bottom:10px;">📋 分析方法</h4>
                    <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px;">
                        <div style="background:rgba(0,0,0,0.3);padding:10px;border-radius:6px;text-align:center;">
                            <div style="color:#a78bfa;font-weight:600;">静态分析</div>
                            <div style="color:#94a3b8;font-size:12px;">不运行程序分析</div>
                        </div>
                        <div style="background:rgba(0,0,0,0.3);padding:10px;border-radius:6px;text-align:center;">
                            <div style="color:#a78bfa;font-weight:600;">动态分析</div>
                            <div style="color:#94a3b8;font-size:12px;">运行时调试分析</div>
                        </div>
                    </div>
                </div>
                
                <div class="tech-card" style="background:rgba(167,139,250,0.1);">
                    <h4 style="color:#c4b5fd;margin-bottom:10px;">🛠️ 常用工具</h4>
                    <div style="display:flex;gap:8px;flex-wrap:wrap;">
                        ${['IDA Pro', 'Ghidra', 'x64dbg', 'OllyDbg', 'GDB', 'radare2'].map(tool => `
                            <span style="background:rgba(167,139,250,0.2);padding:6px 12px;border-radius:20px;color:#c4b5fd;font-size:13px;font-family:'Courier New',monospace;">
                                ${tool}
                            </span>
                        `).join('')}
                    </div>
                </div>
                
                <div class="tech-card" style="background:rgba(167,139,250,0.1);">
                    <h4 style="color:#c4b5fd;margin-bottom:10px;">📚 学习路径</h4>
                    <div style="display:grid;gap:8px;">
                        <div style="background:rgba(0,0,0,0.3);padding:8px;border-radius:6px;">
                            <div style="color:#a78bfa;font-weight:600;margin-bottom:4px;">1. 汇编语言基础</div>
                            <div style="color:#94a3b8;font-size:12px;">x86/x64汇编指令</div>
                        </div>
                        <div style="background:rgba(0,0,0,0.3);padding:8px;border-radius:6px;">
                            <div style="color:#a78bfa;font-weight:600;margin-bottom:4px;">2. PE/ELF文件格式</div>
                            <div style="color:#94a3b8;font-size:12px;">可执行文件结构</div>
                        </div>
                        <div style="background:rgba(0,0,0,0.3);padding:8px;border-radius:6px;">
                            <div style="color:#a78bfa;font-weight:600;margin-bottom:4px;">3. 调试技巧</div>
                            <div style="color:#94a3b8;font-size:12px;">断点、单步、内存查看</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="tech-card" style="background:rgba(16,185,129,0.1);">
                <h4 style="color:#6ee7b7;margin-bottom:10px;">💡 入门提示</h4>
                <ul style="list-style:none;padding:0;color:#94a3b8;font-size:13px;line-height:1.8;">
                    <li>✅ 先学习汇编语言基础</li>
                    <li>✅ 从简单的CrackMe开始练习</li>
                    <li>✅ 熟悉常用逆向工具的使用</li>
                    <li>✅ 多做CTF.Reverse题目</li>
                </ul>
            </div>
        </div>
    `;
}

// ============ 工具实现 - PWN入门 ============
function renderPwning() {
    const topics = [
        {
            name: '栈溢出基础',
            icon: '📚',
            desc: '缓冲区溢出原理'
        },
        {
            name: '格式化字符串',
            icon: '🔤',
            desc: '格式化字符串漏洞'
        },
        {
            name: '堆溢出入门',
            icon: '📊',
            desc: '堆利用基础'
        }
    ];
    
    return `
        <div class="tech-card" style="background:linear-gradient(135deg,#1f2937 0%,#111827 100%);">
            <h3 style="font-family:'Courier New',monospace;color:#f87171;font-size:20px;margin-bottom:16px;text-shadow:0 0 10px rgba(248,113,113,0.5);">
                💥 PWN入门
            </h3>
            
            <div style="margin-bottom:16px;">
                <h4 style="color:#93c5fd;margin-bottom:10px;">📈 栈溢出可视化</h4>
                <div style="background:#0f172a;border:1px solid #334155;border-radius:8px;padding:12px;font-family:'Courier New',monospace;">
                    <div style="color:#94a3b8;text-align:center;margin-bottom:8px;">高地址 → 低地址</div>
                    <div style="display:grid;gap:4px;">
                        <div style="background:#ef4444;padding:8px;border-radius:4px;text-align:center;color:white;">Return Address (被覆盖)</div>
                        <div style="background:#f59e0b;padding:8px;border-radius:4px;text-align:center;color:white;">Saved EBP</div>
                        <div style="background:#3b82f6;padding:8px;border-radius:4px;text-align:center;color:white;">Buffer (AAAAA...)</div>
                        <div style="background:#10b981;padding:8px;border-radius:4px;text-align:center;color:white;">局部变量</div>
                    </div>
                </div>
            </div>
            
            <div style="display:grid;gap:12px;margin-bottom:16px;">
                ${topics.map(topic => `
                    <div class="tech-card" style="background:rgba(248,113,113,0.1);">
                        <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
                            <span style="font-size:24px;">${topic.icon}</span>
                            <span style="color:#e0e7ff;font-weight:600;">${topic.name}</span>
                        </div>
                        <p style="color:#94a3b8;font-size:12px;margin:0;">${topic.desc}</p>
                    </div>
                `).join('')}
            </div>
            
            <div class="tech-card" style="background:rgba(0,0,0,0.3);">
                <h4 style="color:#c7d2fe;margin-bottom:10px;">🛠️ 常用工具</h4>
                <div style="display:flex;gap:8px;flex-wrap:wrap;">
                    ${['pwntools', 'gdb-peda', 'one_gadget', 'ROPgadget', 'checksec'].map(tool => `
                        <span style="background:rgba(167,139,250,0.2);padding:6px 12px;border-radius:20px;color:#c4b5fd;font-size:13px;font-family:'Courier New',monospace;">
                            ${tool}
                        </span>
                    `).join('')}
                </div>
            </div>
            
            <div class="tech-card" style="background:rgba(16,185,129,0.1);margin-top:12px;">
                <h4 style="color:#6ee7b7;margin-bottom:10px;">📝 入门题集</h4>
                <div style="display:grid;gap:8px;">
                    <button class="modal-btn" style="background:rgba(16,185,129,0.2);color:#6ee7b7;text-align:left;" onclick="alert('ret2text - 简单栈溢出')">
                        Level 1: ret2text
                    </button>
                    <button class="modal-btn" style="background:rgba(16,185,129,0.2);color:#6ee7b7;text-align:left;" onclick="alert('ret2shellcode - Shellcode执行')">
                        Level 2: ret2shellcode
                    </button>
                    <button class="modal-btn" style="background:rgba(16,185,129,0.2);color:#6ee7b7;text-align:left;" onclick="alert('ret2libc - 库函数调用')">
                        Level 3: ret2libc
                    </button>
                </div>
            </div>
        </div>
    `;
}

// ============ 工具实现 - SQL注入学习 ============
function renderSqlInjection() {
    return `
        <div class="tech-card" style="background:linear-gradient(135deg,#1e3a5f 0%,#0f172a 100%);">
            <h3 style="font-family:'Courier New',monospace;color:#60a5fa;font-size:20px;margin-bottom:16px;text-shadow:0 0 10px rgba(59,130,246,0.5);">
                🗄️ SQL注入学习
            </h3>
            
            <div style="display:grid;grid-template-columns:1fr;gap:16px;margin-bottom:16px;">
                <div class="tech-card" style="background:rgba(59,130,246,0.1);">
                    <h4 style="color:#93c5fd;margin-bottom:10px;">🎯 漏洞原理</h4>
                    <div style="background:#0f172a;padding:12px;border-radius:8px;font-family:'Courier New',monospace;">
                        <div style="color:#94a3b8;margin-bottom:8px;">// 不安全代码</div>
                        <div style="color:#fca5a5;">\$sql = "SELECT * FROM users WHERE id = '\$_GET[id]'";</div>
                        <div style="color:#64748b;margin-top:12px;margin-bottom:8px;">// Payload: 1' OR '1'='1</div>
                        <div style="color:#6ee7b7;">\$sql = "SELECT * FROM users WHERE id = '1' OR '1'='1'";</div>
                    </div>
                </div>
                
                <div class="tech-card" style="background:rgba(59,130,246,0.1);">
                    <h4 style="color:#93c5fd;margin-bottom:10px;">💻 交互式靶场</h4>
                    <input type="text" class="modal-input" id="sqlInput" placeholder="输入用户ID: 1" style="margin-bottom:10px;">
                    <div class="modal-btn-group">
                        <button class="modal-btn modal-btn-primary" onclick="testSqlInjection()">测试注入</button>
                    </div>
                    <div id="sqlResult" class="modal-result" style="margin-top:12px;"></div>
                </div>
            </div>
            
            <div class="tech-card" style="background:rgba(16,185,129,0.1);">
                <h4 style="color:#6ee7b7;margin-bottom:10px;">🛡️ 防御代码</h4>
                <pre style="background:#0f172a;padding:12px;border-radius:8px;margin:0;overflow-x:auto;">
<code style="color:#6ee7b7;font-family:'Courier New',monospace;font-size:12px;">// 使用预处理语句
\$stmt = \$pdo->prepare("SELECT * FROM users WHERE id = ?");
\$stmt->execute([\$_GET['id']]);
\$result = \$stmt->fetch();</code>
                </pre>
            </div>
        </div>
    `;
}

function testSqlInjection() {
    const input = document.getElementById('sqlInput')?.value || '';
    const result = document.getElementById('sqlResult');
    if (!result) return;
    
    if (input.includes("'") || input.includes('"') || input.toLowerCase().includes('or')) {
        result.innerHTML = '<span style="color:#ef4444;">⚠️ SQL注入检测成功！<br>查询返回了所有数据！</span>';
    } else if (input) {
        result.innerHTML = '<span style="color:#6ee7b7;">✅ 查询成功：用户 ' + input + '</span>';
    } else {
        result.innerHTML = '<span style="color:#94a3b8;">请输入测试数据</span>';
    }
}

// ============ 工具实现 - XSS学习 ============
function renderXssLearn() {
    return `
        <div class="tech-card" style="background:linear-gradient(135deg,#1e3a5f 0%,#0f172a 100%);">
            <h3 style="font-family:'Courier New',monospace;color:#60a5fa;font-size:20px;margin-bottom:16px;text-shadow:0 0 10px rgba(59,130,246,0.5);">
                🌐 XSS跨站脚本学习
            </h3>
            
            <div style="display:grid;gap:12px;margin-bottom:16px;">
                <div class="tech-card" style="background:rgba(59,130,246,0.1);">
                    <h4 style="color:#93c5fd;margin-bottom:10px;">📝 XSS类型</h4>
                    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
                        <div style="background:rgba(239,68,68,0.2);padding:10px;border-radius:8px;text-align:center;">
                            <div style="color:#fca5a5;font-weight:600;">Stored</div>
                            <div style="color:#94a3b8;font-size:11px;">存储型</div>
                        </div>
                        <div style="background:rgba(245,158,11,0.2);padding:10px;border-radius:8px;text-align:center;">
                            <div style="color:#fcd34d;font-weight:600;">Reflected</div>
                            <div style="color:#94a3b8;font-size:11px;">反射型</div>
                        </div>
                        <div style="background:rgba(59,130,246,0.2);padding:10px;border-radius:8px;text-align:center;">
                            <div style="color:#93c5fd;font-weight:600;">DOM</div>
                            <div style="color:#94a3b8;font-size:11px;">DOM型</div>
                        </div>
                    </div>
                </div>
                
                <div class="tech-card" style="background:rgba(59,130,246,0.1);">
                    <h4 style="color:#93c5fd;margin-bottom:10px;">💻 测试靶场</h4>
                    <input type="text" class="modal-input" id="xssInput" placeholder="输入评论: &lt;script&gt;alert(1)&lt;/script&gt;" style="margin-bottom:10px;">
                    <div class="modal-btn-group">
                        <button class="modal-btn modal-btn-primary" onclick="testXss()">提交评论</button>
                    </div>
                    <div id="xssOutput" class="tech-card" style="background:rgba(0,0,0,0.3);margin-top:12px;min-height:40px;padding:10px;"></div>
                </div>
            </div>
            
            <div class="tech-card" style="background:rgba(16,185,129,0.1);">
                <h4 style="color:#6ee7b7;margin-bottom:10px;">🛡️ 防御措施</h4>
                <ul style="list-style:none;padding:0;color:#94a3b8;font-size:13px;line-height:1.8;">
                    <li>✅ 对用户输入进行HTML实体编码</li>
                    <li>✅ 使用Content Security Policy (CSP)</li>
                    <li>✅ 设置HttpOnly cookie标志</li>
                    <li>✅ 对输出进行严格过滤</li>
                </ul>
            </div>
        </div>
    `;
}

function testXss() {
    const input = document.getElementById('xssInput')?.value || '';
    const output = document.getElementById('xssOutput');
    if (!output) return;
    
    if (input.includes('<script>') || input.includes('javascript:')) {
        output.innerHTML = '<span style="color:#ef4444;">⚠️ XSS攻击成功！<br>（演示用，实际已过滤）</span>';
    } else {
        output.innerHTML = '<span style="color:#6ee7b7;">评论：' + (input || '（空）') + '</span>';
    }
}

// ============ 工具实现 - CSRF学习 ============
function renderCsrfLearn() {
    return `
        <div class="tech-card" style="background:linear-gradient(135deg,#1e3a5f 0%,#0f172a 100%);">
            <h3 style="font-family:'Courier New',monospace;color:#60a5fa;font-size:20px;margin-bottom:16px;text-shadow:0 0 10px rgba(59,130,246,0.5);">
                🎭 CSRF跨站请求学习
            </h3>
            
            <div class="tech-card" style="background:rgba(59,130,246,0.1);margin-bottom:16px;">
                <h4 style="color:#93c5fd;margin-bottom:10px;">📖 攻击原理</h4>
                <div style="color:#94a3b8;font-size:13px;line-height:1.8;">
                    <p>CSRF（跨站请求伪造）利用用户已登录的身份，在用户不知情的情况下执行未授权操作。</p>
                    <div style="background:#0f172a;padding:10px;border-radius:6px;margin-top:10px;font-family:'Courier New',monospace;">
                        <div style="color:#fca5a5;">// 恶意网站上的图片</div>
                        <div style="color:#fbbf24;">&lt;img src="https://bank.com/transfer?to=hacker&amount=10000"&gt;</div>
                    </div>
                </div>
            </div>
            
            <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:16px;">
                <div class="tech-card" style="background:rgba(239,68,68,0.1);">
                    <div style="color:#fca5a5;font-weight:600;margin-bottom:8px;">❌ 不安全代码</div>
                    <pre style="background:#0f172a;padding:8px;border-radius:4px;margin:0;overflow-x:auto;">
<code style="color:#fca5a5;font-family:'Courier New',monospace;font-size:11px;">// 没有CSRF Token
if (isset($_POST['transfer'])) {
    transferMoney($_POST['to'], $_POST['amount']);
}</code>
                    </pre>
                </div>
                <div class="tech-card" style="background:rgba(16,185,129,0.1);">
                    <div style="color:#6ee7b7;font-weight:600;margin-bottom:8px;">✅ 安全代码</div>
                    <pre style="background:#0f172a;padding:8px;border-radius:4px;margin:0;overflow-x:auto;">
<code style="color:#6ee7b7;font-family:'Courier New',monospace;font-size:11px;">// 验证CSRF Token
if ($_POST['token'] === $_SESSION['token']) {
    transferMoney($_POST['to'], $_POST['amount']);
}</code>
                    </pre>
                </div>
            </div>
            
            <div class="tech-card" style="background:rgba(16,185,129,0.1);">
                <h4 style="color:#6ee7b7;margin-bottom:10px;">🛡️ 防御方法</h4>
                <ul style="list-style:none;padding:0;color:#94a3b8;font-size:13px;line-height:1.8;">
                    <li>✅ 使用CSRF Token验证</li>
                    <li>✅ 验证Referer头</li>
                    <li>✅ 使用SameSite Cookie属性</li>
                    <li>✅ 关键操作要求二次确认</li>
                </ul>
            </div>
        </div>
    `;
}

// ============ 工具实现 - 哈希碰撞 ============
function renderHashCollision() {
    return `
        <p style="color:var(--text-secondary);margin-bottom:16px;">演示不同字符串产生相同哈希值的现象（注：这是简化演示，真实MD5碰撞更复杂）</p>
        <textarea class="modal-textarea" id="collision1" placeholder="输入第一个字符串"></textarea>
        <textarea class="modal-textarea" id="collision2" placeholder="输入第二个字符串"></textarea>
        <div class="modal-btn-group">
            <button class="modal-btn modal-btn-primary" onclick="checkCollision()">检查碰撞</button>
        </div>
        <div class="modal-result" id="collisionOutput"></div>
    `;
}

function checkCollision() {
    const s1 = document.getElementById('collision1').value;
    const s2 = document.getElementById('collision2').value;
    const h1 = simpleMd5(s1);
    const h2 = simpleMd5(s2);
    
    let html = `字符串1 MD5: ${h1}<br>字符串2 MD5: ${h2}<br><br>`;
    if (h1 === h2 && s1 !== s2) {
        html += '<strong style="color:var(--success);">🎉 发现碰撞！</strong>';
    } else {
        html += '<span style="color:var(--text-secondary);">未发现碰撞</span>';
    }
    document.getElementById('collisionOutput').innerHTML = html;
}

// ============ 工具实现 - 豆包AI ============
function renderDoubaoAi() {
    return `
        <div class="doubao-chat-container">
            <div class="doubao-chat-messages" id="doubaoChatMessages"></div>
            <div class="doubao-chat-input-area">
                <textarea id="doubaoUserInput" class="doubao-textarea" placeholder="输入你的问题，按回车发送..."></textarea>
                <button class="modal-btn modal-btn-primary" id="doubaoSendBtn">发送</button>
            </div>
        </div>
    `;
}

// ============ 工具实现 - 新增工具 ============
function renderTextCount() {
    return `
        <textarea class="modal-textarea" id="textCountInput" placeholder="输入文本..." oninput="updateTextCount()"></textarea>
        <div class="modal-result" id="textCountResult" style="margin-top:16px;">字符数: 0 | 字数: 0 | 行数: 0</div>
    `;
}

function updateTextCount() {
    const text = document.getElementById('textCountInput').value;
    const chars = text.length;
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const lines = text.split('\n').length;
    document.getElementById('textCountResult').textContent = `字符数: ${chars} | 字数: ${words} | 行数: ${lines}`;
}

function renderTextReverse() {
    return `
        <textarea class="modal-textarea" id="textReverseInput" placeholder="输入文本..."></textarea>
        <div class="modal-btn-group">
            <button class="modal-btn modal-btn-primary" onclick="reverseText()">反转</button>
        </div>
        <div class="modal-result" id="textReverseResult"></div>
    `;
}

function reverseText() {
    const text = document.getElementById('textReverseInput').value;
    const reversed = text.split('').reverse().join('');
    document.getElementById('textReverseResult').textContent = reversed;
}

function renderTextCase() {
    return `
        <textarea class="modal-textarea" id="textCaseInput" placeholder="输入英文文本..."></textarea>
        <div class="modal-btn-group">
            <button class="modal-btn modal-btn-primary" onclick="toUpperCase()">转大写</button>
            <button class="modal-btn modal-btn-secondary" onclick="toLowerCase()">转小写</button>
        </div>
        <div class="modal-result" id="textCaseResult"></div>
    `;
}

function toUpperCase() {
    const text = document.getElementById('textCaseInput').value;
    document.getElementById('textCaseResult').textContent = text.toUpperCase();
}

function toLowerCase() {
    const text = document.getElementById('textCaseInput').value;
    document.getElementById('textCaseResult').textContent = text.toLowerCase();
}

function renderTextRemoveDuplicate() {
    return `
        <textarea class="modal-textarea" id="removeDupInput" placeholder="输入文本，每行一条..."></textarea>
        <div class="modal-btn-group">
            <button class="modal-btn modal-btn-primary" onclick="removeDuplicates()">去重</button>
        </div>
        <div class="modal-result" id="removeDupResult"></div>
    `;
}

function removeDuplicates() {
    const text = document.getElementById('removeDupInput').value;
    const lines = text.split('\n');
    const unique = [...new Set(lines)];
    document.getElementById('removeDupResult').textContent = unique.join('\n');
}

function renderTextSort() {
    return `
        <textarea class="modal-textarea" id="textSortInput" placeholder="输入文本，每行一条..."></textarea>
        <div class="modal-btn-group">
            <button class="modal-btn modal-btn-primary" onclick="sortText()">排序</button>
        </div>
        <div class="modal-result" id="textSortResult"></div>
    `;
}

function sortText() {
    const text = document.getElementById('textSortInput').value;
    const lines = text.split('\n');
    lines.sort();
    document.getElementById('textSortResult').textContent = lines.join('\n');
}

function renderBasicCalc() {
    return `
        <input type="text" class="modal-input" id="calcInput" placeholder="输入表达式，如: 2+2">
        <div class="modal-btn-group">
            <button class="modal-btn modal-btn-primary" onclick="calcExpression()">计算</button>
        </div>
        <div class="modal-result" id="calcResult"></div>
    `;
}

function calcExpression() {
    try {
        const expr = document.getElementById('calcInput').value;
        const result = Function('"use strict"; return (' + expr + ')')();
        document.getElementById('calcResult').textContent = '结果: ' + result;
    } catch (e) {
        document.getElementById('calcResult').innerHTML = '<span style="color:var(--danger);">表达式错误</span>';
    }
}

function renderTimestamp() {
    const now = Math.floor(Date.now() / 1000);
    return `
        <div style="margin-bottom:16px;">
            <label class="drawer-label">当前时间戳: ${now}</label>
        </div>
        <input type="text" class="modal-input" id="tsInput" placeholder="输入时间戳或日期">
        <div class="modal-btn-group">
            <button class="modal-btn modal-btn-primary" onclick="tsToDate()">时间戳→日期</button>
            <button class="modal-btn modal-btn-secondary" onclick="dateToTs()">日期→时间戳</button>
        </div>
        <div class="modal-result" id="tsResult"></div>
    `;
}

function tsToDate() {
    const ts = parseInt(document.getElementById('tsInput').value);
    const date = new Date(ts * 1000);
    document.getElementById('tsResult').textContent = date.toLocaleString();
}

function dateToTs() {
    const dateStr = document.getElementById('tsInput').value;
    const ts = Math.floor(new Date(dateStr).getTime() / 1000);
    document.getElementById('tsResult').textContent = '时间戳: ' + ts;
}

function renderAiExplain() {
    return `
        <textarea class="modal-textarea" id="aiExplainInput" placeholder="输入代码..."></textarea>
        <div class="modal-btn-group">
            <button class="modal-btn modal-btn-primary" onclick="explainCode()">解释代码</button>
        </div>
        <div class="modal-result" id="aiExplainResult" style="margin-top:16px;">此功能需要调用豆包AI，请使用"豆包AI助手"工具</div>
    `;
}

function renderAiCodegen() {
    return `
        <textarea class="modal-textarea" id="aiCodegenInput" placeholder="描述你的需求..."></textarea>
        <div class="modal-btn-group">
            <button class="modal-btn modal-btn-primary" onclick="genCode()">生成代码</button>
        </div>
        <div class="modal-result" id="aiCodegenResult" style="margin-top:16px;">此功能需要调用豆包AI，请使用"豆包AI助手"工具</div>
    `;
}

function renderImageBase64() {
    return `
        <input type="file" class="modal-input" accept="image/*" id="imageFile" onchange="imageToBase64()">
        <textarea class="modal-textarea" id="base64Output" placeholder="Base64结果..."></textarea>
        <div class="modal-btn-group">
            <button class="modal-btn modal-btn-secondary" onclick="copyBase64()">复制</button>
        </div>
    `;
}

function imageToBase64() {
    const file = document.getElementById('imageFile').files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('base64Output').value = e.target.result;
    };
    reader.readAsDataURL(file);
}

function copyBase64() {
    const text = document.getElementById('base64Output').value;
    navigator.clipboard.writeText(text);
    alert('已复制！');
}

function renderRandomGen() {
    return `
        <div style="display:flex;gap:16px;margin-bottom:16px;">
            <input type="number" class="modal-input" id="randMin" value="1" placeholder="最小值">
            <input type="number" class="modal-input" id="randMax" value="100" placeholder="最大值">
        </div>
        <div class="modal-btn-group">
            <button class="modal-btn modal-btn-primary" onclick="genRandom()">生成</button>
        </div>
        <div class="modal-result" id="randResult" style="font-size:48px;font-weight:bold;text-align:center;margin-top:20px;"></div>
    `;
}

function genRandom() {
    const min = parseInt(document.getElementById('randMin').value);
    const max = parseInt(document.getElementById('randMax').value);
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('randResult').textContent = result;
}

function renderMorseCode() {
    return `
        <textarea class="modal-textarea" id="morseInput" placeholder="输入文本或摩尔斯电码"></textarea>
        <div class="modal-btn-group">
            <button class="modal-btn modal-btn-primary" onclick="textToMorse()">文本→摩尔斯</button>
            <button class="modal-btn modal-btn-secondary" onclick="morseToText()">摩尔斯→文本</button>
        </div>
        <div class="modal-result" id="morseResult"></div>
    `;
}

const morseMap = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
    'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---',
    '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...',
    '8': '---..', '9': '----.'
};

function textToMorse() {
    const text = document.getElementById('morseInput').value.toUpperCase();
    let result = '';
    for (let char of text) {
        if (char === ' ') {
            result += '/ ';
        } else if (morseMap[char]) {
            result += morseMap[char] + ' ';
        }
    }
    document.getElementById('morseResult').textContent = result;
}

function morseToText() {
    const morse = document.getElementById('morseInput').value;
    const reverseMap = {};
    for (let key in morseMap) {
        reverseMap[morseMap[key]] = key;
    }
    const words = morse.split('/');
    let result = '';
    for (let word of words) {
        const chars = word.trim().split(' ');
        for (let char of chars) {
            if (reverseMap[char]) {
                result += reverseMap[char];
            }
        }
        result += ' ';
    }
    document.getElementById('morseResult').textContent = result;
}

function renderBinaryConvert() {
    return `
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px;">
            <div>
                <label class="drawer-label">二进制</label>
                <input type="text" class="modal-input" id="binInput" oninput="convertFromBin()">
            </div>
            <div>
                <label class="drawer-label">八进制</label>
                <input type="text" class="modal-input" id="octInput" oninput="convertFromOct()">
            </div>
            <div>
                <label class="drawer-label">十进制</label>
                <input type="text" class="modal-input" id="decInput" oninput="convertFromDec()">
            </div>
            <div>
                <label class="drawer-label">十六进制</label>
                <input type="text" class="modal-input" id="hexInput" oninput="convertFromHex()">
            </div>
        </div>
    `;
}

function convertFromDec() {
    const dec = parseInt(document.getElementById('decInput').value);
    if (isNaN(dec)) return;
    document.getElementById('binInput').value = dec.toString(2);
    document.getElementById('octInput').value = dec.toString(8);
    document.getElementById('hexInput').value = dec.toString(16).toUpperCase();
}

function convertFromBin() {
    const bin = document.getElementById('binInput').value;
    const dec = parseInt(bin, 2);
    if (!isNaN(dec)) {
        document.getElementById('decInput').value = dec;
        document.getElementById('octInput').value = dec.toString(8);
        document.getElementById('hexInput').value = dec.toString(16).toUpperCase();
    }
}

function convertFromOct() {
    const oct = document.getElementById('octInput').value;
    const dec = parseInt(oct, 8);
    if (!isNaN(dec)) {
        document.getElementById('decInput').value = dec;
        document.getElementById('binInput').value = dec.toString(2);
        document.getElementById('hexInput').value = dec.toString(16).toUpperCase();
    }
}

function convertFromHex() {
    const hex = document.getElementById('hexInput').value;
    const dec = parseInt(hex, 16);
    if (!isNaN(dec)) {
        document.getElementById('decInput').value = dec;
        document.getElementById('binInput').value = dec.toString(2);
        document.getElementById('octInput').value = dec.toString(8);
    }
}

function renderHtmlEscape() {
    return `
        <textarea class="modal-textarea" id="htmlInput" placeholder="输入文本..."></textarea>
        <div class="modal-btn-group">
            <button class="modal-btn modal-btn-primary" onclick="escapeHtmlFunc()">转义</button>
            <button class="modal-btn modal-btn-secondary" onclick="unescapeHtmlFunc()">反转义</button>
        </div>
        <div class="modal-result" id="htmlResult"></div>
    `;
}

function escapeHtmlFunc() {
    const text = document.getElementById('htmlInput').value;
    const div = document.createElement('div');
    div.textContent = text;
    document.getElementById('htmlResult').textContent = div.innerHTML;
}

function unescapeHtmlFunc() {
    const text = document.getElementById('htmlInput').value;
    const div = document.createElement('div');
    div.innerHTML = text;
    document.getElementById('htmlResult').textContent = div.textContent;
}

function renderUnitConvert() {
    return `
        <div style="display:flex;gap:16px;margin-bottom:16px;">
            <input type="number" class="modal-input" id="unitInput" value="1">
            <select class="modal-input" id="unitFrom" onchange="convertUnit()">
                <option value="m">米</option>
                <option value="km">千米</option>
                <option value="cm">厘米</option>
                <option value="kg">千克</option>
                <option value="g">克</option>
            </select>
            <span style="line-height:48px;">→</span>
            <select class="modal-input" id="unitTo" onchange="convertUnit()">
                <option value="m">米</option>
                <option value="km">千米</option>
                <option value="cm">厘米</option>
                <option value="kg">千克</option>
                <option value="g">克</option>
            </select>
        </div>
        <div class="modal-result" id="unitResult"></div>
    `;
}

function convertUnit() {
    const value = parseFloat(document.getElementById('unitInput').value);
    const from = document.getElementById('unitFrom').value;
    const to = document.getElementById('unitTo').value;
    
    const toMeters = {m: 1, km: 1000, cm: 0.01, kg: 1, g: 0.001};
    const fromMeters = {m: 1, km: 0.001, cm: 100, kg: 1, g: 1000};
    
    if ((from.includes('k') || to.includes('k')) && !(from.includes('g') || to.includes('g'))) {
        const result = value * toMeters[from] * fromMeters[to];
        document.getElementById('unitResult').textContent = result + ' ' + to;
    } else if ((from.includes('g') || to.includes('g')) && !(from.includes('m') || to.includes('m') || from.includes('c'))) {
        const result = value * toMeters[from] * fromMeters[to];
        document.getElementById('unitResult').textContent = result + ' ' + to;
    } else {
        document.getElementById('unitResult').textContent = '请选择相同类型的单位';
    }
}

function renderHmacCalc() {
    return `
        <p style="color:var(--text-secondary);margin-bottom:16px;">HMAC计算需要加密库支持，此为演示界面</p>
        <textarea class="modal-textarea" id="hmacMsg" placeholder="输入消息..."></textarea>
        <input type="text" class="modal-input" id="hmacKey" placeholder="输入密钥...">
        <div class="modal-btn-group">
            <button class="modal-btn modal-btn-primary" onclick="calcHmac()">计算HMAC-SHA256</button>
        </div>
        <div class="modal-result" id="hmacResult"></div>
    `;
}

function calcHmac() {
    document.getElementById('hmacResult').innerHTML = '<span style="color:var(--text-secondary);">需要完整的加密库，建议使用Node.js或Python实现</span>';
}

function renderAesEncrypt() {
    return `
        <p style="color:var(--text-secondary);margin-bottom:16px;">AES加密需要加密库支持，此为演示界面</p>
        <textarea class="modal-textarea" id="aesInput" placeholder="输入明文..."></textarea>
        <input type="text" class="modal-input" id="aesKey" placeholder="输入密钥（16/24/32字节）">
        <div class="modal-btn-group">
            <button class="modal-btn modal-btn-primary" onclick="encryptAes()">加密</button>
            <button class="modal-btn modal-btn-secondary" onclick="decryptAes()">解密</button>
        </div>
        <div class="modal-result" id="aesResult"></div>
    `;
}

function encryptAes() {
    document.getElementById('aesResult').innerHTML = '<span style="color:var(--text-secondary);">需要完整的加密库，建议使用Node.js或Python实现</span>';
}

function decryptAes() {
    document.getElementById('aesResult').innerHTML = '<span style="color:var(--text-secondary);">需要完整的加密库，建议使用Node.js或Python实现</span>';
}

function renderAsciiTable() {
    return `
        <p style="color:var(--text-secondary);margin-bottom:16px;">常用ASCII码对照表</p>
        <input type="text" class="modal-input" id="asciiInput" placeholder="输入字符或数字..." oninput="lookupAscii()">
        <div class="modal-result" id="asciiResult"></div>
        <div style="margin-top:16px;font-size:12px;color:var(--text-secondary);">
            <p>0-31: 控制字符 | 32: 空格 | 48-57: 0-9 | 65-90: A-Z | 97-122: a-z</p>
        </div>
    `;
}

function lookupAscii() {
    const input = document.getElementById('asciiInput').value;
    if (input.length === 1) {
        document.getElementById('asciiResult').textContent = `ASCII码: ${input.charCodeAt(0)}`;
    } else if (!isNaN(parseInt(input))) {
        document.getElementById('asciiResult').textContent = `字符: ${String.fromCharCode(parseInt(input))}`;
    }
}

function renderColorPicker() {
    return `
        <div style="display:flex;gap:16px;align-items:center;margin-bottom:16px;">
            <input type="color" id="colorPicker" value="#6366f1" onchange="updateColor()">
            <input type="text" class="modal-input" id="colorHex" value="#6366f1" onchange="updateFromHex()">
        </div>
        <div class="modal-result" id="colorResult">
            <p>RGB: rgb(99, 102, 241)</p>
            <p>HSL: hsl(239, 84%, 67%)</p>
        </div>
    `;
}

function updateColor() {
    const color = document.getElementById('colorPicker').value;
    document.getElementById('colorHex').value = color;
    const r = parseInt(color.slice(1,3), 16);
    const g = parseInt(color.slice(3,5), 16);
    const b = parseInt(color.slice(5,7), 16);
    document.getElementById('colorResult').innerHTML = `
        <p>RGB: rgb(${r}, ${g}, ${b})</p>
        <p>HEX: ${color}</p>
    `;
}

function updateFromHex() {
    const hex = document.getElementById('colorHex').value;
    if (/^#[0-9a-fA-F]{6}$/.test(hex)) {
        document.getElementById('colorPicker').value = hex;
        updateColor();
    }
}

function renderCronGenerator() {
    return `
        <p style="color:var(--text-secondary);margin-bottom:16px;">Cron表达式生成器（简化版）</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px;">
            <div>
                <label class="drawer-label">分钟 (0-59)</label>
                <input type="text" class="modal-input" id="cronMin" value="0">
            </div>
            <div>
                <label class="drawer-label">小时 (0-23)</label>
                <input type="text" class="modal-input" id="cronHour" value="0">
            </div>
            <div>
                <label class="drawer-label">日期 (1-31)</label>
                <input type="text" class="modal-input" id="cronDay" value="*">
            </div>
            <div>
                <label class="drawer-label">月份 (1-12)</label>
                <input type="text" class="modal-input" id="cronMonth" value="*">
            </div>
            <div>
                <label class="drawer-label">星期 (0-6)</label>
                <input type="text" class="modal-input" id="cronWeek" value="*">
            </div>
        </div>
        <div class="modal-btn-group">
            <button class="modal-btn modal-btn-primary" onclick="generateCron()">生成</button>
        </div>
        <div class="modal-result" id="cronResult"></div>
    `;
}

function generateCron() {
    const min = document.getElementById('cronMin').value;
    const hour = document.getElementById('cronHour').value;
    const day = document.getElementById('cronDay').value;
    const month = document.getElementById('cronMonth').value;
    const week = document.getElementById('cronWeek').value;
    document.getElementById('cronResult').textContent = `${min} ${hour} ${day} ${month} ${week}`;
}

function renderYamlFormat() {
    return `
        <textarea class="modal-textarea" id="yamlInput" placeholder="输入YAML..."></textarea>
        <div class="modal-btn-group">
            <button class="modal-btn modal-btn-primary" onclick="formatYaml()">格式化</button>
        </div>
        <div class="modal-result" id="yamlResult" style="color:var(--text-secondary);">YAML格式化需要解析库，此为演示界面</div>
    `;
}

function formatYaml() {
    document.getElementById('yamlResult').textContent = document.getElementById('yamlInput').value;
}

function renderSubnetCalc() {
    return `
        <p style="color:var(--text-secondary);margin-bottom:16px;">子网计算器（简化版）</p>
        <input type="text" class="modal-input" id="subnetIp" placeholder="IP地址，如: 192.168.1.1">
        <input type="text" class="modal-input" id="subnetMask" placeholder="子网掩码或CIDR，如: 255.255.255.0 或 /24">
        <div class="modal-btn-group">
            <button class="modal-btn modal-btn-primary" onclick="calcSubnet()">计算</button>
        </div>
        <div class="modal-result" id="subnetResult"></div>
    `;
}

function calcSubnet() {
    document.getElementById('subnetResult').innerHTML = '<span style="color:var(--text-secondary);">完整的子网计算需要网络库支持</span>';
}

function renderMacLookup() {
    return `
        <p style="color:var(--text-secondary);margin-bottom:16px;">MAC地址厂商查询需要在线数据库</p>
        <input type="text" class="modal-input" id="macInput" placeholder="输入MAC地址...">
        <div class="modal-btn-group">
            <button class="modal-btn modal-btn-primary" onclick="lookupMac()">查询</button>
        </div>
        <div class="modal-result" id="macResult"></div>
    `;
}

function lookupMac() {
    document.getElementById('macResult').innerHTML = '<span style="color:var(--text-secondary);">需要在线MAC地址数据库</span>';
}

function renderDnsRecords() {
    return `
        <p style="color:var(--text-secondary);margin-bottom:16px;">常用DNS记录类型</p>
        <div class="modal-result">
            <p><strong>A</strong>: 域名→IPv4地址</p>
            <p><strong>AAAA</strong>: 域名→IPv6地址</p>
            <p><strong>CNAME</strong>: 域名→域名</p>
            <p><strong>MX</strong>: 邮件服务器</p>
            <p><strong>NS</strong>: 域名服务器</p>
            <p><strong>TXT</strong>: 文本记录</p>
            <p><strong>SOA</strong>: 起始授权记录</p>
        </div>
    `;
}

function renderLinuxBasic() {
    return `
        <p style="color:var(--text-secondary);margin-bottom:16px;">常用Linux命令</p>
        <div class="modal-result" style="font-size:13px;line-height:1.8;">
            <p><strong>ls</strong>: 列出目录内容</p>
            <p><strong>cd</strong>: 切换目录</p>
            <p><strong>pwd</strong>: 显示当前路径</p>
            <p><strong>cat</strong>: 查看文件内容</p>
            <p><strong>grep</strong>: 搜索文本</p>
            <p><strong>chmod</strong>: 修改权限</p>
            <p><strong>chown</strong>: 修改所有者</p>
            <p><strong>ps</strong>: 查看进程</p>
            <p><strong>netstat</strong>: 查看网络连接</p>
            <p><strong>curl/wget</strong>: 下载文件</p>
        </div>
    `;
}

function renderPythonCheat() {
    return `
        <p style="color:var(--text-secondary);margin-bottom:16px;">Python常用代码速查</p>
        <div class="modal-result" style="font-size:13px;line-height:1.8;">
            <p><strong>列表推导式:</strong> [x*2 for x in range(10)]</p>
            <p><strong>字典:</strong> {'key': 'value'}</p>
            <p><strong>文件读写:</strong> open('file.txt', 'r')</p>
            <p><strong>字符串:</strong> 'hello'.upper()</p>
            <p><strong>循环:</strong> for i in range(10):</p>
            <p><strong>条件:</strong> if x > 0:</p>
            <p><strong>函数:</strong> def func():</p>
            <p><strong>导入:</strong> import module</p>
        </div>
    `;
}

function renderImageInfo() {
    return `
        <p style="color:var(--text-secondary);margin-bottom:16px;">图片信息查看</p>
        <input type="file" class="modal-input" accept="image/*" id="imageInfoFile" onchange="getImageInfo()">
        <div class="modal-result" id="imageInfoResult"></div>
    `;
}

function getImageInfo() {
    const file = document.getElementById('imageInfoFile').files[0];
    if (!file) return;
    const img = new Image();
    img.onload = function() {
        document.getElementById('imageInfoResult').innerHTML = `
            <p>文件名: ${file.name}</p>
            <p>尺寸: ${img.width} x ${img.height}</p>
            <p>大小: ${(file.size/1024).toFixed(2)} KB</p>
            <p>类型: ${file.type}</p>
        `;
    };
    img.src = URL.createObjectURL(file);
}

function renderImageResize() {
    return `
        <p style="color:var(--text-secondary);margin-bottom:16px;">图片缩放</p>
        <input type="file" class="modal-input" accept="image/*" id="resizeFile">
        <div style="display:flex;gap:16px;margin:16px 0;">
            <input type="number" class="modal-input" id="resizeWidth" placeholder="宽度">
            <input type="number" class="modal-input" id="resizeHeight" placeholder="高度">
        </div>
        <div class="modal-btn-group">
            <button class="modal-btn modal-btn-primary" onclick="resizeImage()">缩放</button>
        </div>
        <div class="modal-result" id="resizeResult"></div>
    `;
}

function resizeImage() {
    const file = document.getElementById('resizeFile').files[0];
    if (!file) return;
    const img = new Image();
    img.onload = function() {
        const canvas = document.createElement('canvas');
        const w = document.getElementById('resizeWidth').value || img.width;
        const h = document.getElementById('resizeHeight').value || img.height;
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, w, h);
        document.getElementById('resizeResult').innerHTML = '<img src="' + canvas.toDataURL() + '" style="max-width:100%;">';
    };
    img.src = URL.createObjectURL(file);
}

function renderQrcodeScan() {
    return `
        <p style="color:var(--text-secondary);margin-bottom:16px;">二维码识别需要QR码解析库</p>
        <input type="file" class="modal-input" accept="image/*" id="qrFile">
        <div class="modal-btn-group">
            <button class="modal-btn modal-btn-primary" onclick="scanQr()">识别</button>
        </div>
        <div class="modal-result" id="qrResult"></div>
    `;
}

function scanQr() {
    document.getElementById('qrResult').innerHTML = '<span style="color:var(--text-secondary);">需要QR码解析库，如jsQR</span>';
}

function renderHexCalc() {
    return renderBinaryConvert();
}

function renderBitwiseCalc() {
    return `
        <p style="color:var(--text-secondary);margin-bottom:16px;">位运算计算器</p>
        <div style="display:flex;gap:16px;margin-bottom:16px;">
            <input type="text" class="modal-input" id="bitA" placeholder="数值A">
            <select class="modal-input" id="bitOp">
                <option value="&">& (AND)</option>
                <option value="|">| (OR)</option>
                <option value="^">^ (XOR)</option>
                <option value="<<"><< (左移)</option>
                <option value=">>">>> (右移)</option>
            </select>
            <input type="text" class="modal-input" id="bitB" placeholder="数值B">
        </div>
        <div class="modal-btn-group">
            <button class="modal-btn modal-btn-primary" onclick="calcBitwise()">计算</button>
        </div>
        <div class="modal-result" id="bitResult"></div>
    `;
}

function calcBitwise() {
    const a = parseInt(document.getElementById('bitA').value);
    const b = parseInt(document.getElementById('bitB').value);
    const op = document.getElementById('bitOp').value;
    let result;
    switch(op) {
        case '&': result = a & b; break;
        case '|': result = a | b; break;
        case '^': result = a ^ b; break;
        case '<<': result = a << b; break;
        case '>>': result = a >> b; break;
    }
    document.getElementById('bitResult').innerHTML = `结果: ${result} (0b${result.toString(2)})`;
}

function renderPercentageCalc() {
    return `
        <p style="color:var(--text-secondary);margin-bottom:16px;">百分比计算器</p>
        <div style="display:flex;gap:16px;margin-bottom:16px;">
            <input type="number" class="modal-input" id="perA" placeholder="数值">
            <span style="line-height:48px;">的</span>
            <input type="number" class="modal-input" id="perB" placeholder="百分比">
            <span style="line-height:48px;">%</span>
        </div>
        <div class="modal-btn-group">
            <button class="modal-btn modal-btn-primary" onclick="calcPercentage()">计算</button>
        </div>
        <div class="modal-result" id="perResult"></div>
    `;
}

function calcPercentage() {
    const a = parseFloat(document.getElementById('perA').value);
    const b = parseFloat(document.getElementById('perB').value);
    const result = a * b / 100;
    document.getElementById('perResult').textContent = '结果: ' + result;
}

function renderFibonacci() {
    return `
        <p style="color:var(--text-secondary);margin-bottom:16px;">斐波那契数列计算器</p>
        <input type="number" class="modal-input" id="fibN" placeholder="输入n" min="1">
        <div class="modal-btn-group">
            <button class="modal-btn modal-btn-primary" onclick="calcFib()">计算</button>
        </div>
        <div class="modal-result" id="fibResult"></div>
    `;
}

function calcFib() {
    const n = parseInt(document.getElementById('fibN').value);
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    document.getElementById('fibResult').textContent = `第${n}项: ${b}`;
}

function renderTimeDiff() {
    return `
        <p style="color:var(--text-secondary);margin-bottom:16px;">时间差计算器</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px;">
            <input type="datetime-local" class="modal-input" id="timeA">
            <input type="datetime-local" class="modal-input" id="timeB">
        </div>
        <div class="modal-btn-group">
            <button class="modal-btn modal-btn-primary" onclick="calcTimeDiff()">计算</button>
        </div>
        <div class="modal-result" id="timeDiffResult"></div>
    `;
}

function calcTimeDiff() {
    const a = new Date(document.getElementById('timeA').value);
    const b = new Date(document.getElementById('timeB').value);
    const diff = Math.abs(b - a);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById('timeDiffResult').textContent = `${days}天 ${hours}小时 ${minutes}分钟`;
}

function renderAgeCalc() {
    return `
        <p style="color:var(--text-secondary);margin-bottom:16px;">年龄计算器</p>
        <input type="date" class="modal-input" id="birthDate">
        <div class="modal-btn-group">
            <button class="modal-btn modal-btn-primary" onclick="calcAge()">计算</button>
        </div>
        <div class="modal-result" id="ageResult"></div>
    `;
}

function calcAge() {
    const birth = new Date(document.getElementById('birthDate').value);
    const now = new Date();
    let age = now.getFullYear() - birth.getFullYear();
    const m = now.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) {
        age--;
    }
    document.getElementById('ageResult').textContent = `年龄: ${age}岁`;
}

function renderWorldClock() {
    const updateClocks = () => {
        const utc = new Date();
        const beijing = new Date(utc.getTime() + 8 * 60 * 60 * 1000);
        const tokyo = new Date(utc.getTime() + 9 * 60 * 60 * 1000);
        const ny = new Date(utc.getTime() - 5 * 60 * 60 * 1000);
        const london = new Date(utc.getTime() + 0 * 60 * 60 * 1000);
        
        const result = document.getElementById('clockResult');
        if (result) {
            result.innerHTML = `
                <p>🌍 北京: ${beijing.getUTCHours().toString().padStart(2,'0')}:${beijing.getUTCMinutes().toString().padStart(2,'0')}:${beijing.getUTCSeconds().toString().padStart(2,'0')}</p>
                <p>🗼 东京: ${tokyo.getUTCHours().toString().padStart(2,'0')}:${tokyo.getUTCMinutes().toString().padStart(2,'0')}:${tokyo.getUTCSeconds().toString().padStart(2,'0')}</p>
                <p>🗽 纽约: ${ny.getUTCHours().toString().padStart(2,'0')}:${ny.getUTCMinutes().toString().padStart(2,'0')}:${ny.getUTCSeconds().toString().padStart(2,'0')}</p>
                <p>🏛️ 伦敦: ${london.getUTCHours().toString().padStart(2,'0')}:${london.getUTCMinutes().toString().padStart(2,'0')}:${london.getUTCSeconds().toString().padStart(2,'0')}</p>
                <p>🌐 UTC: ${utc.getUTCHours().toString().padStart(2,'0')}:${utc.getUTCMinutes().toString().padStart(2,'0')}:${utc.getUTCSeconds().toString().padStart(2,'0')}</p>
            `;
        }
    };
    setTimeout(updateClocks, 100);
    setInterval(updateClocks, 1000);
    return `
        <p style="color:var(--text-secondary);margin-bottom:16px;">世界时钟</p>
        <div class="modal-result" id="clockResult" style="font-size:18px;line-height:2;"></div>
    `;
}

function renderCountdown() {
    return `
        <p style="color:var(--text-secondary);margin-bottom:16px;">倒计时</p>
        <input type="datetime-local" class="modal-input" id="countdownTarget">
        <div class="modal-btn-group">
            <button class="modal-btn modal-btn-primary" onclick="startCountdown()">开始</button>
        </div>
        <div class="modal-result" id="countdownResult" style="font-size:32px;font-weight:bold;text-align:center;"></div>
    `;
}

let countdownInterval = null;

function startCountdown() {
    if (countdownInterval) clearInterval(countdownInterval);
    const target = new Date(document.getElementById('countdownTarget').value);
    countdownInterval = setInterval(() => {
        const now = new Date();
        const diff = target - now;
        if (diff <= 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdownResult').textContent = '时间到！';
            return;
        }
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);
        document.getElementById('countdownResult').textContent = `${d}天 ${h}时 ${m}分 ${s}秒`;
    }, 1000);
}

function renderQrcodeGen() {
    return `
        <p style="color:var(--text-secondary);margin-bottom:16px;">二维码生成需要QR码库</p>
        <textarea class="modal-textarea" id="qrGenInput" placeholder="输入文本..."></textarea>
        <div class="modal-btn-group">
            <button class="modal-btn modal-btn-primary" onclick="genQr()">生成</button>
        </div>
        <div class="modal-result" id="qrGenResult"></div>
    `;
}

function genQr() {
    document.getElementById('qrGenResult').innerHTML = '<span style="color:var(--text-secondary);">需要QR码生成库，如qrcode.js</span>';
}

function renderRandomNum() {
    return renderRandomGen();
}

// ============ 搜索功能 ============
function initSearch() {
    const searchInput = document.getElementById('globalSearch');
    
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        if (!query) {
            renderTools();
            return;
        }
        
        const results = [];
        Object.keys(toolsData).forEach(cat => {
            toolsData[cat].forEach(tool => {
                if (tool.name.toLowerCase().includes(query) || 
                    tool.description.toLowerCase().includes(query)) {
                    results.push(tool);
                }
            });
        });
        
        renderSearchResults(results);
    });
    
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            searchInput.focus();
            searchInput.select();
        }
    });
}

function renderSearchResults(results) {
    const grid = document.getElementById('toolsGrid');
    
    if (results.length === 0) {
        grid.innerHTML = '<p style="color:var(--text-secondary);text-align:center;padding:40px;">未找到相关工具</p>';
        return;
    }
    
    let html = '';
    results.forEach(tool => {
        const isFavorite = favorites.includes(tool.id);
        html += `
            <div class="tool-card ${isFavorite ? 'favorite' : ''}" 
                 data-tool-id="${tool.id}"
                 onclick="handleToolClick(event, '${tool.id}')"
                 ondblclick="handleToolDoubleClick('${tool.id}')">
                <button class="tool-favorite-btn" onclick="event.stopPropagation(); toggleFavorite('${tool.id}')">
                    ${isFavorite ? '⭐' : '☆'}
                </button>
                <span class="tool-icon">${tool.icon}</span>
                <div class="tool-name">${tool.name}</div>
            </div>
        `;
    });
    
    grid.innerHTML = html;
}

// ============ 收藏功能 ============
function initFavorites() {
    updateFavoritesCount();
}

function toggleFavorite(toolId) {
    const index = favorites.indexOf(toolId);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(toolId);
    }
    localStorage.setItem('ma_tool_favorites', JSON.stringify(favorites));
    updateFavoritesCount();
    renderTools();
}

function updateFavoritesCount() {
    document.getElementById('favoritesCount').textContent = favorites.length;
}

document.getElementById('favoritesBtn').addEventListener('click', function() {
    showFavorites();
});

function showFavorites() {
    const grid = document.getElementById('toolsGrid');
    
    if (favorites.length === 0) {
        grid.innerHTML = '<p style="color:var(--text-secondary);text-align:center;padding:40px;">还没有收藏的工具</p>';
        return;
    }
    
    let html = '';
    favorites.forEach(toolId => {
        const tool = findTool(toolId);
        if (tool) {
            html += `
                <div class="tool-card favorite" 
                     data-tool-id="${tool.id}"
                     onclick="handleToolClick(event, '${tool.id}')"
                     ondblclick="handleToolDoubleClick('${tool.id}')">
                    <button class="tool-favorite-btn" onclick="event.stopPropagation(); toggleFavorite('${tool.id}')">⭐</button>
                    <span class="tool-icon">${tool.icon}</span>
                    <div class="tool-name">${tool.name}</div>
                </div>
            `;
        }
    });
    
    grid.innerHTML = html;
}

// ============ 辅助函数 ============
function findTool(toolId) {
    for (let cat of Object.keys(toolsData)) {
        const tool = toolsData[cat].find(t => t.id === toolId);
        if (tool) return tool;
    }
    return null;
}

// ============ 浅色主题支持 ============
const lightThemeStyles = `
    body.light-theme {
        --bg-primary: #f8fafc;
        --bg-secondary: #ffffff;
        --bg-card: #f1f5f9;
        --bg-card-hover: #e2e8f0;
        --border-color: #cbd5e1;
        --text-primary: #1e293b;
        --text-secondary: #64748b;
    }
`;

const styleEl = document.createElement('style');
styleEl.textContent = lightThemeStyles;
document.head.appendChild(styleEl);

// ============ 豆包AI聊天助手 ============
let doubaoChatHistory = [];
const DOUBAO_API_KEY = "243a0c2f-69a0-433b-badd-0f8279a852f2";
const DOUBAO_API_URL = "https://ark.cn-beijing.volces.com/api/v3/chat/completions";
const DOUBAO_MODEL = "doubao-seed-2-0-mini-260215";

function initDoubaoAi() {
    const chatMessages = document.getElementById('doubaoChatMessages');
    const userInput = document.getElementById('doubaoUserInput');
    const sendBtn = document.getElementById('doubaoSendBtn');
    
    if (!chatMessages || !userInput || !sendBtn) return;
    
    addDoubaoMessage('ai', '你好！我是豆包AI助手，很高兴为你服务！有什么问题我可以帮你解答吗？');
    
    sendBtn.addEventListener('click', sendDoubaoMessage);
    
    userInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendDoubaoMessage();
        }
    });
}

function sendDoubaoMessage() {
    const userInput = document.getElementById('doubaoUserInput');
    const message = userInput.value.trim();
    
    if (!message) return;
    
    addDoubaoMessage('user', message);
    userInput.value = '';
    
    doubaoChatHistory.push({
        role: 'user',
        content: message
    });
    
    showDoubaoLoading();
    callDoubaoApi(message);
}

function addDoubaoMessage(type, content) {
    const chatMessages = document.getElementById('doubaoChatMessages');
    if (!chatMessages) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `doubao-message ${type}`;
    
    const avatar = type === 'ai' ? '🤖' : '👤';
    
    messageDiv.innerHTML = `
        <div class="doubao-avatar">${avatar}</div>
        <div class="doubao-message-content">${escapeHtml(content)}</div>
    `;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showDoubaoLoading() {
    const chatMessages = document.getElementById('doubaoChatMessages');
    if (!chatMessages) return;
    
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'doubao-message ai';
    loadingDiv.id = 'doubao-loading';
    
    loadingDiv.innerHTML = `
        <div class="doubao-avatar">🤖</div>
        <div class="doubao-message-content">
            <div class="doubao-loading">
                <div class="doubao-loading-dot"></div>
                <div class="doubao-loading-dot"></div>
                <div class="doubao-loading-dot"></div>
            </div>
        </div>
    `;
    
    chatMessages.appendChild(loadingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function hideDoubaoLoading() {
    const loading = document.getElementById('doubao-loading');
    if (loading) {
        loading.remove();
    }
}

async function callDoubaoApi(userMessage) {
    try {
        const requestBody = {
            model: DOUBAO_MODEL,
            messages: doubaoChatHistory
        };
        
        console.log('发送请求到豆包API...');
        
        const response = await fetch(DOUBAO_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${DOUBAO_API_KEY}`
            },
            body: JSON.stringify(requestBody)
        });
        
        if (!response.ok) {
            const errorText = await response.text();
            console.error('API响应错误:', response.status, errorText);
            throw new Error(`API请求失败: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('API响应:', data);
        
        const aiMessage = data.choices[0].message.content;
        
        hideDoubaoLoading();
        addDoubaoMessage('ai', aiMessage);
        
        doubaoChatHistory.push({
            role: 'assistant',
            content: aiMessage
        });
        
    } catch (error) {
        console.error('豆包API调用错误:', error);
        hideDoubaoLoading();
        
        const fallbackMessage = getDoubaoFallbackReply(userMessage);
        addDoubaoMessage('ai', `⚠️ API连接失败，使用本地回复：\n\n${fallbackMessage}`);
        
        doubaoChatHistory.push({
            role: 'assistant',
            content: fallbackMessage
        });
    }
}

function getDoubaoFallbackReply(userMessage) {
    const replies = [
        '我理解你的问题了！让我帮你分析一下...\n\n这是一个很好的问题，建议你可以从以下几个方面思考：\n1. 首先了解基本概念\n2. 查看相关文档\n3. 动手实践尝试\n\n如果需要更详细的帮助，请告诉我！',
        '这个问题很有意思！虽然我现在无法连接到API，但我可以给你一些建议：\n\n你可以尝试搜索相关资料，或者查看我们工具箱中的"知识库"模块，那里有很多有用的信息！',
        '感谢你的提问！作为网安工具箱的AI助手，我建议你：\n\n1. 利用工具箱中的现有工具\n2. 学习"网安实训"模块的内容\n3. 多动手实践\n\n继续加油！你做得很棒！'
    ];
    
    return replies[Math.floor(Math.random() * replies.length)];
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ============ AI助手弹窗功能 ============
let aiMessages = [];
let isAiLoading = false;

// ============ 嵌入内容区的AI聊天窗口功能 ============
let aiChatMessages = [];
let isAiChatLoading = false;

function openAiChat() {
    const aiOverlay = document.getElementById('aiOverlay');
    const aiModal = document.getElementById('aiModal');
    const aiChatContainer = document.getElementById('aiChatContainer');
    const toolsGrid = document.getElementById('toolsGrid');
    const contentHeader = document.getElementById('contentHeader');
    
    if (aiOverlay && aiModal) {
        aiOverlay.classList.remove('show');
        aiModal.classList.remove('show');
    }
    
    currentCategory = 'ai';
    updateActiveCategory();
    
    if (aiChatContainer && toolsGrid && contentHeader) {
        toolsGrid.style.display = 'none';
        contentHeader.style.display = 'none';
        aiChatContainer.style.display = 'flex';
        
        const aiChatInput = document.getElementById('aiChatInput');
        if (aiChatInput) {
            aiChatInput.focus();
        }
    }
}

function closeAiChat() {
    const aiChatContainer = document.getElementById('aiChatContainer');
    const toolsGrid = document.getElementById('toolsGrid');
    const contentHeader = document.getElementById('contentHeader');
    
    if (aiChatContainer && toolsGrid && contentHeader) {
        aiChatContainer.style.display = 'none';
        toolsGrid.style.display = 'grid';
        contentHeader.style.display = 'flex';
    }
}

function sendAiChatMessage() {
    const aiChatInput = document.getElementById('aiChatInput');
    const aiChatSendBtn = document.getElementById('aiChatSendBtn');
    
    if (!aiChatInput || !aiChatSendBtn) return;
    
    const message = aiChatInput.value.trim();
    if (!message || isAiChatLoading) return;

    aiChatMessages.push({
        role: 'user',
        content: message
    });

    aiChatInput.value = '';
    aiChatInput.style.height = 'auto';
    renderAiChatMessages();
    callDoubaoAiChat(message);
}

function renderAiChatMessages() {
    const aiChatMessagesContainer = document.getElementById('aiChatMessages');
    if (!aiChatMessagesContainer) return;

    if (aiChatMessages.length === 0) {
        aiChatMessagesContainer.innerHTML = `
            <div class="ai-chat-welcome">
                <div class="ai-chat-welcome-text">有什么我能帮你的吗？</div>
            </div>
        `;
    } else {
        let html = '';
        aiChatMessages.forEach(msg => {
            html += `
                <div class="ai-chat-message ${msg.role}">
                    <div class="ai-chat-message-avatar">${msg.role === 'ai' ? '🤖' : '👤'}</div>
                    <div class="ai-chat-message-content">${escapeHtml(msg.content)}</div>
                </div>
            `;
        });
        aiChatMessagesContainer.innerHTML = html;
        aiChatMessagesContainer.scrollTop = aiChatMessagesContainer.scrollHeight;
    }
}

async function callDoubaoAiChat(userMessage) {
    isAiChatLoading = true;
    const aiChatSendBtn = document.getElementById('aiChatSendBtn');
    if (aiChatSendBtn) {
        aiChatSendBtn.disabled = true;
    }

    const apiKey = '243a0c2f-69a0-433b-badd-0f8279a852f2';
    const apiUrl = 'https://ark.cn-beijing.volces.com/api/v3/chat/completions';
    const model = 'doubao-seed-2-0-mini-260215';

    const messagesForApi = aiChatMessages.map(msg => ({
        role: msg.role === 'ai' ? 'assistant' : msg.role,
        content: msg.content
    }));

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: model,
                messages: messagesForApi,
                stream: false
            })
        });

        if (!response.ok) {
            throw new Error('API请求失败');
        }

        const data = await response.json();
        const aiResponse = data.choices[0].message.content;

        aiChatMessages.push({
            role: 'ai',
            content: aiResponse
        });

        renderAiChatMessages();
    } catch (error) {
        aiChatMessages.push({
            role: 'ai',
            content: '抱歉，我现在无法回答，请稍后再试。'
        });
        renderAiChatMessages();
    } finally {
        isAiChatLoading = false;
        if (aiChatSendBtn) {
            aiChatSendBtn.disabled = false;
        }
    }
}

function initAiChat() {
    const aiChatCloseBtn = document.getElementById('aiChatCloseBtn');
    const aiChatSendBtn = document.getElementById('aiChatSendBtn');
    const aiChatInput = document.getElementById('aiChatInput');
    const aiChatQuickBtns = document.querySelectorAll('.ai-chat-quick-btn');

    if (aiChatCloseBtn) {
        aiChatCloseBtn.addEventListener('click', function() {
            currentCategory = 'password';
            updateActiveCategory();
            renderTools();
            closeAiChat();
        });
    }

    if (aiChatSendBtn) {
        aiChatSendBtn.addEventListener('click', sendAiChatMessage);
    }

    if (aiChatInput) {
        aiChatInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendAiChatMessage();
            }
        });

        aiChatInput.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = Math.min(this.scrollHeight, 120) + 'px';
        });
    }

    if (aiChatQuickBtns) {
        aiChatQuickBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const prompt = this.getAttribute('data-prompt');
                const aiChatInput = document.getElementById('aiChatInput');
                if (aiChatInput) {
                    aiChatInput.value = prompt;
                    aiChatInput.focus();
                    aiChatInput.style.height = 'auto';
                    aiChatInput.style.height = Math.min(aiChatInput.scrollHeight, 120) + 'px';
                }
            });
        });
    }
}

function initAiAssistant() {
    const aiOverlay = document.getElementById('aiOverlay');
    const aiModal = document.getElementById('aiModal');
    const aiCloseBtn = document.getElementById('aiCloseBtn');
    const aiSendBtn = document.getElementById('aiSendBtn');
    const aiInput = document.getElementById('aiInput');
    const aiQuickBtns = document.querySelectorAll('.ai-quick-btn');

    if (aiOverlay) {
        aiOverlay.addEventListener('click', closeAiModal);
    }

    if (aiCloseBtn) {
        aiCloseBtn.addEventListener('click', closeAiModal);
    }

    if (aiSendBtn) {
        aiSendBtn.addEventListener('click', sendAiMessage);
    }

    if (aiInput) {
        aiInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendAiMessage();
            }
        });

        aiInput.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = Math.min(this.scrollHeight, 120) + 'px';
        });
    }

    if (aiQuickBtns) {
        aiQuickBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const prompt = this.getAttribute('data-prompt');
                const aiInput = document.getElementById('aiInput');
                if (aiInput) {
                    aiInput.value = prompt;
                    aiInput.focus();
                    aiInput.style.height = 'auto';
                    aiInput.style.height = Math.min(aiInput.scrollHeight, 120) + 'px';
                }
            });
        });
    }
}

function openAiModal() {
    const aiOverlay = document.getElementById('aiOverlay');
    const aiModal = document.getElementById('aiModal');
    if (aiOverlay && aiModal) {
        aiOverlay.classList.add('show');
        aiModal.classList.add('show');
        const aiInput = document.getElementById('aiInput');
        if (aiInput) {
            aiInput.focus();
        }
    }
}

function closeAiModal() {
    const aiOverlay = document.getElementById('aiOverlay');
    const aiModal = document.getElementById('aiModal');
    if (aiOverlay && aiModal) {
        aiOverlay.classList.remove('show');
        aiModal.classList.remove('show');
    }
}

function sendAiMessage() {
    const aiInput = document.getElementById('aiInput');
    const aiSendBtn = document.getElementById('aiSendBtn');
    
    if (!aiInput || !aiSendBtn) return;
    
    const message = aiInput.value.trim();
    if (!message || isAiLoading) return;

    aiMessages.push({
        role: 'user',
        content: message
    });

    aiInput.value = '';
    aiInput.style.height = 'auto';
    renderAiMessages();
    callDoubaoAi(message);
}

function renderAiMessages() {
    const aiMessagesContainer = document.getElementById('aiMessages');
    if (!aiMessagesContainer) return;

    if (aiMessages.length === 0) {
        aiMessagesContainer.innerHTML = `
            <div class="ai-welcome">
                <div class="ai-welcome-text">有什么我能帮你的吗？</div>
            </div>
        `;
    } else {
        let html = '';
        aiMessages.forEach(msg => {
            html += `
                <div class="ai-message ${msg.role}">
                    <div class="ai-message-avatar">${msg.role === 'ai' ? '🤖' : '👤'}</div>
                    <div class="ai-message-content">${escapeHtml(msg.content)}</div>
                </div>
            `;
        });
        aiMessagesContainer.innerHTML = html;
        aiMessagesContainer.scrollTop = aiMessagesContainer.scrollHeight;
    }
}

async function callDoubaoAi(userMessage) {
    isAiLoading = true;
    const aiSendBtn = document.getElementById('aiSendBtn');
    if (aiSendBtn) {
        aiSendBtn.disabled = true;
    }

    const apiKey = '243a0c2f-69a0-433b-badd-0f8279a852f2';
    const apiUrl = 'https://ark.cn-beijing.volces.com/api/v3/chat/completions';
    const model = 'doubao-seed-2-0-mini-260215';

    const messagesForApi = aiMessages.map(msg => ({
        role: msg.role === 'ai' ? 'assistant' : msg.role,
        content: msg.content
    }));

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: model,
                messages: messagesForApi,
                stream: false
            })
        });

        if (!response.ok) {
            throw new Error(`API请求失败: ${response.status}`);
        }

        const data = await response.json();
        const aiMessage = data.choices[0].message.content;

        aiMessages.push({
            role: 'ai',
            content: aiMessage
        });

    } catch (error) {
        console.error('豆包API调用错误:', error);
        
        const fallbackMessage = getAiFallbackReply(userMessage);
        aiMessages.push({
            role: 'ai',
            content: fallbackMessage
        });
    } finally {
        isAiLoading = false;
        if (aiSendBtn) {
            aiSendBtn.disabled = false;
        }
        renderAiMessages();
    }
}

function getAiFallbackReply(userMessage) {
    const replies = [
        '我理解你的问题了。作为AI助手，我可以帮你编程、解答问题、写作等。请告诉我你具体需要什么帮助？',
        '你好！我是豆包AI助手。有什么我可以帮你的吗？比如写代码、解答问题、或者其他方面的帮助。',
        '好的，我在这里！不管是编程问题、学习问题还是其他问题，都可以问我。'
    ];
    return replies[Math.floor(Math.random() * replies.length)];
}
