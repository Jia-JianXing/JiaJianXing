// ============ 十四、生活工具 ============
function initLifeTools() {
    initBmiCalc();
    initZodiacQuery();
    initStarQuery();
    initWorkDayCalc();
}

// 1. BMI计算
function initBmiCalc() {
    document.getElementById('calcBmiBtn').addEventListener('click', function() {
        const height = parseFloat(document.getElementById('bmiHeight').value);
        const weight = parseFloat(document.getElementById('bmiWeight').value);
        
        if (!height || !weight) {
            alert('请输入身高和体重');
            return;
        }
        
        const heightM = height / 100;
        const bmi = (weight / (heightM * heightM)).toFixed(2);
        
        let status, color;
        if (bmi < 18.5) {
            status = '偏瘦 🟡';
            color = '#f59e0b';
        } else if (bmi < 24) {
            status = '正常 🟢';
            color = '#10b981';
        } else if (bmi < 28) {
            status = '偏胖 🟠';
            color = '#f59e0b';
        } else {
            status = '肥胖 🔴';
            color = '#ef4444';
        }
        
        document.getElementById('bmiValue').textContent = bmi;
        document.getElementById('bmiValue').style.color = color;
        document.getElementById('bmiStatus').textContent = status;
        document.getElementById('bmiStatus').style.color = color;
    });
}

// 2. 生肖查询
function initZodiacQuery() {
    document.getElementById('getZodiacBtn').addEventListener('click', function() {
        const year = parseInt(document.getElementById('zodiacYear').value);
        if (!year) {
            alert('请输入出生年份');
            return;
        }
        
        const zodiacs = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'];
        const zodiacIndex = (year - 4) % 12;
        const zodiac = zodiacs[zodiacIndex];
        
        document.getElementById('zodiacResult').textContent = zodiac;
    });
}

// 3. 星座查询
function initStarQuery() {
    document.getElementById('getStarBtn').addEventListener('click', function() {
        const month = parseInt(document.getElementById('starMonth').value);
        const day = parseInt(document.getElementById('starDay').value);
        
        if (!month || !day || month < 1 || month > 12 || day < 1 || day > 31) {
            alert('请输入正确的日期');
            return;
        }
        
        const signs = [
            { name: '摩羯座', start: { m: 12, d: 22 }, end: { m: 1, d: 19 } },
            { name: '水瓶座', start: { m: 1, d: 20 }, end: { m: 2, d: 18 } },
            { name: '双鱼座', start: { m: 2, d: 19 }, end: { m: 3, d: 20 } },
            { name: '白羊座', start: { m: 3, d: 21 }, end: { m: 4, d: 19 } },
            { name: '金牛座', start: { m: 4, d: 20 }, end: { m: 5, d: 20 } },
            { name: '双子座', start: { m: 5, d: 21 }, end: { m: 6, d: 21 } },
            { name: '巨蟹座', start: { m: 6, d: 22 }, end: { m: 7, d: 22 } },
            { name: '狮子座', start: { m: 7, d: 23 }, end: { m: 8, d: 22 } },
            { name: '处女座', start: { m: 8, d: 23 }, end: { m: 9, d: 22 } },
            { name: '天秤座', start: { m: 9, d: 23 }, end: { m: 10, d: 23 } },
            { name: '天蝎座', start: { m: 10, d: 24 }, end: { m: 11, d: 22 } },
            { name: '射手座', start: { m: 11, d: 23 }, end: { m: 12, d: 21 } }
        ];
        
        let starSign = '';
        for (let i = 0; i < signs.length; i++) {
            const sign = signs[i];
            if (sign.start.m === month) {
                if (day >= sign.start.d) {
                    starSign = sign.name;
                    break;
                }
            } else if (sign.end.m === month) {
                if (day <= sign.end.d) {
                    starSign = sign.name;
                    break;
                }
            }
        }
        
        document.getElementById('starResult').textContent = starSign;
    });
}

// 4. 工作日计算
function initWorkDayCalc() {
    document.getElementById('calcWorkBtn').addEventListener('click', function() {
        const startDate = new Date(document.getElementById('workStartDate').value);
        const days = parseInt(document.getElementById('workDays').value);
        
        if (isNaN(startDate.getTime()) || !days) {
            alert('请输入开始日期和工作天数');
            return;
        }
        
        let currentDate = new Date(startDate);
        let workDaysCount = 0;
        
        while (workDaysCount < days) {
            currentDate.setDate(currentDate.getDate() + 1);
            const dayOfWeek = currentDate.getDay();
            if (dayOfWeek !== 0 && dayOfWeek !== 6) {
                workDaysCount++;
            }
        }
        
        document.getElementById('workDateResult').textContent = currentDate.toLocaleDateString('zh-CN');
    });
}

// ============ 十五、金融工具 ============
function initFinanceTools() {
    initLoanCalc();
    initTaxCalc();
    initInvestCalc();
}

// 1. 贷款计算器
function initLoanCalc() {
    document.getElementById('calcLoanBtn').addEventListener('click', function() {
        const amount = parseFloat(document.getElementById('loanAmount').value);
        const rate = parseFloat(document.getElementById('loanRate').value);
        const months = parseInt(document.getElementById('loanMonths').value);
        
        if (!amount || !rate || !months) {
            alert('请填写完整信息');
            return;
        }
        
        const monthlyRate = rate / 100 / 12;
        const monthlyPayment = (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                               (Math.pow(1 + monthlyRate, months) - 1);
        const totalPayment = monthlyPayment * months;
        const totalInterest = totalPayment - amount;
        
        document.getElementById('monthlyPayment').textContent = monthlyPayment.toFixed(2) + ' 元';
        document.getElementById('totalInterest').textContent = totalInterest.toFixed(2) + ' 元';
        document.getElementById('totalPayment').textContent = totalPayment.toFixed(2) + ' 元';
    });
}

// 2. 个税计算器
function initTaxCalc() {
    document.getElementById('calcTaxBtn').addEventListener('click', function() {
        const salary = parseFloat(document.getElementById('salary').value);
        const insurance = parseFloat(document.getElementById('insurance').value) || 0;
        const specialDeduct = parseFloat(document.getElementById('specialDeduct').value) || 0;
        
        if (!salary) {
            alert('请输入税前月薪');
            return;
        }
        
        const taxableIncome = salary - 5000 - insurance - specialDeduct;
        let taxAmount = 0;
        
        if (taxableIncome > 0) {
            if (taxableIncome <= 3000) {
                taxAmount = taxableIncome * 0.03;
            } else if (taxableIncome <= 12000) {
                taxAmount = taxableIncome * 0.1 - 210;
            } else if (taxableIncome <= 25000) {
                taxAmount = taxableIncome * 0.2 - 1410;
            } else if (taxableIncome <= 35000) {
                taxAmount = taxableIncome * 0.25 - 2660;
            } else if (taxableIncome <= 55000) {
                taxAmount = taxableIncome * 0.3 - 4410;
            } else if (taxableIncome <= 80000) {
                taxAmount = taxableIncome * 0.35 - 7160;
            } else {
                taxAmount = taxableIncome * 0.45 - 15160;
            }
        }
        
        const afterTax = salary - insurance - Math.max(0, taxAmount);
        
        document.getElementById('taxAmount').textContent = Math.max(0, taxAmount).toFixed(2) + ' 元';
        document.getElementById('afterTaxSalary').textContent = afterTax.toFixed(2) + ' 元';
    });
}

// 3. 投资收益计算
function initInvestCalc() {
    document.getElementById('calcInvestBtn').addEventListener('click', function() {
        const principal = parseFloat(document.getElementById('investAmount').value);
        const rate = parseFloat(document.getElementById('investRate').value);
        const years = parseInt(document.getElementById('investYears').value);
        
        if (!principal || !rate || !years) {
            alert('请填写完整信息');
            return;
        }
        
        const total = principal * Math.pow(1 + rate / 100, years);
        const profit = total - principal;
        
        document.getElementById('investProfit').textContent = profit.toFixed(2) + ' 元';
        document.getElementById('investTotal').textContent = total.toFixed(2) + ' 元';
    });
}

// ============ 十六、图片工具 ============
function initImageTools() {
    initImageToBase64();
}

// 1. 图片转Base64
let currentImageData = '';

function initImageToBase64() {
    const uploadArea = document.getElementById('imageUpload');
    const fileInput = document.getElementById('imageFile');
    const previewArea = document.getElementById('imagePreview');
    const previewImg = document.getElementById('previewImg');
    const convertBtn = document.getElementById('convertBase64Btn');
    const copyBtn = document.getElementById('copyBase64Btn');
    const output = document.getElementById('base64Output');
    
    // 点击上传区域
    uploadArea.addEventListener('click', function() {
        fileInput.click();
    });
    
    // 文件选择
    fileInput.addEventListener('change', handleFileSelect);
    
    // 拖拽上传
    uploadArea.addEventListener('dragover', function(e) {
        e.preventDefault();
        this.style.borderColor = '#8b5cf6';
    });
    
    uploadArea.addEventListener('dragleave', function(e) {
        e.preventDefault();
        this.style.borderColor = '#334155';
    });
    
    uploadArea.addEventListener('drop', function(e) {
        e.preventDefault();
        this.style.borderColor = '#334155';
        const files = e.dataTransfer.files;
        if (files.length > 0 && files[0].type.startsWith('image/')) {
            handleFile(files[0]);
        }
    });
    
    function handleFileSelect(e) {
        if (e.target.files.length > 0) {
            handleFile(e.target.files[0]);
        }
    }
    
    function handleFile(file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            currentImageData = e.target.result;
            
            // 显示预览
            previewImg.src = currentImageData;
            previewArea.style.display = 'block';
            
            // 获取图片尺寸和大小
            const img = new Image();
            img.onload = function() {
                document.getElementById('imgWidth').textContent = img.width;
                document.getElementById('imgHeight').textContent = img.height;
                document.getElementById('imgSize').textContent = (file.size / 1024).toFixed(2) + ' KB';
            };
            img.src = currentImageData;
            
            // 启用按钮
            convertBtn.disabled = false;
            copyBtn.disabled = false;
        };
        
        reader.readAsDataURL(file);
    }
    
    // 转Base64
    convertBtn.addEventListener('click', function() {
        if (currentImageData) {
            output.value = currentImageData;
        }
    });
    
    // 复制Base64
    copyBtn.addEventListener('click', function() {
        if (output.value) {
            output.select();
            document.execCommand('copy');
            alert('✅ Base64已复制到剪贴板！');
        }
    });
}

// ============ 初始化 ============
document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    initNavigation();
    initSearchTools();
    initPasswordTools();
    initEncodeTools();
    initTextTools();
    initMathTools();
    initDateTimeTools();
    initColorTools();
    initConvertTools();
    initDevTools();
    initQrTools();
    initNetworkTools();
    initKnowledgeTools();
    initLearnTools();
    initRealTimeClock();
    initParticles();
    initVisualTools();
    initLifeTools();
    initFinanceTools();
    initImageTools();
    initDoubaoAi();
    initPasswordCenter();
    initKeyboardShortcuts();
    
    // 初始化通用AI助手（悬浮按钮 + 弹窗）
    if (typeof initAiAssistant === 'function') {
        initAiAssistant();
    }
});

// ============ 主题切换 ============
function initTheme() {
    const themeBtn = document.getElementById('themeBtn');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        updateThemeButton(true);
    }
    
    themeBtn.addEventListener('click', function() {
        const isLight = document.body.classList.toggle('light-theme');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        updateThemeButton(isLight);
    });
}

function updateThemeButton(isLight) {
    const themeBtn = document.getElementById('themeBtn');
    const icon = themeBtn.querySelector('.theme-icon');
    const text = themeBtn.querySelector('.theme-text');
    
    if (isLight) {
        icon.textContent = '☀️';
        text.textContent = '浅色模式';
    } else {
        icon.textContent = '🌙';
        text.textContent = '深色模式';
    }
}

// ============ 搜索功能 ============
function initSearchTools() {
    const searchInput = document.getElementById('searchInput');
    const navItems = document.querySelectorAll('.nav-item');
    const navCategories = document.querySelectorAll('.nav-category');
    
    // 搜索工具名称映射（用于更全面的搜索）
    const toolKeywords = {
        'password': ['密码', '安全', '强度', '生成', 'hash', 'md5', 'sha'],
        'encode': ['编码', '解码', 'base64', 'url', 'unicode', 'hex', 'rot13'],
        'network': ['网络', '端口', 'ip', 'http', '状态码'],
        'visual': ['可视化', '拓扑', '模拟', '监控', '图表'],
        'knowledge': ['知识', '漏洞', '钓鱼', 'wifi', '安全'],
        'learn': ['学习', '名词', 'ctf', '打卡', '助手'],
        'text': ['文本', '字数', '大小写', '替换', '排序'],
        'math': ['数学', '计算', '进制', '随机数', '计算器'],
        'datetime': ['时间', '日期', '时间戳', '倒计时', '计算'],
        'color': ['颜色', '选择器', '转换', '配色'],
        'convert': ['单位', '转换', '长度', '重量', '温度', '数据'],
        'dev': ['开发', 'json', 'uuid', '正则', 'http'],
        'qrcode': ['二维码', 'qr', '生成', '解析'],
        'image': ['图片', '图像', 'base64', '上传'],
        'life': ['生活', 'bmi', '生肖', '星座', '工作日'],
        'finance': ['金融', '贷款', '个税', '投资', '计算']
    };
    
    searchInput.addEventListener('input', function() {
        const searchText = this.value.toLowerCase().trim();
        
        navItems.forEach(item => {
            const pageId = item.getAttribute('data-page');
            const itemText = item.textContent.toLowerCase();
            const keywords = toolKeywords[pageId] || [];
            
            let matches = searchText === '' || itemText.includes(searchText);
            
            if (!matches && searchText !== '') {
                matches = keywords.some(keyword => keyword.toLowerCase().includes(searchText));
            }
            
            if (matches) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
        
        navCategories.forEach(category => {
            const items = category.querySelectorAll('.nav-item');
            const hasVisible = Array.from(items).some(item => !item.classList.contains('hidden'));
            
            if (searchText === '' || hasVisible) {
                category.classList.remove('hidden');
            } else {
                category.classList.add('hidden');
            }
        });
    });
}

// ============ 快捷键支持 ============
function initKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // Ctrl+K 或 Cmd+K 聚焦搜索框
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.getElementById('searchInput');
            searchInput.focus();
            searchInput.select();
        }
        
        // Escape 清除搜索
        if (e.key === 'Escape') {
            const searchInput = document.getElementById('searchInput');
            if (document.activeElement === searchInput && searchInput.value) {
                searchInput.value = '';
                searchInput.dispatchEvent(new Event('input'));
            }
        }
    });
}

// ============ 页面导航 ============
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const pages = document.querySelectorAll('.page');
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');

    // 导航点击事件
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetPage = this.getAttribute('data-page');
            
            // 移除所有激活状态
            navItems.forEach(nav => nav.classList.remove('active'));
            pages.forEach(page => page.classList.remove('active'));
            
            // 添加当前激活状态
            this.classList.add('active');
            document.getElementById(targetPage).classList.add('active');
            
            // 手机端关闭菜单
            sidebar.classList.remove('show');
        });
    });

    // 手机端菜单切换
    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('show');
    });
}

// ============ 一、密码安全工具 ============
function initPasswordTools() {
    initPasswordStrength();
    initPasswordGenerator();
    initPasswordHistory();
    initHashTools();
    initWeakPasswordList();
    initWeakPasswordScan();
    initPasswordDictionary();
    initHashCollisionDemo();
}

// 1. 密码强度检测
function initPasswordStrength() {
    const passwordInput = document.getElementById('passwordInput');
    const strengthFill = document.getElementById('strengthFill');
    const strengthText = document.getElementById('strengthText');
    const weakTips = document.getElementById('weakTips');

    passwordInput.addEventListener('input', function() {
        const password = this.value;
        const result = checkPasswordStrength(password);
        
        // 更新强度条
        strengthFill.style.width = result.score + '%';
        strengthFill.style.background = result.color;
        strengthText.textContent = result.text;
        strengthText.style.color = result.color;
        
        // 更新要求检查项
        updatePasswordRequirements(password);
        
        // 更新柱状图
        updateStrengthBars(password);
        
        // 显示建议
        if (result.tips.length > 0) {
            weakTips.textContent = '💡 ' + result.tips.join('，');
        } else {
            weakTips.textContent = '';
        }
    });
}

// 更新密码要求检查项
function updatePasswordRequirements(password) {
    const requirements = [
        { id: 'reqLength', check: password.length >= 8 },
        { id: 'reqUpper', check: /[A-Z]/.test(password) },
        { id: 'reqLower', check: /[a-z]/.test(password) },
        { id: 'reqNumber', check: /[0-9]/.test(password) },
        { id: 'reqSymbol', check: /[!@#$%^&*(),.?":{}|<>]/.test(password) }
    ];
    
    requirements.forEach(req => {
        const element = document.getElementById(req.id);
        const icon = element.querySelector('.req-icon');
        
        if (req.check) {
            element.classList.add('passed');
            icon.textContent = '✅';
        } else {
            element.classList.remove('passed');
            icon.textContent = '❌';
        }
    });
}

// 检测密码强度的核心函数
function checkPasswordStrength(password) {
    let score = 0;
    let tips = [];

    if (password.length === 0) {
        return {
            score: 0,
            text: '请输入密码进行检测',
            color: '#94a3b8',
            tips: []
        };
    }

    // 长度检查
    if (password.length >= 8) score += 20;
    else tips.push('长度不足8位');
    
    if (password.length >= 12) score += 10;
    if (password.length >= 16) score += 10;

    // 包含大写字母
    if (/[A-Z]/.test(password)) score += 15;
    else tips.push('缺少大写字母');

    // 包含小写字母
    if (/[a-z]/.test(password)) score += 15;
    else tips.push('缺少小写字母');

    // 包含数字
    if (/[0-9]/.test(password)) score += 15;
    else tips.push('缺少数字');

    // 包含特殊字符
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score += 15;
    else tips.push('缺少特殊字符');

    // 判断强度等级
    let text, color;
    if (score < 30) {
        text = '🔴 非常弱';
        color = '#ef4444';
    } else if (score < 50) {
        text = '🟠 弱';
        color = '#f59e0b';
    } else if (score < 70) {
        text = '🟡 中等';
        color = '#eab308';
    } else if (score < 90) {
        text = '🟢 强';
        color = '#10b981';
    } else {
        text = '💚 非常强';
        color = '#059669';
    }

    return { score, text, color, tips };
}

// 2. 随机强密码生成
function initPasswordGenerator() {
    const generateBtn = document.getElementById('generateBtn');
    const copyPasswordBtn = document.getElementById('copyPasswordBtn');
    const passwordLength = document.getElementById('passwordLength');
    const lengthValue = document.getElementById('lengthValue');
    const generatedPassword = document.getElementById('generatedPassword');
    const copyFeedback = document.getElementById('copyFeedback');

    // 长度滑块更新
    passwordLength.addEventListener('input', function() {
        lengthValue.textContent = this.value;
    });

    // 生成密码
    generateBtn.addEventListener('click', function() {
        const length = parseInt(passwordLength.value);
        const includeUpper = document.getElementById('includeUpper').checked;
        const includeLower = document.getElementById('includeLower').checked;
        const includeNumbers = document.getElementById('includeNumbers').checked;
        const includeSymbols = document.getElementById('includeSymbols').checked;
        const excludeChars = document.getElementById('excludeChars').value;
        const avoidConfusion = document.getElementById('avoidConfusion').checked;

        const password = generateRandomPassword(length, includeUpper, includeLower, includeNumbers, includeSymbols, excludeChars, avoidConfusion);
        generatedPassword.value = password;
        
        // 保存到历史记录
        savePasswordToHistory(password);
    });

    // 复制密码
    copyPasswordBtn.addEventListener('click', function() {
        if (generatedPassword.value) {
            generatedPassword.select();
            document.execCommand('copy');
            
            // 显示复制反馈
            copyFeedback.style.display = 'block';
            setTimeout(() => {
                copyFeedback.style.display = 'none';
            }, 2000);
        }
    });
}

// 生成随机密码的核心函数
function generateRandomPassword(length, upper, lower, numbers, symbols, excludeChars = '', avoidConfusion = false) {
    let charset = '';
    let upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    let numberChars = '0123456789';
    let symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    // 避免易混淆字符
    if (avoidConfusion) {
        upperChars = upperChars.replace(/[O]/g, '');
        lowerChars = lowerChars.replace(/[l]/g, '');
        numberChars = numberChars.replace(/[01]/g, '');
    }
    
    // 排除用户指定的字符
    if (excludeChars) {
        const excludeSet = new Set(excludeChars.split(''));
        upperChars = upperChars.split('').filter(c => !excludeSet.has(c)).join('');
        lowerChars = lowerChars.split('').filter(c => !excludeSet.has(c)).join('');
        numberChars = numberChars.split('').filter(c => !excludeSet.has(c)).join('');
        symbolChars = symbolChars.split('').filter(c => !excludeSet.has(c)).join('');
    }

    if (upper) charset += upperChars;
    if (lower) charset += lowerChars;
    if (numbers) charset += numberChars;
    if (symbols) charset += symbolChars;

    // 如果都没选，默认选所有
    if (charset === '') {
        charset = upperChars + lowerChars + numberChars + symbolChars;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    return password;
}

// 3. 密码历史记录
function initPasswordHistory() {
    const historyContainer = document.getElementById('passwordHistory');
    const clearHistoryBtn = document.getElementById('clearHistoryBtn');
    
    loadPasswordHistory();
    
    clearHistoryBtn.addEventListener('click', function() {
        if (confirm('确定要清空所有密码历史吗？')) {
            localStorage.removeItem('passwordHistory');
            loadPasswordHistory();
        }
    });
}

// 保存密码到历史记录
function savePasswordToHistory(password) {
    let history = JSON.parse(localStorage.getItem('passwordHistory') || '[]');
    const now = new Date();
    
    history.unshift({
        password: password,
        time: now.toLocaleString('zh-CN')
    });
    
    // 最多保留20条
    if (history.length > 20) {
        history = history.slice(0, 20);
    }
    
    localStorage.setItem('passwordHistory', JSON.stringify(history));
    loadPasswordHistory();
}

// 加载密码历史记录
function loadPasswordHistory() {
    const historyContainer = document.getElementById('passwordHistory');
    const history = JSON.parse(localStorage.getItem('passwordHistory') || '[]');
    
    if (history.length === 0) {
        historyContainer.innerHTML = '<p class="history-empty">暂无保存的密码</p>';
        return;
    }
    
    let html = '';
    history.forEach((item, index) => {
        html += `
            <div class="history-item">
                <div>
                    <div class="history-password">${item.password}</div>
                    <div class="history-time">${item.time}</div>
                </div>
                <div class="history-actions">
                    <button class="history-btn copy" onclick="copyHistoryPassword(${index})">复制</button>
                    <button class="history-btn delete" onclick="deleteHistoryPassword(${index})">删除</button>
                </div>
            </div>
        `;
    });
    
    historyContainer.innerHTML = html;
}

// 复制历史密码
function copyHistoryPassword(index) {
    const history = JSON.parse(localStorage.getItem('passwordHistory') || '[]');
    if (history[index]) {
        const tempInput = document.createElement('input');
        tempInput.value = history[index].password;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        alert('✅ 密码已复制到剪贴板！');
    }
}

// 删除历史密码
function deleteHistoryPassword(index) {
    let history = JSON.parse(localStorage.getItem('passwordHistory') || '[]');
    history.splice(index, 1);
    localStorage.setItem('passwordHistory', JSON.stringify(history));
    loadPasswordHistory();
}

// 3. MD5 / SHA256 加密
function initHashTools() {
    const hashBtn = document.getElementById('hashBtn');
    const hashInput = document.getElementById('hashInput');

    hashBtn.addEventListener('click', async function() {
        const text = hashInput.value;
        if (!text) {
            alert('请先输入要加密的文本');
            return;
        }

        document.getElementById('md5Result').value = md5(text);
        document.getElementById('sha256Result').value = await sha256(text);
    });
}

// MD5加密函数（简化版实现）
function md5(string) {
    function rotateLeft(x, n) {
        return (x << n) | (x >>> (32 - n));
    }
    function addUnsigned(x, y) {
        let lsw = (x & 0xFFFF) + (y & 0xFFFF);
        let msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
    }
    function F(x, y, z) { return (x & y) | ((~x) & z); }
    function G(x, y, z) { return (x & z) | (y & (~z)); }
    function H(x, y, z) { return (x ^ y ^ z); }
    function I(x, y, z) { return (y ^ (x | (~z))); }
    function FF(a, b, c, d, x, s, ac) {
        a = addUnsigned(a, addUnsigned(addUnsigned(F(b, c, d), x), ac));
        return addUnsigned(rotateLeft(a, s), b);
    }
    function GG(a, b, c, d, x, s, ac) {
        a = addUnsigned(a, addUnsigned(addUnsigned(G(b, c, d), x), ac));
        return addUnsigned(rotateLeft(a, s), b);
    }
    function HH(a, b, c, d, x, s, ac) {
        a = addUnsigned(a, addUnsigned(addUnsigned(H(b, c, d), x), ac));
        return addUnsigned(rotateLeft(a, s), b);
    }
    function II(a, b, c, d, x, s, ac) {
        a = addUnsigned(a, addUnsigned(addUnsigned(I(b, c, d), x), ac));
        return addUnsigned(rotateLeft(a, s), b);
    }
    function convertToWordArray(string) {
        let wordArray = [];
        for (let i = 0; i < string.length * 8; i += 8) {
            wordArray[i >> 5] |= (string.charCodeAt(i / 8) & 0xFF) << (i % 32);
        }
        return wordArray;
    }
    function utf8Encode(string) {
        string = string.replace(/\r\n/g, '\n');
        let output = '';
        for (let n = 0; n < string.length; n++) {
            let c = string.charCodeAt(n);
            if (c < 128) {
                output += String.fromCharCode(c);
            } else if ((c > 127) && (c < 2048)) {
                output += String.fromCharCode((c >> 6) | 192);
                output += String.fromCharCode((c & 63) | 128);
            } else {
                output += String.fromCharCode((c >> 12) | 224);
                output += String.fromCharCode(((c >> 6) & 63) | 128);
                output += String.fromCharCode((c & 63) | 128);
            }
        }
        return output;
    }
    function wordToHex(value) {
        let hexTab = '0123456789abcdef';
        let str = '';
        for (let i = 0; i <= 3; i++) {
            str += hexTab.charAt((value >> (i * 8 + 4)) & 0x0F) + hexTab.charAt((value >> (i * 8)) & 0x0F);
        }
        return str;
    }
    string = utf8Encode(string);
    let x = convertToWordArray(string);
    let len = string.length * 8;
    x[len >> 5] |= 0x80 << (len % 32);
    x[(((len + 64) >>> 9) << 4) + 14] = len;
    let a = 1732584193, b = -271733879, c = -1732584194, d = 271733878;
    for (let i = 0; i < x.length; i += 16) {
        let olda = a, oldb = b, oldc = c, oldd = d;
        a = FF(a, b, c, d, x[i + 0], 7, -680876936);
        d = FF(d, a, b, c, x[i + 1], 12, -389564586);
        c = FF(c, d, a, b, x[i + 2], 17, 606105819);
        b = FF(b, c, d, a, x[i + 3], 22, -1044525330);
        a = FF(a, b, c, d, x[i + 4], 7, -176418897);
        d = FF(d, a, b, c, x[i + 5], 12, 1200080426);
        c = FF(c, d, a, b, x[i + 6], 17, -1473231341);
        b = FF(b, c, d, a, x[i + 7], 22, -45705983);
        a = FF(a, b, c, d, x[i + 8], 7, 1770035416);
        d = FF(d, a, b, c, x[i + 9], 12, -1958414417);
        c = FF(c, d, a, b, x[i + 10], 17, -42063);
        b = FF(b, c, d, a, x[i + 11], 22, -1990404162);
        a = FF(a, b, c, d, x[i + 12], 7, 1804603682);
        d = FF(d, a, b, c, x[i + 13], 12, -40341101);
        c = FF(c, d, a, b, x[i + 14], 17, -1502002290);
        b = FF(b, c, d, a, x[i + 15], 22, 1236535329);
        a = GG(a, b, c, d, x[i + 1], 5, -165796510);
        d = GG(d, a, b, c, x[i + 6], 9, -1069501632);
        c = GG(c, d, a, b, x[i + 11], 14, 643717713);
        b = GG(b, c, d, a, x[i + 0], 20, -373897302);
        a = GG(a, b, c, d, x[i + 5], 5, -701558691);
        d = GG(d, a, b, c, x[i + 10], 9, 38016083);
        c = GG(c, d, a, b, x[i + 15], 14, -660478335);
        b = GG(b, c, d, a, x[i + 4], 20, -405537848);
        a = GG(a, b, c, d, x[i + 9], 5, 568446438);
        d = GG(d, a, b, c, x[i + 14], 9, -1019803690);
        c = GG(c, d, a, b, x[i + 3], 14, -187363961);
        b = GG(b, c, d, a, x[i + 8], 20, 1163531501);
        a = GG(a, b, c, d, x[i + 13], 5, -1444681467);
        d = GG(d, a, b, c, x[i + 2], 9, -51403784);
        c = GG(c, d, a, b, x[i + 7], 14, 1735328473);
        b = GG(b, c, d, a, x[i + 12], 20, -1926607734);
        a = HH(a, b, c, d, x[i + 5], 4, -378558);
        d = HH(d, a, b, c, x[i + 8], 11, -2022574463);
        c = HH(c, d, a, b, x[i + 11], 16, 1839030562);
        b = HH(b, c, d, a, x[i + 14], 23, -35309556);
        a = HH(a, b, c, d, x[i + 1], 4, -1530992060);
        d = HH(d, a, b, c, x[i + 4], 11, 1272893353);
        c = HH(c, d, a, b, x[i + 7], 16, -155497632);
        b = HH(b, c, d, a, x[i + 10], 23, -1094730640);
        a = HH(a, b, c, d, x[i + 13], 4, 681279174);
        d = HH(d, a, b, c, x[i + 0], 11, -358537222);
        c = HH(c, d, a, b, x[i + 3], 16, -722521979);
        b = HH(b, c, d, a, x[i + 6], 23, 76029189);
        a = HH(a, b, c, d, x[i + 9], 4, -640364487);
        d = HH(d, a, b, c, x[i + 12], 11, -421815835);
        c = HH(c, d, a, b, x[i + 15], 16, 530742520);
        b = HH(b, c, d, a, x[i + 2], 23, -995338651);
        a = II(a, b, c, d, x[i + 0], 6, -198630844);
        d = II(d, a, b, c, x[i + 7], 10, 1126891415);
        c = II(c, d, a, b, x[i + 14], 15, -1416354905);
        b = II(b, c, d, a, x[i + 5], 21, -57434055);
        a = II(a, b, c, d, x[i + 12], 6, 1700485571);
        d = II(d, a, b, c, x[i + 3], 10, -1894986606);
        c = II(c, d, a, b, x[i + 10], 15, -1051523);
        b = II(b, c, d, a, x[i + 1], 21, -2054922799);
        a = II(a, b, c, d, x[i + 8], 6, 1873313359);
        d = II(d, a, b, c, x[i + 15], 10, -30611744);
        c = II(c, d, a, b, x[i + 6], 15, -1560198380);
        b = II(b, c, d, a, x[i + 13], 21, 1309151649);
        a = II(a, b, c, d, x[i + 4], 6, -145523070);
        d = II(d, a, b, c, x[i + 11], 10, -1120210379);
        c = II(c, d, a, b, x[i + 2], 15, 718787259);
        b = II(b, c, d, a, x[i + 9], 21, -343485551);
        a = addUnsigned(a, olda);
        b = addUnsigned(b, oldb);
        c = addUnsigned(c, oldc);
        d = addUnsigned(d, oldd);
    }
    return (wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d)).toLowerCase();
}

// SHA256加密函数（使用浏览器原生API）
async function sha256(text) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

// 4. 常见弱密码提醒
function initWeakPasswordList() {
    const weakPasswords = [
        '123456', 'password', '123456789', '12345678',
        '12345', '1234567', '1234567890', 'qwerty',
        'abc123', '111111', '123123', 'admin',
        'letmein', 'welcome', 'monkey', 'dragon',
        'master', '1234', 'login', 'princess',
        'sunshine', 'qwerty123', 'password1', 'iloveyou'
    ];

    const list = document.getElementById('weakPasswordList');
    weakPasswords.forEach(pwd => {
        const li = document.createElement('li');
        li.textContent = pwd;
        list.appendChild(li);
    });
}

// ============ 二、编码解码工具 ============
function initEncodeTools() {
    initBase64();
    initUrlEncode();
    initUnicode();
    initHex();
    initRot13();
    initCopyCodeButtons();
}

// 通用函数：导出结果为txt文件
function exportToText(filename, content) {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}

// 通用函数：复制为代码格式
function copyAsCode(elementId, varName) {
    const element = document.getElementById(elementId);
    if (element && element.value) {
        const code = `const ${varName} = "${element.value}";`;
        const tempInput = document.createElement('input');
        tempInput.value = code;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        alert('✅ 已复制为代码格式！');
    }
}

// 初始化复制代码按钮
function initCopyCodeButtons() {
    const buttons = document.querySelectorAll('.copy-code-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const varName = targetId.replace('Output', '');
            copyAsCode(targetId, varName);
        });
    });
}

// 1. Base64编码/解码
function initBase64() {
    const encodeBtn = document.getElementById('base64EncodeBtn');
    const decodeBtn = document.getElementById('base64DecodeBtn');
    const exportBtn = document.getElementById('base64ExportBtn');
    const input = document.getElementById('base64Input');
    const output = document.getElementById('base64Output');

    // 实时预览
    input.addEventListener('input', function() {
        if (this.value) {
            try {
                output.value = btoa(unescape(encodeURIComponent(this.value)));
            } catch (e) {
            }
        } else {
            output.value = '';
        }
    });

    encodeBtn.addEventListener('click', function() {
        try {
            output.value = btoa(unescape(encodeURIComponent(input.value)));
        } catch (e) {
            alert('编码失败，请检查输入');
        }
    });

    decodeBtn.addEventListener('click', function() {
        try {
            output.value = decodeURIComponent(escape(atob(input.value)));
        } catch (e) {
            alert('解码失败，请检查输入是否是有效的Base64');
        }
    });

    exportBtn.addEventListener('click', function() {
        if (output.value) {
            exportToText('base64_result.txt', output.value);
        }
    });
}

// 2. URL编码/解码
function initUrlEncode() {
    const encodeBtn = document.getElementById('urlEncodeBtn');
    const decodeBtn = document.getElementById('urlDecodeBtn');
    const exportBtn = document.getElementById('urlExportBtn');
    const input = document.getElementById('urlInput');
    const output = document.getElementById('urlOutput');

    // 实时预览
    input.addEventListener('input', function() {
        if (this.value) {
            output.value = encodeURIComponent(this.value);
        } else {
            output.value = '';
        }
    });

    encodeBtn.addEventListener('click', function() {
        output.value = encodeURIComponent(input.value);
    });

    decodeBtn.addEventListener('click', function() {
        try {
            output.value = decodeURIComponent(input.value);
        } catch (e) {
            alert('解码失败，请检查输入');
        }
    });

    exportBtn.addEventListener('click', function() {
        if (output.value) {
            exportToText('url_result.txt', output.value);
        }
    });
}

// 3. Unicode转换
function initUnicode() {
    const encodeBtn = document.getElementById('unicodeEncodeBtn');
    const decodeBtn = document.getElementById('unicodeDecodeBtn');
    const exportBtn = document.getElementById('unicodeExportBtn');
    const input = document.getElementById('unicodeInput');
    const output = document.getElementById('unicodeOutput');

    // 实时预览
    input.addEventListener('input', function() {
        if (this.value) {
            let result = '';
            for (let i = 0; i < this.value.length; i++) {
                result += '\\u' + this.value.charCodeAt(i).toString(16).padStart(4, '0');
            }
            output.value = result;
        } else {
            output.value = '';
        }
    });

    encodeBtn.addEventListener('click', function() {
        let result = '';
        for (let i = 0; i < input.value.length; i++) {
            result += '\\u' + input.value.charCodeAt(i).toString(16).padStart(4, '0');
        }
        output.value = result;
    });

    decodeBtn.addEventListener('click', function() {
        try {
            output.value = input.value.replace(/\\u([0-9a-fA-F]{4})/g, function(match, hex) {
                return String.fromCharCode(parseInt(hex, 16));
            });
        } catch (e) {
            alert('转换失败，请检查输入');
        }
    });

    exportBtn.addEventListener('click', function() {
        if (output.value) {
            exportToText('unicode_result.txt', output.value);
        }
    });
}

// 4. Hex十六进制编码
function initHex() {
    const encodeBtn = document.getElementById('hexEncodeBtn');
    const decodeBtn = document.getElementById('hexDecodeBtn');
    const exportBtn = document.getElementById('hexExportBtn');
    const input = document.getElementById('hexInput');
    const output = document.getElementById('hexOutput');

    // 实时预览
    input.addEventListener('input', function() {
        if (this.value) {
            let result = '';
            for (let i = 0; i < this.value.length; i++) {
                result += this.value.charCodeAt(i).toString(16).padStart(2, '0');
            }
            output.value = result;
        } else {
            output.value = '';
        }
    });

    encodeBtn.addEventListener('click', function() {
        let result = '';
        for (let i = 0; i < input.value.length; i++) {
            result += input.value.charCodeAt(i).toString(16).padStart(2, '0');
        }
        output.value = result;
    });

    decodeBtn.addEventListener('click', function() {
        try {
            let result = '';
            const hexStr = input.value.replace(/\s/g, '');
            for (let i = 0; i < hexStr.length; i += 2) {
                result += String.fromCharCode(parseInt(hexStr.substr(i, 2), 16));
            }
            output.value = result;
        } catch (e) {
            alert('解码失败，请检查输入是否是有效的Hex');
        }
    });

    exportBtn.addEventListener('click', function() {
        if (output.value) {
            exportToText('hex_result.txt', output.value);
        }
    });
}

// 5. ROT13编码
function initRot13() {
    const encodeBtn = document.getElementById('rot13EncodeBtn');
    const exportBtn = document.getElementById('rot13ExportBtn');
    const input = document.getElementById('rot13Input');
    const output = document.getElementById('rot13Output');

    // 实时预览
    input.addEventListener('input', function() {
        if (this.value) {
            output.value = rot13(this.value);
        } else {
            output.value = '';
        }
    });

    encodeBtn.addEventListener('click', function() {
        output.value = rot13(input.value);
    });

    exportBtn.addEventListener('click', function() {
        if (output.value) {
            exportToText('rot13_result.txt', output.value);
        }
    });
}

// ROT13核心函数
function rot13(str) {
    return str.replace(/[a-zA-Z]/g, function(c) {
        return String.fromCharCode(c.charCodeAt(0) + (c.toLowerCase() <= 'm' ? 13 : -13));
    });
}

// ============ 三、网络信息速查 ============
function initNetworkTools() {
    initPortTable();
    initIpCheck();
    initIpInfo();
    initHttpStatusTable();
}

// 1. 常用端口对照表（带搜索过滤）
let allPorts = [];

function initPortTable() {
    allPorts = [
        { port: 21, service: 'FTP', description: '文件传输协议', protocol: 'TCP' },
        { port: 22, service: 'SSH', description: '安全外壳协议', protocol: 'TCP' },
        { port: 23, service: 'Telnet', description: '远程登录（不安全）', protocol: 'TCP' },
        { port: 25, service: 'SMTP', description: '简单邮件传输协议', protocol: 'TCP' },
        { port: 53, service: 'DNS', description: '域名系统', protocol: 'UDP/TCP' },
        { port: 80, service: 'HTTP', description: '超文本传输协议', protocol: 'TCP' },
        { port: 110, service: 'POP3', description: '邮局协议第3版', protocol: 'TCP' },
        { port: 143, service: 'IMAP', description: '互联网消息访问协议', protocol: 'TCP' },
        { port: 443, service: 'HTTPS', description: '安全超文本传输协议', protocol: 'TCP' },
        { port: 3306, service: 'MySQL', description: 'MySQL数据库', protocol: 'TCP' },
        { port: 3389, service: 'RDP', description: '远程桌面协议', protocol: 'TCP' },
        { port: 5432, service: 'PostgreSQL', description: 'PostgreSQL数据库', protocol: 'TCP' },
        { port: 6379, service: 'Redis', description: 'Redis数据库', protocol: 'TCP' },
        { port: 8080, service: 'HTTP-Proxy', description: '常用代理端口', protocol: 'TCP' }
    ];
    
    renderPortTable(allPorts);
    
    const searchInput = document.getElementById('portSearchInput');
    searchInput.addEventListener('input', function() {
        const searchText = this.value.toLowerCase().trim();
        const filteredPorts = allPorts.filter(item => 
            item.port.toString().includes(searchText) || 
            item.service.toLowerCase().includes(searchText) ||
            item.description.toLowerCase().includes(searchText) ||
            item.protocol.toLowerCase().includes(searchText)
        );
        renderPortTable(filteredPorts);
    });
}

function renderPortTable(ports) {
    const table = document.getElementById('portTable');
    let html = '<thead><tr><th>端口号</th><th>协议</th><th>服务名称</th><th>说明</th></tr></thead><tbody>';
    ports.forEach(item => {
        html += `<tr><td><strong>${item.port}</strong></td><td>${item.protocol}</td><td>${item.service}</td><td>${item.description}</td></tr>`;
    });
    html += '</tbody>';
    table.innerHTML = html;
}

// 2. 内网/公网IP判断
function initIpCheck() {
    const checkBtn = document.getElementById('checkIpBtn');
    const ipInput = document.getElementById('ipInput');
    const ipResult = document.getElementById('ipResult');

    checkBtn.addEventListener('click', function() {
        const ip = ipInput.value.trim();
        if (!ip) {
            alert('请输入IP地址');
            return;
        }

        const result = checkIpType(ip);
        ipResult.innerHTML = result.html;
        ipResult.style.color = result.color;
    });
}

function checkIpType(ip) {
    const privateRegexes = [
        /^10\./,
        /^172\.(1[6-9]|2[0-9]|3[01])\./,
        /^192\.168\./,
        /^127\./
    ];

    const isPrivate = privateRegexes.some(regex => regex.test(ip));

    if (isPrivate) {
        return {
            html: '🏠 这是内网IP地址',
            color: '#06b6d4'
        };
    } else {
        return {
            html: '🌍 这是公网IP地址',
            color: '#8b5cf6'
        };
    }
}

// 3. IP信息查询
function initIpInfo() {
    const dnsBtn = document.getElementById('dnsResolveBtn');
    const pingBtn = document.getElementById('pingTestBtn');
    const ipInfoInput = document.getElementById('ipInfoInput');
    const ipInfoResult = document.getElementById('ipInfoResult');
    
    dnsBtn.addEventListener('click', function() {
        const input = ipInfoInput.value.trim();
        if (!input) {
            alert('请输入IP地址或域名');
            return;
        }
        
        let html = '';
        
        if (/^\d+\.\d+\.\d+\.\d+$/.test(input)) {
            html += `
                <div class="ip-info-item">
                    <div class="ip-info-label">IP地址</div>
                    <div class="ip-info-value">${input}</div>
                </div>
                <div class="ip-info-item">
                    <div class="ip-info-label">提示</div>
                    <div class="ip-info-value">纯前端无法进行真实DNS反向解析，请使用后端服务</div>
                </div>
            `;
        } else {
            html += `
                <div class="ip-info-item">
                    <div class="ip-info-label">域名</div>
                    <div class="ip-info-value">${input}</div>
                </div>
                <div class="ip-info-item">
                    <div class="ip-info-label">提示</div>
                    <div class="ip-info-value">纯前端无法进行真实DNS解析，请使用后端服务</div>
                </div>
            `;
        }
        
        ipInfoResult.innerHTML = html;
    });
    
    pingBtn.addEventListener('click', function() {
        const input = ipInfoInput.value.trim();
        if (!input) {
            alert('请输入IP地址或域名');
            return;
        }
        
        const html = `
            <div class="ip-info-item">
                <div class="ip-info-label">目标</div>
                <div class="ip-info-value">${input}</div>
            </div>
            <div class="ip-info-item">
                <div class="ip-info-label">Ping测试</div>
                <div class="ip-info-value">纯前端无法进行真实Ping测试，请使用后端服务</div>
            </div>
            <div class="ip-info-item">
                <div class="ip-info-label">建议</div>
                <div class="ip-info-value">可在命令行使用 ping ${input} 进行测试</div>
            </div>
        `;
        
        ipInfoResult.innerHTML = html;
    });
}

// 3. HTTP状态码说明
function initHttpStatusTable() {
    const statusCodes = [
        { code: 200, text: 'OK', description: '请求成功' },
        { code: 301, text: 'Moved Permanently', description: '永久重定向' },
        { code: 302, text: 'Found', description: '临时重定向' },
        { code: 400, text: 'Bad Request', description: '请求错误' },
        { code: 401, text: 'Unauthorized', description: '未授权' },
        { code: 403, text: 'Forbidden', description: '禁止访问' },
        { code: 404, text: 'Not Found', description: '未找到' },
        { code: 500, text: 'Internal Server Error', description: '服务器内部错误' },
        { code: 502, text: 'Bad Gateway', description: '网关错误' },
        { code: 503, text: 'Service Unavailable', description: '服务不可用' }
    ];

    const table = document.getElementById('httpStatusTable');
    let html = '<thead><tr><th>状态码</th><th>含义</th><th>说明</th></tr></thead><tbody>';
    statusCodes.forEach(item => {
        html += `<tr><td><strong>${item.code}</strong></td><td>${item.text}</td><td>${item.description}</td></tr>`;
    });
    html += '</tbody>';
    table.innerHTML = html;
}

// ============ 密码安全检测中心功能 ============

// 弱密码数据
const weakPasswordsCenter = [
    { password: '123456', risk: 'high', desc: '全球最常用密码' },
    { password: 'password', risk: 'high', desc: '默认弱密码' },
    { password: 'admin123', risk: 'high', desc: '管理员默认密码' },
    { password: 'qwerty', risk: 'high', desc: '键盘序列密码' },
    { password: '111111', risk: 'high', desc: '纯数字密码' },
    { password: 'abc123', risk: 'medium', desc: '简单字母数字组合' },
    { password: 'letmein', risk: 'medium', desc: '常见英文短语' },
    { password: 'welcome', risk: 'medium', desc: '欢迎词密码' },
    { password: 'monkey', risk: 'medium', desc: '常见动物名' },
    { password: 'dragon', risk: 'medium', desc: '常见神话词汇' }
];

// 初始化弱密码列表
function initWeakPasswordsCenter() {
    const list = document.getElementById('weakPasswordListCenter');
    if (!list) return;
    
    const items = [...weakPasswordsCenter, ...weakPasswordsCenter];
    
    list.innerHTML = items.map(item => `
        <div class="weak-password-item">
            <span class="risk-badge ${item.risk}">${item.risk === 'high' ? '高危' : '中危'}</span>
            <span class="password-text ${item.risk === 'high' ? 'high-risk' : ''}">${item.password}</span>
            <span style="color: var(--text-muted); font-size: 0.8rem;">${item.desc}</span>
        </div>
    `).join('');
}

// 密码强度检测
function checkPasswordCenter() {
    const input = document.getElementById('passwordInputCenter');
    if (!input) return;
    
    const password = input.value;
    
    if (!password) {
        alert('请输入密码');
        return;
    }

    const result = analyzePasswordCenter(password);
    updateStrengthUICenter(result);
    addTerminalLineCenter('info', `密码检测完成: ${result.level}级强度`);
}

function analyzePasswordCenter(password) {
    let score = 0;
    const checks = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        numbers: /[0-9]/.test(password),
        special: /[^A-Za-z0-9]/.test(password),
        noCommon: !weakPasswordsCenter.some(wp => password.toLowerCase().includes(wp.password))
    };

    if (checks.length) score += 20;
    if (password.length >= 12) score += 10;
    if (checks.uppercase) score += 15;
    if (checks.lowercase) score += 10;
    if (checks.numbers) score += 15;
    if (checks.special) score += 20;
    if (checks.noCommon) score += 10;

    let level = 'weak';
    if (score >= 80) level = 'extreme';
    else if (score >= 60) level = 'strong';
    else if (score >= 40) level = 'medium';

    const entropy = Math.log2(Math.pow(95, password.length)).toFixed(1);
    const crackTime = estimateCrackTimeCenter(password);

    return { score, level, checks, entropy, crackTime };
}

function estimateCrackTimeCenter(password) {
    const charset = getCharsetSizeCenter(password);
    const combinations = Math.pow(charset, password.length);
    const guessesPerSecond = 1e10;
    const seconds = combinations / guessesPerSecond / 2;

    if (seconds < 1) return '瞬间';
    if (seconds < 60) return Math.round(seconds) + '秒';
    if (seconds < 3600) return Math.round(seconds / 60) + '分钟';
    if (seconds < 86400) return Math.round(seconds / 3600) + '小时';
    if (seconds < 31536000) return Math.round(seconds / 86400) + '天';
    if (seconds < 31536000 * 100) return Math.round(seconds / 31536000) + '年';
    return '数百年+';
}

function getCharsetSizeCenter(password) {
    let size = 0;
    if (/[a-z]/.test(password)) size += 26;
    if (/[A-Z]/.test(password)) size += 26;
    if (/[0-9]/.test(password)) size += 10;
    if (/[^A-Za-z0-9]/.test(password)) size += 32;
    return size || 1;
}

function updateStrengthUICenter(result) {
    const bar = document.getElementById('strengthBarCenter');
    const label = document.getElementById('strengthLabelCenter');
    if (!bar || !label) return;
    
    const widths = { weak: 25, medium: 50, strong: 75, extreme: 100 };
    const labels = { weak: '弱', medium: '中', strong: '强', extreme: '极高' };

    bar.style.width = widths[result.level] + '%';
    bar.className = 'strength-bar ' + result.level;
    label.textContent = labels[result.level];
    label.className = 'strength-label ' + result.level;

    document.getElementById('lengthScoreCenter').textContent = result.score;
    document.getElementById('complexScoreCenter').textContent = Object.values(result.checks).filter(Boolean).length;
    document.getElementById('entropyScoreCenter').textContent = result.entropy;
    document.getElementById('timeToCrackCenter').textContent = result.crackTime;
}

// AI终端
const terminalMessagesCenter = [
    { type: 'prompt', text: '> 系统初始化中...' },
    { type: 'output', text: '[OK] 安全模块加载完成' },
    { type: 'prompt', text: '> 启动密码分析引擎...' },
    { type: 'output', text: '[OK] 引擎就绪，等待输入' },
    { type: 'prompt', text: '> 加载弱密码数据库...' },
    { type: 'output', text: '[OK] 已加载 10,000+ 常见弱密码' },
    { type: 'prompt', text: '> AI助手已就绪' },
    { type: 'output', text: '输入密码进行安全检测，或询问安全相关问题' }
];

function initTerminalCenter() {
    const content = document.getElementById('terminalContentCenter');
    if (!content) return;
    
    content.innerHTML = '';
    
    terminalMessagesCenter.forEach((msg, index) => {
        setTimeout(() => {
            addTerminalLineCenter(msg.type, msg.text);
        }, index * 400);
    });
}

function addTerminalLineCenter(type, text) {
    const content = document.getElementById('terminalContentCenter');
    if (!content) return;
    
    const line = document.createElement('div');
    line.className = 'terminal-line';
    line.style.animationDelay = '0s';
    
    const typeClass = type === 'prompt' ? 'prompt' : 'output';
    const prefix = type === 'prompt' ? '$ ' : '';
    
    line.innerHTML = `<span class="${typeClass}">${prefix}${text}</span>`;
    content.appendChild(line);
    content.scrollTop = content.scrollHeight;
}

// 安全事件日志
const securityEventsCenter = [
    { time: '14:23:01', type: 'info', message: '系统启动完成' },
    { time: '14:23:05', type: 'success', message: '防火墙规则加载成功' },
    { time: '14:24:12', type: 'warning', message: '检测到端口扫描尝试: 192.168.1.100' },
    { time: '14:25:33', type: 'danger', message: 'SSH登录失败: 用户 admin, IP: 10.0.0.55' },
    { time: '14:26:01', type: 'info', message: '定时安全扫描启动' },
    { time: '14:27:45', type: 'success', message: 'SSL证书验证通过' },
    { time: '14:28:22', type: 'warning', message: '检测到异常流量模式' },
    { time: '14:29:10', type: 'danger', message: 'SQL注入尝试被拦截' },
    { time: '14:30:00', type: 'info', message: '系统健康检查完成' },
    { time: '14:31:15', type: 'success', message: '所有服务运行正常' }
];

function initSecurityEventsCenter() {
    const terminal = document.getElementById('eventsTerminalCenter');
    if (!terminal) return;
    
    terminal.innerHTML = '';
    
    securityEventsCenter.forEach((event, index) => {
        setTimeout(() => {
            const line = document.createElement('div');
            line.className = 'event-line';
            line.style.animationDelay = `${index * 0.1}s`;
            line.innerHTML = `
                <span class="event-time">${event.time}</span>
                <span class="event-type ${event.type}">${getTypeLabelCenter(event.type)}</span>
                <span class="event-message">${event.message}</span>
            `;
            terminal.appendChild(line);
            terminal.scrollTop = terminal.scrollHeight;
        }, index * 300);
    });
}

function getTypeLabelCenter(type) {
    const labels = {
        info: 'INFO',
        warning: 'WARN',
        danger: 'ALERT',
        success: 'OK'
    };
    return labels[type] || type.toUpperCase();
}

// 节点状态监控
const nodesCenter = [
    { name: '主服务器', status: 'online', text: '运行正常' },
    { name: '数据库节点', status: 'online', text: '连接稳定' },
    { name: '缓存服务', status: 'warning', text: '负载较高' },
    { name: 'API网关', status: 'online', text: '响应正常' },
    { name: '日志服务', status: 'online', text: '记录中' },
    { name: '监控节点', status: 'online', text: '监控中' },
    { name: '备份服务', status: 'offline', text: '维护中' },
    { name: '安全模块', status: 'online', text: '防护中' }
];

function initNodesCenter() {
    const grid = document.getElementById('nodesGridCenter');
    if (!grid) return;
    
    grid.innerHTML = nodesCenter.map(node => `
        <div class="glass-card node-card">
            <div class="status-indicator ${node.status}"></div>
            <div class="node-info">
                <div class="node-name">${node.name}</div>
                <div class="node-status-text">${node.text}</div>
            </div>
        </div>
    `).join('');
}

// CTF进度
function initCTFProgressCenter() {
    const solved = 35;
    const total = 50;
    const percentage = Math.round((solved / total) * 100);
    
    setTimeout(() => {
        const circle = document.getElementById('progressCircle');
        if (!circle) return;
        
        const circumference = 2 * Math.PI * 60;
        const offset = circumference - (percentage / 100) * circumference;
        circle.style.strokeDashoffset = offset;
        
        document.getElementById('ctfPercentage').textContent = percentage + '%';
        document.getElementById('ctfSolved').textContent = solved;
        document.getElementById('ctfRank').textContent = '#' + Math.floor(Math.random() * 100 + 1);
    }, 500);
}

// 网络操作
function scanNetwork() {
    addTerminalLineCenter('prompt', '> 执行网络扫描...');
    setTimeout(() => {
        addTerminalLineCenter('output', '[OK] 发现 4 个活跃节点');
        addSecurityEventCenter('info', '网络扫描完成，发现4个活跃节点');
    }, 1000);
}

function checkVulnerabilities() {
    addTerminalLineCenter('prompt', '> 启动漏洞扫描...');
    setTimeout(() => {
        addTerminalLineCenter('output', '[OK] 未发现高危漏洞');
        addSecurityEventCenter('success', '漏洞扫描完成，系统安全');
    }, 1500);
}

function generateReport() {
    addTerminalLineCenter('prompt', '> 生成安全报告...');
    setTimeout(() => {
        addTerminalLineCenter('output', '[OK] 报告已生成: security_report_2024.pdf');
        addSecurityEventCenter('info', '安全报告生成完成');
    }, 1000);
}

function addSecurityEventCenter(type, message) {
    const terminal = document.getElementById('eventsTerminalCenter');
    if (!terminal) return;
    
    const now = new Date();
    const time = now.toTimeString().slice(0, 8);
    
    const line = document.createElement('div');
    line.className = 'event-line';
    line.innerHTML = `
        <span class="event-time">${time}</span>
        <span class="event-type ${type}">${getTypeLabelCenter(type)}</span>
        <span class="event-message">${message}</span>
    `;
    terminal.insertBefore(line, terminal.firstChild);
}

// 初始化密码安全检测中心
function initPasswordCenter() {
    initWeakPasswordsCenter();
    initTerminalCenter();
    initSecurityEventsCenter();
    initNodesCenter();
    initCTFProgressCenter();
}

// ============ 四、安全知识科普 ============
function initKnowledgeTools() {
    initVulnerabilityCards();
    initPhishingTips();
    initWifiTips();
    initFileTips();
    initKnowledgeSearch();
    initChecklist();
}

// 知识分类搜索
function initKnowledgeSearch() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const searchInput = document.getElementById('knowledgeSearchInput');
    const knowledgeList = document.getElementById('knowledgeList');
    
    // 安全知识数据
    const knowledgeData = [
        {
            title: 'SQL注入攻击',
            category: 'web',
            tags: ['Web安全', '漏洞'],
            content: '攻击者通过在输入框中插入恶意SQL代码，获取或篡改数据库数据。防御方法：使用参数化查询、ORM框架、输入验证。'
        },
        {
            title: 'XSS跨站脚本攻击',
            category: 'web',
            tags: ['Web安全', '漏洞'],
            content: '攻击者在网页中植入恶意脚本，当用户访问时执行，可窃取cookie等信息。防御方法：对输出进行HTML转义、使用CSP。'
        },
        {
            title: 'CSRF跨站请求伪造',
            category: 'web',
            tags: ['Web安全', '漏洞'],
            content: '攻击者诱导用户在已登录的网站上执行非本意的操作。防御方法：使用CSRF Token、验证Referer。'
        },
        {
            title: '文件上传漏洞',
            category: 'web',
            tags: ['Web安全', '漏洞'],
            content: '网站未对上传文件进行严格校验，攻击者可上传恶意文件并执行。防御方法：限制文件类型、检查文件内容、随机重命名。'
        },
        {
            title: 'DDoS分布式拒绝服务',
            category: 'network',
            tags: ['网络安全', '攻击'],
            content: '攻击者使用大量受控主机向目标发送请求，使目标无法正常服务。防御方法：使用CDN、流量清洗、防火墙。'
        },
        {
            title: 'ARP欺骗',
            category: 'network',
            tags: ['网络安全', '攻击'],
            content: '攻击者伪造ARP应答，使网络流量流向攻击者。防御方法：静态ARP表、ARP防护软件。'
        },
        {
            title: 'DNS劫持',
            category: 'network',
            tags: ['网络安全', '攻击'],
            content: '攻击者篡改DNS解析结果，将用户引导到钓鱼网站。防御方法：使用HTTPS、DNSSEC。'
        },
        {
            title: '端口扫描',
            category: 'network',
            tags: ['网络安全', '侦查'],
            content: '通过扫描目标主机的端口，发现开放的服务和潜在漏洞。常用工具：Nmap。'
        },
        {
            title: '对称加密',
            category: 'crypto',
            tags: ['密码学', '加密'],
            content: '加密和解密使用相同的密钥。优点：速度快；缺点：密钥管理困难。常见算法：AES、DES。'
        },
        {
            title: '非对称加密',
            category: 'crypto',
            tags: ['密码学', '加密'],
            content: '使用公钥加密、私钥解密。优点：密钥管理方便；缺点：速度慢。常见算法：RSA、ECC。'
        },
        {
            title: '哈希函数',
            category: 'crypto',
            tags: ['密码学', '哈希'],
            content: '将任意长度数据转换为固定长度的摘要。特点：不可逆、雪崩效应。常见算法：MD5、SHA-256。'
        },
        {
            title: '数字签名',
            category: 'crypto',
            tags: ['密码学', '签名'],
            content: '使用私钥对消息进行签名，公钥验证签名。作用：认证、完整性、不可否认。'
        },
        {
            title: '缓冲区溢出',
            category: 'system',
            tags: ['系统安全', '漏洞'],
            content: '程序写入的数据超过缓冲区大小，覆盖相邻内存。防御方法：栈保护、ASLR、DEP。'
        },
        {
            title: '提权漏洞',
            category: 'system',
            tags: ['系统安全', '漏洞'],
            content: '普通用户通过漏洞获得管理员权限。防御方法：及时打补丁、最小权限原则。'
        },
        {
            title: '后门程序',
            category: 'system',
            tags: ['系统安全', '恶意软件'],
            content: '攻击者留在系统中的秘密访问通道。常见类型：WebShell、Rootkit。'
        },
        {
            title: '日志审计',
            category: 'system',
            tags: ['系统安全', '防护'],
            content: '定期检查系统日志，发现异常行为和入侵迹象。重要日志：登录日志、访问日志。'
        }
    ];
    
    let currentCategory = 'all';
    let searchText = '';
    
    // 渲染知识列表
    function renderKnowledgeList() {
        let filteredData = knowledgeData;
        
        // 分类过滤
        if (currentCategory !== 'all') {
            filteredData = filteredData.filter(item => item.category === currentCategory);
        }
        
        // 搜索过滤
        if (searchText) {
            filteredData = filteredData.filter(item => 
                item.title.toLowerCase().includes(searchText.toLowerCase()) ||
                item.content.toLowerCase().includes(searchText.toLowerCase()) ||
                item.tags.some(tag => tag.toLowerCase().includes(searchText.toLowerCase()))
            );
        }
        
        if (filteredData.length === 0) {
            knowledgeList.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 40px;">没有找到相关知识</p>';
            return;
        }
        
        let html = '';
        filteredData.forEach(item => {
            let tagsHtml = '';
            item.tags.forEach(tag => {
                tagsHtml += `<span class="knowledge-item-tag">${tag}</span>`;
            });
            
            html += `
                <div class="knowledge-item">
                    <div class="knowledge-item-title">${item.title}</div>
                    <div>${tagsHtml}</div>
                    <p style="margin-top: 12px; color: var(--text-secondary); line-height: 1.8;">${item.content}</p>
                </div>
            `;
        });
        knowledgeList.innerHTML = html;
    }
    
    // 分类切换
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentCategory = this.getAttribute('data-category');
            renderKnowledgeList();
        });
    });
    
    // 搜索
    searchInput.addEventListener('input', function() {
        searchText = this.value.trim();
        renderKnowledgeList();
    });
    
    // 初始渲染
    renderKnowledgeList();
}

// 安全Checklist
function initChecklist() {
    const checkboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
    const saveBtn = document.getElementById('saveChecklistBtn');
    const resetBtn = document.getElementById('resetChecklistBtn');
    const progressCount = document.getElementById('progressCount');
    
    // 更新进度
    function updateProgress() {
        const checked = document.querySelectorAll('.checklist-item input[type="checkbox"]:checked').length;
        progressCount.textContent = checked;
    }
    
    // 加载保存的状态
    function loadChecklist() {
        const saved = localStorage.getItem('securityChecklist');
        if (saved) {
            const states = JSON.parse(saved);
            checkboxes.forEach((checkbox, index) => {
                checkbox.checked = states[index] || false;
            });
        }
        updateProgress();
    }
    
    // 保存状态
    function saveChecklist() {
        const states = Array.from(checkboxes).map(checkbox => checkbox.checked);
        localStorage.setItem('securityChecklist', JSON.stringify(states));
        alert('✅ 进度已保存！');
    }
    
    // 重置
    function resetChecklist() {
        if (confirm('确定要重置所有进度吗？')) {
            checkboxes.forEach(checkbox => {
                checkbox.checked = false;
            });
            localStorage.removeItem('securityChecklist');
            updateProgress();
        }
    }
    
    // 监听复选框变化
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateProgress);
    });
    
    // 按钮事件
    saveBtn.addEventListener('click', saveChecklist);
    resetBtn.addEventListener('click', resetChecklist);
    
    // 加载
    loadChecklist();
}

// ============ 第三阶段新增功能 ============

// 弱密码扫描
function initWeakPasswordScan() {
    const scanBtn = document.getElementById('scanWeakPasswordBtn');
    const input = document.getElementById('weakPasswordScanInput');
    const result = document.getElementById('weakPasswordScanResult');
    
    // 扩展的弱密码库
    const weakPasswords = [
        '123456', 'password', '123456789', '12345678', '12345',
        '1234567', '1234567890', 'qwerty', 'abc123', '111111',
        '123123', 'admin', 'letmein', 'welcome', 'monkey', 'dragon',
        'master', '1234', 'login', 'princess', 'sunshine', 'qwerty123',
        'password1', 'iloveyou', '123qwe', '000000', '123321',
        'password123', 'admin123', 'welcome123', 'test123', 'guest',
        'user', 'demo', 'root', 'toor', 'pass', '123abc'
    ];
    
    scanBtn.addEventListener('click', function() {
        const password = input.value.trim();
        if (!password) {
            alert('请输入要扫描的密码');
            return;
        }
        
        const isWeak = weakPasswords.includes(password);
        const similarWeak = weakPasswords.filter(w => 
            password.toLowerCase().includes(w.toLowerCase()) || 
            w.toLowerCase().includes(password.toLowerCase())
        );
        
        let html = '';
        if (isWeak) {
            html = `
                <div style="color: var(--danger); font-weight: bold; margin-bottom: 8px;">
                    🔴 高度危险！这是一个常见弱密码！
                </div>
                <div style="color: var(--text-secondary);">
                    请立即更换此密码，避免使用常见弱密码！
                </div>
            `;
            result.className = 'scan-result danger';
        } else if (similarWeak.length > 0) {
            html = `
                <div style="color: var(--warning); font-weight: bold; margin-bottom: 8px;">
                    🟠 中等风险！此密码与弱密码相似
                </div>
                <div style="color: var(--text-secondary); margin-bottom: 8px;">
                    相似的弱密码：${similarWeak.slice(0, 3).join(', ')}
                </div>
                <div style="color: var(--text-secondary);">
                    建议使用更复杂的密码组合
                </div>
            `;
            result.className = 'scan-result';
        } else {
            html = `
                <div style="color: var(--success); font-weight: bold; margin-bottom: 8px;">
                    🟢 未在常见弱密码库中找到
                </div>
                <div style="color: var(--text-secondary);">
                    但仍建议使用密码强度检测功能检查密码强度
                </div>
            `;
            result.className = 'scan-result success';
        }
        
        result.innerHTML = html;
    });
}

// 密码字典生成器
function initPasswordDictionary() {
    const generateBtn = document.getElementById('generateDictBtn');
    const exportBtn = document.getElementById('exportDictBtn');
    const output = document.getElementById('dictOutput');
    const baseWordInput = document.getElementById('dictBaseWord');
    const includeNumbers = document.getElementById('dictIncludeNumbers');
    const includeSymbols = document.getElementById('dictIncludeSymbols');
    const includeYear = document.getElementById('dictIncludeYear');
    
    generateBtn.addEventListener('click', function() {
        const baseWord = baseWordInput.value.trim();
        if (!baseWord) {
            alert('请输入基础单词');
            return;
        }
        
        let dictionary = [baseWord];
        
        // 添加大小写变体
        dictionary.push(baseWord.toUpperCase());
        dictionary.push(baseWord.toLowerCase());
        dictionary.push(baseWord.charAt(0).toUpperCase() + baseWord.slice(1).toLowerCase());
        
        // 添加数字
        if (includeNumbers.checked) {
            const numbers = ['123', '1234', '123456', '000', '111', '666', '888'];
            numbers.forEach(num => {
                dictionary.push(baseWord + num);
                dictionary.push(num + baseWord);
            });
        }
        
        // 添加年份
        if (includeYear.checked) {
            const currentYear = new Date().getFullYear();
            for (let y = currentYear - 10; y <= currentYear; y++) {
                dictionary.push(baseWord + y);
                dictionary.push(y + baseWord);
            }
        }
        
        // 添加符号
        if (includeSymbols.checked) {
            const symbols = ['!', '@', '#', '$', '%', '*', '_'];
            symbols.forEach(sym => {
                dictionary.push(baseWord + sym);
                dictionary.push(sym + baseWord);
            });
        }
        
        // 去重
        dictionary = [...new Set(dictionary)];
        
        output.value = dictionary.join('\n');
    });
    
    exportBtn.addEventListener('click', function() {
        if (output.value) {
            exportToText('password_dictionary.txt', output.value);
        }
    });
}

// 哈希碰撞演示
function initHashCollisionDemo() {
    const checkBtn = document.getElementById('checkCollisionBtn');
    const input1 = document.getElementById('collisionInput1');
    const input2 = document.getElementById('collisionInput2');
    const result = document.getElementById('collisionResult');
    const exampleBtns = document.querySelectorAll('.collision-example-btn');
    
    // 预定义示例（简化的碰撞演示）
    const examples = {
        '1': { text1: 'hello', text2: 'world' },
        '2': { text1: 'test123', text2: 'test456' }
    };
    
    // 示例按钮
    exampleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const exampleId = this.getAttribute('data-example');
            const example = examples[exampleId];
            input1.value = example.text1;
            input2.value = example.text2;
        });
    });
    
    checkBtn.addEventListener('click', async function() {
        const text1 = input1.value.trim();
        const text2 = input2.value.trim();
        
        if (!text1 || !text2) {
            alert('请输入两个字符串');
            return;
        }
        
        const hash1 = md5(text1);
        const hash2 = md5(text2);
        
        let html = '';
        if (hash1 === hash2) {
            html = `
                <div style="color: var(--success); font-weight: bold; margin-bottom: 12px;">
                    🎉 发现哈希碰撞！
                </div>
                <div style="margin-bottom: 8px;">
                    <strong>字符串1:</strong> ${text1}<br>
                    <strong>MD5:</strong> ${hash1}
                </div>
                <div>
                    <strong>字符串2:</strong> ${text2}<br>
                    <strong>MD5:</strong> ${hash2}
                </div>
                <div style="margin-top: 12px; color: var(--warning);">
                    ⚠️ 注意：真实的MD5碰撞需要特定构造的字符串
                </div>
            `;
            result.className = 'collision-result match';
        } else {
            html = `
                <div style="color: var(--warning); font-weight: bold; margin-bottom: 12px;">
                    ❌ 未发现碰撞
                </div>
                <div style="margin-bottom: 8px;">
                    <strong>字符串1:</strong> ${text1}<br>
                    <strong>MD5:</strong> <span style="font-family: monospace;">${hash1}</span>
                </div>
                <div>
                    <strong>字符串2:</strong> ${text2}<br>
                    <strong>MD5:</strong> <span style="font-family: monospace;">${hash2}</span>
                </div>
                <div style="margin-top: 12px; color: var(--text-secondary);">
                    💡 MD5已被证明存在碰撞，但需要专业工具生成
                </div>
            `;
            result.className = 'collision-result no-match';
        }
        
        result.innerHTML = html;
    });
}

// 更新学习助手初始化
function initLearnTools() {
    initGlossary();
    initCtfKnowledge();
    initCheckin();
    initCtfProblems();
    initNotes();
    initStudyTimer();
}

// CTF题目收集
function initCtfProblems() {
    const addBtn = document.getElementById('addCtfProblemBtn');
    const clearBtn = document.getElementById('clearCtfProblemsBtn');
    const list = document.getElementById('ctfProblemsList');
    const titleInput = document.getElementById('ctfProblemTitle');
    const categorySelect = document.getElementById('ctfProblemCategory');
    const descInput = document.getElementById('ctfProblemDesc');
    const writeupInput = document.getElementById('ctfProblemWriteup');
    const flagInput = document.getElementById('ctfProblemFlag');
    
    // 加载题目
    function loadProblems() {
        const problems = JSON.parse(localStorage.getItem('ctfProblems') || '[]');
        if (problems.length === 0) {
            list.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 40px;">暂无题目</p>';
            return;
        }
        
        let html = '';
        problems.forEach((problem, index) => {
            html += `
                <div class="ctf-problem-item">
                    <div class="ctf-problem-header">
                        <span class="ctf-problem-title">${problem.title}</span>
                        <span class="ctf-problem-category">${problem.category}</span>
                    </div>
                    ${problem.description ? `<div class="ctf-problem-content">${problem.description}</div>` : ''}
                    ${problem.writeup ? `<div class="ctf-problem-content"><strong>Writeup:</strong> ${problem.writeup}</div>` : ''}
                    ${problem.flag ? `<div class="ctf-problem-flag">${problem.flag}</div>` : ''}
                    <div class="ctf-problem-actions">
                        <button class="btn btn-secondary" onclick="deleteCtfProblem(${index})">删除</button>
                    </div>
                </div>
            `;
        });
        list.innerHTML = html;
    }
    
    // 添加题目
    addBtn.addEventListener('click', function() {
        const title = titleInput.value.trim();
        if (!title) {
            alert('请输入题目名称');
            return;
        }
        
        const problem = {
            title: title,
            category: categorySelect.value,
            description: descInput.value.trim(),
            writeup: writeupInput.value.trim(),
            flag: flagInput.value.trim(),
            time: new Date().toLocaleString('zh-CN')
        };
        
        const problems = JSON.parse(localStorage.getItem('ctfProblems') || '[]');
        problems.unshift(problem);
        localStorage.setItem('ctfProblems', JSON.stringify(problems));
        
        // 清空输入
        titleInput.value = '';
        descInput.value = '';
        writeupInput.value = '';
        flagInput.value = '';
        
        loadProblems();
        alert('✅ 题目已添加！');
    });
    
    // 清空题目
    clearBtn.addEventListener('click', function() {
        if (confirm('确定要清空所有题目吗？')) {
            localStorage.removeItem('ctfProblems');
            loadProblems();
        }
    });
    
    loadProblems();
}

// 删除CTF题目
function deleteCtfProblem(index) {
    const problems = JSON.parse(localStorage.getItem('ctfProblems') || '[]');
    problems.splice(index, 1);
    localStorage.setItem('ctfProblems', JSON.stringify(problems));
    initCtfProblems();
}

// 学习笔记
function initNotes() {
    const addBtn = document.getElementById('addNoteBtn');
    const clearBtn = document.getElementById('clearNotesBtn');
    const list = document.getElementById('notesList');
    const titleInput = document.getElementById('noteTitle');
    const contentInput = document.getElementById('noteContent');
    
    // 加载笔记
    function loadNotes() {
        const notes = JSON.parse(localStorage.getItem('studyNotes') || '[]');
        if (notes.length === 0) {
            list.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 40px;">暂无笔记</p>';
            return;
        }
        
        let html = '';
        notes.forEach((note, index) => {
            html += `
                <div class="note-item">
                    <div class="note-title">${note.title}</div>
                    <div class="note-content">${note.content.replace(/\n/g, '<br>')}</div>
                    <div class="note-time">🕐 ${note.time}</div>
                    <div class="note-actions">
                        <button class="btn btn-secondary" onclick="deleteNote(${index})">删除</button>
                    </div>
                </div>
            `;
        });
        list.innerHTML = html;
    }
    
    // 添加笔记
    addBtn.addEventListener('click', function() {
        const title = titleInput.value.trim();
        const content = contentInput.value.trim();
        if (!title || !content) {
            alert('请输入标题和内容');
            return;
        }
        
        const note = {
            title: title,
            content: content,
            time: new Date().toLocaleString('zh-CN')
        };
        
        const notes = JSON.parse(localStorage.getItem('studyNotes') || '[]');
        notes.unshift(note);
        localStorage.setItem('studyNotes', JSON.stringify(notes));
        
        titleInput.value = '';
        contentInput.value = '';
        
        loadNotes();
        alert('✅ 笔记已添加！');
    });
    
    // 清空笔记
    clearBtn.addEventListener('click', function() {
        if (confirm('确定要清空所有笔记吗？')) {
            localStorage.removeItem('studyNotes');
            loadNotes();
        }
    });
    
    loadNotes();
}

// 删除笔记
function deleteNote(index) {
    const notes = JSON.parse(localStorage.getItem('studyNotes') || '[]');
    notes.splice(index, 1);
    localStorage.setItem('studyNotes', JSON.stringify(notes));
    initNotes();
}

// 学习时间统计
let timerInterval = null;
let timerSeconds = 0;
let isTimerRunning = false;

function initStudyTimer() {
    const startBtn = document.getElementById('startTimerBtn');
    const pauseBtn = document.getElementById('pauseTimerBtn');
    const resetBtn = document.getElementById('resetTimerBtn');
    const display = document.getElementById('timerDisplay');
    
    // 格式化时间显示
    function formatTime(seconds) {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }
    
    // 更新显示
    function updateDisplay() {
        display.textContent = formatTime(timerSeconds);
    }
    
    // 保存学习时间
    function saveStudyTime(seconds) {
        const today = new Date().toDateString();
        const studyData = JSON.parse(localStorage.getItem('studyTimeData') || '{}');
        
        if (!studyData[today]) {
            studyData[today] = 0;
        }
        studyData[today] += seconds;
        
        if (!studyData.total) {
            studyData.total = 0;
        }
        studyData.total += seconds;
        
        localStorage.setItem('studyTimeData', JSON.stringify(studyData));
        updateStudyStats();
    }
    
    // 更新统计显示
    function updateStudyStats() {
        const studyData = JSON.parse(localStorage.getItem('studyTimeData') || '{}');
        const today = new Date().toDateString();
        
        // 今日学习时间
        const todaySeconds = studyData[today] || 0;
        const todayHours = Math.floor(todaySeconds / 3600);
        const todayMinutes = Math.floor((todaySeconds % 3600) / 60);
        document.getElementById('todayStudyTime').textContent = `${todayHours}小时${todayMinutes}分钟`;
        
        // 本周学习时间
        const weekStart = new Date();
        weekStart.setDate(weekStart.getDate() - weekStart.getDay());
        let weekSeconds = 0;
        for (let i = 0; i < 7; i++) {
            const d = new Date(weekStart);
            d.setDate(d.getDate() + i);
            weekSeconds += studyData[d.toDateString()] || 0;
        }
        const weekHours = Math.floor(weekSeconds / 3600);
        const weekMinutes = Math.floor((weekSeconds % 3600) / 60);
        document.getElementById('weekStudyTime').textContent = `${weekHours}小时${weekMinutes}分钟`;
        
        // 总学习时间
        const totalSeconds = studyData.total || 0;
        const totalHours = Math.floor(totalSeconds / 3600);
        const totalMinutes = Math.floor((totalSeconds % 3600) / 60);
        document.getElementById('totalStudyTime').textContent = `${totalHours}小时${totalMinutes}分钟`;
    }
    
    // 开始计时
    startBtn.addEventListener('click', function() {
        if (!isTimerRunning) {
            isTimerRunning = true;
            timerInterval = setInterval(() => {
                timerSeconds++;
                updateDisplay();
            }, 1000);
        }
    });
    
    // 暂停计时
    pauseBtn.addEventListener('click', function() {
        if (isTimerRunning) {
            isTimerRunning = false;
            if (timerInterval) {
                clearInterval(timerInterval);
                timerInterval = null;
            }
            saveStudyTime(timerSeconds);
            timerSeconds = 0;
            updateDisplay();
        }
    });
    
    // 重置计时
    resetBtn.addEventListener('click', function() {
        if (confirm('确定要重置计时吗？当前时间将被保存')) {
            if (isTimerRunning) {
                saveStudyTime(timerSeconds);
                isTimerRunning = false;
                if (timerInterval) {
                    clearInterval(timerInterval);
                    timerInterval = null;
                }
            }
            timerSeconds = 0;
            updateDisplay();
        }
    });
    
    updateStudyStats();
}

// 1. 常见漏洞简介
function initVulnerabilityCards() {
    const vulnerabilities = [
        {
            name: 'SQL注入',
            icon: '💉',
            description: '攻击者通过在输入框中插入恶意SQL代码，获取或篡改数据库数据。'
        },
        {
            name: 'XSS跨站脚本',
            icon: '📝',
            description: '攻击者在网页中植入恶意脚本，当用户访问时执行，可窃取cookie等信息。'
        },
        {
            name: 'CSRF跨站请求伪造',
            icon: '🎭',
            description: '攻击者诱导用户在已登录的网站上执行非本意的操作。'
        },
        {
            name: '文件上传漏洞',
            icon: '📁',
            description: '网站未对上传文件进行严格校验，攻击者可上传恶意文件并执行。'
        }
    ];

    const container = document.getElementById('vulnerabilityCards');
    vulnerabilities.forEach(vuln => {
        const card = document.createElement('div');
        card.className = 'vuln-card';
        card.innerHTML = `
            <h4>${vuln.icon} ${vuln.name}</h4>
            <p>${vuln.description}</p>
        `;
        container.appendChild(card);
    });
}

// 2. 钓鱼网站识别技巧
function initPhishingTips() {
    const tips = [
        '检查URL是否正确，注意拼写错误',
        '查看SSL证书，网址应以https开头',
        '不要点击陌生链接，先悬停看真实地址',
        '不随意输入账号密码，确认网站真实性',
        '警惕"紧急"、"中奖"等诱惑性信息'
    ];

    const list = document.getElementById('phishingTips');
    tips.forEach(tip => {
        const li = document.createElement('li');
        li.textContent = '✅ ' + tip;
        list.appendChild(li);
    });
}

// 3. 公共WiFi安全提示
function initWifiTips() {
    const tips = [
        '不使用无密码的公共WiFi',
        '公共WiFi下不进行网银操作',
        '使用VPN加密网络连接',
        '关闭自动连接WiFi功能',
        '优先使用手机流量进行敏感操作'
    ];

    const list = document.getElementById('wifiTips');
    tips.forEach(tip => {
        const li = document.createElement('li');
        li.textContent = '✅ ' + tip;
        list.appendChild(li);
    });
}

// 4. 恶意文件后缀风险提示
function initFileTips() {
    const tips = [
        '.exe, .msi - 可执行文件，谨慎运行',
        '.bat, .cmd - 批处理文件',
        '.vbs, .js - 脚本文件',
        '.scr - 屏幕保护（实为可执行）',
        '.zip, .rar - 解压前先杀毒扫描'
    ];

    const list = document.getElementById('fileTips');
    tips.forEach(tip => {
        const li = document.createElement('li');
        li.textContent = '⚠️ ' + tip;
        list.appendChild(li);
    });
}

// ============ 五、网安学习小助手 ============
function initLearnTools() {
    initGlossary();
    initCtfKnowledge();
    initCheckin();
}

// 1. 网安专业名词解释
function initGlossary() {
    const terms = [
        { term: 'WebShell', explanation: '一种以网页形式存在的后门程序，攻击者可通过它控制服务器。' },
        { term: '0Day漏洞', explanation: '指还未公开、官方还未发布补丁的漏洞。' },
        { term: 'Payload', explanation: '漏洞利用中真正执行恶意功能的代码部分。' },
        { term: 'POC', explanation: '概念验证，用来证明漏洞存在的代码或方法。' },
        { term: 'EXP', explanation: '漏洞利用程序，能够直接利用漏洞进行攻击。' },
        { term: 'Shell', explanation: '命令行环境，拿到Shell意味着可以执行系统命令。' },
        { term: '提权', explanation: '从普通用户权限提升到管理员（root）权限的过程。' },
        { term: '白帽子', explanation: '正面的安全研究者，帮助发现和修复漏洞。' },
        { term: '黑帽子', explanation: '恶意攻击者，利用漏洞进行破坏或获利。' },
        { term: 'IDS/IPS', explanation: '入侵检测系统/入侵防御系统，用于监控和阻止攻击。' }
    ];

    const container = document.getElementById('glossary');
    terms.forEach(item => {
        const div = document.createElement('div');
        div.className = 'glossary-item';
        div.innerHTML = `<h4>${item.term}</h4><p>${item.explanation}</p>`;
        container.appendChild(div);
    });
}

// 2. CTF入门知识点
function initCtfKnowledge() {
    const categories = [
        {
            name: 'Web',
            icon: '🌐',
            points: ['SQL注入', 'XSS跨站脚本', '文件上传', '命令执行', 'SSRF', '反序列化']
        },
        {
            name: 'Crypto',
            icon: '🔐',
            points: ['Base64', 'MD5/SHA', 'RSA', '古典密码', '维吉尼亚密码']
        },
        {
            name: 'Misc',
            icon: '🎯',
            points: ['隐写术', '流量分析', '编码转换', '脑洞题', '取证分析']
        },
        {
            name: 'Reverse',
            icon: '🔄',
            points: ['IDA使用', 'GDB调试', '汇编基础', '算法分析']
        },
        {
            name: 'Pwn',
            icon: '💥',
            points: ['栈溢出', '格式化字符串', '堆利用', 'UAF']
        },
        {
            name: 'Forensics',
            icon: '🔍',
            points: ['文件恢复', '日志分析', '内存取证', '注册表分析']
        }
    ];

    const container = document.getElementById('ctfKnowledge');
    categories.forEach(cat => {
        const div = document.createElement('div');
        div.className = 'ctf-category';
        let pointsHtml = '';
        cat.points.forEach(p => {
            pointsHtml += `<li>• ${p}</li>`;
        });
        div.innerHTML = `<h4>${cat.icon} ${cat.name}</h4><ul>${pointsHtml}</ul>`;
        container.appendChild(div);
    });
}

// 3. 学习打卡记录
function initCheckin() {
    const checkinBtn = document.getElementById('checkinBtn');
    const clearBtn = document.getElementById('clearCheckinBtn');
    const input = document.getElementById('checkinInput');
    const list = document.getElementById('checkinList');

    // 加载保存的记录
    loadCheckins();

    // 打卡
    checkinBtn.addEventListener('click', function() {
        const text = input.value.trim();
        if (!text) {
            alert('请输入学习内容');
            return;
        }

        const now = new Date();
        const checkin = {
            time: now.toLocaleString('zh-CN'),
            content: text
        };

        // 保存到localStorage
        let checkins = JSON.parse(localStorage.getItem('checkins') || '[]');
        checkins.unshift(checkin); // 添加到开头
        if (checkins.length > 50) checkins = checkins.slice(0, 50); // 最多保留50条
        localStorage.setItem('checkins', JSON.stringify(checkins));

        input.value = '';
        loadCheckins();
        alert('✅ 打卡成功！继续加油！');
    });

    // 清空记录
    clearBtn.addEventListener('click', function() {
        if (confirm('确定要清空所有打卡记录吗？')) {
            localStorage.removeItem('checkins');
            loadCheckins();
        }
    });

    // 加载记录
    function loadCheckins() {
        const checkins = JSON.parse(localStorage.getItem('checkins') || '[]');
        list.innerHTML = '';
        checkins.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `<span class="checkin-time">🕐 ${item.time}</span>${item.content}`;
            list.appendChild(li);
        });
    }
}

// ============ 新增高级可视化功能 ============

// 1. 实时时钟
function initRealTimeClock() {
    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const timeText = `${hours}:${minutes}:${seconds}`;
        
        // 更新侧边栏时钟
        const sidebarClock = document.getElementById('realTimeClock');
        if (sidebarClock) {
            sidebarClock.textContent = timeText;
        }
        
        // 更新移动端时钟
        const mobileClock = document.getElementById('mobileClock');
        if (mobileClock) {
            mobileClock.textContent = timeText;
        }
    }
    updateClock();
    setInterval(updateClock, 1000);
}

// 2. 粒子背景效果
function initParticles() {
    const container = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (10 + Math.random() * 10) + 's';
        container.appendChild(particle);
    }
}

// 3. 更新密码强度柱状图
function updateStrengthBars(password) {
    const barLength = document.getElementById('barLength');
    const barUpper = document.getElementById('barUpper');
    const barLower = document.getElementById('barLower');
    const barNumber = document.getElementById('barNumber');
    const barSymbol = document.getElementById('barSymbol');
    
    // 长度评分 (0-100)
    const lengthScore = Math.min(password.length * 6.25, 100);
    barLength.style.height = lengthScore + '%';
    
    // 其他评分 (0或100)
    barUpper.style.height = /[A-Z]/.test(password) ? '100%' : '0%';
    barLower.style.height = /[a-z]/.test(password) ? '100%' : '0%';
    barNumber.style.height = /[0-9]/.test(password) ? '100%' : '0%';
    barSymbol.style.height = /[!@#$%^&*(),.?":{}|<>]/.test(password) ? '100%' : '0%';
}

// 重写密码强度检测，添加柱状图更新
const originalInitPasswordStrength = initPasswordStrength;
initPasswordStrength = function() {
    const passwordInput = document.getElementById('passwordInput');
    const strengthFill = document.getElementById('strengthFill');
    const strengthText = document.getElementById('strengthText');
    const weakTips = document.getElementById('weakTips');

    passwordInput.addEventListener('input', function() {
        const password = this.value;
        const result = checkPasswordStrength(password);
        
        // 更新强度条
        strengthFill.style.width = result.score + '%';
        strengthFill.style.background = result.color;
        strengthText.textContent = result.text;
        strengthText.style.color = result.color;
        
        // 更新柱状图
        updateStrengthBars(password);
        
        // 显示建议
        if (result.tips.length > 0) {
            weakTips.textContent = '💡 ' + result.tips.join('，');
        } else {
            weakTips.textContent = '';
        }
    });
};

// 4. 可视化工具初始化
function initVisualTools() {
    initTopology();
    initAttackSimulation();
    initProgressChart();
    initMonitorPanel();
    initNodeStatus();
}

// 节点状态监控
let nodeStatusAutoRefresh = false;
let nodeStatusInterval = null;

function initNodeStatus() {
    const refreshBtn = document.getElementById('refreshNodeStatusBtn');
    const autoRefreshBtn = document.getElementById('autoRefreshBtn');
    const nodeStatusList = document.getElementById('nodeStatusList');
    
    // 节点数据
    const nodes = [
        { name: '服务器', ip: '192.168.1.1', status: 'online' },
        { name: '防火墙', ip: '192.168.1.254', status: 'online' },
        { name: '客户端', ip: '192.168.1.10', status: 'warning' },
        { name: '备份服务器', ip: '192.168.1.2', status: 'offline' }
    ];
    
    // 状态文字映射
    const statusText = {
        online: '在线',
        warning: '受攻击',
        offline: '离线'
    };
    
    // 渲染节点状态
    function renderNodeStatus() {
        let html = '';
        nodes.forEach(node => {
            html += `
                <div class="node-status-item">
                    <span class="node-status-indicator ${node.status}"></span>
                    <span>${node.name} (${node.ip})</span>
                    <span class="node-status-text">${statusText[node.status]}</span>
                </div>
            `;
        });
        nodeStatusList.innerHTML = html;
    }
    
    // 随机更新节点状态
    function randomUpdateStatus() {
        nodes.forEach(node => {
            const random = Math.random();
            if (random < 0.7) {
                node.status = 'online';
            } else if (random < 0.9) {
                node.status = 'warning';
            } else {
                node.status = 'offline';
            }
        });
        renderNodeStatus();
    }
    
    // 手动刷新
    refreshBtn.addEventListener('click', randomUpdateStatus);
    
    // 自动刷新切换
    autoRefreshBtn.addEventListener('click', function() {
        nodeStatusAutoRefresh = !nodeStatusAutoRefresh;
        if (nodeStatusAutoRefresh) {
            this.textContent = '停止刷新';
            this.classList.remove('btn-secondary');
            this.classList.add('btn-danger');
            nodeStatusInterval = setInterval(randomUpdateStatus, 3000);
        } else {
            this.textContent = '自动刷新';
            this.classList.remove('btn-danger');
            this.classList.add('btn-secondary');
            if (nodeStatusInterval) {
                clearInterval(nodeStatusInterval);
                nodeStatusInterval = null;
            }
        }
    });
}

// 5. 网络拓扑可视化
let topologyRunning = false;
let topologyInterval = null;

function initTopology() {
    const startBtn = document.getElementById('startTopologyBtn');
    const container = document.getElementById('networkTopology');
    const templateBtns = document.querySelectorAll('.template-btn');
    let currentTemplate = 'simple';
    
    // 模板数据
    const topologyTemplates = {
        simple: {
            nodes: [
                { x: 50, y: 150, icon: '🌐', label: '互联网' },
                { x: 150, y: 80, icon: '💻', label: '电脑' },
                { x: 150, y: 220, icon: '🖥️', label: '服务器' },
                { x: 280, y: 150, icon: '🔄', label: '交换机' },
                { x: 400, y: 150, icon: '☁️', label: '云服务' }
            ],
            connections: [[0, 3], [1, 3], [2, 3], [3, 4]]
        },
        enterprise: {
            nodes: [
                { x: 50, y: 150, icon: '🌐', label: '互联网' },
                { x: 150, y: 150, icon: '🛡️', label: '防火墙' },
                { x: 280, y: 80, icon: '💻', label: '办公区' },
                { x: 280, y: 150, icon: '🖥️', label: 'Web服务器' },
                { x: 280, y: 220, icon: '💾', label: '数据库' },
                { x: 400, y: 150, icon: '🔄', label: '核心交换机' },
                { x: 520, y: 150, icon: '☁️', label: '云备份' }
            ],
            connections: [[0, 1], [1, 4], [4, 2], [4, 3], [4, 5], [5, 6]]
        },
        home: {
            nodes: [
                { x: 50, y: 150, icon: '🌐', label: '宽带' },
                { x: 150, y: 150, icon: '📶', label: '路由器' },
                { x: 280, y: 60, icon: '📱', label: '手机' },
                { x: 280, y: 120, icon: '💻', label: '笔记本' },
                { x: 280, y: 180, icon: '🖥️', label: '台式机' },
                { x: 280, y: 240, icon: '📺', label: '电视' }
            ],
            connections: [[0, 1], [1, 2], [1, 3], [1, 4], [1, 5]]
        },
        cloud: {
            nodes: [
                { x: 50, y: 150, icon: '💻', label: '用户' },
                { x: 150, y: 150, icon: '🌐', label: 'CDN' },
                { x: 280, y: 100, icon: '🖥️', label: 'Web集群' },
                { x: 280, y: 200, icon: '🔄', label: '负载均衡' },
                { x: 400, y: 150, icon: '💾', label: '数据库' },
                { x: 520, y: 150, icon: '☁️', label: '对象存储' }
            ],
            connections: [[0, 1], [1, 3], [3, 2], [3, 4], [4, 5]]
        }
    };
    
    // 模板切换
    templateBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            templateBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentTemplate = this.getAttribute('data-template');
            
            if (topologyRunning) {
                stopTopology();
                startTopology(container, topologyTemplates[currentTemplate]);
            } else {
                renderStaticTopology(container, topologyTemplates[currentTemplate]);
            }
        });
    });
    
    // 初始渲染静态拓扑
    renderStaticTopology(container, topologyTemplates[currentTemplate]);
    
    startBtn.addEventListener('click', function() {
        if (topologyRunning) {
            stopTopology();
            startBtn.textContent = '启动模拟';
            renderStaticTopology(container, topologyTemplates[currentTemplate]);
        } else {
            startTopology(container, topologyTemplates[currentTemplate]);
            startBtn.textContent = '停止模拟';
        }
    });
}

// 渲染静态拓扑（无动画）
function renderStaticTopology(container, template) {
    container.innerHTML = '';
    
    // 创建节点
    template.nodes.forEach(node => {
        const nodeEl = document.createElement('div');
        nodeEl.className = 'topology-node';
        nodeEl.style.left = node.x + 'px';
        nodeEl.style.top = node.y + 'px';
        nodeEl.textContent = node.icon;
        nodeEl.title = node.label;
        container.appendChild(nodeEl);
    });
    
    // 创建连接线
    template.connections.forEach(([from, to]) => {
        const line = document.createElement('div');
        line.className = 'topology-line';
        
        const x1 = template.nodes[from].x + 30;
        const y1 = template.nodes[from].y + 30;
        const x2 = template.nodes[to].x + 30;
        const y2 = template.nodes[to].y + 30;
        
        const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
        
        line.style.left = x1 + 'px';
        line.style.top = y1 + 'px';
        line.style.width = length + 'px';
        line.style.transform = `rotate(${angle}deg)`;
        
        container.appendChild(line);
    });
}

function startTopology(container, template) {
    topologyRunning = true;
    container.innerHTML = '';
    
    const nodes = template.nodes;
    const connections = template.connections;
    
    // 添加节点
    nodes.forEach(node => {
        const nodeEl = document.createElement('div');
        nodeEl.className = 'topology-node';
        nodeEl.style.left = node.x + 'px';
        nodeEl.style.top = node.y + 'px';
        nodeEl.textContent = node.icon;
        nodeEl.title = node.label;
        container.appendChild(nodeEl);
    });
    
    // 创建连接线
    connections.forEach(([from, to]) => {
        const line = document.createElement('div');
        line.className = 'topology-line';
        
        const x1 = nodes[from].x + 30;
        const y1 = nodes[from].y + 30;
        const x2 = nodes[to].x + 30;
        const y2 = nodes[to].y + 30;
        
        const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
        
        line.style.left = x1 + 'px';
        line.style.top = y1 + 'px';
        line.style.width = length + 'px';
        line.style.transform = `rotate(${angle}deg)`;
        
        container.appendChild(line);
    });
    
    // 动画效果
    topologyInterval = setInterval(() => {
        const lines = container.querySelectorAll('.topology-line');
        lines.forEach(line => {
            if (Math.random() > 0.7) {
                line.classList.add('active');
                setTimeout(() => line.classList.remove('active'), 1000);
            }
        });
    }, 500);
}

function stopTopology() {
    topologyRunning = false;
    if (topologyInterval) {
        clearInterval(topologyInterval);
        topologyInterval = null;
    }
}

// 6. 攻击模拟
let simulationRunning = false;
let simulationInterval = null;

function initAttackSimulation() {
    const startBtn = document.getElementById('startSimulation');
    const stopBtn = document.getElementById('stopSimulation');
    const terminalLines = document.getElementById('terminalLines');
    
    const simulationLogs = [
        { text: '[*] 初始化安全监控系统...', type: 'info' },
        { text: '[+] 网络接口已启用', type: 'success' },
        { text: '[*] 开始扫描网络流量...', type: 'info' },
        { text: '[+] 检测到 192.168.1.1 正常连接', type: 'success' },
        { text: '[!] 可疑连接: 45.33.32.156', type: 'warning' },
        { text: '[*] 分析数据包...', type: 'info' },
        { text: '[+] 建立安全连接', type: 'success' },
        { text: '[*] 检查系统状态...', type: 'info' },
        { text: '[+] CPU使用率: 23%', type: 'success' },
        { text: '[+] 内存使用: 45%', type: 'success' },
        { text: '[!] 检测到异常登录尝试', type: 'warning' },
        { text: '[*] 启动防御机制...', type: 'info' },
        { text: '[+] IP已加入黑名单', type: 'success' },
        { text: '[*] 系统运行正常', type: 'info' },
        { text: '[+] 安全状态: 良好', type: 'success' }
    ];
    
    startBtn.addEventListener('click', function() {
        if (simulationRunning) return;
        simulationRunning = true;
        terminalLines.innerHTML = '';
        let index = 0;
        
        simulationInterval = setInterval(() => {
            if (index >= simulationLogs.length) {
                index = 0;
            }
            
            const log = simulationLogs[index];
            const line = document.createElement('div');
            line.className = 'terminal-line ' + log.type;
            line.textContent = log.text;
            terminalLines.appendChild(line);
            terminalLines.scrollTop = terminalLines.scrollHeight;
            
            index++;
        }, 800);
    });
    
    stopBtn.addEventListener('click', function() {
        simulationRunning = false;
        if (simulationInterval) {
            clearInterval(simulationInterval);
            simulationInterval = null;
        }
    });
}

// 7. CTF学习进度图表
function initProgressChart() {
    const container = document.getElementById('progressChart');
    
    const progressData = [
        { name: 'Web', progress: 65 },
        { name: 'Crypto', progress: 45 },
        { name: 'Misc', progress: 70 },
        { name: 'Reverse', progress: 30 },
        { name: 'Pwn', progress: 25 }
    ];
    
    progressData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'progress-item';
        div.innerHTML = `
            <div class="progress-label">
                <span>${item.name}</span>
                <span>${item.progress}%</span>
            </div>
            <div class="progress-bar-container">
                <div class="progress-bar-fill" style="width: 0%" data-target="${item.progress}%">${item.progress}%</div>
            </div>
        `;
        container.appendChild(div);
    });
    
    // 动画加载进度条
    setTimeout(() => {
        const bars = container.querySelectorAll('.progress-bar-fill');
        bars.forEach(bar => {
            bar.style.width = bar.getAttribute('data-target');
        });
    }, 500);
}

// 8. 系统监控面板
function initMonitorPanel() {
    function updateMonitor() {
        const cpuValue = Math.floor(Math.random() * 40 + 10);
        const memValue = Math.floor(Math.random() * 30 + 35);
        const netValue = Math.floor(Math.random() * 500 + 100);
        const connValue = Math.floor(Math.random() * 20 + 5);
        
        document.getElementById('cpuValue').textContent = cpuValue + '%';
        document.getElementById('memValue').textContent = memValue + '%';
        document.getElementById('netValue').textContent = netValue + ' KB/s';
        document.getElementById('connValue').textContent = connValue;
    }
    
    updateMonitor();
    setInterval(updateMonitor, 2000);
}

// ============ 新增工具功能 ============

// 七、文本工具
function initTextTools() {
    initWordCount();
    initCaseConvert();
    initTrimSpaces();
    initReverseText();
    initFindReplace();
    initLineSort();
}

function initWordCount() {
    const input = document.getElementById('wordCountInput');
    input.addEventListener('input', function() {
        const text = this.value;
        document.getElementById('charCount').textContent = text.length;
        document.getElementById('wordCount').textContent = text.trim() ? text.trim().split(/\s+/).length : 0;
        document.getElementById('lineCount').textContent = text.split('\n').length;
    });
}

function initCaseConvert() {
    document.getElementById('toUpperBtn').addEventListener('click', function() {
        const input = document.getElementById('caseInput');
        document.getElementById('caseOutput').value = input.value.toUpperCase();
    });
    document.getElementById('toLowerBtn').addEventListener('click', function() {
        const input = document.getElementById('caseInput');
        document.getElementById('caseOutput').value = input.value.toLowerCase();
    });
}

function initTrimSpaces() {
    document.getElementById('trimAllBtn').addEventListener('click', function() {
        const input = document.getElementById('trimInput');
        document.getElementById('trimOutput').value = input.value.replace(/\s+/g, '');
    });
    document.getElementById('trimExtraBtn').addEventListener('click', function() {
        const input = document.getElementById('trimInput');
        document.getElementById('trimOutput').value = input.value.replace(/\s+/g, ' ').trim();
    });
}

function initReverseText() {
    document.getElementById('reverseBtn').addEventListener('click', function() {
        const input = document.getElementById('reverseInput');
        document.getElementById('reverseOutput').value = input.value.split('').reverse().join('');
    });
}

function initFindReplace() {
    document.getElementById('replaceBtn').addEventListener('click', function() {
        const input = document.getElementById('replaceInput');
        const find = document.getElementById('findText').value;
        const replace = document.getElementById('replaceText').value;
        document.getElementById('replaceOutput').value = input.value.split(find).join(replace);
    });
}

function initLineSort() {
    document.getElementById('sortAscBtn').addEventListener('click', function() {
        const lines = document.getElementById('sortInput').value.split('\n').filter(l => l.trim());
        document.getElementById('sortOutput').value = lines.sort().join('\n');
    });
    document.getElementById('sortDescBtn').addEventListener('click', function() {
        const lines = document.getElementById('sortInput').value.split('\n').filter(l => l.trim());
        document.getElementById('sortOutput').value = lines.sort().reverse().join('\n');
    });
}

// 八、数学计算
function initMathTools() {
    initBaseConvert();
    initRandomGenerator();
    initCalculator();
    initPercentCalc();
}

function initBaseConvert() {
    document.getElementById('convertBaseBtn').addEventListener('click', function() {
        const decimal = parseInt(document.getElementById('decimalInput').value);
        if (isNaN(decimal)) { alert('请输入有效数字'); return; }
        document.getElementById('binaryResult').value = decimal.toString(2);
        document.getElementById('octalResult').value = decimal.toString(8);
        document.getElementById('hexResult').value = decimal.toString(16).toUpperCase();
    });
}

function initRandomGenerator() {
    document.getElementById('generateRandomBtn').addEventListener('click', function() {
        const min = parseInt(document.getElementById('randomMin').value);
        const max = parseInt(document.getElementById('randomMax').value);
        const count = parseInt(document.getElementById('randomCount').value);
        const results = [];
        for (let i = 0; i < count; i++) {
            results.push(Math.floor(Math.random() * (max - min + 1)) + min);
        }
        document.getElementById('randomOutput').value = results.join('\n');
    });
}

function initCalculator() {
    let display = document.getElementById('calcDisplay');
    let current = '';
    document.querySelectorAll('.calc-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const val = this.getAttribute('data-calc');
            if (val === 'C') {
                current = '';
                display.value = '0';
            } else if (val === '=') {
                try {
                    current = eval(current.replace(/×/g, '*').replace(/÷/g, '/'));
                    display.value = current;
                } catch {
                    display.value = '错误';
                    current = '';
                }
            } else {
                current += val;
                display.value = current;
            }
        });
    });
}

function initPercentCalc() {
    document.getElementById('calcPercentBtn').addEventListener('click', function() {
        const num = parseFloat(document.getElementById('percentNum').value);
        const rate = parseFloat(document.getElementById('percentRate').value);
        document.getElementById('percentResult').textContent = (num * rate / 100).toFixed(2);
    });
}

// 九、时间日期工具
function initDateTimeTools() {
    initTimestampConvert();
    initDateDiff();
    initDateCalc();
    initCountdown();
}

function initTimestampConvert() {
    document.getElementById('toDateTimeBtn').addEventListener('click', function() {
        const ts = parseInt(document.getElementById('timestampInput').value);
        const date = new Date(ts * 1000);
        document.getElementById('datetimeResult').value = date.toLocaleString('zh-CN');
    });
    document.getElementById('toTimestampBtn').addEventListener('click', function() {
        const dt = document.getElementById('datetimeInput').value;
        const date = new Date(dt.replace(/-/g, '/'));
        document.getElementById('timestampResult').value = Math.floor(date.getTime() / 1000);
    });
}

function initDateDiff() {
    document.getElementById('calcDateDiffBtn').addEventListener('click', function() {
        const d1 = new Date(document.getElementById('date1').value);
        const d2 = new Date(document.getElementById('date2').value);
        const diff = Math.abs(d2 - d1);
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        document.getElementById('daysDiff').textContent = days;
        document.getElementById('weeksDiff').textContent = Math.floor(days / 7);
        document.getElementById('monthsDiff').textContent = Math.floor(days / 30);
    });
}

function initDateCalc() {
    document.getElementById('calcDateBtn').addEventListener('click', function() {
        const base = new Date(document.getElementById('baseDate').value);
        const amount = parseInt(document.getElementById('dateAmount').value);
        const unit = document.getElementById('dateUnit').value;
        const type = document.querySelector('input[name="dateType"]:checked').value;
        const result = new Date(base);
        const mult = type === 'add' ? 1 : -1;
        switch(unit) {
            case 'days': result.setDate(result.getDate() + amount * mult); break;
            case 'weeks': result.setDate(result.getDate() + amount * 7 * mult); break;
            case 'months': result.setMonth(result.getMonth() + amount * mult); break;
            case 'years': result.setFullYear(result.getFullYear() + amount * mult); break;
        }
        document.getElementById('dateCalcResult').value = result.toLocaleDateString('zh-CN');
    });
}

let countdownInterval = null;
function initCountdown() {
    document.getElementById('startCountdownBtn').addEventListener('click', function() {
        if (countdownInterval) clearInterval(countdownInterval);
        const target = new Date(document.getElementById('countdownTarget').value);
        countdownInterval = setInterval(function() {
            const now = new Date();
            let diff = Math.max(0, target - now);
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            diff -= days * (1000 * 60 * 60 * 24);
            const hours = Math.floor(diff / (1000 * 60 * 60));
            diff -= hours * (1000 * 60 * 60);
            const minutes = Math.floor(diff / (1000 * 60));
            diff -= minutes * (1000 * 60);
            const seconds = Math.floor(diff / 1000);
            document.getElementById('cdDays').textContent = String(days).padStart(2, '0');
            document.getElementById('cdHours').textContent = String(hours).padStart(2, '0');
            document.getElementById('cdMinutes').textContent = String(minutes).padStart(2, '0');
            document.getElementById('cdSeconds').textContent = String(seconds).padStart(2, '0');
        }, 1000);
    });
}

// 十、颜色工具
function initColorTools() {
    initColorPicker();
    initColorConvert();
    initComplementary();
    initPresetColors();
}

function initColorPicker() {
    const picker = document.getElementById('colorPicker');
    picker.addEventListener('input', updateColorFormats);
    updateColorFormats();
    function updateColorFormats() {
        const hex = picker.value;
        document.getElementById('colorHex').value = hex;
        const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
        document.getElementById('colorRgb').value = `rgb(${r}, ${g}, ${b})`;
        const hsl = rgbToHsl(r, g, b);
        document.getElementById('colorHsl').value = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
    }
}

function rgbToHsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    if (max === min) h = s = 0;
    else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
            case g: h = ((b - r) / d + 2) / 6; break;
            case b: h = ((r - g) / d + 4) / 6; break;
        }
    }
    return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

function initColorConvert() {
    document.getElementById('convertColorBtn').addEventListener('click', function() {
        let input = document.getElementById('colorInput').value.trim();
        let hex;
        if (input.startsWith('#')) hex = input;
        else if (input.startsWith('rgb')) {
            const match = input.match(/\d+/g);
            hex = '#' + match.map(n => parseInt(n).toString(16).padStart(2,'0')).join('');
        }
        if (hex) {
            document.getElementById('colorPreview').style.background = hex;
            document.getElementById('convHex').textContent = hex;
            const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
            document.getElementById('convRgb').textContent = `rgb(${r}, ${g}, ${b})`;
        }
    });
}

function initComplementary() {
    const base = document.getElementById('complementBase');
    base.addEventListener('input', function() {
        const hex = this.value;
        const r = 255 - parseInt(hex.slice(1,3),16);
        const g = 255 - parseInt(hex.slice(3,5),16);
        const b = 255 - parseInt(hex.slice(5,7),16);
        const comp = '#' + [r,g,b].map(n => n.toString(16).padStart(2,'0')).join('');
        document.getElementById('colorPalette').innerHTML = `
            <div class="palette-item" style="background:${hex}">${hex}</div>
            <div class="palette-item" style="background:${comp}">${comp}</div>
        `;
    });
}

function initPresetColors() {
    const presets = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dfe6e9', '#fd79a8', '#a29bfe', '#00b894', '#e17055'];
    const container = document.getElementById('presetColors');
    presets.forEach(color => {
        const div = document.createElement('div');
        div.className = 'preset-color-item';
        div.style.background = color;
        div.textContent = color;
        div.addEventListener('click', function() {
            document.getElementById('complementBase').value = color;
            document.getElementById('complementBase').dispatchEvent(new Event('input'));
        });
        container.appendChild(div);
    });
}

// 十一、单位转换
function initConvertTools() {
    initLengthConvert();
    initWeightConvert();
    initTempConvert();
    initDataConvert();
}

const lengthRates = { m:1, km:1000, cm:0.01, mm:0.001, inch:0.0254, foot:0.3048, yard:0.9144, mile:1609.344 };
const weightRates = { kg:1, g:0.001, mg:0.000001, t:1000, lb:0.453592, oz:0.0283495 };
const dataRates = { b:1, kb:1024, mb:1024*1024, gb:1024*1024*1024, tb:1024*1024*1024*1024 };

function initLengthConvert() {
    document.getElementById('convertLengthBtn').addEventListener('click', function() {
        const val = parseFloat(document.getElementById('lengthInput').value);
        const from = document.getElementById('lengthFrom').value;
        const to = document.getElementById('lengthTo').value;
        document.getElementById('lengthResult').value = (val * lengthRates[from] / lengthRates[to]);
    });
}

function initWeightConvert() {
    document.getElementById('convertWeightBtn').addEventListener('click', function() {
        const val = parseFloat(document.getElementById('weightInput').value);
        const from = document.getElementById('weightFrom').value;
        const to = document.getElementById('weightTo').value;
        document.getElementById('weightResult').value = (val * weightRates[from] / weightRates[to]);
    });
}

function initTempConvert() {
    document.getElementById('convertTempBtn').addEventListener('click', function() {
        const val = parseFloat(document.getElementById('tempInput').value);
        const from = document.getElementById('tempFrom').value;
        const to = document.getElementById('tempTo').value;
        let c;
        if (from === 'c') c = val;
        else if (from === 'f') c = (val - 32) * 5/9;
        else c = val - 273.15;
        let res;
        if (to === 'c') res = c;
        else if (to === 'f') res = c * 9/5 + 32;
        else res = c + 273.15;
        document.getElementById('tempResult').value = res.toFixed(2);
    });
}

function initDataConvert() {
    document.getElementById('convertDataBtn').addEventListener('click', function() {
        const val = parseFloat(document.getElementById('dataInput').value);
        const from = document.getElementById('dataFrom').value;
        const to = document.getElementById('dataTo').value;
        document.getElementById('dataResult').value = (val * dataRates[from] / dataRates[to]);
    });
}

// 十二、开发工具
function initDevTools() {
    initJsonTools();
    initUuidGenerator();
    initRegexTester();
    initEscapeTools();
}

function initJsonTools() {
    document.getElementById('formatJsonBtn').addEventListener('click', function() {
        try {
            const obj = JSON.parse(document.getElementById('jsonInput').value);
            document.getElementById('jsonOutput').value = JSON.stringify(obj, null, 2);
        } catch(e) { alert('JSON格式错误'); }
    });
    document.getElementById('compressJsonBtn').addEventListener('click', function() {
        try {
            const obj = JSON.parse(document.getElementById('jsonInput').value);
            document.getElementById('jsonOutput').value = JSON.stringify(obj);
        } catch(e) { alert('JSON格式错误'); }
    });
    document.getElementById('copyJsonBtn').addEventListener('click', function() {
        document.getElementById('jsonOutput').select();
        document.execCommand('copy');
        alert('已复制');
    });
}

function initUuidGenerator() {
    document.getElementById('generateUuidBtn').addEventListener('click', function() {
        const count = parseInt(document.getElementById('uuidCount').value);
        const uuids = [];
        for(let i=0;i<count;i++) uuids.push('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random()*16|0, v = c==='x'?r:(r&0x3|0x8);
            return v.toString(16);
        }));
        document.getElementById('uuidOutput').value = uuids.join('\n');
    });
}

function initRegexTester() {
    document.getElementById('testRegexBtn').addEventListener('click', function() {
        try {
            const pattern = document.getElementById('regexPattern').value;
            const flags = (document.getElementById('flagI').checked?'i':'') + (document.getElementById('flagG').checked?'g':'') + (document.getElementById('flagM').checked?'m':'');
            const regex = new RegExp(pattern, flags);
            const text = document.getElementById('regexInput').value;
            const matches = text.match(regex) || [];
            document.getElementById('regexMatchCount').textContent = matches.length;
            document.getElementById('regexMatches').textContent = matches.join(', ') || '-';
        } catch(e) { alert('正则表达式错误'); }
    });
}

function initEscapeTools() {
    document.getElementById('escapeBtn').addEventListener('click', function() {
        document.getElementById('escapeOutput').value = document.getElementById('escapeInput').value
            .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');
    });
    document.getElementById('unescapeBtn').addEventListener('click', function() {
        document.getElementById('escapeOutput').value = document.getElementById('escapeInput').value
            .replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&#039;/g,"'");
    });
}

// 十三、二维码工具
function initQrTools() {
    initQrGenerator();
    initQrPresets();
}

function initQrGenerator() {
    document.getElementById('generateQrBtn').addEventListener('click', function() {
        const text = document.getElementById('qrText').value;
        const size = parseInt(document.getElementById('qrSize').value);
        if (!text) { alert('请输入内容'); return; }
        const display = document.getElementById('qrDisplay');
        display.innerHTML = '';
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, size, size);
        ctx.fillStyle = 'black';
        const moduleCount = 21;
        const moduleSize = size / moduleCount;
        for(let i=0;i<moduleCount;i++) {
            for(let j=0;j<moduleCount;j++) {
                if((i<7 && j<7) || (i<7 && j>moduleCount-8) || (i>moduleCount-8 && j<7) || (Math.random()>0.5)) {
                    ctx.fillRect(j*moduleSize, i*moduleSize, moduleSize-1, moduleSize-1);
                }
            }
        }
        display.appendChild(canvas);
    });
}

function initQrPresets() {
    document.querySelectorAll('.qr-preset').forEach(preset => {
        preset.addEventListener('click', function() {
            document.getElementById('qrText').value = this.getAttribute('data-url');
        });
    });
}

// ============ 豆包AI聊天助手 ============
let doubaoChatHistory = [];
const DOUBAO_API_KEY = "243a0c2f-69a0-433b-badd-0f8279a852f2";
const DOUBAO_API_URL = "https://ark.cn-beijing.volces.com/api/v3/chat/completions";
const DOUBAO_MODEL = "doubao-seed-2-0-mini-260215";

function initDoubaoAi() {
    const chatMessages = document.getElementById('doubaoChatMessages');
    const userInput = document.getElementById('doubaoUserInput');
    const sendBtn = document.getElementById('doubaoSendBtn');
    
    // 添加欢迎消息
    addDoubaoMessage('ai', '你好！我是豆包AI助手，很高兴为你服务！有什么问题我可以帮你解答吗？');
    
    // 发送按钮点击事件
    sendBtn.addEventListener('click', sendDoubaoMessage);
    
    // 回车发送消息（Shift+Enter换行）
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
    
    // 添加用户消息
    addDoubaoMessage('user', message);
    userInput.value = '';
    
    // 添加到聊天历史
    doubaoChatHistory.push({
        role: 'user',
        content: message
    });
    
    // 显示加载动画
    showDoubaoLoading();
    
    // 调用API
    callDoubaoApi(message);
}

function addDoubaoMessage(type, content) {
    const chatMessages = document.getElementById('doubaoChatMessages');
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
        // 构建请求体，符合豆包API格式
        const requestBody = {
            model: DOUBAO_MODEL,
            messages: doubaoChatHistory
        };
        
        console.log('发送请求到豆包API...');
        console.log('请求体:', JSON.stringify(requestBody, null, 2));
        
        const response = await fetch(DOUBAO_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${DOUBAO_API_KEY}`
            },
            body: JSON.stringify(requestBody)
        });
        
        // 检查响应状态
        if (!response.ok) {
            const errorText = await response.text();
            console.error('API响应错误:', response.status, errorText);
            throw new Error(`API请求失败: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('API响应:', data);
        
        // 获取AI回复内容
        const aiMessage = data.choices[0].message.content;
        
        // 隐藏加载动画
        hideDoubaoLoading();
        
        // 添加AI回复到界面
        addDoubaoMessage('ai', aiMessage);
        
        // 添加到聊天历史
        doubaoChatHistory.push({
            role: 'assistant',
            content: aiMessage
        });
        
    } catch (error) {
        console.error('豆包API调用错误:', error);
        hideDoubaoLoading();
        
        // 显示错误消息（本地模拟回复）
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
        '这个问题很有意思！虽然我现在无法连接到API，但我可以给你一些建议：\n\n你可以尝试搜索相关资料，或者查看我们工具箱中的"安全知识"模块，那里有很多有用的信息！',
        '感谢你的提问！作为网安工具箱的AI助手，我建议你：\n\n1. 利用工具箱中的现有工具\n2. 学习"安全知识"模块的内容\n3. 多动手实践\n\n继续加油！你做得很棒！'
    ];
    
    return replies[Math.floor(Math.random() * replies.length)];
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}