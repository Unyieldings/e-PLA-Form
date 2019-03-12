export const selectedROA = (item) => {
    console.log('Click confirmed: ', item)
    return {
        type: 'ROA-SELECTED',
        payload: item
    }
}