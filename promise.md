# 1. JavaScript-də asinxronluğun əsasları

### 1.1 Asinxronluq nədir?

**Asinxronluq** — kodun əsas icra axını bloklamadan yerinə yetirilməsi qabiliyyətidir. JavaScript-də asinxron əməliyyatlar proqrama uzun əməliyyatların (serverə sorğular, faylların oxunması, taymerlər) tamamlanmasını gözləmədən işini davam etdirməyə imkan verir.

### 1.2 JavaScript-in monotaxlılığı

JavaScript — monotaxlı dildir, lakin Event Loop sayəsində asinxron əməliyyatları işləyə bilir:

```javascript
console.log("1 - Başlanğıc");

setTimeout(() => {
    console.log("2 - Asinxron əməliyyat");
}, 0);

console.log("3 - Son");

// Çıxış:
// 1 - Başlanğıc
// 3 - Son
// 2 - Asinxron əməliyyat
```

### 1.3 Event Loop (Hadisələr dövrü)

Event Loop — asinxron kodun icrasını idarə edən mexanizmdir:

```javascript
// Call Stack (Çağırışlar yığını)
function first() {
    console.log("Birinci funksiya");
    second();
}

function second() {
    console.log("İkinci funksiya");
}

// Web APIs (setTimeout, fetch, DOM events)
setTimeout(() => {
    console.log("Web API-dən");
}, 0);

// Callback Queue (Callback növbəsi)
first(); // Sinxron
// Sonra setTimeout icra olunacaq

// Çıxış:
// Birinci funksiya
// İkinci funksiya
// Web API-dən
```

### 1.4 Microtasks vs Macrotasks

```javascript
console.log("1 - Sinxron kod");

// Macrotask (setTimeout)
setTimeout(() => console.log("2 - Macrotask"), 0);

// Microtask (Promise)
Promise.resolve().then(() => console.log("3 - Microtask"));

console.log("4 - Sinxron kod");

// Çıxış:
// 1 - Sinxron kod
// 4 - Sinxron kod
// 3 - Microtask (birinci icra olunur!)
// 2 - Macrotask
```

### 1.5 Asinxronluğun təkamülü

#### Callbacks (callback-lər)

```javascript
// Köhnə üsul
function getData(callback) {
    setTimeout(() => {
        callback(null, "Məlumatlar alındı");
    }, 1000);
}

getData((error, data) => {
    if (error) {
        console.error(error);
    } else {
        console.log(data);
    }
});
```

#### Callback Hell (Callback cəhənnəmi)

```javascript
// İç-içəlik problemi
getData((error, data) => {
    if (error) throw error;
    
    processData(data, (error, processedData) => {
        if (error) throw error;
        
        saveData(processedData, (error, result) => {
            if (error) throw error;
            
            console.log("Hazır:", result);
        });
    });
});
```

# 2. Promise nədir?

**Promise** (söz) — JavaScript-də asinxron əməliyyatın nəticəsini təmsil edən obyektdir. Promise üç vəziyyətdən birində ola bilər:

- **Pending** (gözləmə) — başlanğıc vəziyyət, əməliyyat hələ tamamlanmayıb
- **Fulfilled** (yerinə yetirilmiş) — əməliyyat uğurla tamamlandı
- **Rejected** (rədd edilmiş) — əməliyyat xəta ilə tamamlandı

## 2. Promise yaratmaq

### Əsas sintaksis

```javascript
const myPromise = new Promise((resolve, reject) => {
    // Asinxron əməliyyat
    if (/* əməliyyat uğurludur */) {
        resolve(nəticə); // Promise yerinə yetirildi
    } else {
        reject(xəta); // Promise rədd edildi
    }
});
```

### Sadə promise yaratmaq nümunəsi

```javascript
const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = Math.random() > 0.5;
        if (success) {
            resolve("Məlumatlar uğurla alındı!");
        } else {
            reject("Məlumatların alınmasında xəta");
        }
    }, 2000);
});
```

## 3. Promise metodları

### 3.1 then()

Promise-in uğurlu icrasını işləyir:

```javascript
promise.then(
    result => {
        // Uğurlu nəticənin işlənməsi
        console.log(result);
    },
    error => {
        // Xətanın işlənməsi (məcburi deyil)
        console.error(error);
    }
);
```

### 3.2 catch()

Promise-in rədd edilməsini işləyir:

```javascript
promise.catch(error => {
    console.error("Xəta baş verdi:", error);
});
```

### 3.3 finally()

Promise-in nəticəsindən asılı olmayaraq icra olunur:

```javascript
promise.finally(() => {
    console.log("Əməliyyat tamamlandı");
});
```

## 4. Promise zəncirlərə (Promise Chaining)

Promise-lər ardıcıl icra üçün zəncirlərə birləşdirilə bilər:

```javascript
fetchUserData()
    .then(user => {
        console.log("İstifadəçi:", user);
        return fetchUserPosts(user.id);
    })
    .then(posts => {
        console.log("Yazılar:", posts);
        return processPosts(posts);
    })
    .then(processedPosts => {
        console.log("İşlənmiş yazılar:", processedPosts);
    })
    .catch(error => {
        console.error("Zəncirdə xəta:", error);
    })
    .finally(() => {
        console.log("Zəncir tamamlandı");
    });
```

## 5. Promise-in statik metodları

### 5.1 Promise.resolve()

Artıq yerinə yetirilmiş promise yaradır:

```javascript
const resolvedPromise = Promise.resolve("Uğur!");
resolvedPromise.then(result => console.log(result)); // "Uğur!"
```

### 5.2 Promise.reject()

Artıq rədd edilmiş promise yaradır:

```javascript
const rejectedPromise = Promise.reject("Xəta!");
rejectedPromise.catch(error => console.log(error)); // "Xəta!"
```

### 5.3 Promise.all()

Bütün promise-lərin icrasını gözləyir:

```javascript
const promise1 = fetch('/api/data1');
const promise2 = fetch('/api/data2');
const promise3 = fetch('/api/data3');

Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log("Bütün sorğular icra olundu:", results);
    })
    .catch(error => {
        console.error("Sorğulardan biri uğursuz oldu:", error);
    });
```

### 5.4 Promise.allSettled()

Bütün promise-lərin tamamlanmasını gözləyir (nəticədən asılı olmayaraq):

```javascript
const promises = [
    Promise.resolve("Uğur 1"), // 0
    Promise.reject("Xəta 1"),  // 1
    Promise.resolve("Uğur 2"), // 2
];

Promise.allSettled(promises)
    .then(results => {
        results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                console.log(`Promise ${index}: ${result.value}`);
            } else {
                console.log(`Promise ${index} rədd edildi: ${result.reason}`);
            }
        });
    });
```

### 5.5 Promise.race()

İlk tamamlanan promise-i qaytarır:

```javascript
const promise1 = new Promise(resolve => setTimeout(resolve, 500, 'Birinci'));
const promise2 = new Promise(resolve => setTimeout(resolve, 100, 'İkinci'));

Promise.race([promise1, promise2])
    .then(result => {
        console.log(result); // "İkinci" (birinci tamamlandı)
    });
```

### 5.6 Promise.any()

İlk uğurla icra olunan promise-i qaytarır:

```javascript
const promises = [
    Promise.reject("Xəta 1"),
    Promise.resolve("Uğur!"),
    Promise.reject("Xəta 2")
];

Promise.any(promises)
    .then(result => {
        console.log(result); // "Uğur!"
    })
    .catch(error => {
        console.log("Bütün promise-lər rədd edildi");
    });
```

## 6. Async/Await

Promise-lərlə işləmək üçün müasir sintaksis:

### 6.1 Async funksiyaları

```javascript
async function fetchUserData() {
    try {
        const response = await fetch('/api/user');
        const user = await response.json();
        return user;
    } catch (error) {
        console.error("Məlumatların alınmasında xəta:", error);
        throw error;
    }
}
```

### 6.2 Async/await istifadəsi

```javascript
async function processUser() {
    try {
        const user = await fetchUserData();
        const posts = await fetchUserPosts(user.id);
        const comments = await fetchPostComments(posts[0].id);
        
        console.log("İstifadəçi:", user);
        console.log("Yazılar:", posts);
        console.log("Şərhlər:", comments);
    } catch (error) {
        console.error("Xəta baş verdi:", error);
    }
}
```

## 7. Xətaların işlənməsi

### 7.1 Async/await ilə Try-catch

```javascript
async function safeAsyncOperation() {
    try {
        const result = await riskyOperation();
        return result;
    } catch (error) {
        console.error("Xətanın işlənməsi:", error);
        return null; // Defolt dəyər qaytarırıq
    }
}
```

### 7.2 Çoxsaylı xəta işləmə

```javascript
fetchData()
    .then(data => processData(data))
    .catch(error => {
        if (error.name === 'NetworkError') {
            console.log("Şəbəkə problemləri");
        } else if (error.name === 'ValidationError') {
            console.log("Məlumatların validasiya xətası");
        } else {
            console.log("Naməlum xəta:", error);
        }
    });
```

## 8. Praktiki nümunələr

### 8.1 Ardıcıl sorğular

```javascript
async function loadUserProfile(userId) {
    try {
        // İstifadəçi məlumatlarının yüklənməsi
        const user = await fetch(`/api/users/${userId}`).then(r => r.json());
        
        // İstifadəçi yazılarının yüklənməsi
        const posts = await fetch(`/api/users/${userId}/posts`).then(r => r.json());
        
        // İzləyicilərin yüklənməsi
        const followers = await fetch(`/api/users/${userId}/followers`).then(r => r.json());
        
        return {
            user,
            posts,
            followers
        };
    } catch (error) {
        throw new Error(`Profili yükləmək mümkün olmadı: ${error.message}`);
    }
}
```

### 8.2 Paralel sorğular

```javascript
async function loadDashboardData(userId) {
    try {
        const [user, posts, notifications] = await Promise.all([
            fetch(`/api/users/${userId}`).then(r => r.json()),
            fetch(`/api/users/${userId}/posts`).then(r => r.json()),
            fetch(`/api/users/${userId}/notifications`).then(r => r.json())
        ]);
        
        return {
            user,
            posts,
            notifications
        };
    } catch (error) {
        throw new Error(`Məlumatların yüklənməsində xəta: ${error.message}`);
    }
}
```

### 8.3 Taymer üçün promise yaratmaq

```javascript
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// İstifadə
async function example() {
    console.log("Başlanğıc");
    await delay(2000);
    console.log("2 saniyə sonra");
}
```

### 8.4 Callback funksiyalarının promisifikasiyası

```javascript
function promisify(callbackFunction) {
    return function(...args) {
        return new Promise((resolve, reject) => {
            callbackFunction(...args, (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    };
}

// İstifadə nümunəsi
const fs = require('fs');
const readFileAsync = promisify(fs.readFile);

readFileAsync('file.txt', 'utf8')
    .then(content => console.log(content))
    .catch(error => console.error(error));
```

## 9. Ən yaxşı təcrübələr

### 9.1 Həmişə xətaları işləyin

```javascript
// Pis
fetchData().then(result => console.log(result));

// Yaxşı
fetchData()
    .then(result => console.log(result))
    .catch(error => console.error(error));
```

### 9.2 İç-içə promise-lərdən çəkinin

```javascript
// Pis (Promise-lərlə Callback Hell)
fetchUser()
    .then(user => {
        return fetchPosts(user.id)
            .then(posts => {
                return fetchComments(posts[0].id)
                    .then(comments => {
                        return { user, posts, comments };
                    });
            });
    });

// Yaxşı
fetchUser()
    .then(user => {
        return Promise.all([
            user,
            fetchPosts(user.id)
        ]);
    })
    .then([user, posts] => {
        return Promise.all([
            user,
            posts,
            fetchComments(posts[0].id)
        ]);
    })
    .then([user, posts, comments] => {
        return { user, posts, comments };
    });
```

### 9.3 Oxunaqlılıq üçün async/await istifadə edin

```javascript
// Promise-lərlə
function processData() {
    return fetchUser()
        .then(user => fetchPosts(user.id))
        .then(posts => processPosts(posts))
        .catch(error => handleError(error));
}

// Async/await ilə (daha oxunaqlı)
async function processData() {
    try {
        const user = await fetchUser();
        const posts = await fetchPosts(user.id);
        return await processPosts(posts);
    } catch (error) {
        handleError(error);
    }
}
```

## 10. Tez-tez edilən xətalar və həlləri

### 10.1 Zəncirdə return-u unutmaq

```javascript
// Səhv
promise
    .then(result => {
        processResult(result); // Return-u unutduq!
    })
    .then(processed => {
        console.log(processed); // undefined
    });

// Düzgün
promise
    .then(result => {
        return processResult(result);
    })
    .then(processed => {
        console.log(processed); // Düzgün dəyər
    });
```

### 10.2 Async/await-də səhv xəta işləmə

```javascript
// Səhv
async function badExample() {
    const result = await riskyOperation(); // Xəta işlənmir
    return result;
}

// Düzgün
async function goodExample() {
    try {
        const result = await riskyOperation();
        return result;
    } catch (error) {
        console.error("Xəta:", error);
        throw error; // Xətanı irəli atırıq
    }
}
```

## 12. Asinxronluğun qabaqcıl mövzuları

### 12.1 Generatorlar və asinxronluq

```javascript
function asyncGenerator() {
    console.log("Generator başladı");
    
    const data1 = yield fetch('/api/data1');
    console.log("Məlumat 1 alındı:", data1);
    
    const data2 = yield fetch('/api/data2');
    console.log("Məlumat 2 alındı:", data2);
    
    return "Generator tamamlandı";
}

// Asinxron generator icra etmək üçün funksiya
async function runAsyncGenerator(generator) {
    const gen = generator();
    let result = gen.next();
    
    while (!result.done) {
        try {
            const value = await result.value;
            result = gen.next(value);
        } catch (error) {
            result = gen.throw(error);
        }
    }
    
    return result.value;
}

// İstifadə
runAsyncGenerator(asyncGenerator);
```

### 12.2 Async Iterators (Asinxron iteratorlar)

```javascript
// Asinxron iterator yaratmaq
async function asyncNumberGenerator() {
    for (let i = 0; i < 5; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        yield i;
    }
}

// for await...of istifadəsi
async function processNumbers() {
    for await (const number of asyncNumberGenerator()) {
        console.log("Rəqəm alındı:", number);
    }
}

processNumbers();
```

### 12.3 Stream-lər və asinxronluq

```javascript
// Məlumat axınının oxunması
async function processStream(response) {
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    
    try {
        while (true) {
            const { done, value } = await reader.read();
            
            if (done) break;
            
            const chunk = decoder.decode(value, { stream: true });
            console.log("Fraqment alındı:", chunk);
            
            // Məlumat fraqmentinin işlənməsi
            processChunk(chunk);
        }
    } finally {
        reader.releaseLock();
    }
}

// İstifadə
fetch('/api/large-data')
    .then(response => processStream(response))
    .catch(error => console.error(error));
```

### 12.4 Web Workers və asinxronluq

```javascript
// main.js - əsas axın
function heavyCalculationWithWorker(data) {
    return new Promise((resolve, reject) => {
        const worker = new Worker('worker.js');
        
        worker.postMessage(data);
        
        worker.onmessage = (event) => {
            resolve(event.data);
            worker.terminate();
        };
        
        worker.onerror = (error) => {
            reject(error);
            worker.terminate();
        };
    });
}

// İstifadə
async function processData() {
    try {
        const result = await heavyCalculationWithWorker(largeDataSet);
        console.log("Hesablama nəticəsi:", result);
    } catch (error) {
        console.error("Worker-də xəta:", error);
    }
}

// worker.js - işçi axın
self.onmessage = function(event) {
    const data = event.data;
    
    // Ağır hesablamalar
    const result = performHeavyCalculation(data);
    
    // Nəticəni geri göndərmək
    self.postMessage(result);
};
```

### 12.5 Sorğuları ləğv etmək üçün AbortController

```javascript
class AsyncRequestManager {
    constructor() {
        this.controllers = new Map();
    }
    
    async makeRequest(url, requestId) {
        // Eyni ID ilə əvvəlki sorğunu ləğv edirik
        this.cancelRequest(requestId);
        
        const controller = new AbortController();
        this.controllers.set(requestId, controller);
        
        try {
            const response = await fetch(url, {
                signal: controller.signal
            });
            
            if (!response.ok) {
                throw new Error(`HTTP xəta! status: ${response.status}`);
            }
            
            const data = await response.json();
            this.controllers.delete(requestId);
            
            return data;
        } catch (error) {
            if (error.name === 'AbortError') {
                console.log(`Sorğu ${requestId} ləğv edildi`);
            } else {
                console.error(`Sorğu xətası ${requestId}:`, error);
                throw error;
            }
        }
    }
    
    cancelRequest(requestId) {
        const controller = this.controllers.get(requestId);
        if (controller) {
            controller.abort();
            this.controllers.delete(requestId);
        }
    }
    
    cancelAllRequests() {
        for (const [requestId, controller] of this.controllers) {
            controller.abort();
        }
        this.controllers.clear();
    }
}

// İstifadə
const requestManager = new AsyncRequestManager();

// İstifadəçi məlumatlarının sorğusu
requestManager.makeRequest('/api/user/123', 'user-data')
    .then(data => console.log('İstifadəçi məlumatları:', data))
    .catch(error => console.error(error));

// 2 saniyə sonra sorğunu ləğv etmək
setTimeout(() => {
    requestManager.cancelRequest('user-data');
}, 2000);
```

### 12.6 Asinxron əməliyyatların toplusu

```javascript
class AsyncBatcher {
    constructor(batchSize = 5, delay = 100) {
        this.batchSize = batchSize;
        this.delay = delay;
        this.queue = [];
        this.timeoutId = null;
    }
    
    add(asyncOperation) {
        return new Promise((resolve, reject) => {
            this.queue.push({
                operation: asyncOperation,
                resolve,
                reject
            });
            
            if (this.queue.length >= this.batchSize) {
                this.processBatch();
            } else {
                this.scheduleBatch();
            }
        });
    }
    
    scheduleBatch() {
        if (this.timeoutId) return;
        
        this.timeoutId = setTimeout(() => {
            this.processBatch();
        }, this.delay);
    }
    
    async processBatch() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
            this.timeoutId = null;
        }
        
        const batch = this.queue.splice(0, this.batchSize);
        if (batch.length === 0) return;
        
        console.log(`${batch.length} əməliyyatdan ibarət toplu işlənir`);
        
        const promises = batch.map(async ({ operation, resolve, reject }) => {
            try {
                const result = await operation();
                resolve(result);
            } catch (error) {
                reject(error);
            }
        });
        
        await Promise.allSettled(promises);
    }
}

// Batcher istifadəsi
const batcher = new AsyncBatcher(3, 500);

// Topluya əməliyyatların əlavə edilməsi
for (let i = 0; i < 10; i++) {
    batcher.add(async () => {
        const response = await fetch(`/api/item/${i}`);
        return response.json();
    }).then(data => {
        console.log(`Element ${i} üçün məlumatlar alındı:`, data);
    });
}
```

### 12.7 Asinxron əməliyyatlar üçün yenidən cəhd mexanizmi

```javascript
class AsyncRetry {
    static async execute(
        asyncFunction,
        options = {}
    ) {
        const {
            maxAttempts = 3,
            delay = 1000,
            backoffMultiplier = 2,
            retryCondition = () => true
        } = options;
        
        let lastError;
        
        for (let attempt = 1; attempt <= maxAttempts; attempt++) {
            try {
                return await asyncFunction();
            } catch (error) {
                lastError = error;
                
                console.log(`Cəhd ${attempt} uğursuz oldu:`, error.message);
                
                if (attempt === maxAttempts || !retryCondition(error)) {
                    throw error;
                }
                
                const waitTime = delay * Math.pow(backoffMultiplier, attempt - 1);
                console.log(`Növbəti cəhddən əvvəl ${waitTime}ms gözləmə...`);
                
                await new Promise(resolve => setTimeout(resolve, waitTime));
            }
        }
        
        throw lastError;
    }
}

// Retry mexanizminin istifadəsi
async function fetchWithRetry() {
    try {
        const data = await AsyncRetry.execute(
            () => fetch('/api/unreliable-endpoint').then(r => r.json()),
            {
                maxAttempts: 5,
                delay: 1000,
                backoffMultiplier: 1.5,
                retryCondition: (error) => {
                    // Yalnız şəbəkə xətaları üçün təkrar edirik
                    return error.name === 'NetworkError' || 
                           error.message.includes('fetch');
                }
            }
        );
        
        console.log('Məlumatlar alındı:', data);
    } catch (error) {
        console.error('Bütün cəhdlərdən sonra məlumatları almaq mümkün olmadı:', error);
    }
}
```

### 12.8 Asinxron nəticələrin keşlənməsi

```javascript
class AsyncCache {
    constructor(ttl = 60000) { // TTL millisaniyələrlə
        this.cache = new Map();
        this.ttl = ttl;
    }
    
    async get(key, asyncFunction) {
        const cached = this.cache.get(key);
        
        if (cached && Date.now() - cached.timestamp < this.ttl) {
            console.log(`Keşdən qaytarılır: ${key}`);
            return cached.data;
        }
        
        console.log(`Sorğu icra edilir: ${key}`);
        
        try {
            const data = await asyncFunction();
            
            this.cache.set(key, {
                data,
                timestamp: Date.now()
            });
            
            return data;
        } catch (error) {
            // Uğursuz nəticəni keşdən silirik
            this.cache.delete(key);
            throw error;
        }
    }
    
    invalidate(key) {
        this.cache.delete(key);
    }
    
    clear() {
        this.cache.clear();
    }
    
    // Köhnə qeydlərin avtomatik təmizlənməsi
    startCleanup(interval = 60000) {
        setInterval(() => {
            const now = Date.now();
            for (const [key, value] of this.cache.entries()) {
                if (now - value.timestamp >= this.ttl) {
                    this.cache.delete(key);
                }
            }
        }, interval);
    }
}

// Keş istifadəsi
const cache = new AsyncCache(30000); // 30 saniyə keş
cache.startCleanup();

async function getUserData(userId) {
    return await cache.get(`user_${userId}`, async () => {
        const response = await fetch(`/api/users/${userId}`);
        return response.json();
    });
}

// Birinci çağırış - serverə sorğu
getUserData(123).then(data => console.log(data));

// İkinci çağırış - keşdən məlumat
setTimeout(() => {
    getUserData(123).then(data => console.log(data));
}, 5000);
```

## 13. Nəticə

JavaScript-də Promise asinxron kodla işləmək üçün güclü vasitədir ki, bu da imkan verir:

- "Callback hell"-dən qaçmaq
- Oxunaqlı asinxron əməliyyat zəncirlərə yaratmaq
- Xətaları effektiv şəkildə işləmək
- Əməliyyatları paralel və ya ardıcıl icra etmək

Async/await istifadə edən müasir yanaşma asinxron kodu daha da oxunaqlı və sinxrona bənzər edir, eyni zamanda promise-lərin bütün üstünlüklərini saxlayır.