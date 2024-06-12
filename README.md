# - PORTFOLIO MANAGER - AI Tabanlı Kişisel Finans Yönetim ve Yatırım Danışmanlığı Platformu

Bu proje, kullanıcıların yapay zeka tabanlı kişisel finans yönetim ve yatırım danışmanlığı hizmetlerinden yararlanabilecekleri bir platform sunar. Platform, kullanıcıların harcamalarını analiz eder, bütçeler oluşturur ve yatırım önerileri sunar.

## Başlangıç

Bu talimatlar, projenin yerel makinenizde nasıl çalıştırılacağı açıklar.

### Gereksinimler

- Node.js
- npm (Node Package Manager)
- MongoDB

### Kurulum

1. Projeyi klonlayın:

    ```sh
    git clone https://github.com/yourusername/finance-management-platform.git
    cd finance-management-platform
    ```

2. Gerekli paketleri yükleyin:

    ```sh
    npm install
    ```

### Çalıştırma

Uygulamayı başlatmak için aşağıdaki komutu çalıştırın:

```sh
npm start
``` 
Sunucu, varsayılan olarak http://localhost:5000 adresinde çalışacaktır.

#### API Endpoint'leri

Swagger dokümantasyonunu kullanarak tüm API endpoint'lerini görüntüleyebilir ve test edebilirsiniz.

Swagger Dokümantasyonu
Swagger dokümantasyonuna erişmek için: http://localhost:5000/api-docs

### Kullanılabilir Endpoint'ler
#### Auth Routes

- POST /auth/register - Kullanıcı kayıt olma
- POST /auth/login - Kullanıcı giriş yapma

#### User Routes

- GET /users/profile - Kullanıcı profilini görüntüleme
- Expense Routes

- POST /expenses - Yeni harcama ekleme
- GET /expenses - Tüm harcamaları listeleme
- PUT /expenses/ - Harcama güncelleme
- DELETE /expenses/ - Harcama silme

#### Investment Routes

- GET /investments - Yatırım önerilerini listeleme
Finance Routes

- GET /stocks/ - Belirli bir hisse senedi sembolüne göre finansal verileri çekme

### Örnek Kullanım

#### Kayıt Olma
```sh
curl -X POST http://localhost:5000/auth/register \
-H "Content-Type: application/json" \
-d '{
  "name": "Test User",
  "email": "test@tumer.com",
  "password": "123456"
}'
```
#### Giriş Yapma
```sh
curl -X POST http://localhost:5000/auth/login \
-H "Content-Type: application/json" \
-d '{
  "email": "test@tumer.com",
  "password": "123456"
}'
```

#### Harcamaları Listeleme
```sh
curl -X GET http://localhost:5000/expenses \
-H "x-auth-token:JWT_TOKEN"
```

#### Testler

Birim testleri çalıştırmak için:

```sh
npm test
```