const BSV = require('bsv')

// 靓号地址的条件，函数内容可随意编写
function condition(address) {
    if (address.substr(1, 3) == 'CSW') //举例：我需要形如 1CSW... 的靓号地址
        return true
    else
        return false
}

var bn = BSV.PrivateKey._getRandomBN() //生成初始随机数。私钥是256位二进制数，必须用bsv库里提供的BigNumber类型来表示
for (let i = 0; i < 1e6; i++) { //尝试大量次数，可以根据靓号的条件估算出大约需要尝试多少次
    let priKey = new BSV.PrivateKey(bn) //以随机数为私钥
    if (condition(priKey.toAddress().toString())) { //检测该私钥对应的地址是否是靓号地址
        console.log(priKey, priKey.toAddress()) //如果是，就输出私钥和地址
    }
    bn = bn.addn(1) //私钥直接加1得到下一个私钥。当然也可以重新随机一个私钥。
}