const rewire = require("rewire")
const index_ios = rewire("./index.ios")
const onPushFiredForeground = index_ios.__get__("onPushFiredForeground")
const onPushRegistered = index_ios.__get__("onPushRegistered")
const onPushRegistrationFailed = index_ios.__get__("onPushRegistrationFailed")
const em = index_ios.__get__("em")
// @ponicode
describe("onPushFiredForeground", () => {
    test("0", () => {
        let callFunction = () => {
            onPushFiredForeground(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            onPushFiredForeground(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            onPushFiredForeground(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("onPushRegistered", () => {
    test("0", () => {
        let callFunction = () => {
            onPushRegistered("Saltwater Crocodile")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            onPushRegistered("Dwarf Crocodile")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            onPushRegistered("Nile Crocodile")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            onPushRegistered("Spectacled Caiman")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            onPushRegistered("Australian Freshwater Crocodile")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            onPushRegistered(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("onPushRegistrationFailed", () => {
    test("0", () => {
        let callFunction = () => {
            onPushRegistrationFailed({ code: 200 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            onPushRegistrationFailed({ code: 3010 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            onPushRegistrationFailed({ code: "function readToken_lt_gt(code) {\n\t      // '<>'\n\t      var next = this.input.charCodeAt(this.state.pos + 1);\n\t      var size = 1;\n\t\n\t      if (next === code) {\n\t        size = code === 62 && this.input.charCodeAt(this.state.pos + 2) === 62 ? 3 : 2;\n\t        if (this.input.charCodeAt(this.state.pos + size) === 61) return this.finishOp(_types.types.assign, size + 1);\n\t        return this.finishOp(_types.types.bitShift, size);\n\t      }\n\t\n\t      if (next === 33 && code === 60 && this.input.charCodeAt(this.state.pos + 2) === 45 && this.input.charCodeAt(this.state.pos + 3) === 45) {\n\t        if (this.inModule) this.unexpected();\n\t        // `<!--`, an XML-style comment that should be interpreted as a line comment\n\t        this.skipLineComment(4);\n\t        this.skipSpace();\n\t        return this.nextToken();\n\t      }\n\t\n\t      if (next === 61) {\n\t        // <= | >=\n\t        size = 2;\n\t      }\n\t\n\t      return this.finishOp(_types.types.relational, size);\n\t    }" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            onPushRegistrationFailed({ code: 3011 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            onPushRegistrationFailed({ code: "function(code) {\n\t\t\t\treturn I.mode === 'client' || !Basic.arrayDiff(code, [200, 404]);\n\t\t\t}" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            onPushRegistrationFailed(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("em", () => {
    test("0", () => {
        let callFunction = () => {
            em("Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            em(10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            em(0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            em("Elio")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            em("elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            em(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
