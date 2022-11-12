export const currency = (lang, cur) => {
    new Intl.NumberFormat(`${lang}`, { style: "currency", currency: cur })
}