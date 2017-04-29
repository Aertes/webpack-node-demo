// 包装函数
module.exports = function(grunt){
    // 任务配置，所有插件的配置信息
    grunt.initConfig({
        // 获取package.json的信息
        pkg: grunt.file.readJSON('package.json')
    });
    grunt.registerTask('default', []);
}