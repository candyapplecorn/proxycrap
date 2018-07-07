const proxyInterceptor = require('./proxy-interceptor.js');

describe('proxyInterceptor', () => {
	const proxyMe = {
		a: {
			b: {
				c: 'haha',
				d: (...a) => a.join('') 
			}
		}
	};
	let theProxy;
	beforeEach(() => {
		theProxy = proxyInterceptor(proxyMe);
	});
	it('gives primitives', () => {
		const thing = theProxy.a.b.c;
		expect(thing).toEqual(proxyMe.a.b.c);
	});
	it('intercepts function calls', () => {
		const thing = theProxy.a.b.d('a', 'b', 'c');
		expect(thing).toEqual('abc');
	});
});
