(self.AMP=self.AMP||[]).push({m:0,v:"2309082229000",n:"amp-timeago",ev:"0.1",l:!0,f:function(n,e){!function(){var e=Object.create,s=Object.defineProperty,t=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,r=Object.getPrototypeOf,i=Object.prototype.hasOwnProperty;function u(n){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var o,d,m,c,l,f=(o={"node_modules/@babel/runtime/helpers/esm/typeof.js":function(){}},function(){return o&&(d=(0,o[a(o)[0]])(o=0)),d}),h=(m={"node_modules/timeago.js/dist/timeago.full.min.js":function(n,e){var s,t;f(),s=n,t=function(n){"use strict";var e=["second","minute","hour","day","week","month","year"];function s(n,s){if(0===s)return["just now","right now"];var t=e[Math.floor(s/2)];return 1<n&&(t+="s"),[n+" "+t+" ago","in "+n+" "+t]}var t=["秒","分钟","小时","天","周","个月","年"];function a(n,e){if(0===e)return["刚刚","片刻后"];var s=t[~~(e/2)];return[n+" "+s+"前",n+" "+s+"后"]}function r(n,e){u[n]=e}function i(n){return u[n]||u.en_US}var u={},o=[60,60,24,7,365/7/12,12];function d(n){return n instanceof Date?n:!isNaN(n)||/^\d+$/.test(n)?new Date(parseInt(n)):(n=(n||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(n))}function m(n,e){for(var s=n<0?1:0,t=n=Math.abs(n),a=0;n>=o[a]&&a<o.length;a++)n/=o[a];return(0==(a*=2)?9:1)<(n=Math.floor(n))&&(a+=1),e(n,a,t)[s].replace("%s",n.toString())}function c(n,e){return((e?d(e):new Date)-d(n))/1e3}var l="timeago-id";function f(n){return parseInt(n.getAttribute(l))}var h={},p=function(n){clearTimeout(n),delete h[n]};function g(n,e,s,t){p(f(n));var a=t.relativeDate,r=t.minInterval,i=c(e,a);n.innerText=m(i,s);var u,d=setTimeout((function(){g(n,e,s,t)}),Math.min(1e3*Math.max(function(n){for(var e=1,s=0,t=Math.abs(n);n>=o[s]&&s<o.length;s++)n/=o[s],e*=o[s];return t=(t%=e)?e-t:e,Math.ceil(t)}(i),r||1),2147483647));h[d]=0,u=d,n.setAttribute(l,u)}r("en_US",s),r("zh_CN",a);var b=[["ثانية","ثانيتين","%s ثوان","%s ثانية"],["دقيقة","دقيقتين","%s دقائق","%s دقيقة"],["ساعة","ساعتين","%s ساعات","%s ساعة"],["يوم","يومين","%s أيام","%s يوماً"],["أسبوع","أسبوعين","%s أسابيع","%s أسبوعاً"],["شهر","شهرين","%s أشهر","%s شهراً"],["عام","عامين","%s أعوام","%s عاماً"]];function v(n,e,s,t,a){var r=a%10,i=t;return 1===a?i=n:1==r&&20<a?i=e:1<r&&r<5&&(20<a||a<10)&&(i=s),i}var y=v.bind(null,"секунду","%s секунду","%s секунды","%s секунд"),k=v.bind(null,"хвіліну","%s хвіліну","%s хвіліны","%s хвілін"),j=v.bind(null,"гадзіну","%s гадзіну","%s гадзіны","%s гадзін"),z=v.bind(null,"дзень","%s дзень","%s дні","%s дзён"),w=v.bind(null,"тыдзень","%s тыдзень","%s тыдні","%s тыдняў"),_=v.bind(null,"месяц","%s месяц","%s месяцы","%s месяцаў"),q=v.bind(null,"год","%s год","%s гады","%s гадоў");function O(n){var e=["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"];return n.toString().replace(/\d/g,(function(n){return e[n]}))}var M=[["w tej chwili","za chwilę"],["%s sekund temu","za %s sekund"],["1 minutę temu","za 1 minutę"],["%s minut temu","za %s minut"],["1 godzinę temu","za 1 godzinę"],["%s godzin temu","za %s godzin"],["1 dzień temu","za 1 dzień"],["%s dni temu","za %s dni"],["1 tydzień temu","za 1 tydzień"],["%s tygodni temu","za %s tygodni"],["1 miesiąc temu","za 1 miesiąc"],["%s miesięcy temu","za %s miesięcy"],["1 rok temu","za 1 rok"],["%s lat temu","za %s lat"],["%s sekundy temu","za %s sekundy"],["%s minuty temu","za %s minuty"],["%s godziny temu","za %s godziny"],["%s dni temu","za %s dni"],["%s tygodnie temu","za %s tygodnie"],["%s miesiące temu","za %s miesiące"],["%s lata temu","za %s lata"]];function x(n,e,s,t,a){var r=a%10,i=t;return 1===a?i=n:1==r&&20<a?i=e:1<r&&r<5&&(20<a||a<10)&&(i=s),i}var S=x.bind(null,"секунду","%s секунду","%s секунды","%s секунд"),A=x.bind(null,"минуту","%s минуту","%s минуты","%s минут"),C=x.bind(null,"час","%s час","%s часа","%s часов"),P=x.bind(null,"день","%s день","%s дня","%s дней"),T=x.bind(null,"неделю","%s неделю","%s недели","%s недель"),N=x.bind(null,"месяц","%s месяц","%s месяца","%s месяцев"),E=x.bind(null,"год","%s год","%s года","%s лет");function D(n,e,s,t,a){var r=a%10,i=a%100;return 1==a?n:1==r&&11!=i?e:2<=r&&r<=4&&!(12<=i&&i<=14)?s:t}var I=D.bind(null,"1 секунд","%s секунд","%s секунде","%s секунди"),R=D.bind(null,"1 минут","%s минут","%s минуте","%s минута"),W=D.bind(null,"сат времена","%s сат","%s сата","%s сати"),G=D.bind(null,"1 дан","%s дан","%s дана","%s дана"),L=D.bind(null,"недељу дана","%s недељу","%s недеље","%s недеља"),U=D.bind(null,"месец дана","%s месец","%s месеца","%s месеци"),B=D.bind(null,"годину дана","%s годину","%s године","%s година");function $(n,e,s,t,a){var r=a%10,i=t;return 1===a?i=n:1==r&&20<a?i=e:1<r&&r<5&&(20<a||a<10)&&(i=s),i}var F=$.bind(null,"секунду","%s секунду","%s секунди","%s секунд"),J=$.bind(null,"хвилину","%s хвилину","%s хвилини","%s хвилин"),V=$.bind(null,"годину","%s годину","%s години","%s годин"),Z=$.bind(null,"день","%s день","%s дні","%s днів"),H=$.bind(null,"тиждень","%s тиждень","%s тиждні","%s тижднів"),K=$.bind(null,"місяць","%s місяць","%s місяці","%s місяців"),Q=$.bind(null,"рік","%s рік","%s роки","%s років"),X=Object.freeze({__proto__:null,ar:function(n,e){if(0===e)return["منذ لحظات","بعد لحظات"];var s,t,a=(s=Math.floor(e/2),(t=n)<3?b[s][t-1]:3<=t&&t<=10?b[s][2]:b[s][3]);return["منذ "+a,"بعد "+a]},be:function(n,e){switch(e){case 0:return["толькі што","праз некалькі секунд"];case 1:return[y(n)+" таму","праз "+y(n)];case 2:case 3:return[k(n)+" таму","праз "+k(n)];case 4:case 5:return[j(n)+" таму","праз "+j(n)];case 6:case 7:return[z(n)+" таму","праз "+z(n)];case 8:case 9:return[w(n)+" таму","праз "+w(n)];case 10:case 11:return[_(n)+" таму","праз "+_(n)];case 12:case 13:return[q(n)+" таму","праз "+q(n)];default:return["",""]}},bg:function(n,e){return[["току що","съвсем скоро"],["преди %s секунди","след %s секунди"],["преди 1 минута","след 1 минута"],["преди %s минути","след %s минути"],["преди 1 час","след 1 час"],["преди %s часа","след %s часа"],["преди 1 ден","след 1 ден"],["преди %s дни","след %s дни"],["преди 1 седмица","след 1 седмица"],["преди %s седмици","след %s седмици"],["преди 1 месец","след 1 месец"],["преди %s месеца","след %s месеца"],["преди 1 година","след 1 година"],["преди %s години","след %s години"]][e]},bn_IN:function(n,e){return[["এইমাত্র","একটা সময়"],["%s সেকেন্ড আগে","%s এর সেকেন্ডের মধ্যে"],["1 মিনিট আগে","1 মিনিটে"],["%s এর মিনিট আগে","%s এর মিনিটের মধ্যে"],["1 ঘন্টা আগে","1 ঘন্টা"],["%s ঘণ্টা আগে","%s এর ঘন্টার মধ্যে"],["1 দিন আগে","1 দিনের মধ্যে"],["%s এর দিন আগে","%s এর দিন"],["1 সপ্তাহ আগে","1 সপ্তাহের মধ্যে"],["%s এর সপ্তাহ আগে","%s সপ্তাহের মধ্যে"],["1 মাস আগে","1 মাসে"],["%s মাস আগে","%s মাসে"],["1 বছর আগে","1 বছরের মধ্যে"],["%s বছর আগে","%s বছরে"]][e]},ca:function(n,e){return[["fa un moment","d'aquí un moment"],["fa %s segons","d'aquí %s segons"],["fa 1 minut","d'aquí 1 minut"],["fa %s minuts","d'aquí %s minuts"],["fa 1 hora","d'aquí 1 hora"],["fa %s hores","d'aquí %s hores"],["fa 1 dia","d'aquí 1 dia"],["fa %s dies","d'aquí %s dies"],["fa 1 setmana","d'aquí 1 setmana"],["fa %s setmanes","d'aquí %s setmanes"],["fa 1 mes","d'aquí 1 mes"],["fa %s mesos","d'aquí %s mesos"],["fa 1 any","d'aquí 1 any"],["fa %s anys","d'aquí %s anys"]][e]},de:function(n,e){return[["gerade eben","vor einer Weile"],["vor %s Sekunden","in %s Sekunden"],["vor 1 Minute","in 1 Minute"],["vor %s Minuten","in %s Minuten"],["vor 1 Stunde","in 1 Stunde"],["vor %s Stunden","in %s Stunden"],["vor 1 Tag","in 1 Tag"],["vor %s Tagen","in %s Tagen"],["vor 1 Woche","in 1 Woche"],["vor %s Wochen","in %s Wochen"],["vor 1 Monat","in 1 Monat"],["vor %s Monaten","in %s Monaten"],["vor 1 Jahr","in 1 Jahr"],["vor %s Jahren","in %s Jahren"]][e]},el:function(n,e){return[["μόλις τώρα","σε λίγο"],["%s δευτερόλεπτα πριν","σε %s δευτερόλεπτα"],["1 λεπτό πριν","σε 1 λεπτό"],["%s λεπτά πριν","σε %s λεπτά"],["1 ώρα πριν","σε 1 ώρα"],["%s ώρες πριν","σε %s ώρες"],["1 μέρα πριν","σε 1 μέρα"],["%s μέρες πριν","σε %s μέρες"],["1 εβδομάδα πριν","σε 1 εβδομάδα"],["%s εβδομάδες πριν","σε %s εβδομάδες"],["1 μήνα πριν","σε 1 μήνα"],["%s μήνες πριν","σε %s μήνες"],["1 χρόνο πριν","σε 1 χρόνο"],["%s χρόνια πριν","σε %s χρόνια"]][e]},en_short:function(n,e){return[["just now","right now"],["%ss ago","in %ss"],["1m ago","in 1m"],["%sm ago","in %sm"],["1h ago","in 1h"],["%sh ago","in %sh"],["1d ago","in 1d"],["%sd ago","in %sd"],["1w ago","in 1w"],["%sw ago","in %sw"],["1mo ago","in 1mo"],["%smo ago","in %smo"],["1yr ago","in 1yr"],["%syr ago","in %syr"]][e]},en_US:s,es:function(n,e){return[["justo ahora","en un rato"],["hace %s segundos","en %s segundos"],["hace 1 minuto","en 1 minuto"],["hace %s minutos","en %s minutos"],["hace 1 hora","en 1 hora"],["hace %s horas","en %s horas"],["hace 1 día","en 1 día"],["hace %s días","en %s días"],["hace 1 semana","en 1 semana"],["hace %s semanas","en %s semanas"],["hace 1 mes","en 1 mes"],["hace %s meses","en %s meses"],["hace 1 año","en 1 año"],["hace %s años","en %s años"]][e]},eu:function(n,e){return[["orain","denbora bat barru"],["duela %s segundu","%s segundu barru"],["duela minutu 1","minutu 1 barru"],["duela %s minutu","%s minutu barru"],["duela ordu 1","ordu 1 barru"],["duela %s ordu","%s ordu barru"],["duela egun 1","egun 1 barru"],["duela %s egun","%s egun barru"],["duela aste 1","aste 1 barru"],["duela %s aste","%s aste barru"],["duela hillabete 1","hillabete 1 barru"],["duela %s hillabete","%s hillabete barru"],["duela urte 1","urte 1 barru"],["duela %s urte","%s urte barru"]][e]},fa:function(n,e){var s=[["لحظاتی پیش","همین حالا"],["%s ثانیه پیش","%s ثانیه دیگر"],["۱ دقیقه پیش","۱ دقیقه دیگر"],["%s دقیقه پیش","%s دقیقه دیگر"],["۱ ساعت پیش","۱ ساعت دیگر"],["%s ساعت پیش","%s ساعت دیگر"],["۱ روز پیش","۱ روز دیگر"],["%s روز پیش","%s روز دیگر"],["۱ هفته پیش","۱ هفته دیگر"],["%s هفته پیش","%s هفته دیگر"],["۱ ماه پیش","۱ ماه دیگر"],["%s ماه پیش","%s ماه دیگر"],["۱ سال پیش","۱ سال دیگر"],["%s سال پیش","%s سال دیگر"]][e];return[s[0].replace("%s",O(n)),s[1].replace("%s",O(n))]},fi:function(n,e){return[["juuri äsken","juuri nyt"],["%s sekuntia sitten","%s sekunnin päästä"],["minuutti sitten","minuutin päästä"],["%s minuuttia sitten","%s minuutin päästä"],["tunti sitten","tunnin päästä"],["%s tuntia sitten","%s tunnin päästä"],["päivä sitten","päivän päästä"],["%s päivää sitten","%s päivän päästä"],["viikko sitten","viikon päästä"],["%s viikkoa sitten","%s viikon päästä"],["kuukausi sitten","kuukauden päästä"],["%s kuukautta sitten","%s kuukauden päästä"],["vuosi sitten","vuoden päästä"],["%s vuotta sitten","%s vuoden päästä"]][e]},fr:function(n,e){return[["à l'instant","dans un instant"],["il y a %s secondes","dans %s secondes"],["il y a 1 minute","dans 1 minute"],["il y a %s minutes","dans %s minutes"],["il y a 1 heure","dans 1 heure"],["il y a %s heures","dans %s heures"],["il y a 1 jour","dans 1 jour"],["il y a %s jours","dans %s jours"],["il y a 1 semaine","dans 1 semaine"],["il y a %s semaines","dans %s semaines"],["il y a 1 mois","dans 1 mois"],["il y a %s mois","dans %s mois"],["il y a 1 an","dans 1 an"],["il y a %s ans","dans %s ans"]][e]},gl:function(n,e){return[["xusto agora","daquí a un pouco"],["hai %s segundos","en %s segundos"],["hai 1 minuto","nun minuto"],["hai %s minutos","en %s minutos"],["hai 1 hora","nunha hora"],["hai %s horas","en %s horas"],["hai 1 día","nun día"],["hai %s días","en %s días"],["hai 1 semana","nunha semana"],["hai %s semanas","en %s semanas"],["hai 1 mes","nun mes"],["hai %s meses","en %s meses"],["hai 1 ano","nun ano"],["hai %s anos","en %s anos"]][e]},he:function(n,e){return[["זה עתה","עכשיו"],["לפני %s שניות","בעוד %s שניות"],["לפני דקה","בעוד דקה"],["לפני %s דקות","בעוד %s דקות"],["לפני שעה","בעוד שעה"],2===n?["לפני שעתיים","בעוד שעתיים"]:["לפני %s שעות","בעוד %s שעות"],["אתמול","מחר"],2===n?["לפני יומיים","בעוד יומיים"]:["לפני %s ימים","בעוד %s ימים"],["לפני שבוע","בעוד שבוע"],2===n?["לפני שבועיים","בעוד שבועיים"]:["לפני %s שבועות","בעוד %s שבועות"],["לפני חודש","בעוד חודש"],2===n?["לפני חודשיים","בעוד חודשיים"]:["לפני %s חודשים","בעוד %s חודשים"],["לפני שנה","בעוד שנה"],2===n?["לפני שנתיים","בעוד שנתיים"]:["לפני %s שנים","בעוד %s שנים"]][e]},hi_IN:function(n,e){return[["अभी","कुछ समय"],["%s सेकंड पहले","%s सेकंड में"],["1 मिनट पहले","1 मिनट में"],["%s मिनट पहले","%s मिनट में"],["1 घंटे पहले","1 घंटे में"],["%s घंटे पहले","%s घंटे में"],["1 दिन पहले","1 दिन में"],["%s दिन पहले","%s दिनों में"],["1 सप्ताह पहले","1 सप्ताह में"],["%s हफ्ते पहले","%s हफ्तों में"],["1 महीने पहले","1 महीने में"],["%s महीने पहले","%s महीनों में"],["1 साल पहले","1 साल में"],["%s साल पहले","%s साल में"]][e]},hu:function(n,e){return[["éppen most","éppen most"],["%s másodperce","%s másodpercen belül"],["1 perce","1 percen belül"],["%s perce","%s percen belül"],["1 órája","1 órán belül"],["%s órája","%s órán belül"],["1 napja","1 napon belül"],["%s napja","%s napon belül"],["1 hete","1 héten belül"],["%s hete","%s héten belül"],["1 hónapja","1 hónapon belül"],["%s hónapja","%s hónapon belül"],["1 éve","1 éven belül"],["%s éve","%s éven belül"]][e]},id_ID:function(n,e){return[["baru saja","sebentar"],["%s detik yang lalu","dalam %s detik"],["1 menit yang lalu","dalam 1 menit"],["%s menit yang lalu","dalam %s menit"],["1 jam yang lalu","dalam 1 jam"],["%s jam yang lalu","dalam %s jam"],["1 hari yang lalu","dalam 1 hari"],["%s hari yang lalu","dalam %s hari"],["1 minggu yang lalu","dalam 1 minggu"],["%s minggu yang lalu","dalam %s minggu"],["1 bulan yang lalu","dalam 1 bulan"],["%s bulan yang lalu","dalam %s bulan"],["1 tahun yang lalu","dalam 1 tahun"],["%s tahun yang lalu","dalam %s tahun"]][e]},it:function(n,e){return[["poco fa","fra poco"],["%s secondi fa","fra %s secondi"],["un minuto fa","fra un minuto"],["%s minuti fa","fra %s minuti"],["un'ora fa","fra un'ora"],["%s ore fa","fra %s ore"],["un giorno fa","fra un giorno"],["%s giorni fa","fra %s giorni"],["una settimana fa","fra una settimana"],["%s settimane fa","fra %s settimane"],["un mese fa","fra un mese"],["%s mesi fa","fra %s mesi"],["un anno fa","fra un anno"],["%s anni fa","fra %s anni"]][e]},ja:function(n,e){return[["すこし前","すぐに"],["%s秒前","%s秒以内"],["1分前","1分以内"],["%s分前","%s分以内"],["1時間前","1時間以内"],["%s時間前","%s時間以内"],["1日前","1日以内"],["%s日前","%s日以内"],["1週間前","1週間以内"],["%s週間前","%s週間以内"],["1ヶ月前","1ヶ月以内"],["%sヶ月前","%sヶ月以内"],["1年前","1年以内"],["%s年前","%s年以内"]][e]},ko:function(n,e){return[["방금","곧"],["%s초 전","%s초 후"],["1분 전","1분 후"],["%s분 전","%s분 후"],["1시간 전","1시간 후"],["%s시간 전","%s시간 후"],["1일 전","1일 후"],["%s일 전","%s일 후"],["1주일 전","1주일 후"],["%s주일 전","%s주일 후"],["1개월 전","1개월 후"],["%s개월 전","%s개월 후"],["1년 전","1년 후"],["%s년 전","%s년 후"]][e]},ml:function(n,e){return[["ഇപ്പോള്‍","കുറച്ചു മുന്‍പ്"],["%s സെക്കന്റ്‌കള്‍ക്ക് മുന്‍പ്","%s സെക്കന്റില്‍"],["1 മിനിറ്റിനു മുന്‍പ്","1 മിനിറ്റില്‍"],["%s മിനിറ്റുകള്‍ക്ക് മുന്‍പ","%s മിനിറ്റില്‍"],["1 മണിക്കൂറിനു മുന്‍പ്","1 മണിക്കൂറില്‍"],["%s മണിക്കൂറുകള്‍ക്കു മുന്‍പ്","%s മണിക്കൂറില്‍"],["1 ഒരു ദിവസം മുന്‍പ്","1 ദിവസത്തില്‍"],["%s ദിവസങ്ങള്‍ക് മുന്‍പ്","%s ദിവസങ്ങള്‍ക്കുള്ളില്‍"],["1 ആഴ്ച മുന്‍പ്","1 ആഴ്ചയില്‍"],["%s ആഴ്ചകള്‍ക്ക് മുന്‍പ്","%s ആഴ്ചകള്‍ക്കുള്ളില്‍"],["1 മാസത്തിനു മുന്‍പ്","1 മാസത്തിനുള്ളില്‍"],["%s മാസങ്ങള്‍ക്ക് മുന്‍പ്","%s മാസങ്ങള്‍ക്കുള്ളില്‍"],["1 വര്‍ഷത്തിനു  മുന്‍പ്","1 വര്‍ഷത്തിനുള്ളില്‍"],["%s വര്‍ഷങ്ങള്‍ക്കു മുന്‍പ്","%s വര്‍ഷങ്ങള്‍ക്കുല്ല്ളില്‍"]][e]},my:function(n,e){return[["ယခုအတွင်း","ယခု"],["%s စက္ကန့် အကြာက","%s စက္ကန့်အတွင်း"],["1 မိနစ် အကြာက","1 မိနစ်အတွင်း"],["%s မိနစ် အကြာက","%s မိနစ်အတွင်း"],["1 နာရီ အကြာက","1 နာရီအတွင်း"],["%s နာရီ အကြာက","%s နာရီအတွင်း"],["1 ရက် အကြာက","1 ရက်အတွင်း"],["%s ရက် အကြာက","%s ရက်အတွင်း"],["1 ပတ် အကြာက","1 ပတ်အတွင်း"],["%s ပတ် အကြာက","%s ပတ်အတွင်း"],["1 လ အကြာက","1 လအတွင်း"],["%s လ အကြာက","%s လအတွင်း"],["1 နှစ် အကြာက","1 နှစ်အတွင်း"],["%s နှစ် အကြာက","%s နှစ်အတွင်း"]][e]},nb_NO:function(n,e){return[["akkurat nå","om litt"],["%s sekunder siden","om %s sekunder"],["1 minutt siden","om 1 minutt"],["%s minutter siden","om %s minutter"],["1 time siden","om 1 time"],["%s timer siden","om %s timer"],["1 dag siden","om 1 dag"],["%s dager siden","om %s dager"],["1 uke siden","om 1 uke"],["%s uker siden","om %s uker"],["1 måned siden","om 1 måned"],["%s måneder siden","om %s måneder"],["1 år siden","om 1 år"],["%s år siden","om %s år"]][e]},nl:function(n,e){return[["recent","binnenkort"],["%s seconden geleden","binnen %s seconden"],["1 minuut geleden","binnen 1 minuut"],["%s minuten geleden","binnen %s minuten"],["1 uur geleden","binnen 1 uur"],["%s uur geleden","binnen %s uur"],["1 dag geleden","binnen 1 dag"],["%s dagen geleden","binnen %s dagen"],["1 week geleden","binnen 1 week"],["%s weken geleden","binnen %s weken"],["1 maand geleden","binnen 1 maand"],["%s maanden geleden","binnen %s maanden"],["1 jaar geleden","binnen 1 jaar"],["%s jaar geleden","binnen %s jaar"]][e]},nn_NO:function(n,e){return[["nett no","om litt"],["%s sekund sidan","om %s sekund"],["1 minutt sidan","om 1 minutt"],["%s minutt sidan","om %s minutt"],["1 time sidan","om 1 time"],["%s timar sidan","om %s timar"],["1 dag sidan","om 1 dag"],["%s dagar sidan","om %s dagar"],["1 veke sidan","om 1 veke"],["%s veker sidan","om %s veker"],["1 månad sidan","om 1 månad"],["%s månadar sidan","om %s månadar"],["1 år sidan","om 1 år"],["%s år sidan","om %s år"]][e]},pl:function(n,e){return M[1&e?4<n%10||n%10<2||1==~~(n/10)%10?e:++e/2+13:e]},pt_BR:function(n,e){return[["agora mesmo","agora"],["há %s segundos","em %s segundos"],["há um minuto","em um minuto"],["há %s minutos","em %s minutos"],["há uma hora","em uma hora"],["há %s horas","em %s horas"],["há um dia","em um dia"],["há %s dias","em %s dias"],["há uma semana","em uma semana"],["há %s semanas","em %s semanas"],["há um mês","em um mês"],["há %s meses","em %s meses"],["há um ano","em um ano"],["há %s anos","em %s anos"]][e]},ro:function(n,e){var s=[["chiar acum","chiar acum"],["acum %s secunde","peste %s secunde"],["acum un minut","peste un minut"],["acum %s minute","peste %s minute"],["acum o oră","peste o oră"],["acum %s ore","peste %s ore"],["acum o zi","peste o zi"],["acum %s zile","peste %s zile"],["acum o săptămână","peste o săptămână"],["acum %s săptămâni","peste %s săptămâni"],["acum o lună","peste o lună"],["acum %s luni","peste %s luni"],["acum un an","peste un an"],["acum %s ani","peste %s ani"]];return n<20?s[e]:[s[e][0].replace("%s","%s de"),s[e][1].replace("%s","%s de")]},ru:function(n,e){switch(e){case 0:return["только что","через несколько секунд"];case 1:return[S(n)+" назад","через "+S(n)];case 2:case 3:return[A(n)+" назад","через "+A(n)];case 4:case 5:return[C(n)+" назад","через "+C(n)];case 6:return["вчера","завтра"];case 7:return[P(n)+" назад","через "+P(n)];case 8:case 9:return[T(n)+" назад","через "+T(n)];case 10:case 11:return[N(n)+" назад","через "+N(n)];case 12:case 13:return[E(n)+" назад","через "+E(n)];default:return["",""]}},sq:function(n,e){return[["pak më parë","pas pak"],["para %s sekondash","pas %s sekondash"],["para një minute","pas një minute"],["para %s minutash","pas %s minutash"],["para një ore","pas një ore"],["para %s orësh","pas %s orësh"],["dje","nesër"],["para %s ditësh","pas %s ditësh"],["para një jave","pas një jave"],["para %s javësh","pas %s javësh"],["para një muaji","pas një muaji"],["para %s muajsh","pas %s muajsh"],["para një viti","pas një viti"],["para %s vjetësh","pas %s vjetësh"]][e]},sr:function(n,e){switch(e){case 0:return["малопре","управо сад"];case 1:return["пре "+I(n),"за "+I(n)];case 2:case 3:return["пре "+R(n),"за "+R(n)];case 4:case 5:return["пре "+W(n),"за "+W(n)];case 6:case 7:return["пре "+G(n),"за "+G(n)];case 8:case 9:return["пре "+L(n),"за "+L(n)];case 10:case 11:return["пре "+U(n),"за "+U(n)];case 12:case 13:return["пре "+B(n),"за "+B(n)];default:return["",""]}},sv:function(n,e){return[["just nu","om en stund"],["%s sekunder sedan","om %s sekunder"],["1 minut sedan","om 1 minut"],["%s minuter sedan","om %s minuter"],["1 timme sedan","om 1 timme"],["%s timmar sedan","om %s timmar"],["1 dag sedan","om 1 dag"],["%s dagar sedan","om %s dagar"],["1 vecka sedan","om 1 vecka"],["%s veckor sedan","om %s veckor"],["1 månad sedan","om 1 månad"],["%s månader sedan","om %s månader"],["1 år sedan","om 1 år"],["%s år sedan","om %s år"]][e]},ta:function(n,e){return[["இப்போது","சற்று நேரம் முன்பு"],["%s நொடிக்கு முன்","%s நொடிகளில்"],["1 நிமிடத்திற்க்கு முன்","1 நிமிடத்தில்"],["%s நிமிடத்திற்க்கு முன்","%s நிமிடங்களில்"],["1 மணி நேரத்திற்கு முன்","1 மணி நேரத்திற்குள்"],["%s மணி நேரத்திற்கு முன்","%s மணி நேரத்திற்குள்"],["1 நாளுக்கு முன்","1 நாளில்"],["%s நாட்களுக்கு முன்","%s நாட்களில்"],["1 வாரத்திற்கு முன்","1 வாரத்தில்"],["%s வாரங்களுக்கு முன்","%s வாரங்களில்"],["1 மாதத்திற்கு முன்","1 மாதத்தில்"],["%s மாதங்களுக்கு முன்","%s மாதங்களில்"],["1 வருடத்திற்கு முன்","1 வருடத்தில்"],["%s வருடங்களுக்கு முன்","%s வருடங்களில்"]][e]},th:function(n,e){return[["เมื่อสักครู่นี้","อีกสักครู่"],["%s วินาทีที่แล้ว","ใน %s วินาที"],["1 นาทีที่แล้ว","ใน 1 นาที"],["%s นาทีที่แล้ว","ใน %s นาที"],["1 ชั่วโมงที่แล้ว","ใน 1 ชั่วโมง"],["%s ชั่วโมงที่แล้ว","ใน %s ชั่วโมง"],["1 วันที่แล้ว","ใน 1 วัน"],["%s วันที่แล้ว","ใน %s วัน"],["1 อาทิตย์ที่แล้ว","ใน 1 อาทิตย์"],["%s อาทิตย์ที่แล้ว","ใน %s อาทิตย์"],["1 เดือนที่แล้ว","ใน 1 เดือน"],["%s เดือนที่แล้ว","ใน %s เดือน"],["1 ปีที่แล้ว","ใน 1 ปี"],["%s ปีที่แล้ว","ใน %s ปี"]][e]},tr:function(n,e){return[["az önce","şimdi"],["%s saniye önce","%s saniye içinde"],["1 dakika önce","1 dakika içinde"],["%s dakika önce","%s dakika içinde"],["1 saat önce","1 saat içinde"],["%s saat önce","%s saat içinde"],["1 gün önce","1 gün içinde"],["%s gün önce","%s gün içinde"],["1 hafta önce","1 hafta içinde"],["%s hafta önce","%s hafta içinde"],["1 ay önce","1 ay içinde"],["%s ay önce","%s ay içinde"],["1 yıl önce","1 yıl içinde"],["%s yıl önce","%s yıl içinde"]][e]},uk:function(n,e){switch(e){case 0:return["щойно","через декілька секунд"];case 1:return[F(n)+" тому","через "+F(n)];case 2:case 3:return[J(n)+" тому","через "+J(n)];case 4:case 5:return[V(n)+" тому","через "+V(n)];case 6:case 7:return[Z(n)+" тому","через "+Z(n)];case 8:case 9:return[H(n)+" тому","через "+H(n)];case 10:case 11:return[K(n)+" тому","через "+K(n)];case 12:case 13:return[Q(n)+" тому","через "+Q(n)];default:return["",""]}},vi:function(n,e){return[["vừa xong","một lúc"],["%s giây trước","trong %s giây"],["1 phút trước","trong 1 phút"],["%s phút trước","trong %s phút"],["1 giờ trước","trong 1 giờ"],["%s giờ trước","trong %s giờ"],["1 ngày trước","trong 1 ngày"],["%s ngày trước","trong %s ngày"],["1 tuần trước","trong 1 tuần"],["%s tuần trước","trong %s tuần"],["1 tháng trước","trong 1 tháng"],["%s tháng trước","trong %s tháng"],["1 năm trước","trong 1 năm"],["%s năm trước","trong %s năm"]][e]},zh_CN:a,zh_TW:function(n,e){return[["剛剛","片刻後"],["%s 秒前","%s 秒後"],["1 分鐘前","1 分鐘後"],["%s 分鐘前","%s 分鐘後"],["1 小時前","1 小時後"],["%s 小時前","%s 小時後"],["1 天前","1 天後"],["%s 天前","%s 天後"],["1 週前","1 週後"],["%s 週前","%s 週後"],["1 個月前","1 個月後"],["%s 個月前","%s 個月後"],["1 年前","1 年後"],["%s 年前","%s 年後"]][e]}});Object.keys(X).forEach((function(n){r(n,X[n])})),n.cancel=function(n){n?p(f(n)):Object.keys(h).forEach(p)},n.format=function(n,e,s){return m(c(n,s&&s.relativeDate),i(e))},n.register=r,n.render=function(n,e,s){var t=n.length?n:[n];return t.forEach((function(n){g(n,n.getAttribute("datetime"),i(e),s||{})})),t},Object.defineProperty(n,"__esModule",{value:!0})},"object"==(void 0===n?"undefined":u(n))&&void 0!==e?t(n):"function"==typeof define&&define.amd?define(["exports"],t):t((s=s||self).timeago={})}},function(){return c||(0,m[a(m)[0]])((c={exports:{}}).exports,c),c.exports});function p(n,e){return(p=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function g(n){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}f(),Array.isArray,f();var b=Object.prototype,v=(b.hasOwnProperty,b.toString,"fixed");function y(n){return(n.ownerDocument||n).defaultView}f();var k=new WeakMap,j=new WeakMap;function z(n){for(var e=new Set,s=n.length-1;s>=0;s--){var t=n[s],a=t.target;if(!e.has(a)){e.add(a);var r=j.get(a);if(r)for(var i=0;i<r.length;i++)(0,r[i])(t)}}}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var w=self.__AMP_LOG;function _(n){return function(n,e){throw new Error("failed to call initLogConstructor")}()}var q=function(n,u,o){return o=null!=n?e(r(n)):{},function(n,e,r,u){if(e&&"object"==typeof e||"function"==typeof e)for(var o,d=a(e),m=0,c=d.length;m<c;m++)o=d[m],i.call(n,o)||void 0===o||s(n,o,{get:function(n){return e[n]}.bind(null,o),enumerable:!(u=t(e,o))||u.enumerable});return n}(n&&n.__esModule?o:s(o,"default",{value:n,enumerable:!0}),n)}(h()),O=q.default||q,M=O.format,x=O.register;x("cs",(function(n,e){var s=0;return(1==e||3==e||5==e||7==e||9==e||11==e||13==e)&&n>=5&&(s=1),[[["právě teď","právě teď"]],[["před %s vteřinami","za %s vteřiny"],["před %s vteřinami","za %s vteřin"]],[["před minutou","za minutu"]],[["před %s minutami","za %s minuty"],["před %s minutami","za %s minut"]],[["před hodinou","za hodinu"]],[["před %s hodinami","za %s hodiny"],["před %s hodinami","za %s hodin"]],[["včera","zítra"]],[["před %s dny","za %s dny"],["před %s dny","za %s dnů"]],[["minulý týden","příští týden"]],[["před %s týdny","za %s týdny"],["před %s týdny","za %s týdnů"]],[["minulý měsíc","přístí měsíc"]],[["před %s měsíci","za %s měsíce"],["před %s měsíci","za %s měsíců"]],[["před rokem","přístí rok"]],[["před %s lety","za %s roky"],["před %s lety","za %s let"]]][e][s]})),x("da",(function(n,e){return[["for et øjeblik siden","om et øjeblik"],["for %s sekunder siden","om %s sekunder"],["for 1 minut siden","om 1 minut"],["for %s minutter siden","om %s minutter"],["for 1 time siden","om 1 time"],["for %s timer siden","om %s timer"],["for 1 dag siden","om 1 dag"],["for %s dage siden","om %s dage"],["for 1 uge siden","om 1 uge"],["for %s uger siden","om %s uger"],["for 1 måned siden","om 1 måned"],["for %s måneder siden","om %s måneder"],["for 1 år siden","om 1 år"],["for %s år siden","om %s år"]][e]})),x("ka",(function(n,e){return[["ამ წამს","ახლა"],["%s წამის წინ","%s წამში"],["1 წუთის წინ","1 წუთში"],["%s წუთის წინ","%s წუთში"],["1 საათის წინ","1 საათში"],["%s საათის წინ","%s საათში"],["1 დღის წინ","1 დღეში"],["%s დღის წინ","%s დღეში"],["1 კვირის წინ","1 კვირაში"],["%s კვირის წინ","%s კვირაში"],["1 თვის წინ","1 თვეში"],["%s თვის წინ","%s თვეში"],["1 წლის წინ","1 წელიწადში"],["%s წლის წინ","%s წელიწადში"]][e]})),x("oc",(function(n,e){return[["fa un moment","d'aquí un moment"],["fa %s segondas","d'aquí %s segondas"],["fa 1 minuta","d'aquí 1 minuta"],["fa %s minutas","d'aquí %s minutas"],["fa 1 ora","d'aquí 1 ora"],["fa %s oras","d'aquí %s oras"],["fa 1 jorn","d'aquí 1 jorn"],["fa %s jorns","d'aquí %s jorns"],["fa 1 setmana","d'aquí 1 setmana"],["fa %s setmanas","d'aquí %s setmanas"],["fa 1 mes","d'aquí 1 mes"],["fa %s meses","d'aquí %s meses"],["fa 1 an","d'aquí 1 an"],["fa %s ans","d'aquí %s ans"]][e]}));var S={en:"en_US",enshort:"en_short","en-short":"en_short",inbg:"bn_IN",inid:"id_ID",inhi:"hi_IN"},A=function(n){!function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&p(n,e)}(a,n);var e,s,t=(e=a,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}(),function(){var n,t=g(e);if(s){var a=g(this).constructor;n=Reflect.construct(t,arguments,a)}else n=t.apply(this,arguments);return function(n,e){if(e&&("object"===u(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n)}(this,n)});function a(n){var e;return(e=t.call(this,n)).ew="",e.aw="",e.zq="",e._q=null,e.Tq=!1,e.GO=null,e}var r=a.prototype;return r.buildCallback=function(){var n,e,s;e=this.element.textContent.length>0,s=this.element,(w.user||(w.user=_()),void w.user.win?w.userForEmbed||(w.userForEmbed=_()):w.user).assert(e,"Content cannot be empty. Found in: %s",s,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0),this.ew=this.element.getAttribute("datetime"),this.aw=(n=(n=this.element.getAttribute("locale")||this.win.document.documentElement.lang).toLowerCase(),S[n]?S[n]:4===n.length||5===n.length?"".concat(n.slice(0,2),"_").concat(n.slice(-2).toUpperCase()):n),this.zq=this.element.textContent.trim(),this.element.textContent="",this.element.hasAttribute("role")||this.element.setAttribute("role","text"),this._q=document.createElement("time"),this._q.setAttribute("datetime",this.ew),this.Nq(),this.element.appendChild(this._q)},r.zO=function(n){n&&!this.Tq&&this.Nq()},r.layoutCallback=function(){var n=this;return this.GO=function(n,e,s){var t=y(n),a=k.get(t);a||k.set(t,a=function(n,e){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},t=s.needsRootBounds,a=s.rootMargin,r=s.threshold,i=function(n){return n.parent&&n.parent!=n}(e)&&(t||a)?e.document:void 0;return new e.IntersectionObserver(n,{threshold:r,root:i,rootMargin:a})}(z,t));var r=j.get(n);return r||(r=[],j.set(n,r)),r.push(e),a.observe(n),function(){!function(n,e){var s,t,a,r=j.get(n);if(r&&(t=e,-1!=(a=(s=r).indexOf(t))&&(s.splice(a,1),1)&&!r.length)){var i=y(n),u=k.get(i);null==u||u.unobserve(n),j.delete(n)}}(n,e)}}(this.element,(function(e){var s=e.isIntersecting;return n.zO(s)})),l||(l=Promise.resolve(void 0))},r.unlayoutCallback=function(){var n;return null===(n=this.GO)||void 0===n||n.call(this),this.GO=null,!1},r.mutatedAttributesCallback=function(n){var e=n.datetime;void 0!==e&&(this.ew=e,this.Nq())},r.isLayoutSupported=function(n){return function(n){return n==v||"fixed-height"==n||"responsive"==n||"fill"==n||"flex-item"==n||"fluid"==n||"intrinsic"==n}(n)},r.Nq=function(){if(this.element.hasAttribute("cutoff")){var n=parseInt(this.element.getAttribute("cutoff"),10),e=new Date(this.ew);Math.floor((Date.now()-e.getTime())/1e3)>n?(this._q.textContent=this.zq,this.Tq=!0):this._q.textContent=M(this.ew,this.aw)}else this._q.textContent=M(this.ew,this.aw)},a}(n.BaseElement);n.registerElement("amp-timeago",A)}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});