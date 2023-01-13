class SheetFormatter {
    static toJson(data) {
        if (!data || !Array.isArray(data) || data.length === 0) return []

        const header = data.shift()

        return data.filter(d => d.length > 0).map(d => {
            return d.reduce((a, v, i) => ({ ...a, [ header.length > i ? header[i]: i]: v}), {}) 
        })
    }

    static toUpdateRequest(sheet, data) {
        if (!data || !Array.isArray(data) || data.length === 0) return

        return data.map(x => {
            const key = Object.keys(x)
            
            return {
                range: `${key}`,
                values: [
                    [ x[key] ]
                ]
            }
        })
    }
}

export default SheetFormatter