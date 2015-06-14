tokens
  = v:token* {
        return v.reduce(function(array, value) {
            array = array.concat(value);
            return array;
        }, []);
    }

token
  = commandToken
  / stringToken

commandToken
  = commandTokenPrefix v:commandToken_ {
        var token = {};
        v.forEach(function(kv) {
            token[kv.key] = kv.value;
        });
        return token;
    }

commandToken_
  = simpleCommandToken
  / boundedCommandToken

commandTokenPrefix 'backslash'
  = '\\' !'\\'

simpleCommandToken
  = keyValueList

boundedCommandToken
 = '{' v:keyValueList '}' {
        return v;
    }

keyValueList
  = v:keyValue rest:(',' keyValueList)? {
        return [v].concat((rest && rest[1]) || []);
    }

keyValue
  = keyNumberValue
  / keyAnyValue
  / keyFlag

keyNumberValue
  = key:identifier value:number {
        return { key, value };
    }

keyAnyValue
  = key:identifier ':' value:value {
        return { key, value };
    }

keyFlag
  = key:identifier {
        return { key, value: true };
    }

identifier 'identifier'
  = $([a-zA-Z]+)

number 'number'
  = v:$([0-9]+('.' [0-9]+)?) {
        return parseFloat(v);
    }

value
  = number
  / string
  / boolean
  / null
  / objectLiteral
  / jsBlock

string
  = singleQuotedString
  / doubleQuotedString

singleQuotedString
  = "'" v:$(("\\'" / (!"'" .))+) "'" {
        return v;
    }

doubleQuotedString
  = '"' v:$(('\\"' / (!'"' .))+) '"' {
        return v;
    }

boolean
  = 'true' {
        return true;
    }
  / 'false' {
        return false;
    }

null
  = 'null' {
        return null;
    }

objectLiteral
  = '```{' v:$((!'}```' .)+) '}```' {
        return { objectLiteral: v };
    }

jsBlock
  = '```' v:$((!'```' .)+) '```' {
        return { code: v };
    }

stringToken
  = v:$(('\\\\' / (!'\\' .))+) {
        return { string: v };
    }
