// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-2-31
description: >
    Object.defineProperty - argument 'P' is a number that converts to
    a string (value is 1(following 22 zeros).1)
---*/

var obj = {};
Object.defineProperty(obj, 10000000000000000000000.1, {});

assert(obj.hasOwnProperty("1e+22"), 'obj.hasOwnProperty("1e+22") !== true');
