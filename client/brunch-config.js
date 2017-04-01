module.exports = {
  paths: {
    watched: ['src']
  },
  files: {
    javascripts: {joinTo: 'app.js'},
    stylesheets: {joinTo: 'app.css'}
  },
  modules: {
    autoRequire: {
      'app.js': ['app']
    },
    nameCleaner: (path) => path.replace(/^src\//, '')
  },
  plugins: {
    babel: {presets: ['es2015', 'react', 'stage-0']}
  }
};
