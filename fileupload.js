const uploadFile = (path) => new Promise((resolve, reject) => {
     const FormData = require('form-data')
     const fd = new FormData()
     fd.append('sampleFile', fs.createReadStream(path))
     Axios({
          method: 'POST',
          url: 'https://api-self.herokuapp.com/upload',
          data: fd,
          headers: {
               'user-agent': 'MRHRTZ-ZONE :D',
               'content-type': `multipart/form-data; boundary=${fd._boundary}`
          }
     }).then(({ data }) => resolve(data)).catch(reject)
})

case 'tourl':
case 'tourl':
ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(mess.wait)
owgi = await benny.downloadAndSaveMediaMessage(ger)
anu = await uploadFile(owgi)
console.log(anu.result.url)
reply(anu.result.url)
break
