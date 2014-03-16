module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.initConfig({
        mochaTest: {
            unit: {
                options: {
                    reporter: 'spec'
                },
                src: ['specs/**/ValidatorSpec.js']
            }
        // Configure a mochaTest task
    }});

    grunt.registerTask('unit', ['mochaTest:unit']);
}
