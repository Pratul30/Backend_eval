const axios = require('axios');

const testFun = async ()=> {
    const res = await axios.get('http://54.167.46.10/sector', { params: { name: 'Automobile' } });
    console.log(res.data);

};

testFun();