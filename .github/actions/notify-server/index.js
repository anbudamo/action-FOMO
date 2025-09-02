const core = require('@actions/core');
const axios = require('axios')

async function run() {
    try{
        const url = core.getInput('url')
        const token = core.getInput('token')
        const status = core.getInput('status')

        const response = await axios.post(url, { message:`${status}` }, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
        console.log('Response status: ', response.status)
        console.log('Notif sent to local server')
        
    } catch (error) {
        core.setFailed(`Action failed with error: ${error.message}`)
    }
}

run()
