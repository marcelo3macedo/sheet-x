class SheetFormatter {
    static toJson(data) {
        if (!data || !Array.isArray(data) || data.length === 0) return []

        const header = data.shift()

        return data.filter(d => d.length > 0).map(d => {
            return d.reduce((a, v, i) => ({ ...a, [ header.length > i ? header[i]: i]: v}), {}) 
        })
    }

    static toCreateRequest(data) {
        if (!data || !Array.isArray(data) || data.length === 0) return
        
        return {
            range: `A:${this.colToletters(data[0].length)}`,
            data
        }        
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

    static colToletters(num) {
        let a = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (num < 27) return a[num % a.length];
        if (num > 26) {
          num--;
          let letters = ''
          while (num >= 0) {
            letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[num % 26] + letters
            num = Math.floor(num / 26) - 1
          }
          return letters;
        }
      }
}

export default SheetFormatter