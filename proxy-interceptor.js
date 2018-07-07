function proxyInterceptor(obj){
	const handler = {
		apply: function(fn, thisArg, args){
			return fn.call(thisArg, ...args)
		},

		get: function(value, key){
			if (typeof value[key] === 'object' || typeof value[key] === 'function') {
				return proxyInterceptor(value[key])
			} else {
				return value[key]
			}
		}
	};

	return new Proxy(obj, handler)
}

module.exports = proxyInterceptor;
