const mongoose = require('../connectDB');


// สร้าง Schema (โครงสร้างของข้อมูล)
const userShema = new mongoose.Schema({
    // Attribute (Column) : 
    Username: String,
    Password: String,
    //...... so on
})

// Data type in mongodb
// *** String => ข้อความ อักขระ อะไรที่เป็นข้อความ
// *** Number => ตัวเลขที่สามารถนำไปคำนวณได้ เช่น 1, 2, 3.5
// *** Date => วันที่ และเวลา (จะเก็บเป็น timestamp ด้วย Object date ใน javaScript) เช่น 2023-01-01 12:00:00
// *** Buffer => Binary data เช่น รูปภาพ ไฟล์ต่างๆ
// *** Boolean => true หรือ false
// Mixed => ข้อมูลที่ไม่เจาะจง เช่น Object ทั่วไป
// ObjectId => ใช้สำหรับเก็บ id ของ document อื่นๆ เพื่อเชื่อมความสัมพันธ์กัน
// Array => Array ของข้อมูล เช่น [String], [Number] เป็นต้น


// นำ Schema ที่สร้างขึ้นมา สร้างเป็น Model(Table) ชื่อว่า User
const User = mongoose.model('User', userSchema);

// Export Model ออกไปใช้งาน
module.exports = User;


//ไฟล์ในโฟลเดอร์ database จะเป็นไฟล์ที่เอาไว้สร้าง Schema และ Model ของ MongoDB เฉยๆ ถ้าคิดว่าระบบเรามีอะไรที่ต้องเพิ่มก็ใส่มาได้เลย 1ไฟล์1Schema ประมาณนี้