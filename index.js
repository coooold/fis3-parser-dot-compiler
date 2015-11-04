/**
 * doT template compiler
 * @author fang 2015年10月30日12:00:18
 */
'use strict';

var doT = require('./doT.js');

module.exports = function(content, file, conf) {

    if(conf){
        doT.templateSettings = fis.util.merge(conf, doT.templateSettings);
    }

    content = doT.compile(content).toString().replace(/^function anonymous/, 'function');
	
	file.isDotTemplate = true;

    return '$["' + file.filename + '"]=' + content;
    
};
