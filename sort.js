	let sort = (x)=>{
		let entries = Object.entries(x)
		let i = 0
		let arr = []
		while(i<entries.length - 1) {
			if(entries[i]>val[0]) {
				arr.unshift(entries[i])
				continue
			} 
			if(entries[i]<arr[arr.length-1])
			{
				arr.push(entries[i])
			}
		}
		return arr
	}
