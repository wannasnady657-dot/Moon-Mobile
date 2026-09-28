// ==============================
// بيانات المنتجات (مؤمن فون)
// ==============================

// تحميل المنتجات من LocalStorage أو استخدام البيانات الأولية
function getProducts() {
    const saved = localStorage.getItem('moamen_products');
    if (saved) return JSON.parse(saved);
    
    // منتجات تجريبية أولية
    const defaultProducts = [
        { id: "1", category: "mobile", name: "iPhone 15 Pro Max", company: "Apple", model: "A3104", storage: "256GB", ram: "8GB", price: 65000, color: "تيتانيوم أزرق", screen: "6.7 بوصة Super Retina XDR", cpu: "A17 Pro", camera: "48MP + 12MP + 12MP", battery: "4441 mAh", os: "iOS 17", network: "5G", description: "أقوى هاتف من أبل مع شريحة A17 Pro وكاميرا احترافية.", stock: 5 },
        { id: "2", category: "mobile", name: "iPhone 14", company: "Apple", model: "A2882", storage: "128GB", ram: "6GB", price: 35000, color: "أسود", screen: "6.1 بوصة Super Retina XDR", cpu: "A15 Bionic", camera: "12MP + 12MP", battery: "3279 mAh", os: "iOS 16", network: "5G", description: "هاتف أبل المتوسط بأداء ممتاز وكاميرا رائعة.", stock: 8 },
        { id: "3", category: "mobile", name: "iPhone 13", company: "Apple", model: "A2633", storage: "128GB", ram: "4GB", price: 28000, color: "أخضر", screen: "6.1 بوصة Super Retina XDR", cpu: "A15 Bionic", camera: "12MP + 12MP", battery: "3240 mAh", os: "iOS 15", network: "5G", description: "أداء قوي وتصميم أنيق بسعر ممتاز.", stock: 3 },
        { id: "4", category: "mobile", name: "Samsung Galaxy S24 Ultra", company: "Samsung", model: "SM-S928B", storage: "512GB", ram: "12GB", price: 60000, color: "رمادي تيتانيوم", screen: "6.8 بوصة Dynamic AMOLED 2X", cpu: "Snapdragon 8 Gen 3", camera: "200MP + 12MP + 50MP + 10MP", battery: "5000 mAh", os: "Android 14", network: "5G", description: "الهاتف الأقوى من سامسونج مع قلم S Pen وكاميرا 200 ميجابكسل.", stock: 4 },
        { id: "5", category: "mobile", name: "Samsung Galaxy A54", company: "Samsung", model: "SM-A546B", storage: "256GB", ram: "8GB", price: 14000, color: "أسود", screen: "6.4 بوصة Super AMOLED", cpu: "Exynos 1380", camera: "50MP + 12MP + 5MP", battery: "5000 mAh", os: "Android 13", network: "5G", description: "هاتف سامسونج الفئة المتوسطة بشاشة رائعة وبطارية كبيرة.", stock: 12 },
        { id: "6", category: "mobile", name: "Samsung Galaxy A15", company: "Samsung", model: "SM-A156B", storage: "128GB", ram: "6GB", price: 7500, color: "أزرق", screen: "6.5 بوصة Super AMOLED", cpu: "Dimensity 6100+", camera: "50MP + 5MP + 2MP", battery: "5000 mAh", os: "Android 14", network: "5G", description: "هاتف اقتصادي بشاشة AMOLED وبطارية تدوم طويلاً.", stock: 20 },
        { id: "7", category: "mobile", name: "Xiaomi 14 Ultra", company: "Xiaomi", model: "24030PN60G", storage: "512GB", ram: "16GB", price: 55000, color: "أسود", screen: "6.73 بوصة LTPO AMOLED", cpu: "Snapdragon 8 Gen 3", camera: "50MP Leica + 50MP + 50MP", battery: "5300 mAh", os: "Android 14", network: "5G", description: "هاتف شاومي الرائد بكاميرا Leica احترافية.", stock: 2 },
        { id: "8", category: "mobile", name: "Xiaomi Redmi Note 13 Pro", company: "Xiaomi", model: "2312DRA50G", storage: "256GB", ram: "8GB", price: 12000, color: "أخضر", screen: "6.67 بوصة AMOLED 120Hz", cpu: "Snapdragon 7s Gen 2", camera: "200MP + 8MP + 2MP", battery: "5100 mAh", os: "Android 13", network: "4G", description: "كاميرا 200 ميجابكسل بسعر اقتصادي مع شاشة 120Hz.", stock: 15 },
        { id: "9", category: "mobile", name: "Oppo Reno 11", company: "Oppo", model: "CPH2599", storage: "256GB", ram: "12GB", price: 18000, color: "أخضر", screen: "6.7 بوصة AMOLED 120Hz", cpu: "Dimensity 7050", camera: "64MP + 32MP + 8MP", battery: "5000 mAh", os: "Android 14", network: "5G", description: "تصميم أنيق وكاميرا بورتريه رائعة.", stock: 7 },
        { id: "10", category: "mobile", name: "Oppo A78", company: "Oppo", model: "CPH2565", storage: "128GB", ram: "8GB", price: 8500, color: "أسود", screen: "6.56 بوصة AMOLED", cpu: "Snapdragon 680", camera: "50MP + 2MP", battery: "5000 mAh", os: "Android 13", network: "4G", description: "هاتف اقتصادي بشاشة AMOLED وشحن سريع 67W.", stock: 10 },
        { id: "11", category: "mobile", name: "Realme 12 Pro+", company: "Realme", model: "RMX3840", storage: "512GB", ram: "12GB", price: 15000, color: "بيج", screen: "6.7 بوصة AMOLED 120Hz", cpu: "Snapdragon 7s Gen 2", camera: "50MP Sony + 64MP + 8MP", battery: "5000 mAh", os: "Android 14", network: "5G", description: "كاميرا بيريسكوب تليفوتو مع تصميم فاخر.", stock: 6 },
        { id: "12", category: "mobile", name: "Vivo V30", company: "Vivo", model: "V2318", storage: "256GB", ram: "12GB", price: 17000, color: "أسود", screen: "6.78 بوصة AMOLED 120Hz", cpu: "Snapdragon 7 Gen 3", camera: "50MP Zeiss + 50MP", battery: "5000 mAh", os: "Android 14", network: "5G", description: "كاميرا Zeiss مع تصوير بورتريه احترافي.", stock: 5 },
        { id: "13", category: "mobile", name: "Honor 200 Pro", company: "Honor", model: "RKY-AN00", storage: "512GB", ram: "12GB", price: 22000, color: "أسود", screen: "6.78 بوصة AMOLED 120Hz", cpu: "Snapdragon 8s Gen 3", camera: "50MP + 50MP + 12MP", battery: "5200 mAh", os: "Android 14", network: "5G", description: "هاتف أونر الرائد بأداء قوي وكاميرا ممتازة.", stock: 4 },
        { id: "14", category: "mobile", name: "Infinix Note 40 Pro", company: "Infinix", model: "X6851", storage: "256GB", ram: "8GB", price: 10500, color: "ذهبي", screen: "6.78 بوصة AMOLED 120Hz", cpu: "Dimensity 7020", camera: "108MP + 2MP + 2MP", battery: "5000 mAh", os: "Android 14", network: "4G", description: "كاميرا 108 ميجابكسل مع شحن لاسلكي بسعر اقتصادي.", stock: 9 },
        { id: "15", category: "mobile", name: "Tecno Spark 20 Pro+", company: "Tecno", model: "KJ7", storage: "256GB", ram: "8GB", price: 7000, color: "أزرق", screen: "6.78 بوصة IPS 120Hz", cpu: "Helio G99", camera: "108MP + 2MP", battery: "5000 mAh", os: "Android 13", network: "4G", description: "أفضل هاتف اقتصادي مع كاميرا 108 ميجابكسل.", stock: 18 },
        { id: "16", category: "mobile", name: "Samsung Galaxy S23 FE", company: "Samsung", model: "SM-S711B", storage: "256GB", ram: "8GB", price: 20000, color: "أخضر زيتوني", screen: "6.4 بوصة Dynamic AMOLED 2X", cpu: "Exynos 2200", camera: "50MP + 12MP + 8MP", battery: "4500 mAh", os: "Android 13", network: "5G", description: "تجربة Galaxy S بسعر مناسب.", stock: 6 },
        { id: "17", category: "mobile", name: "iPhone 16", company: "Apple", model: "A3290", storage: "128GB", ram: "8GB", price: 50000, color: "أزرق", screen: "6.1 بوصة Super Retina XDR", cpu: "A18", camera: "48MP + 12MP", battery: "3561 mAh", os: "iOS 18", network: "5G", description: "الجيل الجديد من أبل مع شريحة A18 وزر Action Button.", stock: 10 },
        { id: "18", category: "mobile", name: "Xiaomi Poco X6 Pro", company: "Xiaomi", model: "23113RKC6G", storage: "256GB", ram: "8GB", price: 11000, color: "أصفر", screen: "6.67 بوصة AMOLED 120Hz", cpu: "Dimensity 8300-Ultra", camera: "64MP + 8MP + 2MP", battery: "5000 mAh", os: "Android 14", network: "5G", description: "أداء خارق بسعر لا يصدق من بوكو.", stock: 0 },
        { id: "19", category: "headphone", name: "AirPods Pro 2", company: "Apple", model: "MTJV3", connectionType: "bluetooth", headphoneType: "In-Ear", price: 12000, color: "أبيض", battery: "30 ساعة", description: "سماعات أبل اللاسلكية مع عزل ضوضاء ممتاز.", stock: 20 },
        { id: "20", category: "headphone", name: "Galaxy Buds 2 Pro", company: "Samsung", model: "SM-R510", connectionType: "bluetooth", headphoneType: "In-Ear", price: 6000, color: "أسود", battery: "18 ساعة", description: "سماعات سامسونج مع صوت محيطي عالي الجودة.", stock: 15 },
        { id: "21", category: "watch", name: "Apple Watch Series 9", company: "Apple", model: "MR993", watchScreen: "1.9 بوصة", watchOs: "watchOS 10", watchCompat: "iOS", price: 22000, color: "أسود", description: "ساعة أبل الذكية بأحدث المميزات الصحية.", stock: 8 },
        { id: "22", category: "watch", name: "Galaxy Watch 6", company: "Samsung", model: "SM-R930", watchScreen: "1.3 بوصة", watchOs: "Wear OS", watchCompat: "Android", price: 14000, color: "فضي", description: "ساعة سامسونج الأنيقة لتتبع اللياقة.", stock: 10 },
        { id: "23", category: "headphone", name: "Xiaomi Buds 4 Pro", company: "Xiaomi", model: "M2126E1", connectionType: "bluetooth", headphoneType: "In-Ear", price: 4000, color: "ذهبي", battery: "38 ساعة", description: "سماعات شاومي الرائدة مع عزل ضوضاء قوي.", stock: 25 },
        { id: "24", category: "watch", name: "Xiaomi Watch 2 Pro", company: "Xiaomi", model: "M2233W1", watchScreen: "1.43 بوصة", watchOs: "Wear OS", watchCompat: "Android", price: 10000, color: "أسود", description: "ساعة شاومي الذكية مع دعم نظام جوجل.", stock: 12 },
        { id: "25", category: "watch", name: "Apple Watch Ultra 2", company: "Apple", model: "MRF13", watchScreen: "1.92 بوصة", watchOs: "watchOS 10", watchCompat: "iOS", price: 40000, color: "تيتانيوم طبيعي", description: "ساعة أبل الرياضية الفائقة للمغامرات.", stock: 5 },
        { id: "26", category: "watch", name: "Apple Watch SE (Gen 2)", company: "Apple", model: "MNJT3", watchScreen: "1.78 بوصة", watchOs: "watchOS 10", watchCompat: "iOS", price: 13000, color: "فضي", description: "الخيار الاقتصادي المثالي من ساعات أبل.", stock: 15 },
        { id: "27", category: "watch", name: "Galaxy Watch 5 Pro", company: "Samsung", model: "SM-R920", watchScreen: "1.4 بوصة", watchOs: "Wear OS", watchCompat: "Android", price: 12000, color: "تيتانيوم أسود", description: "ساعة سامسونج مصممة للرياضات الشاقة مع بطارية ضخمة.", stock: 7 },
        { id: "28", category: "watch", name: "Redmi Watch 4", company: "Xiaomi", model: "M2315W1", watchScreen: "1.97 بوصة", watchOs: "HyperOS", watchCompat: "Android / iOS", price: 4500, color: "رمادي", description: "شاشة كبيرة وعمر بطارية مذهل بسعر اقتصادي.", stock: 20 },
        { id: "29", category: "headphone", name: "AirPods 3", company: "Apple", model: "MME73", connectionType: "bluetooth", headphoneType: "Semi-In-Ear", price: 8500, color: "أبيض", battery: "30 ساعة", description: "سماعات أبل بتصميم مريح وصوت مكاني مذهل.", stock: 15 },
        { id: "30", category: "headphone", name: "Galaxy Buds FE", company: "Samsung", model: "SM-R400", connectionType: "bluetooth", headphoneType: "In-Ear", price: 3500, color: "أبيض", battery: "21 ساعة", description: "سماعات سامسونج الاقتصادية مع عزل جيد للضوضاء.", stock: 30 },
        { id: "31", category: "headphone", name: "Redmi Buds 5 Pro", company: "Xiaomi", model: "M2317E1", connectionType: "bluetooth", headphoneType: "In-Ear", price: 2800, color: "أسود", battery: "38 ساعة", description: "سماعات شاومي اللاسلكية بعزل ضوضاء يصل لـ 52dB.", stock: 25 },
        { id: "32", category: "headphone", name: "AirPods Max", company: "Apple", model: "MGYL3", connectionType: "bluetooth", headphoneType: "Over-Ear", price: 28000, color: "أزرق سماوي", battery: "20 ساعة", description: "سماعة الرأس الفاخرة من أبل لتجربة صوتية لا مثيل لها.", stock: 4 },
        { id: "33", category: "cover", name: "جراب سيليكون أصلي", company: "Apple", compatibleModel: "iPhone 15 Pro Max", coverType: "سيليكون", price: 1500, color: "أسود", description: "جراب سيليكون مبطن من الداخل لحماية فائقة.", stock: 50 },
        { id: "34", category: "screen", name: "اسكرينة حماية متطورة", company: "Samsung", compatibleModel: "Galaxy S24 Ultra", screenType: "زجاج", price: 350, color: "شفاف", description: "حماية الشاشة من الخدوش والصدمات بجودة زجاج مقوى 9H.", stock: 100 },
        { id: "35", category: "charger", name: "شاحن 20W سريع", company: "Apple", model: "MHJE3", chargerWatt: "20W", chargerPort: "Type-C", fastCharge: "yes", price: 1200, color: "أبيض", description: "شاحن أبل السريع بقوة 20 واط يدعم Power Delivery.", stock: 30 },
        { id: "36", category: "charger", name: "شاحن 45W Super Fast", company: "Samsung", model: "EP-T4510", chargerWatt: "45W", chargerPort: "Type-C", fastCharge: "yes", price: 1800, color: "أسود", description: "شاحن سامسونج فائق السرعة يدعم 45W.", stock: 25 },
        { id: "37", category: "charger", name: "شاحن 120W HyperCharge", company: "Xiaomi", model: "MDY-13-EE", chargerWatt: "120W", chargerPort: "Type-C", fastCharge: "yes", price: 2200, color: "أبيض", description: "أسرع شاحن من شاومي لشحن هاتفك في دقائق معدودة.", stock: 15 }
    ];
    
    localStorage.setItem('moamen_products', JSON.stringify(defaultProducts));
    return defaultProducts;
}

function saveProducts(products) {
    localStorage.setItem('moamen_products', JSON.stringify(products));
}

// ==============================
// State
// ==============================
let currentCategory = 'all';
let currentCompany = 'all';
let currentSearchQuery = '';

// ==============================
// سلة المشتريات
// ==============================
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// ==============================
// مساعدات استخراج المواصفات لكل فئة
// ==============================
function getProductCategoryBadge(cat) {
    const map = {
        'mobile': { name: 'موبايل', icon: 'fa-mobile-alt', color: '#2563eb', bg: '#eff6ff' },
        'headphone': { name: 'سماعة', icon: 'fa-headphones', color: '#7c3aed', bg: '#f5f3ff' },
        'watch': { name: 'ساعة ذكية', icon: 'fa-clock', color: '#ea580c', bg: '#fff7ed' },
        'cover': { name: 'جراب', icon: 'fa-mobile', color: '#0891b2', bg: '#ecfeff' },
        'screen': { name: 'اسكرينة', icon: 'fa-shield-alt', color: '#16a34a', bg: '#f0fdf4' },
        'charger': { name: 'شاحن', icon: 'fa-bolt', color: '#d97706', bg: '#fffbeb' }
    };
    return map[cat] || { name: 'منتج', icon: 'fa-box', color: '#64748b', bg: '#f8fafc' };
}

function getProductSpecsHTML(p) {
    const cat = p.category || 'mobile';
    let items = [];

    if (cat === 'mobile') {
        if (p.storage && p.storage !== '-') items.push(`<span class="spec-tag"><i class="fas fa-hdd"></i> ${p.storage}</span>`);
        if (p.ram && p.ram !== '-') items.push(`<span class="spec-tag"><i class="fas fa-memory"></i> ${p.ram}</span>`);
        if (p.os && p.os !== '-') items.push(`<span class="spec-tag"><i class="fas fa-microchip"></i> ${p.os}</span>`);
        if (p.color) items.push(`<span class="spec-tag"><i class="fas fa-palette"></i> ${p.color}</span>`);
    } else if (cat === 'screen') {
        if (p.screenType) items.push(`<span class="spec-tag" style="background:#dcfce7; color:#15803d; font-weight:bold;"><i class="fas fa-shield-alt"></i> نوع: ${p.screenType}</span>`);
        const comp = p.compatibleModel || p.model;
        if (comp && comp !== '-') items.push(`<span class="spec-tag"><i class="fas fa-mobile-alt"></i> لـ: ${comp}</span>`);
    } else if (cat === 'charger') {
        if (p.chargerWatt) items.push(`<span class="spec-tag" style="background:#fef3c7; color:#b45309; font-weight:bold;"><i class="fas fa-bolt"></i> ${p.chargerWatt}</span>`);
        if (p.chargerPort) items.push(`<span class="spec-tag"><i class="fas fa-plug"></i> ${p.chargerPort}</span>`);
        if (p.fastCharge === 'yes') items.push(`<span class="spec-tag" style="background:#dbeafe; color:#1d4ed8;"><i class="fas fa-tachometer-alt"></i> شحن سريع</span>`);
    } else if (cat === 'cover') {
        if (p.coverType) items.push(`<span class="spec-tag"><i class="fas fa-layer-group"></i> نوع: ${p.coverType}</span>`);
        const comp = p.compatibleModel || p.model;
        if (comp && comp !== '-') items.push(`<span class="spec-tag"><i class="fas fa-mobile-alt"></i> لـ: ${comp}</span>`);
        if (p.color) items.push(`<span class="spec-tag"><i class="fas fa-palette"></i> ${p.color}</span>`);
    } else if (cat === 'headphone') {
        const conn = p.connectionType === 'bluetooth' ? 'بلوتوث' : (p.connectionType === 'wired' ? 'سلكية' : (p.connectionType || ''));
        if (conn) items.push(`<span class="spec-tag" style="background:#f3e8ff; color:#7e22ce;"><i class="fas fa-wifi"></i> ${conn}</span>`);
        if (p.headphoneType) items.push(`<span class="spec-tag"><i class="fas fa-headphones"></i> ${p.headphoneType}</span>`);
        if (p.color) items.push(`<span class="spec-tag"><i class="fas fa-palette"></i> ${p.color}</span>`);
    } else if (cat === 'watch') {
        if (p.watchScreen) items.push(`<span class="spec-tag"><i class="fas fa-tv"></i> ${p.watchScreen}</span>`);
        if (p.watchOs || (p.os && p.os !== '-')) items.push(`<span class="spec-tag"><i class="fas fa-cog"></i> ${p.watchOs || p.os}</span>`);
        if (p.watchCompat) items.push(`<span class="spec-tag"><i class="fas fa-mobile-alt"></i> ${p.watchCompat}</span>`);
        if (p.color) items.push(`<span class="spec-tag"><i class="fas fa-palette"></i> ${p.color}</span>`);
    }

    if (items.length === 0) {
        if (p.model && p.model !== '-') items.push(`<span class="spec-tag">${p.model}</span>`);
        if (p.color) items.push(`<span class="spec-tag">${p.color}</span>`);
    }

    return items.length > 0 ? items.join('') : '<span class="spec-tag">أصلي ومضمون</span>';
}

function getProductShortSpec(p) {
    const cat = p.category || 'mobile';
    if (cat === 'screen') return `نوع الاسكرينة: ${p.screenType || 'زجاج'}` + (p.compatibleModel ? ` (متوافق: ${p.compatibleModel})` : '');
    if (cat === 'charger') return `القدرة: ${p.chargerWatt || '-'}` + (p.chargerPort ? ` - منفذ ${p.chargerPort}` : '');
    if (cat === 'cover') return `نوع الجراب: ${p.coverType || '-'}` + (p.compatibleModel ? ` (${p.compatibleModel})` : '') + (p.color ? ` - ${p.color}` : '');
    if (cat === 'headphone') return (p.connectionType === 'bluetooth' ? 'بلوتوث' : (p.connectionType || '')) + (p.headphoneType ? ` - ${p.headphoneType}` : '') + (p.color ? ` - ${p.color}` : '');
    if (cat === 'watch') return [p.watchScreen, p.watchOs, p.color].filter(Boolean).join(' - ');
    if (cat === 'mobile') return [p.storage, p.ram, p.color].filter(x => x && x !== '-').join(' - ');
    return p.model || '';
}

// عرض المنتجات في الصفحة الرئيسية
function renderProducts(productsToRender) {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    grid.innerHTML = '';
    
    if (productsToRender.length === 0) {
        grid.innerHTML = '<p style="text-align:center; grid-column: 1/-1; padding: 40px; color: #64748b;">لا توجد منتجات مطابقة للبحث.</p>';
        return;
    }

    productsToRender.forEach(product => {
        let stockLabel = '';
        if (product.stock <= 0) {
            stockLabel = `<span style="color:#ef4444; font-size:12px; font-weight:700;"><i class="fas fa-times-circle"></i> غير متوفر حالياً (نفدت الكمية)</span>`;
        } else if (product.stock === 1) {
            stockLabel = `<span style="color:#ea580c; background:#ffedd5; padding:2px 8px; border-radius:6px; font-size:12px; font-weight:800; display:inline-flex; align-items:center; gap:4px; border:1px solid #fed7aa;"><i class="fas fa-fire"></i> آخر قطعة متوفرة!</span>`;
        } else if (product.stock <= 3) {
            stockLabel = `<span style="color:#d97706; background:#fef3c7; padding:2px 8px; border-radius:6px; font-size:12px; font-weight:700; display:inline-flex; align-items:center; gap:4px;"><i class="fas fa-bolt"></i> متبقي ${product.stock} قطع فقط!</span>`;
        } else {
            stockLabel = `<span style="color:#16a34a; font-size:12px; font-weight:700;"><i class="fas fa-check-circle"></i> متوفر (${product.stock} قطع)</span>`;
        }

        const cartBtnDisabled = product.stock <= 0 ? 'disabled style="opacity:0.4; cursor:not-allowed; background:rgba(37,99,235,0.1); color:#2563eb;"' : '';

        const badge = getProductCategoryBadge(product.category);
        const imgContent = product.image 
            ? `<img src="${product.image}" alt="${product.name}" loading="lazy">`
            : `<i class="fas ${badge.icon} fa-4x" style="color: #cbd5e1;"></i>`;

        const specsHTML = getProductSpecsHTML(product);

        const div = document.createElement('div');
        div.className = 'product-card';
        div.innerHTML = `
            <div class="product-img" onclick="openProductModal('${product.id}')" style="cursor:pointer;">
                <span class="product-cat-badge" style="background:${badge.bg}; color:${badge.color}; border:1px solid ${badge.color}33;">
                    <i class="fas ${badge.icon}"></i> ${badge.name}
                </span>
                ${imgContent}
            </div>
            <div class="product-info">
                <div class="product-company">${product.company || badge.name}</div>
                <h3 class="product-name" onclick="openProductModal('${product.id}')" style="cursor:pointer;">${product.name}</h3>
                
                <div class="product-specs-container">
                    ${specsHTML}
                </div>

                <div style="margin-top:auto; padding-top:8px;">
                    <div>${stockLabel}</div>
                </div>

                <div class="product-bottom">
                    <div class="product-price">${(product.price || 0).toLocaleString()} <span style="font-size:14px; font-weight:600;">ج.م</span></div>
                    <div style="display:flex; gap:6px;">
                        <button class="add-to-cart-btn" onclick="openProductModal('${product.id}')" title="عرض التفاصيل" style="background:#f1f5f9; color:#475569;">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="add-to-cart-btn" onclick="addToCart('${product.id}')" title="إضافة للسلة" ${cartBtnDisabled}>
                            <i class="fas fa-shopping-cart"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        grid.appendChild(div);
    });
}

// نافذة تفاصيل ومواصفات المنتج
window.openProductModal = function(productId) {
    const products = getProducts();
    const p = products.find(x => x.id === productId);
    if (!p) return;

    let modal = document.getElementById('siteProductDetailsModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'siteProductDetailsModal';
        modal.className = 'site-modal-overlay';
        document.body.appendChild(modal);
    }

    const badge = getProductCategoryBadge(p.category);
    const cat = p.category || 'mobile';

    let detailsRows = [];
    if (p.company) detailsRows.push(`<tr><th>الماركة:</th><td><strong>${p.company}</strong></td></tr>`);
    if (p.model && p.model !== '-') detailsRows.push(`<tr><th>الموديل:</th><td>${p.model}</td></tr>`);

    if (cat === 'mobile') {
        if (p.storage && p.storage !== '-') detailsRows.push(`<tr><th>التخزين:</th><td>${p.storage}</td></tr>`);
        if (p.ram && p.ram !== '-') detailsRows.push(`<tr><th>الرام:</th><td>${p.ram}</td></tr>`);
        if (p.os && p.os !== '-') detailsRows.push(`<tr><th>نظام التشغيل:</th><td>${p.os}</td></tr>`);
        if (p.color) detailsRows.push(`<tr><th>اللون:</th><td>${p.color}</td></tr>`);
    } else if (cat === 'screen') {
        if (p.screenType) detailsRows.push(`<tr><th>نوع الاسكرينة:</th><td><strong style="color:#16a34a; font-size:16px;">${p.screenType}</strong></td></tr>`);
        if (p.compatibleModel) detailsRows.push(`<tr><th>الموديل المتوافق:</th><td><strong>${p.compatibleModel}</strong></td></tr>`);
    } else if (cat === 'charger') {
        if (p.chargerWatt) detailsRows.push(`<tr><th>القدرة:</th><td><strong style="color:#d97706; font-size:16px;">${p.chargerWatt}</strong></td></tr>`);
        if (p.chargerPort) detailsRows.push(`<tr><th>نوع المنفذ:</th><td>${p.chargerPort}</td></tr>`);
        if (p.fastCharge) detailsRows.push(`<tr><th>شحن سريع:</th><td>${p.fastCharge === 'yes' ? 'نعم ✓' : 'لا'}</td></tr>`);
    } else if (cat === 'cover') {
        if (p.compatibleModel) detailsRows.push(`<tr><th>الموديل المتوافق:</th><td><strong>${p.compatibleModel}</strong></td></tr>`);
        if (p.coverType) detailsRows.push(`<tr><th>نوع الجراب:</th><td>${p.coverType}</td></tr>`);
        if (p.color) detailsRows.push(`<tr><th>اللون:</th><td>${p.color}</td></tr>`);
    } else if (cat === 'headphone') {
        const conn = p.connectionType === 'bluetooth' ? 'بلوتوث' : (p.connectionType === 'wired' ? 'سلكية' : (p.connectionType || ''));
        if (conn) detailsRows.push(`<tr><th>نوع الاتصال:</th><td>${conn}</td></tr>`);
        if (p.headphoneType) detailsRows.push(`<tr><th>نوع السماعة:</th><td>${p.headphoneType}</td></tr>`);
        if (p.color) detailsRows.push(`<tr><th>اللون:</th><td>${p.color}</td></tr>`);
    } else if (cat === 'watch') {
        if (p.watchScreen) detailsRows.push(`<tr><th>حجم الشاشة:</th><td>${p.watchScreen}</td></tr>`);
        if (p.watchOs || (p.os && p.os !== '-')) detailsRows.push(`<tr><th>نظام التشغيل:</th><td>${p.watchOs || p.os}</td></tr>`);
        if (p.watchCompat) detailsRows.push(`<tr><th>التوافق:</th><td>${p.watchCompat}</td></tr>`);
        if (p.color) detailsRows.push(`<tr><th>اللون:</th><td>${p.color}</td></tr>`);
    }

    let stockDetailHTML = '';
    if (p.stock <= 0) {
        stockDetailHTML = '<span style="color:#ef4444; font-weight:800; background:#fee2e2; padding:4px 10px; border-radius:6px;">❌ غير متوفر حالياً (نفدت الكمية)</span>';
    } else if (p.stock === 1) {
        stockDetailHTML = '<span style="color:#ea580c; font-weight:800; background:#ffedd5; padding:4px 10px; border-radius:6px; border:1px solid #fed7aa;"><i class="fas fa-fire"></i> آخر قطعة متوفرة — سارع بالطلب!</span>';
    } else if (p.stock <= 3) {
        stockDetailHTML = `<span style="color:#d97706; font-weight:700; background:#fef3c7; padding:4px 10px; border-radius:6px;"><i class="fas fa-bolt"></i> متبقي ${p.stock} قطع فقط في المخزون</span>`;
    } else {
        stockDetailHTML = `<span style="color:#16a34a; font-weight:bold;"><i class="fas fa-check-circle"></i> متوفر (${p.stock} قطع)</span>`;
    }

    const imgEl = p.image 
        ? `<img src="${p.image}" alt="${p.name}" style="max-width:100%; max-height:260px; object-fit:contain; border-radius:12px;">` 
        : `<i class="fas ${badge.icon} fa-6x" style="color:#cbd5e1;"></i>`;

    const cartBtnDisabled = p.stock <= 0 ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : '';

    modal.innerHTML = `
        <div class="site-modal-content">
            <button class="site-modal-close" onclick="closeProductModal()">&times;</button>
            <div style="display:flex; gap:25px; flex-wrap:wrap; align-items:center;">
                <div style="flex:1; min-width:240px; background:#f8fafc; border-radius:16px; padding:20px; display:flex; align-items:center; justify-content:center; border:1px solid #e2e8f0; position:relative;">
                    <span class="product-cat-badge" style="background:${badge.bg}; color:${badge.color}; border:1px solid ${badge.color}33; position:absolute; top:12px; right:12px;">
                        <i class="fas ${badge.icon}"></i> ${badge.name}
                    </span>
                    ${imgEl}
                </div>
                <div style="flex:1.4; min-width:280px;">
                    <h2 style="font-size:22px; margin-bottom:8px; color:#1e293b;">${p.name}</h2>
                    <div style="font-size:26px; font-weight:800; color:#2563eb; margin-bottom:15px;">
                        ${(p.price || 0).toLocaleString()} <span style="font-size:16px;">ج.م</span>
                    </div>

                    <table class="site-modal-table" style="width:100%; margin-bottom:18px; border-collapse:collapse;">
                        <tbody>
                            ${detailsRows.join('')}
                            <tr><th>المخزون:</th><td>${stockDetailHTML}</td></tr>
                        </tbody>
                    </table>

                    ${p.description ? `<div style="background:#f8fafc; padding:12px 15px; border-radius:10px; font-size:14px; color:#475569; margin-bottom:20px; line-height:1.6;"><strong style="color:#1e293b; display:block; margin-bottom:4px;"><i class="fas fa-info-circle"></i> وصف المنتج:</strong>${p.description}</div>` : ''}

                    <div style="display:flex; gap:10px; align-items:center; flex-wrap:wrap;">
                        <button class="btn btn-primary" onclick="addToCart('${p.id}'); closeProductModal();" ${cartBtnDisabled} style="flex:1; padding:12px 24px; font-size:16px;">
                            <i class="fas fa-shopping-cart"></i> إضافة إلى السلة
                        </button>
                        <button class="btn" onclick="closeProductModal()" style="background:#f1f5f9; color:#475569; padding:12px 20px;">
                            إغلاق
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    modal.classList.add('show');
};

window.closeProductModal = function() {
    const modal = document.getElementById('siteProductDetailsModal');
    if (modal) modal.classList.remove('show');
};

// إضافة للسلة
window.addToCart = function(productId) {
    const products = getProducts();
    const product = products.find(p => p.id === productId);
    if (!product || product.stock <= 0) return;

    const existingItem = cart.find(item => item.id === productId);
    const shortSpec = getProductShortSpec(product);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ 
            id: product.id, 
            name: product.name, 
            company: product.company, 
            price: product.price, 
            quantity: 1,
            image: product.image || '',
            category: product.category || 'mobile',
            specSummary: shortSpec
        });
    }
    saveCart();
    updateCartCounter();
    if (typeof renderDrawerCart === 'function') renderDrawerCart();
    showToast('تم إضافة ' + product.name + ' إلى السلة ✓');
};

// رسالة نجاح جميلة بدل alert
function showToast(message) {
    let toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        toast.style.cssText = 'position:fixed; bottom:30px; left:50%; transform:translateX(-50%); background:#1e293b; color:#fff; padding:15px 30px; border-radius:50px; font-weight:bold; z-index:9999; transition:opacity 0.5s; box-shadow:0 5px 15px rgba(0,0,0,0.2);';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.style.opacity = '1';
    setTimeout(() => { toast.style.opacity = '0'; }, 2500);
}

// تحديث عداد السلة
function updateCartCounter() {
    const counter = document.getElementById('cartCounter');
    if (counter) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        counter.textContent = totalItems;
        counter.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// ==============================
// الفلترة الذكية بالشركة والفئة والبحث
// ==============================
const companyAliases = {
    'apple': ['apple', 'أبل', 'ابل', 'iphone', 'ايفون', 'airpods', 'ايربودز', 'ipad', 'ايباد', 'ios', 'watchos'],
    'samsung': ['samsung', 'سامسونج', 'galaxy', 'جالكسي', 'جلاكسي'],
    'xiaomi': ['xiaomi', 'شاومي', 'redmi', 'ريدمي', 'poco', 'بوكو', 'hyperos'],
    'oppo': ['oppo', 'أوبو', 'اوبو', 'reno', 'رينو'],
    'realme': ['realme', 'ريلمي'],
    'vivo': ['vivo', 'فيفو'],
    'honor': ['honor', 'هونر', 'أونر', 'اونر'],
    'infinix': ['infinix', 'انفينكس', 'انفنكس'],
    'tecno': ['tecno', 'تكنو'],
    'huawei': ['huawei', 'هواوي'],
    'anker': ['anker', 'انكر', 'أنكر'],
    'baseus': ['baseus', 'بيسوس'],
    'jbl': ['jbl', 'جي بي ال'],
    'sony': ['sony', 'سوني']
};

function matchProductCompany(p, targetCompany) {
    if (!targetCompany || targetCompany === 'all') return true;

    const targetKey = targetCompany.toLowerCase().trim();
    const targetKeywords = companyAliases[targetKey] || [targetKey];

    // 1. تطابق حقل الشركة المباشر
    if (p.company) {
        const prodComp = p.company.toLowerCase().trim();
        if (prodComp === targetKey) return true;
        if (targetKeywords.includes(prodComp)) return true;
    }

    // 2. تطابق الاسم أو الموديل أو الموديل المتوافق
    const searchableText = [
        p.company || '',
        p.name || '',
        p.model || '',
        p.compatibleModel || '',
        p.description || ''
    ].join(' ').toLowerCase();

    return targetKeywords.some(kw => searchableText.includes(kw));
}

// الفلترة الشاملة
function getFilteredProducts() {
    let products = getProducts();

    // 1. فلترة الفئة
    if (currentCategory !== 'all') {
        products = products.filter(p => p.category === currentCategory);
    }

    // 2. فلترة الشركة (بحث ذكي)
    if (currentCompany !== 'all') {
        products = products.filter(p => matchProductCompany(p, currentCompany));
    }

    // 3. فلترة مربع البحث
    if (currentSearchQuery.trim() !== '') {
        const query = currentSearchQuery.toLowerCase().trim();
        products = products.filter(p => {
            const allText = [
                p.name || '',
                p.company || '',
                p.model || '',
                p.compatibleModel || '',
                p.screenType || '',
                p.coverType || '',
                p.chargerWatt || '',
                p.storage || '',
                p.ram || '',
                p.color || '',
                p.description || ''
            ].join(' ').toLowerCase();
            return allText.includes(query);
        });
    }

    return products;
}

window.searchProducts = function() {
    const input = document.getElementById('searchInput');
    if (input) {
        currentSearchQuery = input.value;
        renderProducts(getFilteredProducts());
        updateShowAllBtn();
    }
};

window.filterByCompany = function(company) {
    if (currentCompany === company) {
        currentCompany = 'all'; // إلغاء التحديد عند الضغط مرة ثانية
    } else {
        currentCompany = company;
    }

    renderProducts(getFilteredProducts());
    updateCompanyCardsUI();
    updateSectionTitleUI();
    updateShowAllBtn();

    const prodSection = document.getElementById('products');
    if (prodSection) prodSection.scrollIntoView({ behavior: 'smooth' });
};

window.filterByCategory = function(category) {
    if (currentCategory === category) {
        currentCategory = 'all';
    } else {
        currentCategory = category;
    }

    renderProducts(getFilteredProducts());
    updateCategoryBtnsUI();
    updateSectionTitleUI();
    updateShowAllBtn();

    const prodSection = document.getElementById('products');
    if (prodSection) prodSection.scrollIntoView({ behavior: 'smooth' });
};

// عرض الكل
window.showAllProducts = function() {
    currentCategory = 'all';
    currentCompany = 'all';
    currentSearchQuery = '';

    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = '';

    renderProducts(getProducts());
    updateCompanyCardsUI();
    updateCategoryBtnsUI();
    updateSectionTitleUI();
    updateShowAllBtn();
};

function updateCompanyCardsUI() {
    document.querySelectorAll('.category-card').forEach(card => {
        const comp = card.getAttribute('data-company');
        card.classList.toggle('active', !!(comp && comp.toLowerCase() === currentCompany.toLowerCase()));
    });
}

function updateCategoryBtnsUI() {
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
    if (currentCategory === 'all') {
        document.getElementById('cat-btn-all')?.classList.add('active');
    } else {
        document.getElementById('cat-btn-' + currentCategory)?.classList.add('active');
    }
}

function updateSectionTitleUI() {
    const titleEl = document.getElementById('productsSectionTitle');
    if (!titleEl) return;

    const catNames = {
        mobile: 'الموبايلات',
        headphone: 'السماعات',
        watch: 'الساعات الذكية',
        cover: 'الجرابات',
        screen: 'الاسكرينات',
        charger: 'الشواحن'
    };

    if (currentCompany !== 'all' && currentCategory !== 'all') {
        titleEl.textContent = `${catNames[currentCategory] || currentCategory} من ${currentCompany}`;
    } else if (currentCompany !== 'all') {
        titleEl.textContent = `منتجات شركة ${currentCompany}`;
    } else if (currentCategory !== 'all') {
        titleEl.textContent = `قسم ${catNames[currentCategory] || currentCategory}`;
    } else {
        titleEl.textContent = 'كل المنتجات';
    }
}

function updateShowAllBtn() {
    const allBtn = document.getElementById('showAllBtn');
    if (allBtn) {
        if (currentCategory !== 'all' || currentCompany !== 'all' || currentSearchQuery !== '') {
            allBtn.style.display = 'inline-block';
        } else {
            allBtn.style.display = 'none';
        }
    }
}

// البحث
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    searchInput.addEventListener('input', function() {
        currentSearchQuery = this.value;
        renderProducts(getFilteredProducts());
        updateShowAllBtn();
    });
}

// ==============================
// تطبيق إعدادات الموقع المحدثة من لوحة التحكم
// ==============================
function applySiteSettings() {
    const saved = localStorage.getItem('moamen_settings');
    if (!saved) return;
    try {
        const s = JSON.parse(saved);
        if (s.phone) {
            const phoneText = document.getElementById('sitePhoneText');
            if (phoneText) phoneText.textContent = s.phone;
            const phoneLink = document.getElementById('sitePhoneLink');
            if (phoneLink) phoneLink.href = 'tel:' + s.phone;
            const headerContact = document.getElementById('headerContactLink');
            if (headerContact) headerContact.href = 'tel:' + s.phone;
        }
        if (s.whatsapp) {
            const waText = document.getElementById('siteWhatsappText');
            if (waText) waText.textContent = s.whatsapp;
            
            // تهيئة الرقم الدولي للواتساب
            let cleanNumber = s.whatsapp.replace(/\D/g, '');
            if (cleanNumber.startsWith('0')) {
                cleanNumber = '2' + cleanNumber;
            }
            const waUrl = 'https://wa.me/' + cleanNumber;
            
            const waLink = document.getElementById('siteWhatsappLink');
            if (waLink) waLink.href = waUrl;
            
            const floatingWa = document.getElementById('floatingWhatsappBtn');
            if (floatingWa) floatingWa.href = waUrl;
        }
        if (s.address) {
            const addrText = document.getElementById('siteAddressText');
            if (addrText) addrText.textContent = s.address;
        }
        if (s.hours) {
            const hoursText = document.getElementById('siteHoursText');
            if (hoursText) hoursText.textContent = s.hours;
        }
        if (s.storeName) {
            document.querySelectorAll('.site-store-name').forEach(el => el.textContent = s.storeName);
        }
    } catch (e) {
        console.error('Error applying site settings:', e);
    }
}

// ==============================
// التحديث التلقائي اللحظي في الموقع (كل 1 ثانية)
// ==============================
let lastSiteProductsRaw = localStorage.getItem('moamen_products');
let lastSiteSettingsRaw = localStorage.getItem('moamen_settings');
let lastSiteCartRaw = localStorage.getItem('cart');

function autoRefreshSiteData() {
    const currentProductsRaw = localStorage.getItem('moamen_products');
    const currentSettingsRaw = localStorage.getItem('moamen_settings');
    const currentCartRaw = localStorage.getItem('cart');

    // 1. تحديث المنتجات إذا تغيرت في قاعدة البيانات / لوحة المدير
    if (currentProductsRaw !== lastSiteProductsRaw) {
        lastSiteProductsRaw = currentProductsRaw;
        const activeInput = document.activeElement;
        const isSearching = activeInput && activeInput.id === 'searchInput';
        if (!isSearching && document.getElementById('productsGrid')) {
            renderProducts(getFilteredProducts());
        }
    }

    // 2. تحديث إعدادات المتجر (الهاتف، الواتساب، العنوان)
    if (currentSettingsRaw !== lastSiteSettingsRaw) {
        lastSiteSettingsRaw = currentSettingsRaw;
        applySiteSettings();
    }

    // 3. تحديث السلة والعداد
    if (currentCartRaw !== lastSiteCartRaw) {
        lastSiteCartRaw = currentCartRaw;
        cart = JSON.parse(currentCartRaw) || [];
        updateCartCounter();
        if (typeof renderCart === 'function') {
            renderCart();
        }
    }
}

// تهيئة الصفحة
document.addEventListener('DOMContentLoaded', () => {
    applySiteSettings();
    updateCartCounter();
    if (document.getElementById('productsGrid')) {
        renderProducts(getProducts());
    }
    setupSearch();

    // تشغيل الرفريش كل 1 ثانية
    setInterval(autoRefreshSiteData, 1000);
    window.addEventListener('storage', autoRefreshSiteData);

    // التحقق إذا كان الرابط يحتوي على #cart أو #checkout لفتح الدُرج مباشرة
    function checkHashForDrawer() {
        if (window.location.hash === '#cart') {
            openCartDrawer('cart');
        } else if (window.location.hash === '#checkout') {
            openCartDrawer('checkout');
        }
    }

    checkHashForDrawer();
    window.addEventListener('hashchange', checkHashForDrawer);
});

// =========================================================
// دوال إدارة دُرج السلة وإتمام الطلب الموحد (Unified Cart & Checkout)
// =========================================================

let currentDrawerOrder = null;

window.openCartDrawer = function(step = 'cart') {
    const overlay = document.getElementById('cartDrawerOverlay');
    const drawer = document.getElementById('cartDrawer');
    if (!drawer || !overlay) return;

    overlay.classList.add('active');
    drawer.classList.add('active');
    document.body.style.overflow = 'hidden';

    renderDrawerCart();
    switchDrawerStep(step);
};

window.closeCartDrawer = function() {
    const overlay = document.getElementById('cartDrawerOverlay');
    const drawer = document.getElementById('cartDrawer');
    if (overlay) overlay.classList.remove('active');
    if (drawer) drawer.classList.remove('active');
    document.body.style.overflow = '';
};

window.switchDrawerStep = function(step) {
    const stepCart = document.getElementById('drawerStepCart');
    const stepCheckout = document.getElementById('drawerStepCheckout');
    const stepSuccess = document.getElementById('drawerStepSuccess');
    const footerCart = document.getElementById('drawerFooterCart');
    const footerCheckout = document.getElementById('drawerFooterCheckout');
    const stepBtnCart = document.getElementById('stepBtnCart');
    const stepBtnCheckout = document.getElementById('stepBtnCheckout');
    const stepsBar = document.getElementById('cartDrawerSteps');
    const title = document.getElementById('cartDrawerTitle');

    if (!stepCart || !stepCheckout || !stepSuccess) return;

    if (step === 'checkout') {
        if (!cart || cart.length === 0) {
            showToast('⚠️ السلة فارغة، برجاء إضافة منتجات أولاً');
            return;
        }
        stepCart.style.display = 'none';
        stepCheckout.style.display = 'block';
        stepSuccess.style.display = 'none';
        if (footerCart) footerCart.style.display = 'none';
        if (footerCheckout) footerCheckout.style.display = 'block';
        if (stepsBar) stepsBar.style.display = 'flex';
        if (stepBtnCart) stepBtnCart.classList.remove('active');
        if (stepBtnCheckout) stepBtnCheckout.classList.add('active');
        if (title) title.textContent = 'إتمام الطلب';
        updateDrawerTotals();
    } else if (step === 'success') {
        stepCart.style.display = 'none';
        stepCheckout.style.display = 'none';
        stepSuccess.style.display = 'block';
        if (footerCart) footerCart.style.display = 'none';
        if (footerCheckout) footerCheckout.style.display = 'none';
        if (stepsBar) stepsBar.style.display = 'none';
        if (title) title.textContent = 'تم استلام الطلب';
    } else {
        // cart step
        stepCart.style.display = 'block';
        stepCheckout.style.display = 'none';
        stepSuccess.style.display = 'none';
        if (footerCart) footerCart.style.display = 'block';
        if (footerCheckout) footerCheckout.style.display = 'none';
        if (stepsBar) stepsBar.style.display = 'flex';
        if (stepBtnCart) stepBtnCart.classList.add('active');
        if (stepBtnCheckout) stepBtnCheckout.classList.remove('active');
        if (title) title.textContent = 'سلة المشتريات';
        renderDrawerCart();
    }
};

window.renderDrawerCart = function() {
    const listEl = document.getElementById('drawerCartList');
    const itemsCountEl = document.getElementById('drawerItemsCount');
    const btnProceed = document.getElementById('btnProceedToCheckout');
    if (!listEl) return;

    const totalQty = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    if (itemsCountEl) itemsCountEl.textContent = totalQty;

    if (!cart || cart.length === 0) {
        listEl.innerHTML = `
            <div style="text-align:center; padding: 40px 10px; color:#94a3b8;">
                <div style="width:75px; height:75px; background:#f1f5f9; border-radius:50%; display:flex; align-items:center; justify-content:center; margin: 0 auto 16px; font-size:32px; color:#cbd5e1;">
                    <i class="fas fa-shopping-cart"></i>
                </div>
                <h4 style="color:#475569; font-size:17px; margin-bottom:6px;">سلتك فارغة حالياً</h4>
                <p style="font-size:13px; margin-bottom:20px;">تصفح تشكيلة الهواتف والإكسسوارات وأضف ما يعجبك</p>
                <button onclick="closeCartDrawer(); window.location.hash = '#products';" class="btn btn-primary" style="padding:10px 22px; font-size:14px; border-radius:10px;">
                    <i class="fas fa-mobile-alt"></i> تصفح المنتجات
                </button>
            </div>
        `;
        if (btnProceed) {
            btnProceed.disabled = true;
            btnProceed.style.opacity = '0.5';
            btnProceed.style.cursor = 'not-allowed';
        }
        updateDrawerTotals();
        return;
    }

    if (btnProceed) {
        btnProceed.disabled = false;
        btnProceed.style.opacity = '1';
        btnProceed.style.cursor = 'pointer';
    }

    let html = '';
    cart.forEach((item, index) => {
        const itemImg = item.image 
            ? `<img src="${item.image}" alt="${item.name}">` 
            : `<i class="fas fa-mobile-alt" style="color:#94a3b8; font-size:22px;"></i>`;
        
        const specText = item.specSummary ? `<div style="font-size:12px; color:#64748b; margin-top:2px;">${item.specSummary}</div>` : '';
        const itemTotal = (item.price * item.quantity).toLocaleString();

        html += `
            <div class="drawer-cart-item">
                <div class="drawer-cart-img">${itemImg}</div>
                <div class="drawer-cart-details">
                    <h4>${item.name}</h4>
                    ${specText}
                    <div class="drawer-cart-price">${(item.price || 0).toLocaleString()} ج.م</div>
                </div>
                <div style="display:flex; flex-direction:column; align-items:flex-end; gap:6px;">
                    <div class="drawer-qty-controls">
                        <button type="button" class="drawer-qty-btn" onclick="drawerChangeQty(${index}, -1)">−</button>
                        <span style="font-weight:700; font-size:13px; min-width:18px; text-align:center;">${item.quantity}</span>
                        <button type="button" class="drawer-qty-btn" onclick="drawerChangeQty(${index}, 1)">+</button>
                    </div>
                    <button type="button" class="drawer-remove-btn" onclick="drawerRemoveItem(${index})" title="حذف من السلة">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            </div>
        `;
    });

    listEl.innerHTML = html;
    updateDrawerTotals();
};

function updateDrawerTotals() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const formatted = total.toLocaleString() + ' ج.م';

    const cartTotalEl = document.getElementById('drawerCartTotal');
    const checkoutTotalEl = document.getElementById('drawerCheckoutTotal');
    if (cartTotalEl) cartTotalEl.textContent = formatted;
    if (checkoutTotalEl) checkoutTotalEl.textContent = formatted;
}

window.drawerChangeQty = function(index, delta) {
    if (!cart[index]) return;
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    saveCart();
    updateCartCounter();
    renderDrawerCart();
    if (typeof renderCart === 'function') renderCart();
};

window.drawerRemoveItem = function(index) {
    if (!cart[index]) return;
    cart.splice(index, 1);
    saveCart();
    updateCartCounter();
    renderDrawerCart();
    if (typeof renderCart === 'function') renderCart();
};

window.selectDeliveryType = function(type) {
    const lblInstore = document.getElementById('labelTypeInstore');
    const lblDelivery = document.getElementById('labelTypeDelivery');
    const addrFields = document.getElementById('drawerAddressFields');
    const radioInstore = document.querySelector('input[name="drawerDeliveryType"][value="instore"]');
    const radioDelivery = document.querySelector('input[name="drawerDeliveryType"][value="delivery"]');

    if (type === 'delivery') {
        if (lblDelivery) lblDelivery.classList.add('selected');
        if (lblInstore) lblInstore.classList.remove('selected');
        if (radioDelivery) radioDelivery.checked = true;
        if (addrFields) {
            addrFields.style.display = 'block';
            addrFields.querySelectorAll('input').forEach(i => i.setAttribute('required', 'true'));
        }
    } else {
        if (lblInstore) lblInstore.classList.add('selected');
        if (lblDelivery) lblDelivery.classList.remove('selected');
        if (radioInstore) radioInstore.checked = true;
        if (addrFields) {
            addrFields.style.display = 'none';
            addrFields.querySelectorAll('input').forEach(i => i.removeAttribute('required'));
        }
    }
};

window.handleDrawerCheckoutSubmit = function(e) {
    if (e && e.preventDefault) e.preventDefault();
    if (!cart || cart.length === 0) {
        showToast('⚠️ السلة فارغة');
        return;
    }

    const name = document.getElementById('drawerCustName')?.value.trim();
    const phone = document.getElementById('drawerCustPhone')?.value.trim();
    if (!name || !phone) {
        showToast('برجاء إدخال الاسم ورقم الهاتف');
        return;
    }

    const deliveryTypeRadio = document.querySelector('input[name="drawerDeliveryType"]:checked');
    const deliveryType = deliveryTypeRadio ? deliveryTypeRadio.value : 'instore';

    const customerData = {
        name: name,
        phone: phone,
        deliveryType: deliveryType,
        governorate: deliveryType === 'delivery' ? (document.getElementById('drawerCustGov')?.value.trim() || '') : '',
        area: deliveryType === 'delivery' ? (document.getElementById('drawerCustArea')?.value.trim() || '') : '',
        address: deliveryType === 'delivery' ? (document.getElementById('drawerCustAddress')?.value.trim() || '') : 'استلام في المحل',
        notes: document.getElementById('drawerCustNotes')?.value.trim() || ''
    };

    const confirmBtn = document.getElementById('drawerConfirmOrderBtn');
    if (confirmBtn) {
        confirmBtn.disabled = true;
        confirmBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري حفظ الطلب...';
    }

    const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const orderId = 'ORD-' + Math.floor(10000 + Math.random() * 90000);
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    const todayStr = `${yyyy}-${mm}-${dd}`;

    const newOrder = {
        id: orderId,
        customer: customerData,
        items: JSON.parse(JSON.stringify(cart)),
        total: totalAmount,
        status: 'جديد',
        timestamp: now.toISOString(),
        dateStr: todayStr,
        date: now.toLocaleString('ar-EG')
    };

    currentDrawerOrder = newOrder;

    // حفظ في الطلبات في LocalStorage
    let orders = JSON.parse(localStorage.getItem('admin_orders') || '[]');
    orders.unshift(newOrder);
    localStorage.setItem('admin_orders', JSON.stringify(orders));

    // خصم كميات المنتجات المباعة من المخزون تلقائياً
    try {
        let prods = getProducts();
        let prodsUpdated = false;
        newOrder.items.forEach(orderedItem => {
            const prod = prods.find(p => p.id === orderedItem.id);
            if (prod) {
                const currentStock = parseInt(prod.stock, 10) || 0;
                const deductQty = parseInt(orderedItem.quantity, 10) || 1;
                prod.stock = Math.max(0, currentStock - deductQty);
                prodsUpdated = true;
            }
        });
        if (prodsUpdated) {
            localStorage.setItem('moamen_products', JSON.stringify(prods));
            if (document.getElementById('productsGrid') && typeof getFilteredProducts === 'function') {
                renderProducts(getFilteredProducts());
            }
        }
    } catch (err) {
        console.error('Error updating stock on order:', err);
    }

    // إعداد شاشة النجاح
    const orderNumEl = document.getElementById('successOrderNum');
    if (orderNumEl) orderNumEl.textContent = '#' + orderId;

    const detailsEl = document.getElementById('successOrderDetails');
    if (detailsEl) {
        let itemsSummary = newOrder.items.map(it => `• ${it.name} (×${it.quantity}) - ${(it.price * it.quantity).toLocaleString()} ج.م`).join('<br>');
        detailsEl.innerHTML = `
            <div><strong>العميل:</strong> ${customerData.name} (${customerData.phone})</div>
            <div><strong>نوع الاستلام:</strong> ${deliveryType === 'instore' ? 'استلام في المحل' : 'توصيل للعنوان: ' + customerData.address}</div>
            <div style="margin-top:8px; border-top:1px dashed #cbd5e1; padding-top:6px;"><strong>المنتجات:</strong><br>${itemsSummary}</div>
            <div style="margin-top:8px; font-weight:800; color:#2563eb; font-size:15px; border-top:1px solid #e2e8f0; padding-top:6px;">
                الإجمالي المطلوب: ${totalAmount.toLocaleString()} ج.م
            </div>
        `;
    }

    // إعداد رابط الواتساب
    const siteSettings = JSON.parse(localStorage.getItem('moamen_settings') || '{}');
    const targetWa = siteSettings.whatsapp || '01000000000';
    let cleanWa = targetWa.replace(/\D/g, '');
    if (cleanWa.startsWith('0')) cleanWa = '2' + cleanWa;
    
    let waMsg = `مرحباً، أود تأكيد الطلب #${orderId} من مؤمن فون:\n`;
    waMsg += `الاسم: ${customerData.name}\n`;
    waMsg += `الهاتف: ${customerData.phone}\n`;
    waMsg += `الاستلام: ${deliveryType === 'instore' ? 'من المحل' : 'توصيل إلى ' + customerData.address}\n`;
    waMsg += `المنتجات:\n`;
    newOrder.items.forEach(it => {
        waMsg += `- ${it.name} (عدد ${it.quantity}) = ${(it.price * it.quantity).toLocaleString()} ج.م\n`;
    });
    waMsg += `الإجمالي: ${totalAmount.toLocaleString()} ج.م`;

    const waBtn = document.getElementById('drawerWhatsappOrderBtn');
    if (waBtn) {
        waBtn.href = `https://wa.me/${cleanWa}?text=${encodeURIComponent(waMsg)}`;
    }

    // تجهيز بيانات الطباعة
    const printPhone = document.getElementById('dPrintPhone');
    if (printPhone && siteSettings.phone) printPhone.textContent = siteSettings.phone;
    const printDate = document.getElementById('dPrintDate');
    if (printDate) printDate.textContent = now.toLocaleString('ar-EG');
    const printCust = document.getElementById('dPrintCust');
    if (printCust) printCust.textContent = `${customerData.name} (${customerData.phone})`;
    const printType = document.getElementById('dPrintType');
    if (printType) printType.textContent = deliveryType === 'instore' ? 'استلام في المحل' : 'توصيل للعنوان';
    const printAddr = document.getElementById('dPrintAddr');
    if (printAddr) printAddr.textContent = deliveryType === 'delivery' ? `العنوان: ${customerData.governorate} - ${customerData.area} - ${customerData.address}` : '';
    
    const printItems = document.getElementById('dPrintItems');
    if (printItems) {
        printItems.innerHTML = newOrder.items.map(it => `
            <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
                <span>${it.name} ×${it.quantity}</span>
                <span>${(it.price * it.quantity).toLocaleString()} ج.م</span>
            </div>
        `).join('');
    }
    const printTotal = document.getElementById('dPrintTotal');
    if (printTotal) printTotal.textContent = totalAmount.toLocaleString() + ' ج.م';

    // مسح السلة بعد إتمام الطلب
    cart = [];
    saveCart();
    updateCartCounter();

    if (confirmBtn) {
        confirmBtn.disabled = false;
        confirmBtn.innerHTML = '<i class="fas fa-check-circle"></i> تأكيد الطلب الآن';
    }

    // الانتقال لشاشة النجاح
    switchDrawerStep('success');
};

window.printDrawerReceipt = function() {
    window.print();
};

window.resetDrawerState = function() {
    const form = document.getElementById('drawerCheckoutForm');
    if (form) form.reset();
    selectDeliveryType('instore');
    switchDrawerStep('cart');
};

