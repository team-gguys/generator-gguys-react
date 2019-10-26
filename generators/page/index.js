var Generator = require('yeoman-generator');
var _ = require('lodash');

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts)
    }

    writing() {
        const componentName = this.options.name || 'NewPage';
        const componentKebabName = _.kebabCase(componentName);


        // index.js
        this.fs.copyTpl(
            this.templatePath('index.js'),
            this.destinationPath(`${componentName}/index.js`),
            {
                name: componentName,
                kebabName: componentKebabName,
            }
        );

        // component.js
        this.fs.copyTpl(
            this.templatePath('component.js'),
            this.destinationPath(`${componentName}/${componentName}.js`),
            {
                name: componentName,
                kebabName: componentKebabName,
            }
        );

        // component.scss
        this.fs.copyTpl(
            this.templatePath('component.scss'),
            this.destinationPath(`${componentName}/${componentName}.scss`),
            {
                name: componentName,
                kebabName: componentKebabName,
            }
        );
    }
};
