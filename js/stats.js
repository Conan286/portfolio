// Kiểm tra nếu Firebase chưa khởi tạo thì mới khởi tạo
if (!window.firebaseAppInitialized) {
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCUZSYXlIoAOhZhWxafdN44StZZEzjcR3A",
    authDomain: "portfolio-6e82b.firebaseapp.com",
    databaseURL: "https://portfolio-6e82b-default-rtdb.firebaseio.com",
    projectId: "portfolio-6e82b",
    storageBucket: "portfolio-6e82b.firebasestorage.app",
    messagingSenderId: "713795188044",
    appId: "1:713795188044:web:39ca9b9a16240cb7f38be9",
    measurementId: "G-12GV78F9P5"
  };

    firebase.initializeApp(firebaseConfig);
    window.firebaseAppInitialized = true; // Đánh dấu là đã khởi tạo Firebase
}


const db = firebase.database();




// Đọc tổng số lượt truy cập từ Firebase
db.ref("stats/total_visits").on("value", (snapshot) => {
    document.getElementById("visitCount").innerText = snapshot.val() || 0;
});

// Đọc số người đang online từ Firebase
db.ref("stats/online_users").on("value", (snapshot) => {
    document.getElementById("onlineCount").innerText = snapshot.val() || 0;
});

// // Hàm tăng lượt truy cập
// function increaseVisitCount() {
//     const visitRef = db.ref("stats/total_visits");
//     visitRef.transaction((current) => (current ) + 1);
// }

// // Hàm cập nhật số người online
// function updateOnlineUsers(change) {
//     const onlineRef = db.ref("stats/online_users");
//     onlineRef.transaction((current) => (current ) + change);
// }

// // Khi mở trang, tăng lượt truy cập & số người online
// increaseVisitCount();
// updateOnlineUsers(1);

// // Khi rời trang, giảm số người online
// window.addEventListener("beforeunload", () => updateOnlineUsers(-1));

// // Hiển thị số liệu lên giao diện
// function displayStats() {
//     db.ref("stats/total_visits").on("value", (snapshot) => {
//         document.getElementById("visitCount").innerText = snapshot.val() ;
//     });

//     db.ref("stats/online_users").on("value", (snapshot) => {
//         document.getElementById("onlineCount").innerText = snapshot.val() ;
//     });
// }

displayStats();
