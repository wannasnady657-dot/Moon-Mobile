// C:\Users\WANAS\Desktop\moamen-phone-html\js\firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// TODO: قم بتبديل هذه الإعدادات بإعدادات مشروعك الحقيقي في Firebase
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);

// تصدير خدمات قاعدة البيانات والمصادقة للاستخدام في باقي الملفات
export const db = getFirestore(app);
export const auth = getAuth(app);

/*
 =========================================
 شرح هيكل قاعدة البيانات (Firestore NoSQL)
 =========================================
 بناءً على الجداول المطلوبة:

 1. Users (المستخدمين) -> مجموعة 'users'
 2. Products (المنتجات) -> مجموعة 'products'
 3. Categories (الأقسام/الشركات) -> مجموعة 'categories'
 4. Product Images (صور المنتجات) -> مدمجة كمصفوفة (Array) داخل مجموعة products لتسريع جلب البيانات
 5. Orders (الطلبات) -> مجموعة 'orders'
 6. Order Items (عناصر الطلب) -> مدمجة كمصفوفة داخل كل طلب في مجموعة orders
 7. Customers (العملاء) -> مجموعة 'customers'
 8. Settings (إعدادات الموقع) -> مجموعة 'settings'
*/
