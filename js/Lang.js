/* js/lang.js
   Persian (default) / English switch for the whole site.
   Your HTML keeps its English text. In Persian mode this script swaps each
   text for the Persian version found in DICT below. */
(function () {
  'use strict';

  var STORAGE_KEY = 'site-lang';
  var DEFAULT_LANG = 'fa';
 var CURRENCY_FA = 'تومان';        // change to 'تومان' or anything you like
  var ATTRS = ['alt', 'aria-label', 'title'];

  /* ---------- TRANSLATIONS: "English text exactly as in the HTML": "Persian text" ---------- */
  var DICT = {
        /* Coffee's */
    "Coffee's": 'قهوه‌ها',
    'Coffee’s': 'قهوه‌ها',
    'Coffees': 'قهوه‌ها',
    'Caffè Latte': 'کافه لاته',
    'A smooth espresso blended with steamed milk and finished with a delicate layer of foam.': 'اسپرسوی لطیف آمیخته با شیر بخارداده‌شده و پوشیده با لایه‌ای ظریف از فوم شیر.',
    'Espresso': 'اسپرسو',
    'A rich, concentrated shot of freshly ground coffee with a bold aroma and smooth crema.': 'شات غلیظ و پرمایه از قهوه تازه آسیاب‌شده با رایحه‌ای قوی و کرمای نرم.',
    'Americano': 'آمریکانو',
    'A smooth espresso diluted with hot water, offering a rich flavour with a lighter body.': 'اسپرسوی نرم رقیق‌شده با آب داغ، با طعمی غنی و بدنه‌ای سبک‌تر.',
    'Cappuccino': 'کاپوچینو',
    'A balanced combination of espresso, steamed milk, and a thick layer of velvety milk foam.': 'ترکیبی متعادل از اسپرسو، شیر بخارداده‌شده و لایه‌ای ضخیم از فوم مخملی شیر.',
    'Mocha': 'موکا',
    'A delightful blend of espresso, rich chocolate, and steamed milk, finished with a smooth texture.': 'ترکیبی دلنشین از اسپرسو، شکلات غنی و شیر بخارداده‌شده با بافتی نرم.',
    'White Mocha': 'وایت موکا',
    'A luxurious combination of espresso, creamy white chocolate, and steamed milk.': 'ترکیبی لوکس از اسپرسو، شکلات سفید کرمی و شیر بخارداده‌شده.',
    'Affogato': 'آفوگاتو',
    'A scoop of creamy vanilla ice cream elegantly topped with a freshly brewed shot of espresso.': 'یک اسکوپ بستنی وانیلی کرمی که با یک شات اسپرسوی تازه‌دم تزیین می‌شود.',
    'Iced Americano': 'آیس آمریکانو',
    'Fresh espresso combined with chilled water and ice for a crisp, refreshing coffee experience.': 'اسپرسوی تازه همراه با آب سرد و یخ، برای تجربه‌ای خنک و طراوت‌بخش از قهوه.',
    'Iced Latte': 'آیس لاته',
    'Smooth espresso poured over chilled milk and ice for a refreshing, creamy finish.': 'اسپرسوی نرم ریخته‌شده روی شیر سرد و یخ، با پایانی خنک و کرمی.',
    'Iced Mocha': 'آیس موکا',
    'Espresso, chocolate, and chilled milk blended together for a refreshing chocolate-coffee experience.': 'اسپرسو، شکلات و شیر سرد درهم آمیخته برای تجربه‌ای خنک از شکلات و قهوه.',
    'Good taste, fresh coffee, and moments worth enjoying. At Bahmahas, discover unique flavours and make every visit a memorable experience.' : 'تجربه‌ای متفاوت از طعم و کیفیت را در دات کافه تجربه کنید.از ساندویچ‌های تازه و غذاهای خوش‌طعم گرفته تا قهوه‌های تخصصی و دسرهای جذاب؛ همه‌چیز با عشق و توجه به جزئیات آماده شده تا لحظات خوشمزه‌ای برای شما بسازیم.',



    /* Main courses */
    'Chicken Alfredo Sandwich': 'ساندویچ مرغ آلفردو',
    'Grilled chicken breast with creamy Alfredo sauce, melted cheese, and fresh lettuce in toasted bread.': 'سینه مرغ گریل‌شده با سس کرمی آلفردو، پنیر ذوب‌شده و کاهوی تازه در نان تُست‌شده.',
    'Grilled Chicken Panini': 'پانینی مرغ گریل',
    'Tender grilled chicken, mozzarella, pesto, and sun-dried tomatoes pressed between artisan bread.': 'مرغ گریل‌شده نرم، موزارلا، پستو و گوجه‌فرنگی خشک‌شده، پرس‌شده میان نان دست‌ساز.',

    /* Desserts */
    'Classic New York Cheesecake': 'چیزکیک کلاسیک نیویورکی',
    'A rich and creamy cheesecake with a buttery biscuit base and a delicate vanilla finish.': 'چیزکیکی غنی و کرمی با پایه بیسکویتی کره‌ای و طعم ظریف وانیل.',
    'Tiramisu': 'تیرامیسو',
    'Traditional Italian dessert featuring espresso-soaked ladyfingers layered with mascarpone cream and cocoa.': 'دسر سنتی ایتالیایی با بیسکویت‌های آغشته به اسپرسو، لایه‌لایه با کرم ماسکارپونه و کاکائو.',
    'Chocolate Lava Cake': 'کیک لاوا شکلاتی',
    'A warm chocolate cake with a rich, molten chocolate centre.': 'کیک شکلاتی گرم با مغز شکلاتی غنی و مذاب.',
    'Cinnamon Roll': 'رول دارچین',
    'Freshly baked sweet dough spiralled with cinnamon sugar and topped with vanilla glaze.': 'خمیر شیرین تازه‌پخته با مارپیچ شکر و دارچین و روکش وانیلی.',

    /* Drinks */
    'Black Tea': 'چای سیاه',
    'Delicate Black tea with a clean and naturally refreshing taste.': 'چای سیاه لطیف با طعمی پاک و طراوت‌بخش.',
    'Fresh Orange Juice': 'آب‌پرتقال تازه',
    'Freshly squeezed oranges served chilled.': 'پرتقال‌های تازه فشرده‌شده، سرد سرو می‌شود.',
    'Fresh Lemonade': 'لیموناد تازه',
    'Fresh lemon juice blended with water and a touch of sweetness.': 'آب‌لیمو تازه آمیخته با آب و کمی شیرینی.',
    'Strawberry Mojito': 'موهیتو توت‌فرنگی',
    'Fresh strawberries, mint, lime, and sparkling soda.': 'توت‌فرنگی تازه، نعناع، لیمو و سودای گازدار.',
    'Chocolate Milkshake': 'میلک‌شیک شکلات',
    'Chocolate ice cream blended with milk for a rich and indulgent drink.': 'بستنی شکلاتی همزده با شیر، برای نوشیدنی غنی و لذیذ.',
    'Vanilla Milkshake': 'میلک‌شیک وانیل',
    'Classic vanilla ice cream blended into a smooth, creamy shake.': 'بستنی وانیلی کلاسیک همزده در شیکی نرم و کرمی.',
    /* page titles and descriptions */
    'Menu | Your Restaurant Name – Starters, Main Courses, Desserts & Drinks': 'منو | نام رستوران شما – پیش‌غذا، غذای اصلی، دسر و نوشیدنی',
    "Explore the full menu at Your Restaurant Name: handcrafted starters, main courses, desserts, drinks and chef's specials, with prices. Reserve your table today.": 'منوی کامل رستوران شما را ببینید: پیش‌غذا، غذای اصلی، دسر، نوشیدنی و پیشنهادهای سرآشپز، همراه با قیمت. همین امروز میز خود را رزرو کنید.',

    /* main page */
    'Menu': 'منو',
    'Write a few lines about your restaurant here: where the food comes from, the story behind the kitchen, and what guests can expect when they sit down.': 'چند خط درباره رستوران خود اینجا بنویسید: مواد اولیه از کجا می‌آیند، داستان پشت آشپزخانه و آنچه مهمانان هنگام نشستن سر میز انتظار دارند.',
    'View the menu': 'مشاهده منو',

    /* hamburger */
    'Starters': 'پیش‌غذاها',
    'Main courses': 'غذاهای اصلی',
    'Desserts': 'دسرها',
    'Drinks': 'نوشیدنی‌ها',
    "Chef's specials": 'پیشنهاد سرآشپز',
    'Reservations': 'رزرو میز',
    'Main navigation': 'ناوبری اصلی',
    'Menu categories': 'دسته‌بندی‌های منو',

    /* menu page: header */
    'Menu – Your Restaurant Name': 'منو – نام رستوران شما',
    'Your Restaurant Name logo': 'لوگوی نام رستوران شما',
    'Your Restaurant Name, back to home': 'نام رستوران شما، بازگشت به صفحه اصلی',

    /* starters */
    'Burrata & Heirloom Tomato': 'بوراتا با گوجه‌فرنگی هیرلوم',
    'Creamy burrata, sun-ripened tomatoes, basil oil and aged balsamic.': 'بوراتای کرمی، گوجه‌فرنگی رسیده زیر آفتاب، روغن ریحان و بالزامیک کهنه.',
    'Burrata with heirloom tomatoes': 'بوراتا با گوجه‌فرنگی هیرلوم',
    'Seared Scallops': 'گوش‌ماهی سرخ‌شده',
    'Golden-seared scallops on cauliflower purée with brown butter and capers.': 'گوش‌ماهی طلایی‌سرخ‌شده روی پوره گل‌کلم با کره قهوه‌ای و کاپر.',
    'Seared scallops on cauliflower purée': 'گوش‌ماهی سرخ‌شده روی پوره گل‌کلم',

    /* main courses */
    'Grilled Ribeye': 'ریب‌آی گریل‌شده',
    'Dry-aged ribeye, truffle butter, roasted garlic and crisp potatoes.': 'ریب‌آی خشک‌رسیده، کره ترافل، سیر کباب‌شده و سیب‌زمینی ترد.',
    'Grilled ribeye steak with truffle butter': 'استیک ریب‌آی گریل‌شده با کره ترافل',
    'Wild Mushroom Risotto': 'ریزوتوی قارچ وحشی',
    'Slow-stirred arborio rice, forest mushrooms, parmesan and fresh thyme.': 'برنج آربوریو هم‌زده با حوصله، قارچ جنگلی، پارمزان و آویشن تازه.',
    'Wild mushroom risotto': 'ریزوتوی قارچ وحشی',

    /* desserts */
    'Chocolate Fondant': 'فوندان شکلات',
    'Warm dark chocolate centre served with vanilla bean ice cream.': 'مغز گرم شکلات تلخ، همراه با بستنی وانیل.',
    'Dark chocolate fondant with vanilla ice cream': 'فوندان شکلات تلخ با بستنی وانیل',
    'Crème Brûlée': 'کرم بروله',
    'Silky vanilla custard under a caramelised crust, with fresh berries.': 'کاستارد وانیلی ابریشمی زیر لایه کاراملی، همراه با توت‌های تازه.',
    'Crème brûlée with fresh berries': 'کرم بروله با توت‌های تازه',

    /* drinks */
    'Pomegranate Cooler': 'نوشیدنی خنک انار',
    'Fresh pomegranate, mint and lime over sparkling water.': 'انار تازه، نعناع و لیمو روی آب گازدار.',
    'House sparkling pomegranate cooler': 'نوشیدنی گازدار انار مخصوص خانه',
    'Cardamom Espresso': 'اسپرسو هل',
    'Double espresso lightly spiced with ground cardamom.': 'اسپرسوی دبل با طعم ملایم هل آسیاب‌شده.',
    'Cardamom espresso': 'اسپرسو هل',

    /* chef's specials */
    'Braised Lamb Shank': 'ماهیچه بره آرام‌پز',
    'Eight-hour braised lamb, saffron rice and a rich red wine reduction.': 'گوشت بره هشت ساعت پخته‌شده، برنج زعفرانی و سس غلیظ شراب قرمز.',
    'Slow-braised lamb shank': 'ماهیچه بره آرام‌پز',
    'Lobster Linguine': 'لینگوینی لابستر',
    'Fresh lobster, hand-cut linguine, cherry tomatoes and white wine.': 'لابستر تازه، لینگوینی دست‌ساز، گوجه گیلاسی و شراب سفید.',
    'Lobster linguine': 'لینگوینی لابستر',

    /* reservations */
    'Iran - Tehran - Vanak': 'تهران - میدان ونک - خیابان ملاصدرا - پلاک 12',
    'Open every day, 12:00 – 23:00': 'هر روز باز است، ۱۲:۰۰ تا ۲۳:۰۰',
    'Call to reserve': 'برای رزرو تماس بگیرید'
    
  };

  /* ---------- helpers ---------- */
  var DIGITS = '۰۱۲۳۴۵۶۷۸۹';
  function toFaDigits(s) { return String(s).replace(/\d/g, function (d) { return DIGITS.charAt(d); }); }
  function norm(s) { return s.replace(/\s+/g, ' ').trim(); }
  function getLang() { try { return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG; } catch (e) { return DEFAULT_LANG; } }
  function saveLang(l) { try { localStorage.setItem(STORAGE_KEY, l); } catch (e) {} }

  function init() {
    var root = document.documentElement;
    var btn = document.getElementById('langBtn');

    /* every element that holds only text */
    var textEls = Array.prototype.filter.call(document.body.querySelectorAll('*'), function (el) {
      if (el.closest('[data-no-i18n], script, style, svg, noscript')) return false;
      return el.children.length === 0 && norm(el.textContent) !== '';
    });
    textEls.forEach(function (el) { el.setAttribute('data-en', norm(el.textContent)); });

    /* alt / aria-label / title attributes that have a translation */
    var attrEls = Array.prototype.filter.call(document.querySelectorAll('[alt],[aria-label],[title]'), function (el) {
      return !el.closest('[data-no-i18n]');
    });
    attrEls.forEach(function (el) {
      ATTRS.forEach(function (a) {
        var v = el.getAttribute(a);
        if (v && DICT[norm(v)]) el.setAttribute('data-en-' + a, norm(v));
      });
    });

    /* page title and description */
    var titleEn = document.title;
    var descEl = document.querySelector('meta[name="description"]');
    var descEn = descEl ? descEl.getAttribute('content') : '';

    function apply(lang) {
      var fa = lang === 'fa';
      root.lang = lang;
      root.dir = fa ? 'rtl' : 'ltr';

      textEls.forEach(function (el) {
        var en = el.getAttribute('data-en');
        if (!fa) { el.textContent = en; return; }

        if (el.closest('.item-price')) {                       /* prices */
          var num = en.replace(/[^\d.,]/g, '');
          el.textContent = num ? toFaDigits(num) + ' ' + CURRENCY_FA : en;
          return;
        }
        if (DICT[en]) {
          el.textContent = DICT[en];
        } else {
          el.textContent = en;
          if (/[A-Za-z]/.test(en) && window.console) console.warn('[lang.js] No Persian text for: "' + en + '"');
        }
      });

      attrEls.forEach(function (el) {
        ATTRS.forEach(function (a) {
          var en = el.getAttribute('data-en-' + a);
          if (en) el.setAttribute(a, fa ? DICT[en] : en);
        });
      });

      document.title = fa ? (DICT[titleEn] || titleEn) : titleEn;
      if (descEl) descEl.setAttribute('content', fa ? (DICT[descEn] || descEn) : descEn);

      if (btn) {
        btn.textContent = fa ? 'EN' : 'فا';
        btn.setAttribute('aria-label', fa ? 'Switch to English' : 'تغییر زبان به فارسی');
      }
      root.classList.remove('i18n-loading');
    }

    var current = getLang();
    apply(current);

    if (btn) {
      btn.addEventListener('click', function () {
        current = current === 'fa' ? 'en' : 'fa';
        saveLang(current);
        apply(current);
      });
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
