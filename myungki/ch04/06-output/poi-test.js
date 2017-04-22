let list = [
    ["상품명", "가격"],
    ["바나나", 210],
    ["귤", 980],
    ["고구마", 80]
];
const
    XSSFWorkbook = org.apache.poi.xssf.usermodel.XSSFWorkbook,
    XSSFCellStyle = org.apache.poi.xssf.usermodel.XSSFCellStyle,
    FileOutputStream = java.io.FileOutputStream,
    wb = new XSSFWorkbook(),
    sheet = wb.createSheet("sheet-test");

const style_u = wb.createCellStyle();
style_u.setBorderBottom(XSSFCellStyle.BORDER_THIN);

const style_head = wb.createCellStyle();
style_head.setBorderBottom(XSSFCellStyle.BORDER_DOUBLE);

for (let i = 0; i < list.length; i++) {
    let row = sheet.createRow(i),
        c1 = row.createCell(0),
        c2 = row.createCell(1);

    c1.setCellValue(list[i][0]);
    c2.setCellValue(list[i][1]);

    let style = (i == 0) ? style_head : style_u;

    c1.setCellStyle(style);
    c2.setCellStyle(style);
}

var out = new FileOutputStream("test.xlsx");
wb.write(out);
