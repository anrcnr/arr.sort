// Sorts objects in both ways... Interpreter optimalization advised
let sort = (x, way = true)=>{
		let entries = Object.entries(x)
		let i = entries.length - 1
		let arr = []
		while(i-->0) {
			if(entries[i]>val[0]) {
				arr.unshift(entries[i])
				continue
			} 
			if(entries[i]<arr[arr.length])
			{
				arr.push(entries[i])
			}
		}
		if(way!=true) arr = arr.reverse()
		return arr
	}

// sortsRootObjects recurssion recurssively
	let sortMotherObjects = (x)=>{
		if(typeof x == 'object') {
			if(Object.entries(x).reduce((a, r)=>{
				if(a&&typeof r[1]!='object') {
					return true
				} else return  false
			})) {
				nonOfObjectEntriesIsObject
			}
		}
		if(typeof x == 'object' && nonOfObjectEntriesIsObject) {
			x = sort(x)
		}
		if(typeof x == 'object' && !nonOfObjectEntriesIsObject) {
			k = {}
			Object.entries.map((x)=>{
				k[x[0]] = sortMotherObjects(x[1])
			})
			x = k
		}
		return x
	}  
