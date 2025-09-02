const core = require('@actions/core');
const axios = require('axios')

async function run() {
    try{
        const url = core.getInput('url')
        const token = core.getInput('token')

        response = await axios.post(url, { message: 'Workflow completed' }, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            console.log('Response status: ', response.status)
        })
        console.log('Notif sent to local server');
    } catch (error) {response.status)
        core.setFailed(`Action failed with error: ${error.message}`)
    }
}

run()
