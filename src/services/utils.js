export const getFormData = (object, hasArray) => {
    const formData = new FormData();
    Object.keys(object).forEach(key => {
        if (hasArray && Array.isArray(object[key])) {
            let array = object[key]
            array?.forEach((item) => {
                formData.append(key, item)
            })
        } else {
            formData.append(key, object[key])
        }
    });
    return formData;
}
