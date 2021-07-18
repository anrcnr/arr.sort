let sort = (x)=>{
		let entries = Object.entries(x)
		let i = entries.length
		let arr = []
		while(i-->0) {
			if(entries[i]>val[0]) {
				arr.unshift(entries[i])
				continue
			} 
			if(entries[i]<arr[arr.length-1])
			{
				arr.push(entries[i])
			}
}
