const enviroment = process.env.npm_lifecycle_event === 'build' ? 'dist' : 'src'

module.exports = {
    presets: [
        ["@babel/preset-env", { targets: { node: "current"}}],
        "@babel/preset-typescript",
    ],
    plugins: [
        [
            "module-resolver",
            {
                alias: {
                    "@config": `./${enviroment}/config`,
                    "@constants": `./${enviroment}/constants`,
                    "@modules": `./${enviroment}/modules`,
                    "@shared": `./${enviroment}/shared`,
                    "@lib": `./${enviroment}/lib`
                }
            }
        ],
        "babel-plugin-transform-typescript-metadata",
        [
            "@babel/plugin-proposal-decorators",
            {
                legacy: true
            }
        ],
        [
            "@babel/plugin-proposal-class-properties",
            {
                loose: false
            }
        ],
        ["@babel/plugin-proposal-private-methods", { "loose": false }]
    ]
}