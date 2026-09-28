/**
 * Hệ thống phòng khám nhận thông tin phân công ca trực từ máy chủ dưới dạng chuỗi nén: 
 * "BS.nguyen_van_hai-KHOA_TIM_MACH-08:30-PHONG_302".
 *  Bạn hãy viết module bóc tách chuỗi này thành các biến độc lập 
 * và định dạng thành bảng phân công hiển thị tại cửa phòng khám.
 */
let input = "BS.nguyen_van_hai-KHOA_TIM_MACH-08:30-PHONG_302"
let fullName;
let specialty;
let time;
let room;
let resultName=[];
let resultSpecialty=[];

input=input.split("-")
//têm
fullName =input[0].substring(3).replaceAll("_"," ").split(" ")
for (const element of fullName) {
    resultName.push(element[0].toLocaleUpperCase()+element.slice(1));
}
let finalName = resultName.join(" ").replace("Nguyen Van Hai","Nguyễn Văn Hải")

// chuyên khoa
specialty =input[1].replaceAll("_"," ").split(" ")
for (const element of specialty) {
    resultSpecialty.push(element[0]+element.slice(1).toLocaleLowerCase());
}
let finalSpecialty=resultSpecialty.join(" ").replace("Khoa Tim Mach","Khoa Tim Mạch")

time =input[2]
//phong
room =input[3].replace("PHONG_","Phòng ")

console.log("------- bẳng phân công -----------");
console.log(`tên bác sĩ :${finalName}`);
console.log(`chuyên khoa : ${finalSpecialty}`);
console.log(`thời gian : ${time}`);
console.log(`phòng : ${room}`);
