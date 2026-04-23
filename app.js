const STORAGE_KEYS = {
  users: "adnova_users",
  campaigns: "adnova_campaigns",
  publishes: "adnova_publishes",
  analytics: "adnova_analytics",
  metaConnections: "adnova_meta_connections",
  botSettings: "adnova_bot_settings",
  session: "adnova_session"
};

const LANGUAGES = ["zh-CN", "en", "ms"];

const MALAYSIA_STATES = {
  "zh-CN": ["雪兰莪", "吉隆坡", "柔佛", "槟城", "霹雳", "沙巴", "砂拉越", "马六甲", "森美兰", "彭亨", "吉打", "玻璃市", "登嘉楼", "吉兰丹"],
  en: ["Selangor", "Kuala Lumpur", "Johor", "Penang", "Perak", "Sabah", "Sarawak", "Melaka", "Negeri Sembilan", "Pahang", "Kedah", "Perlis", "Terengganu", "Kelantan"],
  ms: ["Selangor", "Kuala Lumpur", "Johor", "Pulau Pinang", "Perak", "Sabah", "Sarawak", "Melaka", "Negeri Sembilan", "Pahang", "Kedah", "Perlis", "Terengganu", "Kelantan"]
};

const t = {
  "zh-CN": {
    brand: "AdNova",
    navLanding: "首页",
    navDashboard: "控制台",
    navGenerate: "AI 生成",
    navMeta: "Meta 连接",
    navPublish: "发布",
    navAnalytics: "数据分析",
    navPro: "专业版设置",
    navLogin: "登录 / 注册",
    heroTitle: "不会广告，也能一键生成并发布专业内容",
    heroSubtitle: "为马来西亚商家打造的一体化营销系统：输入业务信息，自动生成广告、帖子、短视频脚本，并发布到 Meta。",
    ctaStart: "开始使用",
    ctaConnect: "连接 Meta 账号",
    ctaDemo: "查看演示",
    capability1: "AI 生成广告 / 帖子 / 短视频脚本",
    capability2: "一键发布到 Meta 账号",
    capability3: "数据分析查看效果",
    loginTitle: "欢迎使用 AdNova",
    loginSubtitle: "仅需 Email 与密码，即可开始生成专业营销内容。",
    email: "邮箱",
    password: "密码",
    submitLogin: "登录 / 注册",
    logout: "退出登录",
    dashboardTitle: "业务总览",
    generatedCount: "生成次数",
    publishedCount: "发布次数",
    clicks: "点击数",
    messages: "私信数",
    leads: "留资数",
    recentGenerated: "最近生成记录",
    recentPublished: "最近发布记录",
    emptyState: "暂无记录，先去生成一套内容吧。",
    generateTitle: "AI 内容生成",
    generateSubtitle: "填写以下信息，即可得到可直接投放的成品广告模板。",
    industry: "行业",
    productName: "产品 / 服务名称",
    brandName: "品牌名称（可选）",
    price: "价格",
    offer: "优惠内容",
    usp: "核心卖点",
    audience: "目标人群",
    country: "国家",
    malaysia: "马来西亚",
    state: "州属",
    city: "城市（可选）",
    publishType: "发布类型",
    marketingGoal: "营销目标",
    platform: "平台",
    tone: "语气风格",
    outputLanguage: "输出语言",
    typeAd: "广告",
    typePost: "帖子",
    typeVideo: "短视频",
    goalMessage: "私信",
    goalLead: "留资",
    goalBooking: "预约",
    goalOrder: "下单",
    goalStore: "到店",
    tonePro: "专业",
    tonePromo: "促销",
    tonePremium: "高端",
    generateNow: "立即生成",
    regenerate: "重新生成",
    copy: "复制",
    generatedTemplate: "可直接投放的广告模板",
    adTitle: "广告标题",
    adCopy: "主文案",
    ctaText: "CTA 按钮文案",
    videoScript: "短视频脚本",
    imageSuggestion: "建议使用的图片类型",
    videoSuggestion: "建议使用的视频类型",
    shootingSuggestion: "拍摄建议",
    recommendedPlatform: "适合投放的平台",
    recommendedAudience: "适合的人群",
    budgetSuggestion: "测试预算建议",
    autoReply: "自动回复首句",
    botOpening: "Bot 开场白",
    metaTitle: "Meta 账号连接",
    metaGuide: "连接后可一键发布至 Facebook / Instagram。",
    connectMeta: "连接 Meta",
    connected: "已连接",
    disconnected: "未连接",
    permissionStatus: "发布权限状态",
    permissionReady: "已授权，可发布",
    permissionPending: "待授权",
    publishTitle: "内容发布",
    preview: "发布预览",
    publishNow: "一键发布",
    publishResult: "发布结果",
    publishSuccess: "发布成功",
    publishPending: "发布中",
    analyticsTitle: "数据分析",
    adMetrics: "广告指标",
    contentMetrics: "帖子 / 视频指标",
    spend: "花费",
    cpl: "CPL",
    ctr: "CTR",
    impressions: "曝光",
    views: "浏览",
    likes: "点赞",
    comments: "评论",
    shares: "分享",
    proSettingsTitle: "专业版功能",
    proSettingsDesc: "Professional 套餐可启用自动回复 Bot 部署。",
    botDeploy: "Bot 部署入口",
    botWhatsapp: "WhatsApp Bot",
    botMessenger: "Messenger Bot",
    botIg: "IG DM Bot",
    botEnable: "启用自动回复",
    planTitle: "套餐与升级",
    freePlan: "Free / Basic",
    proPlan: "Pro",
    professionalPlan: "Professional",
    freeDesc: "限制 AI 生成次数，不含发布与 Bot。",
    proDesc: "支持 AI 生成、Meta 发布、数据分析。",
    professionalDesc: "全功能 + Bot 自动部署 + 高级分析。",
    upgrade: "升级方案",
    fieldRequired: "请完整填写必填字段",
    toastCopied: "内容已复制",
    toastGenerated: "已生成新的广告模板",
    toastMetaConnected: "Meta 账号已连接",
    toastPublished: "内容已提交发布",
    placeholderIndustry: "例如：美容、餐饮、教育",
    placeholderProduct: "例如：皮肤管理疗程",
    placeholderBrand: "例如：Nova Beauty",
    placeholderPrice: "例如：RM199",
    placeholderOffer: "例如：首单 8 折",
    placeholderUsp: "例如：30 分钟见效、真人案例",
    placeholderAudience: "例如：女性 25–40 岁",
    placeholderCity: "例如：Petaling Jaya"
  },
  en: {
    brand: "AdNova",
    navLanding: "Home",
    navDashboard: "Dashboard",
    navGenerate: "AI Generator",
    navMeta: "Meta Connect",
    navPublish: "Publish",
    navAnalytics: "Analytics",
    navPro: "Professional",
    navLogin: "Login / Sign Up",
    heroTitle: "Launch Professional Ads Fast — Even If You’re New to Marketing",
    heroSubtitle: "Built for Malaysian businesses: enter your business details, generate ad/post/video scripts, and publish directly to Meta.",
    ctaStart: "Start Now",
    ctaConnect: "Connect Meta Account",
    ctaDemo: "View Demo",
    capability1: "AI-generated ads, posts, and short video scripts",
    capability2: "One-click publishing to Meta",
    capability3: "Performance analytics made clear",
    loginTitle: "Welcome to AdNova",
    loginSubtitle: "Use only email and password to start generating business-ready marketing content.",
    email: "Email",
    password: "Password",
    submitLogin: "Login / Sign Up",
    logout: "Log out",
    dashboardTitle: "Business Overview",
    generatedCount: "Generated",
    publishedCount: "Published",
    clicks: "Clicks",
    messages: "Messages",
    leads: "Leads",
    recentGenerated: "Recent Generation History",
    recentPublished: "Recent Publish History",
    emptyState: "No records yet. Generate your first campaign now.",
    generateTitle: "AI Content Generator",
    generateSubtitle: "Fill in key details and get a ready-to-run ad template.",
    industry: "Industry",
    productName: "Product / Service Name",
    brandName: "Brand Name (Optional)",
    price: "Price",
    offer: "Offer",
    usp: "Core Value Proposition",
    audience: "Target Audience",
    country: "Country",
    malaysia: "Malaysia",
    state: "State",
    city: "City (Optional)",
    publishType: "Publish Type",
    marketingGoal: "Marketing Goal",
    platform: "Platform",
    tone: "Tone",
    outputLanguage: "Output Language",
    typeAd: "Ad",
    typePost: "Post",
    typeVideo: "Short Video",
    goalMessage: "Messages",
    goalLead: "Lead Capture",
    goalBooking: "Booking",
    goalOrder: "Order",
    goalStore: "Store Visit",
    tonePro: "Professional",
    tonePromo: "Promotional",
    tonePremium: "Premium",
    generateNow: "Generate",
    regenerate: "Regenerate",
    copy: "Copy",
    generatedTemplate: "Ready-to-Launch Ad Template",
    adTitle: "Ad Headline",
    adCopy: "Primary Copy",
    ctaText: "CTA Button",
    videoScript: "Short Video Script",
    imageSuggestion: "Recommended Image Types",
    videoSuggestion: "Recommended Video Types",
    shootingSuggestion: "Production Direction",
    recommendedPlatform: "Best Platforms",
    recommendedAudience: "Recommended Audience",
    budgetSuggestion: "Test Budget Recommendation",
    autoReply: "Auto-reply First Message",
    botOpening: "Bot Opening Line",
    metaTitle: "Meta Connection",
    metaGuide: "Connect your account for one-click publishing to Facebook / Instagram.",
    connectMeta: "Connect Meta",
    connected: "Connected",
    disconnected: "Not Connected",
    permissionStatus: "Publishing Permission",
    permissionReady: "Authorized and ready",
    permissionPending: "Pending authorization",
    publishTitle: "Publish Content",
    preview: "Preview",
    publishNow: "Publish in One Click",
    publishResult: "Publish Result",
    publishSuccess: "Published successfully",
    publishPending: "Publishing",
    analyticsTitle: "Analytics",
    adMetrics: "Ad Metrics",
    contentMetrics: "Post / Video Metrics",
    spend: "Spend",
    cpl: "CPL",
    ctr: "CTR",
    impressions: "Impressions",
    views: "Views",
    likes: "Likes",
    comments: "Comments",
    shares: "Shares",
    proSettingsTitle: "Professional Features",
    proSettingsDesc: "Professional plan includes automated Bot deployment.",
    botDeploy: "Bot Deployment",
    botWhatsapp: "WhatsApp Bot",
    botMessenger: "Messenger Bot",
    botIg: "IG DM Bot",
    botEnable: "Enable Auto-reply",
    planTitle: "Plans & Upgrade",
    freePlan: "Free / Basic",
    proPlan: "Pro",
    professionalPlan: "Professional",
    freeDesc: "Limited AI generations. No one-click publish or Bot.",
    proDesc: "AI generation + Meta publishing + analytics.",
    professionalDesc: "Everything in Pro + Bot automation + advanced analytics.",
    upgrade: "Upgrade Plan",
    fieldRequired: "Please complete all required fields",
    toastCopied: "Copied",
    toastGenerated: "New ad template generated",
    toastMetaConnected: "Meta account connected",
    toastPublished: "Content submitted for publishing",
    placeholderIndustry: "e.g., Beauty, F&B, Education",
    placeholderProduct: "e.g., Skin treatment package",
    placeholderBrand: "e.g., Nova Beauty",
    placeholderPrice: "e.g., RM199",
    placeholderOffer: "e.g., 20% off first purchase",
    placeholderUsp: "e.g., Visible result in 30 mins",
    placeholderAudience: "e.g., Women aged 25–40",
    placeholderCity: "e.g., Petaling Jaya"
  },
  ms: {
    brand: "AdNova",
    navLanding: "Laman Utama",
    navDashboard: "Papan Pemuka",
    navGenerate: "Jana AI",
    navMeta: "Sambung Meta",
    navPublish: "Terbit",
    navAnalytics: "Analitik",
    navPro: "Profesional",
    navLogin: "Log Masuk / Daftar",
    heroTitle: "Tak Mahir Iklan? Jana dan Terbit Kandungan Profesional Dengan Cepat",
    heroSubtitle: "Dibangunkan untuk perniagaan Malaysia: isi maklumat perniagaan, jana iklan/post/video script, dan terbit terus ke Meta.",
    ctaStart: "Mula Sekarang",
    ctaConnect: "Sambungkan Akaun Meta",
    ctaDemo: "Lihat Demo",
    capability1: "Jana iklan, post dan skrip video pendek dengan AI",
    capability2: "Terbit ke Meta dengan satu klik",
    capability3: "Analitik prestasi yang jelas",
    loginTitle: "Selamat Datang ke AdNova",
    loginSubtitle: "Hanya guna emel dan kata laluan untuk mula jana kandungan pemasaran sedia guna.",
    email: "Emel",
    password: "Kata Laluan",
    submitLogin: "Log Masuk / Daftar",
    logout: "Log Keluar",
    dashboardTitle: "Ringkasan Perniagaan",
    generatedCount: "Bilangan Jana",
    publishedCount: "Bilangan Terbit",
    clicks: "Klik",
    messages: "Mesej",
    leads: "Leads",
    recentGenerated: "Sejarah Jana Terkini",
    recentPublished: "Sejarah Terbit Terkini",
    emptyState: "Belum ada rekod. Jana kempen pertama anda sekarang.",
    generateTitle: "Penjana Kandungan AI",
    generateSubtitle: "Isi maklumat utama untuk dapatkan templat iklan siap guna.",
    industry: "Industri",
    productName: "Nama Produk / Servis",
    brandName: "Nama Jenama (Pilihan)",
    price: "Harga",
    offer: "Promosi",
    usp: "Kelebihan Utama",
    audience: "Sasaran Audiens",
    country: "Negara",
    malaysia: "Malaysia",
    state: "Negeri",
    city: "Bandar (Pilihan)",
    publishType: "Jenis Terbitan",
    marketingGoal: "Matlamat Pemasaran",
    platform: "Platform",
    tone: "Gaya Bahasa",
    outputLanguage: "Bahasa Output",
    typeAd: "Iklan",
    typePost: "Post",
    typeVideo: "Video Pendek",
    goalMessage: "Mesej",
    goalLead: "Leads",
    goalBooking: "Tempahan",
    goalOrder: "Pesanan",
    goalStore: "Kunjungan Kedai",
    tonePro: "Profesional",
    tonePromo: "Promosi",
    tonePremium: "Premium",
    generateNow: "Jana Sekarang",
    regenerate: "Jana Semula",
    copy: "Salin",
    generatedTemplate: "Templat Iklan Sedia Dilancar",
    adTitle: "Tajuk Iklan",
    adCopy: "Salinan Utama",
    ctaText: "Butang CTA",
    videoScript: "Skrip Video Pendek",
    imageSuggestion: "Cadangan Jenis Imej",
    videoSuggestion: "Cadangan Jenis Video",
    shootingSuggestion: "Cadangan Penggambaran",
    recommendedPlatform: "Platform Sesuai",
    recommendedAudience: "Audiens Sesuai",
    budgetSuggestion: "Cadangan Bajet Ujian",
    autoReply: "Ayat Balasan Automatik",
    botOpening: "Ayat Pembukaan Bot",
    metaTitle: "Sambungan Meta",
    metaGuide: "Sambungkan akaun untuk terbit satu klik ke Facebook / Instagram.",
    connectMeta: "Sambung Meta",
    connected: "Disambungkan",
    disconnected: "Belum Disambungkan",
    permissionStatus: "Status Kebenaran Terbit",
    permissionReady: "Dibenarkan dan sedia",
    permissionPending: "Menunggu kebenaran",
    publishTitle: "Terbit Kandungan",
    preview: "Pratonton",
    publishNow: "Terbit Satu Klik",
    publishResult: "Keputusan Terbit",
    publishSuccess: "Berjaya diterbitkan",
    publishPending: "Sedang diterbitkan",
    analyticsTitle: "Analitik",
    adMetrics: "Metrik Iklan",
    contentMetrics: "Metrik Post / Video",
    spend: "Perbelanjaan",
    cpl: "CPL",
    ctr: "CTR",
    impressions: "Paparan",
    views: "Tontonan",
    likes: "Suka",
    comments: "Komen",
    shares: "Kongsi",
    proSettingsTitle: "Ciri Profesional",
    proSettingsDesc: "Pelan Professional termasuk fungsi penempatan Bot automatik.",
    botDeploy: "Pusat Penempatan Bot",
    botWhatsapp: "Bot WhatsApp",
    botMessenger: "Bot Messenger",
    botIg: "Bot IG DM",
    botEnable: "Aktifkan Balasan Automatik",
    planTitle: "Pelan & Naik Taraf",
    freePlan: "Free / Basic",
    proPlan: "Pro",
    professionalPlan: "Professional",
    freeDesc: "Janaan AI terhad. Tiada terbit satu klik atau Bot.",
    proDesc: "Janaan AI + terbit Meta + analitik.",
    professionalDesc: "Semua ciri Pro + automasi Bot + analitik lanjutan.",
    upgrade: "Naik Taraf Pelan",
    fieldRequired: "Sila lengkapkan semua medan wajib",
    toastCopied: "Berjaya disalin",
    toastGenerated: "Templat iklan baharu dijana",
    toastMetaConnected: "Akaun Meta berjaya disambung",
    toastPublished: "Kandungan dihantar untuk diterbitkan",
    placeholderIndustry: "contoh: Kecantikan, F&B, Pendidikan",
    placeholderProduct: "contoh: Pakej rawatan kulit",
    placeholderBrand: "contoh: Nova Beauty",
    placeholderPrice: "contoh: RM199",
    placeholderOffer: "contoh: Diskaun 20% pembelian pertama",
    placeholderUsp: "contoh: Kesan ketara dalam 30 minit",
    placeholderAudience: "contoh: Wanita umur 25–40",
    placeholderCity: "contoh: Petaling Jaya"
  }
};

const state = {
  lang: localStorage.getItem("adnova_lang") || "zh-CN",
  route: location.hash.replace("#", "") || "landing",
  currentUser: null,
  generated: null,
  selectedCampaignId: null
};

function readTable(key) {
  return JSON.parse(localStorage.getItem(key) || "[]");
}

function writeTable(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function seed() {
  Object.values(STORAGE_KEYS).forEach((key) => {
    if (!localStorage.getItem(key)) localStorage.setItem(key, key === STORAGE_KEYS.session ? "{}" : "[]");
  });
}

function restoreSession() {
  const session = JSON.parse(localStorage.getItem(STORAGE_KEYS.session) || "{}");
  if (session.userId) {
    const user = readTable(STORAGE_KEYS.users).find((u) => u.id === session.userId);
    state.currentUser = user || null;
    if (user?.language) state.lang = user.language;
  }
}

function saveSession(user) {
  localStorage.setItem(STORAGE_KEYS.session, JSON.stringify({ userId: user.id }));
}

function translate(key) {
  return t[state.lang][key] || key;
}

function uid(prefix) {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}`;
}

function setLang(lang) {
  state.lang = lang;
  localStorage.setItem("adnova_lang", lang);
  if (state.currentUser) {
    const users = readTable(STORAGE_KEYS.users);
    const i = users.findIndex((u) => u.id === state.currentUser.id);
    if (i !== -1) {
      users[i].language = lang;
      state.currentUser = users[i];
      writeTable(STORAGE_KEYS.users, users);
    }
  }
  render();
}

function navTo(route) {
  state.route = route;
  location.hash = route;
  render();
}

window.addEventListener("hashchange", () => {
  state.route = location.hash.replace("#", "") || "landing";
  render();
});

function toast(msg) {
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1600);
}

function requireAuth() {
  if (!state.currentUser) {
    navTo("login");
    return false;
  }
  return true;
}

function generateContent(form) {
  const sampleByIndustry = {
    "zh-CN": {
      beauty: "门店环境 + 服务前后对比 + 顾客体验口播",
      food: "产品特写 + 出餐过程 + 门店实拍",
      renovation: "案例前后对比 + 施工现场 + 真人讲解",
      education: "老师讲解 + 课程海报 + 学员反馈"
    },
    en: {
      beauty: "Store ambiance, before/after visuals, and customer testimonial clips",
      food: "Product close-ups, plating process, and in-store footage",
      renovation: "Before/after project showcases, on-site work clips, and expert explainers",
      education: "Tutor teaching shots, course poster visuals, and student testimonials"
    },
    ms: {
      beauty: "Suasana kedai, visual sebelum/selepas, dan testimoni pelanggan",
      food: "Rakaman dekat produk, proses hidangan, dan suasana premis",
      renovation: "Perbandingan sebelum/selepas, rakaman tapak kerja, dan penerangan pakar",
      education: "Rakaman guru mengajar, visual poster kursus, dan maklum balas pelajar"
    }
  };

  const industryKey = form.industry.toLowerCase().includes("美") || form.industry.toLowerCase().includes("beaut") ? "beauty"
    : form.industry.toLowerCase().includes("餐") || form.industry.toLowerCase().includes("food") || form.industry.toLowerCase().includes("f&b") ? "food"
    : form.industry.toLowerCase().includes("修") || form.industry.toLowerCase().includes("reno") ? "renovation"
    : "education";

  const line = sampleByIndustry[state.lang][industryKey];
  const title = `${form.brandName || form.productName} · ${form.offer || form.price}`;
  return {
    adTitle: title,
    adCopy: `${form.productName}，${form.usp}。面向${form.audience}，在${form.state}${form.city ? ` ${form.city}` : ""}提供${form.offer || form.price}方案。`,
    ctaText: form.marketingGoal,
    videoScript: `1) 开场 3 秒展示${form.productName}效果\n2) 中段讲解卖点：${form.usp}\n3) 展示优惠：${form.offer || form.price}\n4) 结尾引导：立即${form.marketingGoal}`,
    imageSuggestion: line,
    videoSuggestion: `${line} + 真人口播 + 字幕强调优惠`,
    shootingSuggestion: `使用自然光，镜头稳定；先拍结果，再拍过程；每段 5-8 秒便于剪辑。`,
    recommendedPlatform: form.platform,
    recommendedAudience: `${form.audience}，覆盖${form.state}${form.city ? ` ${form.city}` : ""}周边 5-12km`,
    budgetSuggestion: "RM30–50 / day for initial testing",
    autoReply: `您好！感谢关注 ${form.productName}，请问您想了解价格、优惠还是预约时间？`,
    botOpening: `Hi! Saya pembantu ${form.brandName || form.productName}. Boleh saya bantu cadangkan pakej paling sesuai untuk anda?`
  };
}

function saveCampaign(form, generated) {
  const campaigns = readTable(STORAGE_KEYS.campaigns);
  const campaign = {
    id: uid("camp"),
    user_id: state.currentUser.id,
    industry: form.industry,
    product_name: form.productName,
    country: translate("malaysia"),
    state: form.state,
    city: form.city,
    platform: form.platform,
    goal: form.marketingGoal,
    tone: form.tone,
    output_language: form.outputLanguage,
    generated_content: generated,
    publish_type: form.publishType,
    created_at: new Date().toISOString()
  };
  campaigns.unshift(campaign);
  writeTable(STORAGE_KEYS.campaigns, campaigns);
  state.generated = campaign;
  state.selectedCampaignId = campaign.id;
  const analytics = readTable(STORAGE_KEYS.analytics);
  const metrics = [
    ["clicks", Math.floor(Math.random() * 120 + 40)],
    ["messages", Math.floor(Math.random() * 30 + 8)],
    ["leads", Math.floor(Math.random() * 20 + 5)],
    ["spend", Math.floor(Math.random() * 180 + 50)]
  ].map(([name, value]) => ({
    id: uid("ana"),
    user_id: state.currentUser.id,
    campaign_id: campaign.id,
    metric_name: name,
    metric_value: value,
    metric_date: new Date().toISOString().slice(0, 10)
  }));
  writeTable(STORAGE_KEYS.analytics, metrics.concat(analytics));
}

function connectMeta() {
  const rows = readTable(STORAGE_KEYS.metaConnections);
  const connection = {
    id: uid("meta"),
    user_id: state.currentUser.id,
    status: "connected",
    account_name: `${state.currentUser.email.split("@")[0]} Business`,
    connected_at: new Date().toISOString()
  };
  const filtered = rows.filter((r) => r.user_id !== state.currentUser.id);
  filtered.push(connection);
  writeTable(STORAGE_KEYS.metaConnections, filtered);
  toast(translate("toastMetaConnected"));
  render();
}

function publishCampaign(type) {
  if (!state.selectedCampaignId) return;
  const rows = readTable(STORAGE_KEYS.publishes);
  rows.unshift({
    id: uid("pub"),
    user_id: state.currentUser.id,
    campaign_id: state.selectedCampaignId,
    publish_type: type,
    platform: "Meta",
    status: "success",
    published_at: new Date().toISOString()
  });
  writeTable(STORAGE_KEYS.publishes, rows);
  toast(translate("toastPublished"));
  render();
}

function copyText(text) {
  navigator.clipboard.writeText(text);
  toast(translate("toastCopied"));
}

function renderBars(list) {
  if (!list.length) return `<p class="muted">${translate("emptyState")}</p>`;
  const max = Math.max(...list.map((n) => n.metric_value));
  return `<div class="bars">${list.map((m) => `<div><span>${translate(m.metric_name) || m.metric_name}</span><div class="bar"><i style="width:${Math.round((m.metric_value / max) * 100)}%"></i></div><b>${m.metric_value}</b></div>`).join("")}</div>`;
}

function appShell(content, withSidebar = false) {
  const langSwitcher = `<div class="lang-switch">${LANGUAGES.map((l) => `<button class="${state.lang === l ? "active" : ""}" onclick="setLang('${l}')">${l}</button>`).join("")}</div>`;
  const top = `<header><div class="logo">${translate("brand")}</div><nav>
    <button onclick="navTo('landing')">${translate("navLanding")}</button>
    <button onclick="navTo('dashboard')">${translate("navDashboard")}</button>
    <button onclick="navTo('generate')">${translate("navGenerate")}</button>
    <button onclick="navTo('meta')">${translate("navMeta")}</button>
    <button onclick="navTo('publish')">${translate("navPublish")}</button>
    <button onclick="navTo('analytics')">${translate("navAnalytics")}</button>
    <button onclick="navTo('pro')">${translate("navPro")}</button>
    <button onclick="navTo('login')">${state.currentUser ? translate("logout") : translate("navLogin")}</button>
  </nav>${langSwitcher}</header>`;

  if (withSidebar) {
    return `${top}<main class="layout"><aside>
      <button onclick="navTo('dashboard')">${translate("navDashboard")}</button>
      <button onclick="navTo('generate')">${translate("navGenerate")}</button>
      <button onclick="navTo('meta')">${translate("navMeta")}</button>
      <button onclick="navTo('publish')">${translate("navPublish")}</button>
      <button onclick="navTo('analytics')">${translate("navAnalytics")}</button>
      <button onclick="navTo('pro')">${translate("navPro")}</button>
    </aside><section>${content}</section></main>`;
  }
  return `${top}<main>${content}</main>`;
}

function landingPage() {
  return appShell(`
    <section class="hero card">
      <h1>${translate("heroTitle")}</h1>
      <p>${translate("heroSubtitle")}</p>
      <div class="cta-row">
        <button class="primary" onclick="navTo('login')">${translate("ctaStart")}</button>
        <button onclick="navTo('meta')">${translate("ctaConnect")}</button>
        <button onclick="navTo('generate')">${translate("ctaDemo")}</button>
      </div>
    </section>
    <section class="cards-3">
      <article class="card"><h3>${translate("capability1")}</h3></article>
      <article class="card"><h3>${translate("capability2")}</h3></article>
      <article class="card"><h3>${translate("capability3")}</h3></article>
    </section>
  `);
}

function loginPage() {
  return appShell(`<section class="card narrow"><h2>${translate("loginTitle")}</h2><p>${translate("loginSubtitle")}</p>
  <form onsubmit="return login(event)">
    <label>${translate("email")}<input name="email" type="email" required /></label>
    <label>${translate("password")}<input name="password" type="password" required /></label>
    <button class="primary" type="submit">${translate("submitLogin")}</button>
  </form></section>`);
}

function login(e) {
  e.preventDefault();
  if (state.currentUser) {
    state.currentUser = null;
    localStorage.setItem(STORAGE_KEYS.session, "{}");
    navTo("landing");
    return false;
  }
  const data = Object.fromEntries(new FormData(e.target));
  const users = readTable(STORAGE_KEYS.users);
  let user = users.find((u) => u.email === data.email);
  if (!user) {
    user = { id: uid("user"), email: data.email, plan: "free", language: state.lang, created_at: new Date().toISOString() };
    users.push(user);
    writeTable(STORAGE_KEYS.users, users);
  }
  state.currentUser = user;
  saveSession(user);
  navTo("dashboard");
  return false;
}

function dashboardPage() {
  if (!requireAuth()) return "";
  const campaigns = readTable(STORAGE_KEYS.campaigns).filter((c) => c.user_id === state.currentUser.id);
  const publishes = readTable(STORAGE_KEYS.publishes).filter((p) => p.user_id === state.currentUser.id);
  const analytics = readTable(STORAGE_KEYS.analytics).filter((a) => a.user_id === state.currentUser.id);
  const metric = (name) => analytics.filter((x) => x.metric_name === name).reduce((s, x) => s + x.metric_value, 0);

  return appShell(`<h2>${translate("dashboardTitle")}</h2>
    <div class="stats-grid">
      <article class="card"><h4>${translate("generatedCount")}</h4><strong>${campaigns.length}</strong></article>
      <article class="card"><h4>${translate("publishedCount")}</h4><strong>${publishes.length}</strong></article>
      <article class="card"><h4>${translate("clicks")}</h4><strong>${metric("clicks")}</strong></article>
      <article class="card"><h4>${translate("messages")}</h4><strong>${metric("messages")}</strong></article>
      <article class="card"><h4>${translate("leads")}</h4><strong>${metric("leads")}</strong></article>
    </div>
    <div class="split">
      <section class="card"><h3>${translate("recentGenerated")}</h3>${renderList(campaigns.map((c) => `${c.product_name} · ${c.platform} · ${new Date(c.created_at).toLocaleDateString()}`))}</section>
      <section class="card"><h3>${translate("recentPublished")}</h3>${renderList(publishes.map((p) => `${p.publish_type} · ${p.platform} · ${translate("publishSuccess")}`))}</section>
    </div>
  `, true);
}

function renderList(items) {
  if (!items.length) return `<p class="muted">${translate("emptyState")}</p>`;
  return `<ul>${items.slice(0, 6).map((s) => `<li>${s}</li>`).join("")}</ul>`;
}

function generatePage() {
  if (!requireAuth()) return "";
  const states = MALAYSIA_STATES[state.lang];
  const template = state.generated?.generated_content;
  return appShell(`
    <h2>${translate("generateTitle")}</h2>
    <p class="muted">${translate("generateSubtitle")}</p>
    <div class="split">
      <section class="card">
        <form onsubmit="return submitGenerate(event)">
          <label>${translate("industry")}<input name="industry" placeholder="${translate("placeholderIndustry")}" required /></label>
          <label>${translate("productName")}<input name="productName" placeholder="${translate("placeholderProduct")}" required /></label>
          <label>${translate("brandName")}<input name="brandName" placeholder="${translate("placeholderBrand")}" /></label>
          <label>${translate("price")}<input name="price" placeholder="${translate("placeholderPrice")}" required /></label>
          <label>${translate("offer")}<input name="offer" placeholder="${translate("placeholderOffer")}" /></label>
          <label>${translate("usp")}<input name="usp" placeholder="${translate("placeholderUsp")}" required /></label>
          <label>${translate("audience")}<input name="audience" placeholder="${translate("placeholderAudience")}" required /></label>
          <label>${translate("country")}<input value="${translate("malaysia")}" readonly /></label>
          <label>${translate("state")}<select name="state" required>${states.map((s) => `<option>${s}</option>`).join("")}</select></label>
          <label>${translate("city")}<input name="city" placeholder="${translate("placeholderCity")}" /></label>
          <label>${translate("publishType")}<select name="publishType"><option>${translate("typeAd")}</option><option>${translate("typePost")}</option><option>${translate("typeVideo")}</option></select></label>
          <label>${translate("marketingGoal")}<select name="marketingGoal"><option>${translate("goalMessage")}</option><option>${translate("goalLead")}</option><option>${translate("goalBooking")}</option><option>${translate("goalOrder")}</option><option>${translate("goalStore")}</option></select></label>
          <label>${translate("platform")}<select name="platform"><option>Meta</option><option>Facebook</option><option>Instagram</option></select></label>
          <label>${translate("tone")}<select name="tone"><option>${translate("tonePro")}</option><option>${translate("tonePromo")}</option><option>${translate("tonePremium")}</option></select></label>
          <label>${translate("outputLanguage")}<select name="outputLanguage"><option>简体中文</option><option>English</option><option>Bahasa Melayu</option></select></label>
          <button class="primary">${translate("generateNow")}</button>
        </form>
      </section>
      <section class="card template-preview">
        <h3>${translate("generatedTemplate")}</h3>
        ${template ? renderTemplate(template) : `<p class="muted">${translate("emptyState")}</p>`}
      </section>
    </div>
  `, true);
}

function renderTemplate(c) {
  const section = (label, key) => `<article><div><h4>${label}</h4><p>${(c[key] || "").replace(/\n/g, "<br />")}</p></div><div class="row"><button onclick="copyText(${JSON.stringify(c[key] || "")})">${translate("copy")}</button><button onclick="regenerateField('${key}')">${translate("regenerate")}</button></div></article>`;
  return [
    section(translate("adTitle"), "adTitle"),
    section(translate("adCopy"), "adCopy"),
    section(translate("ctaText"), "ctaText"),
    section(translate("videoScript"), "videoScript"),
    section(translate("imageSuggestion"), "imageSuggestion"),
    section(translate("videoSuggestion"), "videoSuggestion"),
    section(translate("shootingSuggestion"), "shootingSuggestion"),
    section(translate("recommendedPlatform"), "recommendedPlatform"),
    section(translate("recommendedAudience"), "recommendedAudience"),
    section(translate("budgetSuggestion"), "budgetSuggestion"),
    section(translate("autoReply"), "autoReply"),
    section(translate("botOpening"), "botOpening")
  ].join("");
}

function regenerateField(key) {
  if (!state.generated) return;
  state.generated.generated_content[key] = `${state.generated.generated_content[key]} ✦`;
  const campaigns = readTable(STORAGE_KEYS.campaigns);
  const i = campaigns.findIndex((c) => c.id === state.generated.id);
  if (i !== -1) {
    campaigns[i] = state.generated;
    writeTable(STORAGE_KEYS.campaigns, campaigns);
  }
  toast(translate("toastGenerated"));
  render();
}

function submitGenerate(e) {
  e.preventDefault();
  const form = Object.fromEntries(new FormData(e.target));
  const required = ["industry", "productName", "price", "usp", "audience", "state"];
  if (required.some((f) => !form[f])) {
    toast(translate("fieldRequired"));
    return false;
  }
  const generated = generateContent(form);
  saveCampaign(form, generated);
  toast(translate("toastGenerated"));
  render();
  return false;
}

function metaPage() {
  if (!requireAuth()) return "";
  const row = readTable(STORAGE_KEYS.metaConnections).find((m) => m.user_id === state.currentUser.id);
  return appShell(`<section class="card"><h2>${translate("metaTitle")}</h2><p>${translate("metaGuide")}</p>
    <div class="status"><span>${translate(row ? "connected" : "disconnected")}</span><small>${row?.account_name || "-"}</small></div>
    <p>${translate("permissionStatus")}: ${translate(row ? "permissionReady" : "permissionPending")}</p>
    <button class="primary" onclick="connectMeta()">${translate("connectMeta")}</button>
  </section>`, true);
}

function publishPage() {
  if (!requireAuth()) return "";
  const campaign = readTable(STORAGE_KEYS.campaigns).find((c) => c.id === state.selectedCampaignId) || readTable(STORAGE_KEYS.campaigns).find((c) => c.user_id === state.currentUser.id);
  if (campaign) state.selectedCampaignId = campaign.id;
  const publishes = readTable(STORAGE_KEYS.publishes).filter((p) => p.user_id === state.currentUser.id).slice(0, 5);
  return appShell(`<h2>${translate("publishTitle")}</h2>
    <div class="split">
      <section class="card">
        <label>${translate("publishType")}
          <select id="publishType">
            <option>${translate("typeAd")}</option>
            <option>${translate("typePost")}</option>
            <option>${translate("typeVideo")}</option>
          </select>
        </label>
        <h3>${translate("preview")}</h3>
        ${campaign ? `<div class="preview-box"><h4>${campaign.generated_content.adTitle}</h4><p>${campaign.generated_content.adCopy}</p></div>` : `<p class="muted">${translate("emptyState")}</p>`}
        <button class="primary" onclick="publishCampaign(document.getElementById('publishType').value)">${translate("publishNow")}</button>
      </section>
      <section class="card"><h3>${translate("publishResult")}</h3>${renderList(publishes.map((p) => `${p.publish_type} · ${p.platform} · ${translate("publishSuccess")}`))}</section>
    </div>
  `, true);
}

function analyticsPage() {
  if (!requireAuth()) return "";
  const analytics = readTable(STORAGE_KEYS.analytics).filter((a) => a.user_id === state.currentUser.id);
  const adMetrics = analytics.filter((x) => ["clicks", "messages", "leads", "spend"].includes(x.metric_name)).slice(0, 8);
  const contentMetrics = [
    { metric_name: "impressions", metric_value: Math.floor(Math.random() * 500 + 100) },
    { metric_name: "views", metric_value: Math.floor(Math.random() * 450 + 90) },
    { metric_name: "likes", metric_value: Math.floor(Math.random() * 180 + 20) },
    { metric_name: "comments", metric_value: Math.floor(Math.random() * 40 + 3) },
    { metric_name: "shares", metric_value: Math.floor(Math.random() * 35 + 2) }
  ];
  const ctr = adMetrics.length ? (adMetrics[0].metric_value / Math.max(1, contentMetrics[0].metric_value) * 100).toFixed(2) : "0.00";
  const cpl = adMetrics.length ? (adMetrics.find((m) => m.metric_name === "spend")?.metric_value / Math.max(1, adMetrics.find((m) => m.metric_name === "leads")?.metric_value || 1)).toFixed(2) : "0.00";
  return appShell(`<h2>${translate("analyticsTitle")}</h2>
    <div class="stats-grid">
      <article class="card"><h4>${translate("ctr")}</h4><strong>${ctr}%</strong></article>
      <article class="card"><h4>${translate("cpl")}</h4><strong>RM ${cpl}</strong></article>
    </div>
    <div class="split">
      <section class="card"><h3>${translate("adMetrics")}</h3>${renderBars(adMetrics)}</section>
      <section class="card"><h3>${translate("contentMetrics")}</h3>${renderBars(contentMetrics)}</section>
    </div>
  `, true);
}

function proPage() {
  if (!requireAuth()) return "";
  const bots = readTable(STORAGE_KEYS.botSettings).filter((b) => b.user_id === state.currentUser.id);
  return appShell(`<h2>${translate("proSettingsTitle")}</h2><p>${translate("proSettingsDesc")}</p>
    <div class="cards-3">
      ${[translate("botWhatsapp"), translate("botMessenger"), translate("botIg")].map((name) => `<article class="card"><h4>${name}</h4><p>${translate("botDeploy")}</p><button onclick="toggleBot('${name}')">${translate("botEnable")}</button></article>`).join("")}
    </div>
    <section class="card"><h3>${translate("planTitle")}</h3>
      <div class="plan-grid">
        <article><h4>${translate("freePlan")}</h4><p>${translate("freeDesc")}</p></article>
        <article><h4>${translate("proPlan")}</h4><p>${translate("proDesc")}</p></article>
        <article><h4>${translate("professionalPlan")}</h4><p>${translate("professionalDesc")}</p></article>
      </div>
      <button class="primary">${translate("upgrade")}</button>
      <p class="muted">${bots.length} Bot settings configured</p>
    </section>
  `, true);
}

function toggleBot(platform) {
  const rows = readTable(STORAGE_KEYS.botSettings);
  rows.unshift({ id: uid("bot"), user_id: state.currentUser.id, platform, status: "enabled", created_at: new Date().toISOString() });
  writeTable(STORAGE_KEYS.botSettings, rows);
  toast(`${platform} ${translate("connected")}`);
}

function render() {
  const app = document.getElementById("app");
  const page = {
    landing: landingPage,
    login: loginPage,
    dashboard: dashboardPage,
    generate: generatePage,
    meta: metaPage,
    publish: publishPage,
    analytics: analyticsPage,
    pro: proPage
  }[state.route] || landingPage;

  app.innerHTML = page();
}

seed();
restoreSession();
render();
