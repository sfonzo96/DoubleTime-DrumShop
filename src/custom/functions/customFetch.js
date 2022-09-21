function customFetch(items) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(items), 2000)
    })
}

export {customFetch};