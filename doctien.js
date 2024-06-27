// Bảng số từ 0 đến 9 bằng chữ tiếng Việt
const ones = ["không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];

// Bảng số đặc biệt cho hàng chục
const tens = ["", "mười", "hai mươi", "ba mươi", "bốn mươi", "năm mươi", "sáu mươi", "bảy mươi", "tám mươi", "chín mươi"];

// Bảng số đặc biệt cho hàng trăm
const hundreds = ["", "một trăm", "hai trăm", "ba trăm", "bốn trăm", "năm trăm", "sáu trăm", "bảy trăm", "tám trăm", "chín trăm"];

// Hàm chuyển đổi số nhỏ hơn 1000
function convertHundreds(number) {
    let result = "";

    if (number > 99) {
        result += hundreds[Math.floor(number / 100)];
        number %= 100;
    }

    if (number > 9) {
        if (result !== "") result += " ";
        result += tens[Math.floor(number / 10)];
        number %= 10;
    } else if (number > 0 && result !== "") {
        result += " linh";
    }

    if (number > 0) {
        if (result !== "") result += " ";
        result += ones[number];
    }

    return result.trim();
}

// Hàm chuyển đổi số lớn hơn 999
function convertNumberToVietnamese(number) {
    if (number === 0) return "Không";

    const units = ["", "nghìn", "triệu", "tỷ", "nghìn tỷ", "triệu tỷ", "tỷ tỷ"];
    let result = "";
    let unitIndex = 0;

    while (number > 0) {
        const chunk = number % 1000;
        if (chunk > 0) {
            const chunkText = convertHundreds(chunk);
            if (result !== "") result = chunkText + " " + units[unitIndex] + " " + result;
            else result = chunkText + " " + units[unitIndex];
        }
        number = Math.floor(number / 1000);
        unitIndex++;
    }

    // Viết hoa chữ cái đầu tiên của kết quả
    result = result.trim();
    result = result.charAt(0).toUpperCase() + result.slice(1) +' đồng';

    return result;
}