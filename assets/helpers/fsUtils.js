const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

/**
 * @param {string} destination
 * @param {object} content
 * @returns {Promise<void>}
 */
const writeToFile = async (destination, content) => {
    try {
        await writeFile(destination, JSON.stringify(content, null, 4));
        console.log('File written successfully!');
    } catch (err) {
        console.error('Error writing to file:', err);
        throw err; // Propagate the error
    }
};

/**
 * @param {object} dataToAppend
 * @param {string} file
 * @returns {Promise<void>}
 */
const readAndAppend = async (dataToAppend, file) => {
    try {
        const data = await readFile(file, 'utf8');
        const parsedData = JSON.parse(data);
        parsedData.push(dataToAppend);
        await writeToFile(file, parsedData);
        console.log('Data appended successfully!');
    } catch (err) {
        console.error('Error reading/appending to file:', err);
        throw err; // Propagate the error
    }
};

module.exports = { readFile, writeToFile, readAndAppend };
