export const dataFormat = (data: string) => {
    const res = data.replace(/-/g, '/');
    return res
}

export const agePrefix = (age: number) => {
    let txt;
    let count = age % 100;
    if (count >= 5 && count <= 20) {
        txt = 'лет';
    } else {
        count = count % 10;
        if (count === 1) {
            txt = 'год';
        } else if (count >= 2 && count <= 4) {
            txt = 'года';
        } else {
            txt = 'лет';
        }
    }
    return txt;
}

export const cellFormat = (cell: string) => {
    const res = cell.replace(/^([\d+]{2})(\d{3})(\d{3})(\d{2})(\d{2})+$/, "$1 $2 $3 $4 $5");
    return res
}