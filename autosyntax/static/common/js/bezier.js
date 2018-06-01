// TOP SCRIPT, DONT CALL ANY FNS HERE
console.log('common/bezier.js\t\t\t\tFROM common.layout.html\n');

function bezier(distance) {
    let _bez = t => 3 * (1 - t) * Math.pow(t, 2);

    let linear = [];
    for (let i = 0; i < distance; i++)
        linear.push(i / distance);

    let bezzed = [];
    for (let j = 0; j < linear.length; j++)
        bezzed.push(_bez(linear[j]) * 4);

    return bezzed;

}


function sum(list) {
    let sum = 0;
    list.forEach(n => sum += n);
    return sum;
}

function peak(list, max = true) {
    let temp = list[0];
    let condition = (n) => max ? n > temp : n < temp;
    list.forEach(n => condition() ? temp = n : temp);
    return temp;
}

function max(list) {
    return peak(list, max = true);
}

function min(list) {
    return peak(list, max = false);
}

function prettify(list) {
    return list.map((n) => parseFloat(n.toString().substr(0, 4)))
}

function print(list, name) {
    // console.log(`\n${name}: ${prettify(list)}`);
    console.log(`${name} sum: ${sum(list)}`);
    console.log(`max/min ${name}: ${max(list) / min(list)}`);
    console.log(`length ${name}: ${list.length}`);
}

function dilute(list, factor) {
    return list.filter((n, i) => i % factor === 0)
        .reverse()
        .map(n => n * factor);

}

function get_bezzed(distance, freq_ms) {
    let dur_ms; // distance = 2276, dur_ms = 1050.642
    if (distance < 500)
        dur_ms = distance;
    else if (distance < 1000)
        dur_ms = 500;
    else
        dur_ms = distance ** 0.9;
    // console.log(`\nbezier.js`);
    // console.log('distance: ', distance);
    // console.log(`every ${freq_ms} ms`);
    // console.log(`dur_ms: ${dur_ms}`);
    // console.log(`animation takes ${dur_ms / 1000} seconds`);
    let one_step = distance / (dur_ms / freq_ms);
    // console.log(`one step is ${one_step} pixels`);
    // console.log(`${dur_ms / freq_ms} steps overall`);
    let curved = bezier(distance);

    let curved_sum = sum(curved);
    // console.log('curved_sum: ', curved_sum);
    // console.log('parseInt(one_step): ', parseInt(one_step));
    let diluted = dilute(curved, parseInt(one_step));
    // console.log('sum(diluted): ', sum(diluted));
    let compressed = diluted.map(curr => Math.pow(curr, (1 - distance / Math.pow(dur_ms, 1.5))));
    let amp_factor = (curved_sum - sum(compressed)) / (distance / one_step);
    // console.log('\namp_factor: ', amp_factor);

    // print(amped, 'amped');
    return compressed.map(n => n + amp_factor);
}