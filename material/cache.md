Brauzer cache-i — saytların daha sürətli açılması üçün brauzerin müəyyən məlumatları cihazda müvəqqəti saxlamasıdır. Məsələn şəkillər, CSS faylları, JavaScript faylları, fontlar və bəzi API cavabları cache-də saxlanılır.

## Necə işləyir?

Təsəvvür et ki, sən bir sayta ilk dəfə girirsən:

1. Brauzer serverə sorğu göndərir.
2. Server HTML, CSS, JS, şəkillər və digər faylları qaytarır.
3. Brauzer bu faylların bir qismini cache-də saxlayır.

Sonra həmin sayta yenidən daxil olanda:

* Brauzer əvvəlcə cache-ə baxır.
* Əgər fayl dəyişməyibsə, internetdən yenidən yükləmir.
* Faylı birbaşa cihazdan oxuyur.

Bu:

* saytı daha sürətli açır,
* internet trafikinə qənaət edir,
* server yükünü azaldır.

## Cache növləri

### Memory Cache

RAM-də saxlanılır.

* Çox sürətlidir.
* Tab bağlananda silinə bilər.

### Disk Cache

SSD/HDD-də saxlanılır.

* Brauzer bağlansa belə qala bilər.
* Uzunmüddətli saxlanma üçündür.

## Server brauzerə necə deyir ki, cache istifadə etsin?

HTTP header-lərlə.

Məsələn:

```http
Cache-Control: max-age=3600
```

Bu o deməkdir ki:

* fayl 1 saat cache-də etibarlıdır.

Başqa nümunə:

```http
ETag: "abc123"
```

Brauzer sonradan serverə soruşur:

* “Məndə `abc123` versiyası var, dəyişib?”

Əgər dəyişməyibsə server belə cavab verir:

```http
304 Not Modified
```

Və fayl yenidən göndərilmir.

## Frontend developer üçün niyə vacibdir?

React, Vue, Next.js kimi layihələrdə:

* build zamanı fayl adlarına hash əlavə edilir:

  * `app.a1b2c3.js`
* fayl dəyişəndə hash dəyişir,
* beləliklə köhnə cache problemi yaranmır.

## Cache problemi nədir?

Bəzən istifadəçi köhnə JS və ya CSS faylını görür:

* UI pozulur,
* yeni dəyişiklik görünmür.

Bu zaman:

* hard refresh edilir (`Ctrl + Shift + R`)
* və ya cache təmizlənir.

## Sadə analogiya

Cache kitabxanadakı tez-tez istifadə etdiyin kitabı evdə saxlamağa bənzəyir:

* hər dəfə kitabxanaya getmirsən,
* daha sürətli istifadə edirsən.
