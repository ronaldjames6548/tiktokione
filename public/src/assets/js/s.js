const a = 'abcdefghijklmnopqrstuvwxyz',
    A = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
function t() {
    const t = a.slice(13) + a.slice(0, 13),
        o = {};
    for (let n = 0; n < a.length; n++) {
        const r = a[n],
            e = t[n];
        o[r.charCodeAt(0)] = e.charCodeAt(0);
    }
    return o;
}
function b(t, o) {
    const n = 'a'.charCodeAt(0),
        r = ((t.charCodeAt(0) - n - o + 26) % 26) + n;
    return String.fromCharCode(r);
}
function g(t, o) {
    const n = 'A'.charCodeAt(0),
        r = ((t.charCodeAt(0) - n - o + 26) % 26) + n;
    return String.fromCharCode(r);
}
function u(t, o) {
    let n = '';
    for (let r of t) {
        const t = r.codePointAt(0);
        o.hasOwnProperty(t) ? (n += String.fromCodePoint(o[t])) : (n += r);
    }
    return n;
}
function h(o, n, r) {
    const e = t(),
        c = [];
    for (const t of o) {
        const o = Math.round(t - r),
            s = String.fromCharCode(o);
        if (a.includes(s)) {
            const t = b(s, n);
            c.push(u(t, e));
        } else if (A.includes(s)) {
            const t = g(s, n);
            c.push(u(t, e));
        } else c.push(s);
    }
    return c.join('');
}

export default h;
