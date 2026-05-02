importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// আপনার ফায়ারবেস কনফিগ (আগের মতোই)
firebase.initializeApp({
    apiKey: "AIzaSyD_TOgrehY8a5JD55FXHdRiFcZhHxctDkM",
    projectId: "seen-a1d92",
    messagingSenderId: "868584044532",
    appId: "1:868584044532:web:51f07436a883f88332eba1"
});

const messaging = firebase.messaging();

// যখন অ্যাপ বন্ধ থাকবে তখন এই অংশটি নোটিফিকেশন দেখাবে
messaging.onBackgroundMessage((payload) => {
    console.log('কল রিসিভ হয়েছে ব্যাকগ্রাউন্ডে:', payload);
    
    const notificationTitle = payload.data.title || "Incoming Call";
    const notificationOptions = {
        body: payload.data.body || "You have a new video call",
        icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968756.png',
        tag: 'call-notification',
        renotify: true,
        data: { url: payload.data.url } // এখানে কল পেজের লিঙ্ক থাকবে
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
