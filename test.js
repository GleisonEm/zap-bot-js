const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('.');

// const client = new Client({
//     authStrategy: new LocalAuth(),
//     puppeteer: { headless: true, args: ['--no-sandbox'], executablePath: '/usr/bin/google-chrome', }
// });

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true, args: ['--no-sandbox'], executablePath: '/usr/bin/google-chrome-stable', webVersionCache: {
            type: 'remote',
            remotePath: 'https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2410.1.html',
        }
    }
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});


client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', msg => {
    if (msg.body == '!ping') {
        console.log(msg.from)
        console.log(msg)
        msg.reply('pong');
    }
});

client.initialize();