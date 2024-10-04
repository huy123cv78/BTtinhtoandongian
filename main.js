// bai4
let r = prompt("hãy nhập bán kinh:");
let Pi = Math.PI;
let dientich = Pi * r * r;
let chuvi = 2 * Pi * r;
console.log("với bán kính là:" + r);
console.log("Ta có diện tích:" + dientich);
console.log("Ta có chu vi:" + chuvi);
// bai 5
let a = prompt("hãy nhập chiều dài:");
let b = prompt("hãy nhập chiều rộng:");
let dientichchunhat = a * b;
let chuvichunhat = (a + b) * 2;
console.log("với chiều dài hình chữ nhật là:" + a);
console.log("với chiều rộng hình chữ nhật là:" + b);
console.log("Ta có diện tích hình chữ nhật:" + dientichchunhat);
console.log("Ta có chu vi hình chữ nhật:" + chuvichunhat);
// bai6
let t = Number(prompt("nhập điểm môn Toán:"));
let nV = Number(prompt("Nhập điểm môn Ngữ văn:"));
let aV = Number(prompt("Nhập điểm môn Anh văn:"));
let dtb = (t + nV + aV) / 3;
dtb = dtb.toFixed(2); // Làm tròn 2 chữ số
console.log("Điểm môn Toán:" + t);
console.log("Điểm môn Ngữ Văn:" + nV);
console.log("Điểm môn Anh văn:" + aV);
console.log("Ta có điểm trung bình của 3 môn đó:" + dtb);
