const
    PDFDocument = require('pdfkit'),
    fs = require('fs'),
    doc = new PDFDocument(),
    page_w = doc.page.width,
    page_h = doc.page.height;

let data = [
    {label: '국어', value: 76},
    {label: '수학', value: 48},
    {label: '과학', value: 89},
    {label: '사회', value: 68},
    {label: '음악', value: 55},
    {label: '영어', value: 73},
    {label: '기술', value: 92},
    {label: '미술', value: 58},
    {label: '선택', value: 79}
];

doc.pipe(fs.createWriteStream('output-graph.pdf'));

// doc.font('H2GTRE.TTF');

doc.fontSize(30).text('성적 그래프', 20, 20);

const
    margin = 20,
    g_w = page_w - margin * 2 - 50,
    g_x = margin + 50,
    y = 80,
    wpx = g_w / 100;

for (let i = 0; i < data.length; i++) {
    let value = data[i].value,
        label = data[i].label;

    doc.save().rect(g_x, y, wpx * value, 20).fill((i % 2) ? 'blue' : 'red');

    doc.fontSize(10).fillColor("black").text(label, 30, y + 5).text(value, g_x + 5, y + 5);

    y += 20 + 5;
}

doc.end();
