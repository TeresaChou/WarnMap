function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

import mysql from 'mysql';

function getWarnLocations() {
    var config = {
        host: '140.119.19.73',          // 主機名稱
        port: '9306',
        database: 'TG06', // 資料庫名稱
        user: 'TG06',        // 帳號
        password: 'i8p3q6',
        ssl: true
    };
    const conn = new mysql.createConnection(config);

    conn.connect(
        function (err) { 
        if (err) { 
            console.log("!!! Cannot connect to database !!! Error:");
            throw err;
        }
        else
        {
           console.log("Database connection established.");
        }   
    });

    conn.end(function (err) { 
        if (err) throw err;
        else  console.log('Done.') 
        });
}