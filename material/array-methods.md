# JavaScript Massivləri 

---

# 1. Massivlərə Giriş

## Massiv nədir?

Massiv — JavaScript-də məlumat strukturudur və bu struktur sıralı element kolleksiyasını saxlamağa imkan verir. Hər bir massiv elementinin indeksi — 0-dan başlayan sıra nömrəsi vardır.

- Massivlər istənilən növ məlumatları saxlaya bilər: rəqəmlər, sətrlər, obyektlər, digər massivlər və s.
- Massivlər bir deyil, bir neçə dəyər toplusu ilə işləyəndə istifadə olunur.

## Massivlər nə üçün lazımdır?

- Bir neçə əlaqəli məlumatı bir dəyişəndə saxlamaq üçün.
- Məlumat kolleksiyalarını rahat işləmək və idarə etmək üçün.
- Məlumatları tez şəkildə dövrə vurmaq və dəyişdirmək üçün.
- Çoxlu tapşırıqlarda istifadə olunur: istifadəçi siyahıları, sorğu nəticələri, məhsul kolleksiyaları və daha çox şey.

## Massivin digər məlumat növlərindən fərqləri

|Məlumat növü|Xüsusiyyətlər|Nümunə|
|---|---|---|
|Primitiv növlər|Bir dəyər saxlayır (rəqəm, sətir, boolean)|`let x = 5;`|
|Obyektlər|Açar-dəyər cütlərinin toplusunu saxlayır|`let obj = {name: 'Anna'}`|
|Massivlər|Sıralı element kolleksiyası olan xüsusi obyekt|`let arr = [1, 2, 3];`|

- Massiv obyektdir, lakin xüsusiyyətləri var:
    - Rəqəmlər üzrə indeksləşdirmə
    - `.length` xüsusiyyəti var
    - Elementlərlə işləmək üçün xüsusi metodlar təqdim edir

## Sadə massiv nümunəsi

```javascript
// Rəqəmlərlə massiv yaradırıq
let numbers = [10, 20, 30, 40, 50];

// İlk elementi çap edirik (indeks 0)
console.log(numbers[0]); // 10

// Massivin uzunluğunu çap edirik
console.log(numbers.length); // 5
```

---

# 2. Massivlərin yaradılması

## Massiv yaratmaq üsulları

### 1. Massiv literalı (tövsiyə olunan üsul)

Bu ən sadə və geniş yayılmış üsuldur — kvadrat mötərizələr `[]` vasitəsilə massiv yaratmaq.

```javascript
let fruits = ['alma', 'banan', 'kivi'];
```

### 2. `Array` konstruktoru

Konstruktor vasitəsilə massiv yaratmaq olar:

```javascript
let numbers = new Array(10, 20, 30);
```

Lakin xüsusiyyətlər var:

- Əgər bir rəqəmli arqument versək, o massivin uzunluğunu təyin edər, element deyil.

```javascript
let arr = new Array(5); // 5 uzunluqda boş massiv yaradır (boş elementlərlə)
console.log(arr.length); // 5
console.log(arr); // [ <5 empty items> ]
```

- Bir rəqəmi element kimi olan massiv yaratmaq üçün literal istifadə etmək və ya bir neçə arqument vermək lazımdır.

```javascript
let arr2 = [5]; // 5 elementi olan massiv
let arr3 = new Array(5, 10); // iki elementli massiv: 5 və 10
```

### 3. Array.from() metodu 

Mövcud iterasiya edilən obyektdən (string, NodeList və s.) massiv yaradır:

```javascript
let str = "salam";
let arr = Array.from(str);
console.log(arr); // ['s', 'a', 'l', 'a', 'm']
```

### 4. Array.of() metodu 

Arqumentlərdən massiv yaradır:

```javascript
let arr = Array.of(1, 2, 3, 4);
console.log(arr); // [1, 2, 3, 4]
```

## Xülasə

| Yaratma üsulu            | Nümunə                       | Xüsusiyyətlər                                      |
| ------------------------ | ---------------------------- | -------------------------------------------------- |
| Massiv literalı          | `let arr = [1, 2, 3];`       | Sürətli və aydın                                   |
| `new Array` konstruktoru | `let arr = new Array(1, 2);` | Bir rəqəmlə qarışdırıla bilər (uzunluq təyin edir) |
| `Array.from()`           | `Array.from('abc')`          | Mövcud obyektdən massiv yaradır                    |
| `Array.of()`             | `Array.of(1, 2, 3)`          | Arqumentlərdən massiv yaradır                      |

---

# 3. Massiv elementlərinə müraciət və dəyişdirmə

## İndekslə elementlərə müraciət

Massiv elementlərinə kvadrat mötərizələr `[]` və indeks nömrəsi ilə müraciət etmək olar:

```javascript
let colors = ['qırmızı', 'yaşıl', 'mavi'];

console.log(colors[0]); // 'qırmızı'
console.log(colors[1]); // 'yaşıl'
console.log(colors[2]); // 'mavi'
```

## Elementlərin dəyişdirilməsi

```javascript
let colors = ['qırmızı', 'yaşıl', 'mavi'];

colors[1] = 'sarı'; // ikinci elementi dəyişdiririk
console.log(colors); // ['qırmızı', 'sarı', 'mavi']
```

## Massivin uzunluğu

`.length` xüsusiyyəti ilə massivin elementlərinin sayını öyrənmək olar:

```javascript
let arr = [1, 2, 3, 4, 5];
console.log(arr.length); // 5
```

### length xüsusiyyətinin dəyişdirilməsi

```javascript
let arr = [1, 2, 3, 4, 5];
arr.length = 3; // massivin uzunluğunu azaldırıq
console.log(arr); // [1, 2, 3]
```

---

# 4. Çoxölçülü massivlər

Massivlər başqa massivləri də element kimi saxlaya bilər:

```javascript
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrix[0][1]); // 2
console.log(matrix[1][2]); // 6
```

---

# 5. Massiv elementlərinin dövrə vurulması

Massivi dövrə vurmaq — massivin bütün elementlərini keçib hər biri ilə hansısa əməl yerinə yetirmək deməkdir.

## Əsas dövrə vurma üsulları

### 1. `for` dövrəsi

Ən klassik üsul — adi `for` dövrəsi, burada biz indeksi əl ilə idarə edirik.

```javascript
let fruits = ['alma', 'banan', 'kivi'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

- Burada `i` — elementin indeksi, 0-dan başlayıb `length - 1`-ə qədər.
- Dövrə gövdəsində `fruits[i]` elementinə müraciət edə bilərik.

### 2. `for...of` dövrəsi

Massivin **dəyərlərini** dövrə vurmaq üçün sadələşdirilmiş dövrə.

```javascript
for (let fruit of fruits) {
  console.log(fruit);
}
```

- `fruit` dəyişəni növbə ilə hər bir elementin dəyərini alır.
- İndekslərlə işləməyə ehtiyac yoxdur.

### 3. `for...in` dövrəsi (əlavə məlumat)

Massivin indekslərini dövrə vurur:

```javascript
for (let index in fruits) {
  console.log(index, fruits[index]);
}
```

### 4. `forEach()` massiv metodu

`forEach` metodu funksiyanı qəbul edir və onu massivin hər elementi üçün icra edir.

```javascript
fruits.forEach(function(fruit, index) {
  console.log(index, fruit);
});
```

Və ya ox funksiyası ilə:

```javascript
fruits.forEach((fruit, index) => {
  console.log(index, fruit);
});
```

- Birinci parametr — cari element.
- İkinci parametr (ixtiyari) — elementin indeksi.
- `forEach` yeni massiv qaytarmır — sadəcə əməl yerinə yetirir.

### Digər dövrə metodları haqqında qısaca (anlayış üçün)

- `map()` — yeni massiv yaradır, hər elementi dəyişdirir.
- `filter()` — yoxlamadan keçən elementlərlə yeni massiv yaradır.
- `reduce()` — massivi bir dəyərə endirir.
- `find()` — şərti ödəyən ilk elementi tapır.
- `findIndex()` — şərti ödəyən ilk elementin indeksini tapır.

## Dövrə vurma üsullarının müqayisəsi nümunəsi

```javascript
const numbers = [1, 2, 3, 4];

// for
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// for...of
for (let num of numbers) {
  console.log(num);
}

// for...in
for (let index in numbers) {
  console.log(numbers[index]);
}

// forEach
numbers.forEach(num => console.log(num));
```

## Tapşırıqlar 

**Tapşırıq 1:** `let arr = ['a', 'b', 'c'];` massivinin bütün elementlərini `for` dövrəsi ilə çap edin.

**Tapşırıq 2:** `let arr = [10, 20, 30];` massivinin bütün elementlərini `for...of` ilə çap edin.

**Tapşırıq 3:** `forEach` metodundan istifadə edərək `['x', 'y', 'z']` massivinin indekslərini və dəyərlərini çap edin.

---

# 6. Massivin əsas metodları

Massiv metodları — massivləri dəyişdirmək, baxmaq və yeni massivlər yaratmaq üçün daxili funksiyalardır.

## 6.1 Element əlavə etmək və silmək

### `push()` — massivin sonuna element(lər) əlavə edir

```javascript
let arr = [1, 2, 3];
arr.push(4); 
console.log(arr); // [1, 2, 3, 4]

// Bir neçə element əlavə etmək
arr.push(5, 6, 7);
console.log(arr); // [1, 2, 3, 4, 5, 6, 7]
```

### `pop()` — son elementi silir və qaytarır

```javascript
let arr = [1, 2, 3];
let last = arr.pop();
console.log(arr); // [1, 2]
console.log(last); // 3
```

### `unshift()` — massivin əvvəlinə element(lər) əlavə edir

```javascript
let arr = [2, 3];
arr.unshift(1);
console.log(arr); // [1, 2, 3]

// Bir neçə element əlavə etmək
arr.unshift(-1, 0);
console.log(arr); // [-1, 0, 1, 2, 3]
```

### `shift()` — ilk elementi silir və qaytarır

```javascript
let arr = [1, 2, 3];
let first = arr.shift();
console.log(arr); // [2, 3]
console.log(first); // 1
```

## 6.2 Elementlərin axtarışı və çıxarılması

### `indexOf(value)` — dəyərin ilk rast gəlmə indeksini qaytarır, yoxdursa `-1`

```javascript
let arr = ['a', 'b', 'c', 'b'];
console.log(arr.indexOf('b')); // 1
console.log(arr.indexOf('z')); // -1
```

### `lastIndexOf()` — dəyərin sonuncu rast gəlmə indeksini qaytarır

```javascript
let arr = ['a', 'b', 'c', 'b'];
console.log(arr.lastIndexOf('b')); // 3
```

### `includes(value)` — massivdə dəyər varsa `true` qaytarır

```javascript
let arr = [1, 2, 3];
console.log(arr.includes(2)); // true
console.log(arr.includes(5)); // false
```

### `slice(start, end)` — orijinal massivdən `start`dan `end`ə qədər (daxil edilmir) hissəni kopyalayıb yeni massiv qaytarır

```javascript
let arr = [1, 2, 3, 4, 5];
let part = arr.slice(1, 3); // 1 və 2 indeksli elementləri kopyalayırıq
console.log(part); // [2, 3]
console.log(arr); // [1, 2, 3, 4, 5] (orijinal dəyişmədi)
```

### `find()` — şərti ödəyən ilk elementi qaytarır

```javascript
let numbers = [1, 5, 10, 15];
let found = numbers.find(num => num > 8);
console.log(found); // 10
```

### `findIndex()` — şərti ödəyən ilk elementin indeksini qaytarır

```javascript
let numbers = [1, 5, 10, 15];
let index = numbers.findIndex(num => num > 8);
console.log(index); // 2
```

## 6.3 Massiv məzmununun dəyişdirilməsi

### `splice(start, deleteCount, ...items)` — elementləri silir, əvəz edir və ya əlavə edir

```javascript
let arr = [1, 2, 3, 4, 5];

// 1 indeksindən 2 element silmək
arr.splice(1, 2);
console.log(arr); // [1, 4, 5]

// 1 indeksindən 1 elementi 99 ilə əvəz etmək
arr.splice(1, 1, 99);
console.log(arr); // [1, 99, 5]

// 1 indeksindən heç nə silmədən elementlər əlavə etmək
arr.splice(1, 0, 10, 20);
console.log(arr); // [1, 10, 20, 99, 5]
```

### `sort()` — massivi sıralayır (orijinalı dəyişir)

```javascript
let fruits = ['banan', 'alma', 'kivi'];
fruits.sort();
console.log(fruits); // ['alma', 'banan', 'kivi']

// Rəqəmləri sıralamaq üçün müqayisə funksiyası
let numbers = [3, 1, 4, 1, 5];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 1, 3, 4, 5]
```

## 6.4 Digər faydalı metodlar

### `join(separator)` — massiv elementlərini ayırıcı ilə sətirə birləşdirir

```javascript
let arr = ['alma', 'banan', 'kivi'];
console.log(arr.join(', ')); // 'alma, banan, kivi'
console.log(arr.join(' - ')); // 'alma - banan - kivi'
```

### `reverse()` — massiv elementlərinin sırasını tərsinə çevirir

```javascript
let arr = [1, 2, 3];
arr.reverse();
console.log(arr); // [3, 2, 1]
```

### `concat(...arrays)` — massivləri birləşdirib yeni massiv qaytarır

```javascript
let arr1 = [1, 2];
let arr2 = [3, 4];
let newArr = arr1.concat(arr2);
console.log(newArr); // [1, 2, 3, 4]
console.log(arr1); // [1, 2] (orijinal dəyişmədi)
```

### `flat()` — iç-içə olan massivləri birləşdirir

```javascript
let arr = [1, [2, 3], [4, [5, 6]]];
console.log(arr.flat()); // [1, 2, 3, 4, [5, 6]]
console.log(arr.flat(2)); // [1, 2, 3, 4, 5, 6]
```

## Tapşırıqlar 

**Tapşırıq 1:** `[1, 2, 3]` rəqəmli massiv yaradın. Sona 4 rəqəmini, əvvəlinə 0 rəqəmini əlavə edin.

**Tapşırıq 2:** `['a', 'b', 'c', 'd']` massivində `splice` vasitəsilə `'b'` və `'c'` elementlərini silin.

**Tapşırıq 3:** `['apple', 'banana', 'orange']` sətir massivi yaradın və onu `;` ayırıcısı ilə sətirə çevirin.

---

# 7. Yüksək səviyyəli massiv metodları

## 7.1 `map()` metodu

Hər elementi dəyişdirərək yeni massiv yaradır:

```javascript
let numbers = [1, 2, 3, 4];
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]
console.log(numbers); // [1, 2, 3, 4] (orijinal dəyişmədi)
```

## 7.2 `filter()` metodu

Şərti ödəyən elementlərlə yeni massiv yaradır:

```javascript
let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]
```

## 7.3 `reduce()` metodu

Massivi bir dəyərə endirir:

```javascript
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10
```

## 7.4 `some()` və `every()` metodları

```javascript
let numbers = [1, 2, 3, 4, 5];

// some() - ən azı bir element şərti ödəyirsə true
console.log(numbers.some(num => num > 3)); // true

// every() - bütün elementlər şərti ödəyirsə true  
console.log(numbers.every(num => num > 0)); // true
console.log(numbers.every(num => num > 3)); // false
```

---

# 8. Destrukturizasiya və Spread operatoru massivlərdə

## 8.1 Massiv destrukturizasiyası

Destrukturizasiya — massivdən dəyərləri ayrı dəyişənlərə "açıb çıxarmaq" üçün rahat üsuldur.

### Nümunə

```javascript
const fruits = ['alma', 'banan', 'kivi'];

// adi üsul
const first = fruits[0];
const second = fruits[1]; 

// destrukturizasiya ilə
const [a, b, c] = fruits;
x`
console.log(a); // 'alma'
console.log(b); // 'banan'
console.log(c); // 'kivi'
```

### Elementlərin buraxılması

Əgər elementləri buraxmaq lazımdırsa, sadəcə dəyişən göstərməmək olar:

```javascript
const [first, , third] = fruits;
console.log(first); // 'alma'
console.log(third); // 'kivi'
```

### Elementlərin qalığı — rest operatoru (`...`)

Massivin qalığını ayrı massivə yığmaq olar:

```javascript
const [first, ...others] = fruits;
console.log(first); // 'alma'
console.log(others); // ['banan', 'kivi']
```

### Standart dəyərlər

```javascript
const [a, b, c, d = 'portağal'] = fruits;
console.log(d); // 'portağal' (çünki dördüncü element yoxdur)
```

## 8.2 Spread operatoru (`...`)

Spread massivi (və ya iterasiya edilən obyekti) elementlər siyahısına **açmağa** imkan verir.

### İstifadə nümunələri

### Massivin kopyalanması

```javascript
const arr = [1, 2, 3];
const copy = [...arr];
console.log(copy); // [1, 2, 3]
```

### Massivlərin birləşdirilməsi

```javascript
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4]

// Ortasına element əlavə etmək
const middle = [...arr1, 2.5, ...arr2];
console.log(middle); // [1, 2, 2.5, 3, 4]
```

### Massiv elementlərini funksiya arqumentləri kimi ötürmək

```javascript
const nums = [1, 2, 3];
console.log(Math.max(...nums)); // 3
console.log(Math.min(...nums)); // 1
```

### String-dən massiv yaratmaq

```javascript
const str = "salam";
const chars = [...str];
console.log(chars); // ['s', 'a', 'l', 'a', 'm']
```

## 8.3 Qeydlər

- Destrukturizasiya — rahat dəyər təyinatı üçün sintaksisdir.
- Spread — massivi "açmaq" və ya "kopyalamaq" üsuludur.
- Spread massivin **səthə** kopyasını yaradır (iç-içə obyektlər eyni obyektlərə istinad edəcək).

## Tapşırıqlar 

**Tapşırıq 1:** Destrukturizasiya vasitəsilə `['a', 'b', 'c', 'd']` massivinin birinci və üçüncü elementini alın.

**Tapşırıq 2:** Spread vasitəsilə `[1, 2]` və `[3, 4]` massivlərini birləşdirin.

**Tapşırıq 3:** Spread operatoru ilə `[5, 6, 7]` massivinin kopyasını yaradın.

---

# 9. Massivlərlə praktik işlər

## 9.1 Massivdə elementlərin sayılması

```javascript
let fruits = ['alma', 'banan', 'alma', 'portağal', 'alma'];
let count = {};

fruits.forEach(fruit => {
  count[fruit] = (count[fruit] || 0) + 1;
});

console.log(count); // {alma: 3, banan: 1, portağal: 1}
```

## 9.2 Massivdən dublikatların silinməsi

```javascript
// Set istifadə edərək
let numbers = [1, 2, 2, 3, 3, 4];
let unique = [...new Set(numbers)];
console.log(unique); // [1, 2, 3, 4]

// filter və indexOf ilə
let unique2 = numbers.filter((num, index) => numbers.indexOf(num) === index);
console.log(unique2); // [1, 2, 3, 4]
```

## 9.3 Massivdən şərti elementlərin çıxarılması

```javascript
let users = [
  {name: 'Ali', age: 25},
  {name: 'Ayşe', age: 17},
  {name: 'Mehmet', age: 30}
];

// 18 yaşından böyük istifadəçilər
let adults = users.filter(user => user.age >= 18);
console.log(adults);
```

## 9.4 Massivlərin müqayisəsi

```javascript
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  return arr1.every((val, index) => val === arr2[index]);
}

console.log(arraysEqual([1, 2, 3], [1, 2, 3])); // true
console.log(arraysEqual([1, 2, 3], [1, 2, 4])); // false
```

---

# 10. Performans və yaxşı təcrübələr

## 10.1 Performans məsləhətləri

- `for` dövrəsi ən sürətlidir böyük massivlər üçün
- `forEach`, `map`, `filter` daha oxunaqlıdır, lakin bir qədər yavaşdır
- Massivi əvvəldən dəyişdirməkdənsə (push/pop), yeni massiv yaratmaq daha yaxşıdır

## 10.2 Yaxşı təcrübələr

1. **Const istifadə edin**: Massiv dəyişəni üçün `const` istifadə edin (məzmunu dəyişə bilər)

```javascript
const fruits = ['alma', 'banan']; // Yaxşı
```

2. **Destrukturizasiya istifadə edin**: Kod daha oxunaqlı olur

```javascript
const [first, second] = array; // Yaxşı
```

3. **Spread operatorundan istifadə edin**: Kopyalamaq və birləşdirmək üçün

```javascript
const newArray = [...oldArray]; // Yaxşı
```

4. **Modern metodları istifadə edin**: `map`, `filter`, `reduce` və s.

```javascript
const doubled = numbers.map(n => n * 2); // Yaxşı
```

---

# 11. Massiv metodlarının kateqoriyaları

## 11.1 Əsas kateqoriyalar

- **Mutasiyaedici metodlar** (orijinal massivi dəyişdirən)
- **Mutasiyaedici olmayan metodlar** (yeni massiv qaytaran)
- **Dövrə vurma və transformasiya metodları**

## 11.2 Mutasiyaedici metodlar

### 🔹 Element əlavə etmək/silmək:

- `push()` – sona əlavə etmək
- `pop()` – sondan silmək
- `unshift()` – əvvələ əlavə etmək
- `shift()` – əvvəldən silmək
- `splice()` – ortada silmək/əlavə etmək/əvəz etmək

### 🔹 Sıranı dəyişdirmək:

- `reverse()` – massivi tərsinə çevirmək
- `sort()` – sıralamaq

## 11.3 Mutasiyaedici olmayan metodlar

- `slice()` – massivin hissəsini qaytarmaq
- `concat()` – massivləri birləşdirmək
- `includes()` – elementin olub-olmadığını yoxlamaq
- `indexOf()`, `lastIndexOf()` – indeks axtarmaq

## 11.4 Dövrə vurma və transformasiya metodları

- `forEach()` – sadə dövrə vurma
- `map()` – şablona görə yeni massiv yaratmaq
- `filter()` – şərtə görə elementləri filtirləmək
- `reduce()` – akkumulyasiya/bir dəyərə endirmək
- `find()` – şərtə uyğun ilk elementi tapmaq
- `some()` / `every()` – şərtləri yoxlamaq
- `flat()` / `flatMap()` – iç-içə massivlərlə işləmək

---

# 12. Massiv metodları cədvəli

## 12.1 Metodların müqayisəsi

|Mutasiyaedici metodlar|Mutasiyaedici olmayan metodlar|
|---|---|
|`push()` – sona əlavə edir|`map()` – yeni massiv yaradır|
|`pop()` – sondan silir|`filter()` – filtirlər, yeni massiv qaytarır|
|`shift()` – əvvəldən silir|`slice()` – massivin hissəsini kopyalayır|
|`unshift()` – əvvələ əlavə edir|`concat()` – massivləri birləşdirir|
|`splice()` – elementləri silir/əlavə edir|`includes()` – elementin olub-olmadığını yoxlayır|
|`sort()` – elementləri sıralayır|`find()` – ilk uyğun elementi qaytarır|
|`reverse()` – sıranı tərsinə çevirir|`findIndex()` – ilk uyğunluq indeksi|
|`fill()` – dəyərlərlə doldurur|`every()` – bütün elementləri yoxlayır|
|`copyWithin()` – massiv daxilində kopyalayır|`some()` – ən azı bir uyğunluq yoxlayır|
||`flat()` – iç-içe massivləri açır|
||`flatMap()` – `map()` və `flat()` birləşdirir|

---

# 13. Çoxölçülü massivlər

## 13.1 Çoxölçülü massiv nədir?

**Çoxölçülü massiv** — elementləri başqa massivlər olan massivdir. Ən çox **ikiölçülü massiv** (massivlərin massivi) istifadə olunur, məsələn cədvəlləri, matrisləri, koordinatları təmsil etmək üçün.

```javascript
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
```

## 13.2 Elementlərə müraciət

Elementə iki indeks vasitəsilə müraciət edilir:

```javascript
console.log(matrix[0][1]); // 2
console.log(matrix[2][0]); // 7
```

## 13.3 Çoxölçülü massivin dövrə vurulması

İç-içe dövrə istifadə edilir:

```javascript
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}

// və ya for...of ilə
for (let row of matrix) {
  for (let cell of row) {
    console.log(cell);
  }
}
```

## 13.4 Metodlarla işləmək

Massiv metodlarını iç-içe massivlərlə birləşdirərək istifadə etmək olar:

```javascript
const flatArray = matrix.flat(); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

Cədvəl sətirləri ilə işləmək üçün `map()` istifadə edilə bilər:

```javascript
const doubled = matrix.map(row => row.map(num => num * 2));
```

## 13.5 Tapşırıqlar

1. İkiölçülü massivin bütün elementlərinin cəmini tapmaq
2. Matrisanı transpozisiya etmək
3. Hər elementi öz sətrinin indeksinə vurmaq

---

# 14. Praktik tapşırıqlar və həllər

## 14.1 Rəqəmləri şərtə görə filtrləmək

**Məqsəd**: 3-ə bölünən bütün rəqəmləri tapmaq

```javascript
const arr = [1, 4, 2, 8, 6, 7, 12, 15, 17, 14, 11];
```

### ✅ Dövrə vurma üsulları:

```javascript
// for dövrəsi ilə
function getMultiplesOfThree1(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

// forEach ilə
function getMultiplesOfThree2(arr) {
  const result = [];
  arr.forEach(num => {
    if (num % 3 === 0) {
      result.push(num);
    }
  });
  return result;
}

// filter ilə - ən qısa üsul
const getMultiplesOfThree3 = (arr) => arr.filter(num => num % 3 === 0);
```

**İzahat**:

- `filter()` **yeni massiv** qaytarır
- `filter()` daxilində boolean dəyər qaytarılır: true — element qalır, false — çıxarılır

## 14.2 Rəqəmlərin sıralanması

```javascript
arr.sort((a, b) => a - b); // artan sıra ilə
arr.sort((a, b) => b - a); // azalan sıra ilə
```

### ⚠️ Vacib:

- `sort()` orijinal massivi **dəyişdirir**
- Orijinalı saxlamaq üçün: `arr.slice().sort(...)`

## 14.3 Yastı massiv (Flattening)

```javascript
const arrM = [1, [2, 3, 4], 5, [6, 7]];
```

### Üsul 1: `reduce + concat`

```javascript
const flatArray = arr => arr.reduce((acc, el) => acc.concat(el), []);
```

### Üsul 2: `flat()`

```javascript
arrM.flat(); // [1, 2, 3, 4, 5, 6, 7]
```

### Üsul 3: Spread operatoru

```javascript
const flattened = [].concat(...arrM);
```

## 14.4 Bütün elementlərin cəmi

```javascript
[1, 2, 3, 4].reduce((acc, num) => acc + num, 0);

// və ya daha aydın
const sum = numbers => numbers.reduce((total, current) => total + current, 0);
```

- `reduce()` akkumulyator və cari elementi qəbul edir
- Cəm, hasil, obyekt yaratmaq və s. üçün əlverişlidir

## 14.5 Sətir massivləri ilə işləmək

```javascript
const allStudents = ["Anna", "Tom", "Bob", "Kate"];
const failedStudents = ["Tom", "Bob"];
```

### Çıxarılanları istisna etmək:

```javascript
const passed = allStudents.filter(name => !failedStudents.includes(name));
```

### Mesaj əlavə etmək:

```javascript
const messages = passed.map(name => `Afərin ${name}`);
```

### Kombinə edilmiş həll:

```javascript
const congratulatePassedStudents = (all, failed) => {
  return all
    .filter(name => !failed.includes(name))
    .map(name => `Afərin ${name}`);
};
```

---

# 15. Qeydlər və məsləhətlər

## 15.1 Vacib qeydlər:

- `filter()` orijinal massivi dəyişdirmir
- `sort()` — mutasiyaedici metoddur
- `flat()` yalnız 1 səviyyə dərinlikdə işləyir, lakin dərinlik göstərmək olar: `flat(2)`
- `reduce()` — massivi istənilən şeyə çevirmək üçün universal vasitədir
- `indexOf()` və `includes()` funksiyaları axtarış üçün əlverişlidir

## 15.2 Performans məsləhətləri:

1. **Böyük massivlər üçün**: `for` dövrəsi ən sürətlidir
2. **Oxunaqlılıq üçün**: `forEach`, `map`, `filter` daha yaxşıdır
3. **Yaddaş idarəsi**: Yeni massiv yaratmaq əvvəlcədən dəyişdirməkdən daha təhlükəsizdir

## 15.3 Method chaining (zəncir metodlar):

```javascript
const result = numbers
  .filter(n => n > 0)
  .map(n => n * 2)
  .reduce((sum, n) => sum + n, 0);
```

---

# Xülasə

Massivlər JavaScript-də ən vacib məlumat strukturlarından biridir. Bu ətraflı konspektdə öyrəndiklərimiz:

- Massivlərin yaradılması və əsas anlayışlar
- Elementlərə müraciət və dövrə vurma üsulları
- Əsas massiv metodları və onların kateqoriyaları
- Mutasiyaedici və mutasiyaedici olmayan metodların fərqləri
- Yüksək səviyyəli metodlar (map, filter, reduce)
- Çoxölçülü massivlərlə işləmək
- Destrukturizasiya və spread operatoru
- Praktik tapşırıqlar və həlləri
- Performans məsləhətləri

Bu biliklərlə JavaScript-də massivlərlə peşəkar səviyyədə işləyə bilərsiniz!