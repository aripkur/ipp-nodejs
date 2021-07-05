const axios = require('axios');
const fs = require('fs');

const generateFile = (url) => {
    axios.get(url,
        {
            responseType: 'arraybuffer',
            // headers: {
            //     'Content-Type': 'application/json',
            //     'Accept': 'application/pdf'
            // }
        })
        .then((response) => {
            console.log(response.data)
            const arr = new Uint8Array(response.data);
            fs.writeFileSync('some.pdf', arr)
        })
        .catch((error) => console.log(error));
}

generateFile("http://localhost/rsibyl/pendaftaran/rawat_jalan/generate_antrian/44")












// var printer = ipp.Printer("http://localhost:631/ipp/printer");
// var msg = {
// 	"operation-attributes-tag": {
// 		"requesting-user-name": "William",
// 		"message": "These are not the droids you are looking for"
// 	}
// };
// printer.execute("Identify-Printer", msg, function(err, res){
// 	console.log(res);
// });
