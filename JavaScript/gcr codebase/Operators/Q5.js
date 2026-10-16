let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

let isSecure = isDoorLocked && isWindowClosed && isAlarmOn && isOwnerInside;

console.log(isSecure ? "Secure" : "Unsafe");

isDoorLocked = false;
console.log(isDoorLocked && isWindowClosed && isAlarmOn && isOwnerInside ? "Secure" : "Unsafe");

isDoorLocked = true;
isOwnerInside = false;
console.log(isDoorLocked && isWindowClosed && isAlarmOn && isOwnerInside ? "Secure" : "Unsafe");

isOwnerInside = true;
isAlarmOn = false;
console.log(isDoorLocked && isWindowClosed && isAlarmOn && isOwnerInside ? "Secure" : "Unsafe");