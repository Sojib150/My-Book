// Global Call & Notification Listener Matrix
import { getFirestore, collection, query, where, limit, onSnapshot, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const auth = getAuth();
const db = getFirestore();

let globalCallUnsubscribe = null;

// 📱 Median (GoNative) নোটিফিকেশন পারমিশন বুস্টার
document.addEventListener("DOMContentLoaded", function() {
    try {
        if (window.gonative && window.gonative.permissions) {
            window.gonative.permissions.requestNotificationPermission();
        }
    } catch(e) { console.log("Native bridge permission bypassed."); }
});

// 🛡️ ইউজার লগইন স্টেট ও গ্লোবাল লিসেনার ইঞ্জিন
onAuthStateChanged(auth, (user) => {
    if (user) {
        // যদি আগে থেকে কোনো লিসেনার চালু থাকে, মেমোরি লিক বন্ধ করতে সেটা আগে রিলিজ করুন
        if (globalCallUnsubscribe) globalCallUnsubscribe();

        try {
            // কল ট্র্যাকিং কুয়েরি
            const inboundCallQuery = query(
                collection(db, "calls"),
                where("receiverId", "==", user.uid),
                where("status", "==", "ringing"),
                limit(1)
            );

            globalCallUnsubscribe = onSnapshot(inboundCallQuery, (snapshot) => {
                if (!snapshot.empty) {
                    const changeDoc = snapshot.docs[0];
                    const callData = changeDoc.data();
                    const callId = changeDoc.id;

                    // রিলস বা ভিডিও ব্যাকগ্রাউন্ডে চললে তা পজ করা
                    document.querySelectorAll('video').forEach(v => v.pause());

                    // 🚨 রিসিভ এবং ক্র্যাশ প্রুফ ডাইনামিক রাউটিং (১০০% ফিক্সড লিংক)
                    if (globalCallUnsubscribe) globalCallUnsubscribe(); // ইমিডিয়েট রিলিজ
                    
                    window.location.href = `call.html?callId=${callId}&type=${callData.type}&role=receiver&targetId=${callData.callerId}`;
                }
            }, (err) => { console.log("Global call matrix query ignored."); });

        } catch (err) { console.error("Global Call Framework Error:", err); }
    } else {
        if (globalCallUnsubscribe) {
            globalCallUnsubscribe();
            globalCallUnsubscribe = null;
        }
    }
});
