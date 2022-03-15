---
title: "[unfinished] Memory management in Arduino"
date: "2022/02/25"
excerpt: "How to handle precious memory in embeded systems and MCUs"
tags: ""
---

### Random access memory types

#### SRAM

Static Random Access Memory

#### EEPROM

Electrically Erasable Programmable Read-only Memory

#### Flash memory

### Possible optimizations

#### Software
use `PROGMEM` 
what it does is 
```cpp
const dataType variableName[] PROGMEM = {}; // use this form
```

#### Serverside

Do the heavy lifiting on the server. provide lightweight interface for arduino to work with.

### Problems ahead

#### Memory fragmentations