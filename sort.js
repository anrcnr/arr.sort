	let sort = (x)=>{
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
		return arr
	}
