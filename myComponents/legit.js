//CONVERT UNICODE INTO THERE XTERS FOR YOUR WEBSITE
//=== enter the code and the function will return the corresponding emoji, xter, etc
//eg U+1f603; uniToEmoji('U+1f603') for between two codes, enter the starting and ending unicode
//eg uniToEmoji('U+1f603', 'u+1f62a'), uniToEmoji('U+1f603', 10) gives 10 emoji starting with 'U+1f603'

function uniToEmoji(str, count){
    'use strict'
    let range, result = {}, start = '0x'+str.slice(2)
    if(count == undefined)
        count = 1
    if(typeof count == 'number')
        range = count
    else if (/^u+/i.test(count))
        range = ('0x' + count.slice(2)) - ('0x' + str.slice(2))
    for (let i = 0; i <= range; i ++){
        result['U+' + start.toString(16)] = String.fromCodePoint(start)
        start = Number(start) + 1;
  }
  return result
} // returns an object with unicode and corresponding emoji