module.exports = {
  apps: [
    {
      name: 'gs-nuxt',
      exec_mode: 'cluster',
      instances: 2, //'max' Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start'
    }
  ]
}