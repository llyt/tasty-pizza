const withReactSvg = require('next-react-svg')
const path = require('path')

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'public/static/images/svg'),
  webpack (config) {
    return config
  }
})
