const core = require('@actions/core');
const axios = require('axios');

async function run() {
    try {
        const url = core.getInput('url');
        const response = await axios.get(url);
        const jsonData = response.data;

        // 将 JSON 的键和值设置为输出变量
        const keys = Object.keys(jsonData);
        const values = Object.values(jsonData);

        // 动态设置输出和环境变量
        keys.forEach((key, index) => {
            // 设置输出
            core.setOutput(key, values[index]);
            // 设置环境变量
            process.env[key] = values[index];
        });
    } catch (error) {
        core.setFailed(`Action failed with error: ${error}`);
    }
}

run();