// Safely load the Vue CLI Babel preset if it's available. This avoids
// hard failures in editors or tools when node_modules aren't installed.
let presets = [];
try {
  // try to resolve the preset package
  require.resolve('@vue/cli-plugin-babel/preset');
  presets.push('@vue/cli-plugin-babel/preset');
} catch (e) {
  // preset not available; fall back to an empty presets array
}

module.exports = {
  presets
};
