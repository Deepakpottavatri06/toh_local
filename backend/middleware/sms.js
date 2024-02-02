const sms = async (vehicleNumber,tollPlaza,date,msg,next)=>{
    try {
        const accountSid = 'AC47aad9efb59c476057c03e1e8b2ebace';
        const authToken =  '878af4ac6ff55e5d510800261194bec9';
        const client = twilio(accountSid, authToken);
        client.messages
            .create({
                from: '+13344543086',
                to: '+91' + userMobileNumber,
                body: `Your vehicle  ${vehicleNumber} has crossed ${tollPlaza} on ${date} \n ${msg}`,
            })
            .then(message => console.log(message.sid))
            next();
    } catch (err) {
        console.log('SMS NOT SENT');
    }
}

module.exports = sms;