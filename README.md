# 2026 Social Media

Twitter clone 畢業作品專案。前端使用 Vue 3，後端使用 Hono + SQLite。

## Quick Start

```bash
# 1. 安裝所有依賴
npm install

# 2. 建立資料庫並填入測試資料
npm run seed

# 3. 啟動前後端（一個指令搞定）
npm start
```

啟動後：
- 前端：http://localhost:5173
- 後端 API：http://localhost:3000
- API 文件（可直接測試）：http://localhost:3000/docs
- 前後端串接 Demo：http://localhost:5173/demo

## 測試帳號

| 角色 | 帳號 | Email | 密碼 |
|------|------|-------|------|
| Super User (admin) | test | test@gmail.com | 12345678 |
| Admin | root | root@example.com | 12345678 |
| 一般用戶 | user1 | user1@example.com | 12345678 |
| 一般用戶 | user2 | user2@example.com | 12345678 |
| 一般用戶 | user3~user5 | user3~5@example.com | 12345678 |

---

## 前端 Auth 使用教學

後端使用 JWT（JSON Web Token）做身份驗證。以下是 step by step 教學。

### Step 1：登入取得 Token

```js
// 用帳號或 email 都可以登入
const res = await fetch('/api/users/signin', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    account: 'user1',       // 或 'user1@example.com'
    password: '12345678'
  })
})

const data = await res.json()
// data = { user: { id, name, account, ... }, token: "eyJhbGciOi..." }

// 把 token 存到 localStorage
localStorage.setItem('token', data.token)
```

### Step 2：帶 Token 打需要登入的 API

大部分 API 都需要登入才能用。只要在 header 加上 `Authorization: Bearer <token>` 就可以了：

```js
const token = localStorage.getItem('token')

const res = await fetch('/api/tweets', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
})

const tweets = await res.json()
// tweets = [{ id, description, user: { ... }, likesCount, repliesCount, isLiked }, ...]
```

### Step 3：發送資料的 API（POST）

```js
const token = localStorage.getItem('token')

// 發一則推文
const res = await fetch('/api/tweets', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    description: '我的第一則推文！'
  })
})

const newTweet = await res.json()
```

### Step 4：登出

```js
// 登出就是刪掉 token
localStorage.removeItem('token')
```

### Step 5：註冊新帳號

```js
const res = await fetch('/api/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: '小明',
    account: 'xiaoming',
    email: 'xiaoming@example.com',
    password: '12345678',
    checkPassword: '12345678'
  })
})
// 成功會回 201，然後可以用新帳號登入
```

### 常見錯誤處理

```js
const res = await fetch('/api/tweets', {
  headers: { 'Authorization': `Bearer ${token}` }
})

if (res.status === 401) {
  // Token 過期或沒帶 → 導回登入頁
  console.log('請重新登入')
  localStorage.removeItem('token')
}

if (res.status === 403) {
  // 權限不足（例如用一般帳號打 admin API）
  console.log('你沒有權限')
}

if (res.status === 400) {
  // 輸入資料有問題
  const data = await res.json()
  console.log(data.error.message)  // 例如 "Description is required"
}

if (res.status === 409) {
  // 衝突（例如重複註冊、重複按讚）
  const data = await res.json()
  console.log(data.error.message)
}
```

### 上傳頭像/封面（FormData）

編輯個人資料需要用 FormData（因為有檔案上傳）：

```js
const token = localStorage.getItem('token')
const userId = 3  // 你的 user id

const formData = new FormData()
formData.append('name', '新名字')
formData.append('introduction', '我的自我介紹')
// 如果要上傳圖片：
// formData.append('avatar', fileInput.files[0])

const res = await fetch(`/api/users/${userId}`, {
  method: 'PUT',
  headers: {
    'Authorization': `Bearer ${token}`
    // 注意：用 FormData 時不要設 Content-Type，瀏覽器會自動加
  },
  body: formData
})
```

---

## 專案結構

```
2026-social-media/
├── backend/          # 後端 (Hono + TypeScript + SQLite)
│   ├── src/
│   │   ├── routes/   # API 路由
│   │   ├── db/       # 資料庫
│   │   └── middleware/# 驗證中間件
│   └── tests/        # 測試 (53 tests)
├── frontend/         # 前端 (Vue 3 + JS)
│   └── src/
│       ├── api/      # API 呼叫範例
│       ├── views/    # 頁面元件
│       └── router/   # 路由設定
└── package.json      # 統一啟動腳本
```

## 指令

```bash
npm start        # 啟動前後端
npm test         # 跑後端測試
npm run seed     # 重建種子資料
```
