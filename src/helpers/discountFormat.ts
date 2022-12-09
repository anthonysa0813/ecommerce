export const discountFormatter = (count: number, discount: number) => {
    // count = 1500
    // discount = 10
    const result = (discount / 100) * count;
    return count - result;
}