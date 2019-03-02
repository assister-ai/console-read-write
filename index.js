const read = () => {};
const write = () => {};

const io = {read, write};

module.exports = Object.assign(io, {read, write, default: io});
