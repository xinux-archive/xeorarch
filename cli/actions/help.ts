import app from "../../package.json" assert { type: "json" };

export default () => {
    console.log(`${app.name} ${app.version}
${app.description}
${app.author}

ISHLATILISHI:
    ${app.name} [TUR] [KALIT]

TANLOVLAR:
    help              Yordamchi habarni oynada ko'rsatish
    search            Berilgan kalit so'zi bo'yicha o'xshash paketlar qidirish
    info              Berilgan kalit so'zidagi paket haqida ma'lumotlar ko'rsatish`);
};
