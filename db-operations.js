// C:\Users\WANAS\Desktop\moamen-phone-html\js\db-operations.js
import { db } from './firebase-config.js';
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc, query, where, Timestamp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// ==========================================
// 1. العمليات الخاصة بالمنتجات (Products & Images)
// ==========================================
export async function getProducts() {
    try {
        const querySnapshot = await getDocs(collection(db, "products"));
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (e) {
        console.error("خطأ في جلب المنتجات: ", e);
        return [];
    }
}

export async function addProduct(productData) {
    try {
        // productData يجب أن تحتوي على: name, companyId, price, storage, ram, stock, description, images (array)
        const docRef = await addDoc(collection(db, "products"), {
            ...productData,
            createdAt: Timestamp.now()
        });
        return docRef.id;
    } catch (e) {
        console.error("خطأ في إضافة المنتج: ", e);
    }
}

// ==========================================
// 2. العمليات الخاصة بالأقسام والشركات (Categories)
// ==========================================
export async function getCategories() {
    try {
        const querySnapshot = await getDocs(collection(db, "categories"));
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (e) {
        console.error("خطأ في جلب الشركات: ", e);
        return [];
    }
}

// ==========================================
// 3. العمليات الخاصة بالطلبات وعناصر الطلب (Orders & Order Items)
// ==========================================
export async function createOrder(customerData, cartItems, totalAmount) {
    try {
        // أولاً: حفظ بيانات العميل في مجموعة العملاء
        const customerRef = await addDoc(collection(db, "customers"), {
            ...customerData,
            createdAt: Timestamp.now()
        });

        // ثانياً: إنشاء الطلب مع دمج Order Items بداخله
        const orderData = {
            customerId: customerRef.id,
            customerName: customerData.name,
            phone: customerData.phone,
            address: `${customerData.governorate} - ${customerData.area} - ${customerData.address}`,
            notes: customerData.notes || "",
            total: totalAmount,
            status: "جديد", // حالات: جديد، تم التأكيد، جاري التجهيز، تم التسليم، ملغي
            items: cartItems.map(item => ({
                productId: item.id,
                name: item.name,
                price: item.price,
                quantity: item.quantity
            })),
            createdAt: Timestamp.now()
        };

        const orderRef = await addDoc(collection(db, "orders"), orderData);
        
        // ثالثاً: خصم الكمية من المخزون (Product Stock)
        // يتم تنفيذها لاحقاً بواسطة المدير أو دالة أخرى

        return orderRef.id;
    } catch (e) {
        console.error("خطأ في إنشاء الطلب: ", e);
        throw e;
    }
}

// ==========================================
// 4. العمليات الخاصة بالمستخدمين (Users / Employees)
// ==========================================
export async function getUsers() {
    try {
        const querySnapshot = await getDocs(collection(db, "users"));
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (e) {
        console.error("خطأ في جلب المستخدمين: ", e);
        return [];
    }
}

// ==========================================
// 5. العمليات الخاصة بالإعدادات (Settings)
// ==========================================
export async function getSettings() {
    try {
        const querySnapshot = await getDocs(collection(db, "settings"));
        let settings = {};
        querySnapshot.forEach(doc => {
            settings[doc.id] = doc.data(); // مثل: settings.storeName
        });
        return settings;
    } catch (e) {
        console.error("خطأ في جلب الإعدادات: ", e);
        return {};
    }
}
