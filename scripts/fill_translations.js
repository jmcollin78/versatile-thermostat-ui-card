const fs = require('fs');
const path = require('path');

const langsDir = path.join(__dirname, '..', 'src', 'localize', 'languages');
const enPath = path.join(langsDir, 'en.json');

function readJson(p) {
    try {
        return JSON.parse(fs.readFileSync(p, 'utf8'));
    } catch (e) {
        console.error('Failed to read', p, e.message);
        return null;
    }
}

function mergeDefaults(defaultObj, targetObj) {
    for (const key of Object.keys(defaultObj)) {
        const defVal = defaultObj[key];
        const tarVal = targetObj[key];
        if (typeof defVal === 'object' && defVal !== null && !Array.isArray(defVal)) {
            if (!tarVal || typeof tarVal !== 'object') targetObj[key] = {};
            mergeDefaults(defVal, targetObj[key]);
        } else {
            if (tarVal === undefined) targetObj[key] = defVal;
        }
    }
}

function backupFile(p) {
    const bak = p + '.bak';
    if (!fs.existsSync(bak)) {
        fs.copyFileSync(p, bak);
    }
}

const en = readJson(enPath);
if (!en) {
    console.error('English file not found or invalid:', enPath);
    process.exit(1);
}

const files = fs.readdirSync(langsDir).filter(f => f.endsWith('.json'));
for (const file of files) {
    if (file === 'en.json') continue;
    const p = path.join(langsDir, file);
    const obj = readJson(p);
    if (!obj) continue;
    backupFile(p);
    mergeDefaults(en, obj);
    fs.writeFileSync(p, JSON.stringify(obj, null, 2) + '\n', 'utf8');
    console.log('Updated', file);
}

console.log('All language files updated with English fallbacks for missing keys.');
